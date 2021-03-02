import { parseDocument } from 'htmlparser2'
import type { Element } from 'domhandler/lib/node'
import { Tag } from 'domelementtype'
import cheerio from 'cheerio'
import { _a1_present, compact, flatten } from '@ctx-core/array'
import serialize from 'dom-serializer'
import type { opts_I } from './opts_I'
import type { builder_opts_I } from './builder_opts_I'
import { render_sass } from './render_sass'
export function _sass_markup(builder_opts:builder_opts_I = {}):sass_markup_type {
	return sass_markup as sass_markup_type
	async function sass_markup(opts:opts_I) {
		const { filename, content, attributes, } = opts
		const dom = parseDocument(content, {
			lowerCaseTags: false,
			lowerCaseAttributeNames: false,
		})
		const promise_a1 = dom.children.map(async in_node=>{
			const node = in_node as Element
			if (
				node.type.toString() === Tag.toString()
				&& node.name == 'svelte:head'
			) {
				const $ = cheerio.load(node)
				const style_node_a1 = $(`style[type='text/sass'], style[type='text/scss']`).get()
				const promise_a1 = style_node_a1.map(async style_node=>{
					const content = serialize(style_node.childNodes)
					const { code } = await render_sass(builder_opts, {
						filename,
						content,
						attributes,
					})
					style_node.attribs.type = 'text/css'
					delete style_node.attribs.global
					style_node.children = parseDocument(`<style>${code}</style>`).children
					// text_node.data = code
					return style_node
				})
				return Promise.all(promise_a1)
			}
		}) as Promise<Element[]>[]
		const node_a1 = await Promise.all(promise_a1)
		if (_a1_present(flatten(compact(node_a1)))) {
			return {
				code: serialize(dom),
				map: null,
			}
		}
	}
}
export interface sass_markup_fn_return_type {
	code:string
	map:null
}
export type sass_markup_type = (opts:opts_I)=>Promise<sass_markup_fn_return_type>
export {
	_sass_markup as _markup__sass
}
