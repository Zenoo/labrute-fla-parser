import { Texture } from 'pixi.js';

/**
 * Static class managing the textures.
 * Will only load a specific file once and then store the reference to the texture.
 */
export class TextureManager {
	static textures = {};
	/**
	 * Change the base scale of the SVG being loaded, which will then be scaled back down.
	 * Too high a scale will start becoming detrimental to the rendering when scaled back.
	 * 2 or 3 seems to give the best result.
	 */
	static RESOLUTION = 2;

	/**
	 * Returns a PixiJS Texture of the SVG data passed as parameter.
	 * @param data Raw SVG string.
	 * @param scale The scale of the texture, needed at load time for SVG textures.
	 * @returns The PixiJS texture based on the SVG data and scale.
	 */
	static getTexture(data: string, scale = 1) {
		let scl = (scale ?? 0) <= 0 ? 1 : scale;
		return Texture.from(data, {
			resourceOptions: { scale: scl * TextureManager.RESOLUTION }
		});
	}
}