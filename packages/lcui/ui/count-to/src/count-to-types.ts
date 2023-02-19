/*
 * @Author: changluo
 * @Description:
 * @LastEditors: luc19964 luochang@gopherasset.com
 * @Date: 2023-02-19 08:18:43
 * @LastEditTime: 2023-02-19 08:36:47
 * @FilePath: /lcui/packages/lcui/ui/count-to/src/count-to-types.ts
 */
import type { PropType, ExtractPropTypes } from 'vue';

export const countToProps = {
  startVal: { type: Number, default: 0 },
  endVal: { type: Number, default: 2021 },
  duration: { type: Number, default: 1500 },
  autoplay: { type: Boolean, default: true },
  decimals: {
    type: Number,
    default: 0,
    validator(value: number) {
      return value >= 0;
    }
  },
  prefix: { type: String, default: '' },
  suffix: { type: String, default: '' },
  separator: { type: String, default: ',' },
  decimal: { type: String, default: '.' },
  color: { type: String },
  useEasing: { type: Boolean, default: true },
  transition: { type: String, default: 'linear' }
} as const;

export type CountToProps = ExtractPropTypes<typeof countToProps>;
