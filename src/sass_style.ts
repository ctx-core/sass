import { _sass_style, sass_style_T } from './_sass_style'
/**
 * Default sass_style preprocessor for Svelte.
 * @param opts.filename
 * @param opts.content
 * @param opts.attributes
 */
export const sass_style:sass_style_T = _sass_style()
export {
	sass_style as style
}
