const assert = require('node:assert/strict');
const { test } = require('node:test');
const Module = require('node:module');
const pixi = require('pixi.js');

// Use real Pixi scene objects and timelines; stub GPU filters and SVG rasterization.
const loads = [];
let pending = null;
pixi.Assets.load = async (request) => {
  loads.push(request);
  if (pending) await pending;
  return pixi.Texture.EMPTY;
};
const originalLoad = Module._load;
Module._load = function (id, ...args) {
  if (id === 'pixi.js')
    return {
      ...pixi,
      BlurFilter: class {
        resolution = 1;
      },
      Filter: { from: (options) => ({ options, resolution: 1 }) },
    };
  return originalLoad.call(this, id, ...args);
};
const { FighterHolder, Symbol475 } = require('../dist/Symbols.js');
Module._load = originalLoad;

const appearance = (overrides = {}) => ({
  type: 'brute',
  name: 'test',
  model: 'male',
  team: 'L',
  shield: false,
  parts: Object.fromEntries(
    ['p1', 'p1a', 'p1b', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p7b', 'p8'].map((key) => [key, 0]),
  ),
  colors: Object.fromEntries(
    [
      'col0',
      'col0a',
      'col0c',
      'col1',
      'col1a',
      'col1b',
      'col1c',
      'col1d',
      'col2',
      'col2a',
      'col2b',
      'col3',
      'col3b',
      'col4',
      'col4a',
      'col4b',
    ].map((key) => [key, '#ffffff']),
  ),
  width: 50,
  height: 80,
  ...overrides,
});

const application = (resolution = 1) => {
  const handlers = new Set();
  return {
    renderer: { resolution, generateTexture: () => pixi.Texture.EMPTY },
    ticker: {
      elapsedMS: 34,
      add: (handler) => handlers.add(handler),
      remove: (handler) => handlers.delete(handler),
      tick: () => [...handlers].forEach((handler) => handler()),
      handlers,
    },
  };
};

test('package retains symbol exports and exports the renderer', () => {
  assert.equal(Symbol475.name, 'Symbol475');
  assert.equal(typeof FighterHolder, 'function');
});

test('renders every model, reuses sprites, and detaches its ticker on destroy', async () => {
  for (const model of ['male', 'female', 'dog', 'bear']) {
    const app = application();
    const holder = new FighterHolder(
      app,
      appearance({ model, type: model === 'dog' || model === 'bear' ? 'pet' : 'brute' }),
      { current: 1 },
      2,
    );
    await holder.ready;
    assert.equal(holder.loaded, true);
    assert.equal(app.ticker.handlers.size, 1);
    assert.equal(holder.baseWidth, 100);
    assert.equal(holder.baseHeight, 160);
    assert.equal(holder.container.scale.x, model === 'dog' ? -1 : 1);
    holder.weapon = 'sword';
    holder.shield = true;
    holder.setAnimation('idle');
    const sprites = [...holder.svgs];
    holder.setAnimation('idle');
    assert.deepEqual(holder.svgs, sprites);
    assert.ok(sprites.some((sprite) => sprite.visible));
    app.ticker.tick();
    holder.destroy();
    holder.destroy();
    assert.equal(app.ticker.handlers.size, 0);
    assert.equal(holder.container.destroyed, true);
    assert.equal(pixi.Texture.EMPTY.destroyed, false);
  }
});

test('shares SVG textures and increases rasterization resolution for larger models', async () => {
  const first = new FighterHolder(application(), appearance(), { current: 1 });
  await first.ready;
  const count = loads.length;
  const second = new FighterHolder(application(), appearance(), { current: 1 });
  await second.ready;
  assert.equal(loads.length, count);
  const larger = new FighterHolder(application(2), appearance(), { current: 1 }, 3);
  await larger.ready;
  assert.ok(loads.length > count);
  assert.ok(loads.slice(count).some(({ data }) => data.resolution >= 6));
  assert.ok(loads.every(({ data }) => data.parseAsGraphicsContext === false));
  [first, second, larger].forEach((holder) => holder.destroy());
});

test('supports seeking, playback restoration, equipment changes and reverse events', async () => {
  const app = application();
  const holder = new FighterHolder(app, appearance(), { current: 1 });
  await holder.ready;
  holder.setAnimation('fist', 2);
  const saved = holder.capturePlaybackFrame();
  holder.setAnimation('run', 0, true);
  holder.setAirborn(true, true);
  assert.equal(holder.animation, 'fist');
  assert.equal(holder.seekPose.animation, 'run');
  assert.equal(holder.seekPose.airborne, true);
  holder.setAnimation('run');
  holder.weapon = 'axe';
  holder.shield = true;
  holder.renderPlaybackFrame(saved);
  assert.deepEqual(holder.capturePlaybackFrame(), saved);
  app.ticker.tick();
  assert.deepEqual(holder.capturePlaybackFrame(), saved);
  holder.weapon = null;
  holder.renderPlaybackFrame(saved);
  assert.ok(
    holder.svgs.filter((sprite) => sprite.label === 'Symbol39').every((sprite) => !sprite.visible),
  );
  const events = [];
  holder.once('fist:start', (event) => events.push(event));
  holder.animationSpeed = -1;
  holder.setAnimation('fist', 1);
  app.ticker.tick();
  app.ticker.tick();
  assert.deepEqual(events, ['fist:start']);
  holder.destroy();
});

test('supports caller styling and dynamic idle animation overrides', async () => {
  const filter = { resolution: 1 };
  const holder = new FighterHolder(
    application(),
    appearance({ filters: [filter], idleAnimation: 'monk' }),
    { current: 1 },
  );
  await holder.ready;
  holder.setAnimation('idle');
  assert.equal(holder.animation, 'monk');
  assert.equal(filter.resolution, 'inherit');
  holder.idleAnimation = 'idle';
  holder.setAnimation('idle');
  assert.equal(holder.animation, 'idle');
  holder.destroy();
});

test('recolors the current pose without replacing sprites, loading assets or advancing playback', async () => {
  const app = application();
  const holder = new FighterHolder(app, appearance(), { current: 1 });

  // Applying colors before readiness should also be safe for asynchronous callers.
  holder.setColors({ col0: '#ff0000' });
  await holder.ready;
  holder.setAnimation('fist', 2);
  holder.pause();

  const pose = holder.capturePlaybackFrame();
  const sprites = [...holder.svgs];
  const assetLoadCount = loads.length;
  const green = Object.fromEntries(Object.keys(appearance().colors).map((key) => [key, '#00ff00']));

  holder.setColors(green);

  assert.deepEqual(holder.capturePlaybackFrame(), pose);
  assert.deepEqual(holder.svgs, sprites);
  assert.equal(loads.length, assetLoadCount);
  assert.ok(holder.svgs.some((sprite) => sprite.visible && sprite.tint === 0x00ff00));

  app.ticker.tick();
  assert.deepEqual(holder.capturePlaybackFrame(), pose);

  holder.play();
  app.ticker.tick();
  app.ticker.tick();
  assert.equal(holder.capturePlaybackFrame().frame, 3);

  holder.destroy();
  assert.doesNotThrow(() => holder.setColors(green));
});

test('destroy during loading does not attach a ticker later', async () => {
  let finish;
  pending = new Promise((resolve) => {
    finish = resolve;
  });
  const app = application(3);
  const holder = new FighterHolder(app, appearance(), { current: 1 }, 7);
  holder.destroy();
  finish();
  pending = null;
  await holder.ready;
  assert.equal(holder.loaded, false);
  assert.equal(app.ticker.handlers.size, 0);
});
