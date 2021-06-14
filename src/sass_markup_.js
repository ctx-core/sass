import { parseDocument } from 'htmlparser2';
import { Tag } from 'domelementtype';
import cheerio from 'cheerio';
import { a_present_, compact, flatten } from '@ctx-core/array';
import serialize from 'dom-serializer';
import { render_sass } from './render_sass';
export function sass_markup_(builder_opts = {}) {
    return sass_markup;
    async function sass_markup(opts) {
        const { filename, content, attributes, } = opts;
        const dom = parseDocument(content, {
            lowerCaseTags: false,
            lowerCaseAttributeNames: false,
        });
        const promise_a = dom.children.map(async (in_node) => {
            const node = in_node;
            if (node.type.toString() === Tag.toString()
                && node.name == 'svelte:head') {
                const $ = cheerio.load(node);
                const style_node_a = $(`style[type='text/sass'], style[type='text/scss']`).get();
                const promise_a = style_node_a.map(async (style_node) => {
                    const content = serialize(style_node.childNodes);
                    const { code } = await render_sass(builder_opts, {
                        filename,
                        content,
                        attributes,
                    });
                    style_node.attribs.type = 'text/css';
                    delete style_node.attribs.global;
                    style_node.children = parseDocument(`<style>${code}</style>`).children;
                    // text_node.data = code
                    return style_node;
                });
                return Promise.all(promise_a);
            }
            return node;
        });
        const node_a = await Promise.all(promise_a);
        if (a_present_(flatten(compact(node_a)))) {
            return {
                code: serialize(dom),
                map: null,
            };
        }
    }
}
export { sass_markup_ as _sass_markup, sass_markup_ as _markup__sass, };
//# sourceMappingURL=src/sass_markup_.js.map