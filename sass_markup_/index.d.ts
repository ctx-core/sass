import type { builder_opts_T, opts_T } from '../_types/index.js'
export declare function sass_markup_(builder_opts?:builder_opts_T):sass_markup_T
export type sass_markup_T = (opts:opts_T)=>Promise<sass_markup_return_T|undefined>
export interface sass_markup_return_T {
	code:string
	map:null
}
export {
	sass_markup_ as _sass_markup,
	sass_markup_ as _markup__sass,
}
