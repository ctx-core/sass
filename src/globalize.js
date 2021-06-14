import { splice_str } from '@ctx-core/string';
/**
 * Takes a postcss ast & wraps each selector with the `:global()` svelte css directive.
 */
export function globalize(ast) {
    const ast_rule = ast;
    let selector = '' + (ast_rule.selector || '');
    if (selector) {
        const splice_arg_a2 = [];
        const selector_length = selector.length;
        let idx = 0;
        const global_str = ':global(';
        const global_str_len = global_str.length;
        do {
            const begin_idx = selector.indexOf(global_str, idx);
            if (begin_idx === -1)
                break;
            splice_arg_a2.push([begin_idx, global_str_len]);
            idx = begin_idx + global_str_len;
            let paren_rc = 1;
            let char;
            do {
                char = selector.slice(idx, idx + 1);
                if (char === ')')
                    paren_rc -= 1;
                else if (char === '(')
                    paren_rc += 1;
                idx += 1;
            } while (paren_rc && char != null && idx < selector_length);
            splice_arg_a2.push([idx - 1, 1]);
        } while (idx !== -1 && idx < selector_length);
        for (let i = splice_arg_a2.length - 1; i >= 0; i -= 1) {
            const splice_arg_a = splice_arg_a2[i];
            selector = splice_str(selector, ...splice_arg_a);
        }
        //		selector.split(/[\s+[>\+\~]\s*]/)
        ast_rule.selector = `:global(${selector})`;
        //		ast.selector = `:global(${selector.replace(/:global\((.*)\)/g, '$1')})`
    }
    return ast;
}
//# sourceMappingURL=src/globalize.js.map