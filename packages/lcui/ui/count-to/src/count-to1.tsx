import { defineComponent } from 'vue'
import { countToProps, CountToProps } from './count-to-types'
import './count-to.scss'

export default defineComponent({
  name: 'CCountTo',
  props: countToProps,
  emits: [],
  setup(props: CountToProps, ctx) {
    return () => {
      return (<div class="lcui-count-to"></div>)
    }
  }
})
