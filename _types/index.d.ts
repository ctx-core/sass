import type { AcceptedPlugin } from 'postcss'
export interface builder_opts_T {
	postcss_plugins?:AcceptedPlugin[]
	preprocess_markup?:boolean
	functions?:any
}
export type builder_opts_I = builder_opts_T
export type builder_opts_type = builder_opts_T
export interface opts_T {
	filename:string
	content:string
	attributes:{
		type?:string
		global?:any
	}
}
export declare type opts_I = opts_T
export declare type optsI = opts_T
