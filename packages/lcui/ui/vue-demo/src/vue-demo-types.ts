import type { PropType, ExtractPropTypes } from 'vue'

export const vueDemoProps = {
  /* test: {
    type: Object as PropType<{ xxx: xxx }>
  } */
} as const

export type VueDemoProps = ExtractPropTypes<typeof vueDemoProps>
