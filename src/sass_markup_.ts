import { selectAll } from 'css-select'
import serialize from 'dom-serializer'
import { Tag } from 'domelementtype'
import type { AnyNode, Element } from 'domhandler/lib/node'
import { parseDocument } from 'htmlparser2'
import { a_present_, compact, flatten } from '@ctx-core/array'
import type { builder_opts_I } from './builder_opts_I.js'
import type { opts_I } from './opts_I.js'
import { render_sass } from './render_sass.js'
export function sass_markup_(builder_opts:builder_opts_I = {}):sass_markup_T {
	return sass_markup as sass_markup_T
	async function sass_markup(opts:opts_I) {
		const { filename, content, attributes, } = opts
		const dom = parseDocument(content, {
			lowerCaseTags: false,
			lowerCaseAttributeNames: false,
		})
		const promise_a = dom.children.map(async in_node=>{
			const node = in_node
			if (
				node.type.toString() === Tag.toString()
				&& (node as Element).name == 'svelte:head'
			) {
				const style_node_a = selectAll(`style[type='text/sass'], style[type='text/scss']`, node)
				const promise_a = style_node_a.map(async _style_node=>{
					const style_node = _style_node as Element
					const content = serialize(style_node.childNodes)
					const { code } = await render_sass(builder_opts, { filename, content, attributes, })
					style_node.attribs.type = 'text/css'
					delete style_node.attribs.global
					style_node.childNodes = parseDocument(`<style>${code}</style>`).children
					// text_node.data = code
					return style_node
				})
				return Promise.all(promise_a)
			}
			return node
		}) as Promise<Element[]|Element>[]
		const node_a = await Promise.all(promise_a)
		if (a_present_(flatten(compact(node_a)))) {
			return {
				code: serialize(dom as AnyNode),
				map: null,
			}
		}
		return
	}
}
export interface sass_markup_return_T {
	code:string
	map:null
}
export type sass_markup_T = (opts:opts_I)=>Promise<sass_markup_return_T>
export {
	sass_markup_ as _sass_markup,
	sass_markup_ as _markup__sass,
}
