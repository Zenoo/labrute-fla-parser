import { Container, Filter, Matrix } from 'pixi.js';
import { Symbol } from '../src/common';
import ColorOffsetShader from './ColorOffsetShader';

type FrameContainer = Container & {
  parts: SymbolAnimation[];
};

type LayerContainer = Container & {
  frames: FrameContainer[];
};

export class SymbolAnimation extends Container {
  source: Symbol;
  /**
   * Scale of the animation.
   * Parts will need to have their position adapted depending on the scale.
   */
  _scale = 1;

  /**
   * Current animation loaded.
   * Contains all the keyframes.
   */
  _animation: SymbolAnimation | null = null;

  /**
   * An array containing all the layers of the animation.
   */
  _layers: LayerContainer[] = [];

  /**
   * Current index of the animation being played.
   */
  _currentIdx = 0;
  /**
   * Animation offset. Frames before the offset will never be played.
   */
  _offsetIdx = 0;

  /**
   * Color transformation of the animation.
   */
  _colorTransform: Filter;

  callbacks: (() => void)[] = [];

  /**
   * Add a child animation to the object.
   * The child animation may or may not have an actual playing animation.
   * @param anim A PixiJS Container containing multiple sprites and possibly an animation in its children.
   */
  addAnim(layerIndex: number, frameIndex: number, anim: SymbolAnimation) {
    const frame = this._layers[layerIndex]?.frames[frameIndex];
    if (!frame) return;

    frame.addChild(anim);
    frame.parts.push(anim);
  }

  /**
   * Add a part to a frame.
   * A part is another Animation which is referenced via a name.
   * @param partName Name of the part to add. Has to be the same name as one part in the animation.
   * @param part A PixiJS Container containing multiple sprites and possibly some animations in its children.
   */
  addPart(layerIndex: number, frameIndex: number, part: SymbolAnimation) {
    this.addAnim(layerIndex, frameIndex, part);
  }

  /**
   * Moves and displays all the body parts of the animation to fit the current animation keyframe.
   * If a part does not have a definition for the current keyframe, it will be hidden.
   */
  updateAnimation() {
    const frames = this._animation?._layers.map((layer) => layer.frames[this.getCurrentIdx()]) ?? [];

    for (const frame of frames) {
      if (!frame) continue;
      for (const part of frame.parts) {
        if (!part) continue;

        part.visible = true;
        part.alpha = frame.alpha ?? 1;
        part.transform.setFromMatrix(
          new Matrix(
            part.source.transform?.a ?? 1,
            part.source.transform?.b ?? 0,
            part.source.transform?.c ?? 0,
            part.source.transform?.d ?? 1,
            (part.source.transform?.tx ?? 0) * this._scale,
            (part.source.transform?.ty ?? 0) * this._scale
          )
        );
        part.setColorTransform(
          part.source.colorOffset?.r,
          part.source.colorOffset?.g,
          part.source.colorOffset?.b,
          part.source.alpha,
          part.source.alpha,
          part.source.alpha
        );

        part.updateAnimation();
      }
    }
  }

  /**
   * Returns the callbacks contained at the current frame of the animation.
   * @returns An array containing all the callbacks of the current frame, or an empty array if there are no callbacks.
   */
  getCallbacks() {
    if (this._animation?.callbacks) {
      return this._animation.callbacks ?? [];
    }
    return [];
  }

  /**
   * Get the animation current index.
   * @returns Return the current frame index of the animation.
   */
  getCurrentIdx() {
    return this._currentIdx + this._offsetIdx;
  }

  /**
   * Set the offset index.
   * @param idx The new offset index of the animation.
   */
  setOffsetIdx(idx?: number) {
    const length = this.getAnimationLength();
    this._offsetIdx = length > 0 ? (idx ?? 0) % this.getAnimationLength() : 0;
  }

  /**
   * Increase the current animation index by the given number.
   * Animation length and offset are computed to get the new current index.
   * This will be propagated to all children animations.
   * @param idx The new animation index.
   */
  increaseCurrentIdx(idx: number) {
    this.setCurrentIdx(this._currentIdx + idx);
    this._animation?.increaseCurrentIdx(idx);
  }

  /**
   * Set the current animation index.
   * Will be impacted by animation length and offset.
   * Child animations are not impacted.
   * @param idx The desired current index.
   */
  setCurrentIdx(idx: number) {
    const length = this.getAnimationLength() - this._offsetIdx;
    this._currentIdx = length > 0 ? idx % length : 0;
    this._animation?.setCurrentIdx(idx);
  }

  /**
   * Get the scale of the animation.
   * @returns The scale of the animation.
   */
  getScale() {
    return this._scale;
  }

  /**
   * Replace the current animation by the one passed as parameter.
   * @param animation The animation to set as the current animation.
   */
  setAnimation(animation: SymbolAnimation) {
    this._animation = animation;
  }

  /**
   * Return the number of frames of the current animation playing.
   * @returns The length of the animation or 0 if no animation.
   */
  getAnimationLength() {
    return this._animation?._layers[0].frames.length ?? 0;
  }

  /**
   * Indicates if the animation has children animations registered.
   * @returns True if at least a child animation has been registered, false otherwise.
   */
  hasChildAnimation() {
    return this._layers.some((layer) => layer.frames.some((frame) => frame.parts.some((part) => part._animation)));
  }

  /**
   * Set the color transformation for the animation. If none exist, a new one will be created.
   * @param offsetRed The red color offset. 0 if undefined.
   * @param offsetGreen The green color offset. 0 if undefined.
   * @param offsetBlue The blue color offset. 0 if undefined.
   * @param multRed The red multiplicator. 1 if undefined.
   * @param multGreen The green multiplicator. 1 if undefined.
   * @param multBlue The blue multiplicator. 1 if undefined.
   */
  setColorTransform(
    offsetRed: number | undefined,
    offsetGreen: number | undefined,
    offsetBlue: number | undefined,
    multRed: number | undefined,
    multGreen: number | undefined,
    multBlue: number | undefined,
  ) {
    if (this._colorTransform || offsetRed || offsetGreen || offsetBlue || multRed || multGreen || multBlue) {
      if (!this._colorTransform) {
        this._colorTransform = new Filter(undefined, ColorOffsetShader, {
          offset: new Float32Array(),
          mult: new Float32Array()
        });
        this.filters = [this._colorTransform];
      }
      this._colorTransform.uniforms.offset = new Float32Array([
        offsetRed ?? 0,
        offsetGreen ?? 0,
        offsetBlue ?? 0
      ]);
      this._colorTransform.uniforms.mult = new Float32Array([multRed ?? 1, multGreen ?? 1, multBlue ?? 1]);
    }
  }
}