import type { builder_opts_T, opts_T } from '../_types'
export declare function render_sass(
	builder_opts:builder_opts_T, opts:opts_T
):Promise<Plugin_Output>
export type Plugin_Output = {
	code:string;
	map:string;
};
export {}
