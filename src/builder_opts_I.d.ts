import type { AcceptedPlugin } from 'postcss';
export interface builder_opts_I {
    postcss_plugins?: AcceptedPlugin[];
    preprocess_markup?: boolean;
    functions?: any;
}
export declare type builder_opts_type = builder_opts_I;
