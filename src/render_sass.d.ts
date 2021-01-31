import type { opts_type } from './opts_type';
import type { builder_opts_type } from './builder_opts_type';
export declare function render_sass(builder_opts: builder_opts_type, opts: opts_type): Promise<Plugin_Output>;
declare type Plugin_Output = {
    code: string;
    map: string;
};
export {};
