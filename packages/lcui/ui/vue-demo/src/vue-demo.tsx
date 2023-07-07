/*
 * @Author: changluo
 * @Description: 
 * @LastEditors: luc19964 luochang@gopherasset.com
 */
import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'
import { vueDemoProps, VueDemoProps } from './vue-demo-types'
import './vue-demo.scss'

export default defineComponent({
  name: 'CVueDemo',
  props: vueDemoProps,
  emits: [],
  setup(props: VueDemoProps, { slots }) {
    console.log('props', props)
    return () => {
      return (
        <div class="lcui-vue-demo">
          <Button {...props}>
            {slots.default && slots.default()}
          </Button>
        </div>
      )
    }
  }
})
