import { _sass_style } from './_sass_style'
/**
 * Default sass_style preprocessor for Svelte.
 * @param opts.filename
 * @param opts.content
 * @param opts.attributes
 */
export const sass_style = _sass_style()
export {
	sass_style as style
}