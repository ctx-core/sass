# @ctx-core/sass

Processes sass with postcss & global style support.

## Rollup Example

```javascript
// rollup.config.js
import svelte from 'rollup-plugin-svelte'
import { preprocess_ } from '@ctx-core/svelte'
import { preprocess_sass_ } from '@ctx-core/sass'
const preprocess__sass = preprocess_sass_()
const preprocess = preprocess_([
	preprocess__sass,
	// ...
])
module.exports = {
	client: {
		// ...
		plugins: [
			// ...
			svelte({
				// ...
				preprocess,
			})
		]
	},
	server: {
		// ...
		plugins: [
			// ...
			svelte({
				// ...
				preprocess,
			})
		]
	},
	// ...
}
```

## Svelte Component - `<style global>` Example

```html
<div class="container">
	<div class="my-global-class">✔</div>
</div>

<style lang="scss" global>
	.container {
		.my-global-class {
			color: green;
		}
	}
</style>
```

The CSS equilavent is generated for Svelte:

```css
:global(.container .my-global-class) {
	color: green;	
}
```
