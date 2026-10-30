# LaBrute Pixi Fighter

![Preview](.github/media/test-preview.png)

PixiJS fighter animations and FLA symbol data for LaBrute. Previously published
as `labrute-fla-parser`.

## Installation
```
npm i labrute-pixi-fighter
```

The Pixi fighter renderer requires `pixi.js@^8.19.0` as a peer dependency. Pixi
is supplied by the application so the renderer shares its ticker, assets, and
scene objects with production.

## Usage

```ts
import { Symbol475 } from 'labrute-pixi-fighter';

console.log(Symbol475);
```

## Fighter animations

`FighterHolder` owns the Pixi animation timelines, SVG textures, sprite pools,
masks, equipment, shadows, animation events, and playback snapshots.

```ts
import { FighterHolder } from 'labrute-pixi-fighter';

// app is an initialized Pixi 8 Application. Appearance decoders belong to your app.
const holder = new FighterHolder(app, {
  type: 'brute',
  name: fighter.name,
  model: fighter.gender ?? 'male',
  team: fighter.team,
  shield: fighter.shield,
  parts: readBodyString(fighter.body),
  colors: readColorString(fighter.gender ?? 'male', fighter.colors),
  width: 50,
  height: 80,
}, { current: 1 }, 2);

app.stage.addChild(holder.container);
await holder.ready;
holder.weapon = 'sword';
holder.setAnimation('idle');
holder.on('fist:hit', () => { /* synchronize fight effects */ });

// When removing the fighter:
holder.destroy();
```

`parts` uses decoded keys such as `p1` and `p1a`; `colors` uses `col0`, `col1`,
etc. Both maps are copied on construction. `width` and `height` are logical,
unscaled dimensions. The fourth constructor argument scales the model and its
dimensions. Models are `male`, `female`, `dog`, and `bear`; panthers use `dog`
with caller-supplied scaling and color offsets.

Keep the speed ref to change playback speed without recreating the holder.
`animationSpeed` also supports negative playback and accounts for model scale.
`setAnimation(animation, frame, true)` and `setAirborn(value, true)` update
`seekPose` without rendering. `capturePlaybackFrame()` and
`renderPlaybackFrame(snapshot)` preserve the production replay API; equipment
is maintained separately through `weapon` and `shield`.

Set `idleAnimation` to `monk` when appropriate, or override `setAnimation` in a
subclass to derive it from current skills. Supply Pixi `filters` for boss/pet
styling, and `colorOffset: { r, g, b }` to replace timeline color offsets.
Renderer internals stay private; the existing public controls and containers
remain available to subclasses and callers.

## Development

`npm run build` regenerates the published JavaScript and declarations.
`npm run test:unit` tests the built package using real Pixi scene objects with
GPU filters and rasterization stubbed.

Run `npm install` after pulling dependency changes, then `npm test` and open
http://localhost:3000. The playground uses the exported renderer and refreshes
automatically when you change the model, facing, scale, body parts, or colors.
Animation and equipment selectors, playback speed, pause/restart buttons, and a
frame slider make it possible to inspect individual poses. Brutes also support
production body/color strings under **Import appearance**. `window.fighter`
exposes the current holder in the browser console.

The playground code is split into `PlaygroundControls.ts` (form state and DOM),
`PlaygroundPreview.ts` (Pixi lifecycle and rendering), `playgroundState.ts`
(appearance defaults), and `previewData.ts` (available choices). `index.ts` only
boots the page and connects those pieces.

At normal speed the preview renders at most 30 times per second, and stops
rendering when paused, hidden, offscreen, scrolling, or focused on a color picker.
Live color edits reuse the current fighter through `setColors()`;
model/body/scale changes recreate it.