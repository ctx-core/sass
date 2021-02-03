import { splice_str } from '@ctx-core/string'
import { maybe_each } from '@ctx-core/array'
/**
 * Takes a postcss ast & wraps each selector with the `:global()` svelte css directive.
 */
export function globalize(ast) {
	let selector = '' + (ast.selector || '')
	if (selector) {
		const splice_arg_a2 = [] as number[][]
		const selector_length = selector.length
		let idx = 0
		const global_str = ':global('
		const global_str_len = global_str.length
		do {
			const begin_idx = selector.indexOf(global_str, idx)
			if (begin_idx === -1) break
			splice_arg_a2.push([begin_idx, global_str_len])
			idx = begin_idx + global_str_len
			let paren_rc = 1
			let char
			do {
				char = selector.slice(idx, idx + 1)
				if (char === ')') paren_rc -= 1
				else if (char === '(') paren_rc += 1
				idx += 1
			} while (paren_rc && char != null && idx < selector_length)
			splice_arg_a2.push([idx - 1, 1])
		} while (idx !== -1 && idx < selector_length)
		for (let i = splice_arg_a2.length - 1; i >= 0; i -= 1) {
			const splice_arg_a1 = splice_arg_a2[i]
			selector = splice_str(selector, ...splice_arg_a1)
		}
//		selector.split(/[\s+[>\+\~]\s*]/)
		ast.selector = `:global(${selector})`
//		ast.selector = `:global(${selector.replace(/:global\((.*)\)/g, '$1')})`
	}
	maybe_each(ast.nodes, globalize)
	return ast
}