import { Application, Assets, Container } from 'pixi.js';
import { FighterHolder, Symbol475 } from 'labrute-pixi-fighter';

const check = (value, message) => { if (!value) throw new Error(message); };

window.runFighterRegression = async () => {
  const app = new Application();
  await app.init({ width: 320, height: 240, preference: 'webgl', resolution: 2, autoStart: false });
  document.body.appendChild(app.canvas);
  check(Symbol475.name === 'Symbol475', 'Missing named symbol export');
  const generateTexture = app.renderer.generateTexture.bind(app.renderer);
  let shadows = 0;
  app.renderer.generateTexture = (target) => {
    check(target instanceof Container, 'Shadow uses a different Pixi Container');
    shadows++;
    return generateTexture(target);
  };
  let loads = 0;
  const load = Assets.load.bind(Assets);
  Assets.load = async (request) => {
    loads++;
    const texture = await load(request);
    check(Assets.cache.get(request.src) === texture, 'SVG missing from consumer Assets cache');
    return texture;
  };
  const models = [];
  try {
    for (const model of ['male', 'female', 'dog', 'bear']) {
      const appearance = {
        type: 'brute', name: model, model, team: 'L', shield: false,
        width: 50, height: 80,
        parts: Object.fromEntries(['p1', 'p1a', 'p1b', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p7b', 'p8'].map((key) => [key, 0])),
        colors: Object.fromEntries(['col0', 'col0a', 'col0c', 'col1', 'col1a', 'col1b', 'col1c', 'col1d', 'col2', 'col2a', 'col2b', 'col3', 'col3b', 'col4', 'col4a', 'col4b'].map((key) => [key, '#dd8844'])),
      };
      const holder = new FighterHolder(app, appearance, { current: 1 }, 2);
      await holder.ready;
      check(holder.container instanceof Container, 'Fighter uses a different Pixi Container');
      app.stage.addChild(holder.container);
      holder.container.position.set(160, 160);
      holder.pause();
      holder.weapon = 'sword';
      holder.shield = true;
      holder.setAnimation('idle');
      app.render();
      const { pixels } = app.renderer.extract.pixels(holder.container);
      check(pixels.some((channel, index) => index % 4 !== 3 && channel > 0), 'Fighter has no colored pixels');
      check(holder.svgs.some((sprite) => sprite.visible && sprite.texture.width > 1), 'SVG textures were not rasterized');
      const count = loads;
      const second = new FighterHolder(app, appearance, { current: 1 }, 2);
      await second.ready;
      check(loads === count, 'Matching fighters did not share textures');
      second.destroy();
      holder.destroy();
      models.push(model);
    }
    check(shadows === 8 && loads > 0, 'Renderer or Assets was bypassed');
    return { models, shadows, loads, resolution: app.renderer.resolution };
  } finally {
    Assets.load = load;
    app.destroy(true, { children: true });
  }
};

window.runFighterRegression().then(
  (result) => { document.body.dataset.result = JSON.stringify(result); document.body.dataset.status = 'passed'; },
  (error) => { document.body.dataset.error = error.stack; document.body.dataset.status = 'failed'; },
);
