// uno.config.ts
import { defineConfig  } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'
import transformerCompileClass from '@unocss/transformer-compile-class'

const theme = {
  colors: {
    'main': '#41289a',
    'gray': '#b9b9b9',
    'tag': '#52a49a'
  },
}

export default defineConfig({
  theme,
  transformers: [
    transformerCompileClass(),
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})