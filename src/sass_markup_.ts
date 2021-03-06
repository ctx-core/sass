import { parseDocument } from 'htmlparser2'
import type { Element } from 'domhandler/lib/node'
import { Tag } from 'domelementtype'
import cheerio from 'cheerio'
import { a_present_, compact, flatten } from '@ctx-core/array'
import serialize from 'dom-serializer'
import type { opts_I } from './opts_I.js'
import type { builder_opts_I } from './builder_opts_I.js'
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
			const node = in_node as Element
			if (
				node.type.toString() === Tag.toString()
				&& node.name == 'svelte:head'
			) {
				const $ = cheerio.load(node)
				const style_node_a = $(`style[type='text/sass'], style[type='text/scss']`).get()
				const promise_a = style_node_a.map(async style_node=>{
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
				return Promise.all(promise_a)
			}
			return node
		}) as Promise<Element[]|Element>[]
		const node_a = await Promise.all(promise_a)
		if (a_present_(flatten(compact(node_a)))) {
			return {
				code: serialize(dom),
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
