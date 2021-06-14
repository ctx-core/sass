import type { opts_I } from './opts_I';
import type { builder_opts_I } from './builder_opts_I';
export declare function render_sass(builder_opts: builder_opts_I, opts: opts_I): Promise<Plugin_Output>;
declare type Plugin_Output = {
    code: string;
    map: string;
};
export {};
