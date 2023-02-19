<template>
  <span>
    {{ value }}
  </span>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  watchEffect,
  unref,
  onMounted,
  watch
} from 'vue';
import { useTransition, TransitionPresets } from '@vueuse/core';
import { countToProps, CountToProps } from './count-to-types';

export default defineComponent({
  name: 'CCountTo',
  props: countToProps,
  emits: ['onStarted', 'onFinished'],
  setup(props: CountToProps, { emit }) {
    const source = ref(props.startVal);
    const disabled = ref(false);
    let outputValue = useTransition(source);

    const value = computed(() => formatNumber(unref(outputValue)));

    watchEffect(() => {
      source.value = props.startVal;
    });

    watch([() => props.startVal, () => props.endVal], () => {
      if (props.autoplay) {
        start();
      }
    });

    onMounted(() => {
      props.autoplay && start();
    });

    function start() {
      run();
      source.value = props.endVal;
    }

    function reset() {
      source.value = props.startVal;
      run();
    }

    function run() {
      outputValue = useTransition(source, {
        disabled,
        duration: props.duration,
        onFinished: () => emit('onFinished'),
        onStarted: () => emit('onStarted'),
        ...(props.useEasing
          ? { transition: TransitionPresets[props.transition] }
          : {})
      });
    }
    function isNumber(num) {
      return typeof num === 'number';
    }
    function formatNumber(num: number | string) {
      if (!num && num !== 0) {
        return '';
      }
      const { decimals, decimal, separator, suffix, prefix } = props;
      num = Number(num).toFixed(decimals);
      num += '';

      const x = num.split('.');
      let x1 = x[0];
      const x2 = x.length > 1 ? decimal + x[1] : '';

      const rgx = /(\d+)(\d{3})/;
      if (separator && !isNumber(separator)) {
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + separator + '$2');
        }
      }
      return prefix + x1 + x2 + suffix;
    }

    return { value, start, reset };
  }
});
</script>
