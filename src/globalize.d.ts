import type { ContainerBase } from 'postcss';
/**
 * Takes a postcss ast & wraps each selector with the `:global()` svelte css directive.
 */
export declare function globalize<Ast extends ContainerBase>(ast: Ast): Ast;
