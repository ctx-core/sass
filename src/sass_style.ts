import { sass_style_, sass_style_T } from './sass_style_'
/**
 * Default sass_style preprocessor for Svelte.
 * @param opts.filename
 * @param opts.content
 * @param opts.attributes
 */
export const sass_style:sass_style_T = sass_style_()
export {
	sass_style as style
}
