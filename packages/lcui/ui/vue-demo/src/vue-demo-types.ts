/*
 * @Author: changluo
 * @Description:
 * @LastEditors: luc19964 luochang@gopherasset.com
 */
import type { PropType, ExtractPropTypes } from 'vue';
export type ButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text';
export const vueDemoProps = {
  type: {
    type: Object as PropType<ButtonType>,
    default: ''
  }
} as const;

export type VueDemoProps = ExtractPropTypes<typeof vueDemoProps>;
