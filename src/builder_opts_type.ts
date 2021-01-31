import type { AcceptedPlugin } from 'postcss'
export type builder_opts_type = {
	postcss_plugins?:AcceptedPlugin[],
	preprocess_markup?:boolean,
	functions?:any,
}
