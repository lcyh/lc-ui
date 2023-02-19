import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { CountTo } from '../index';

test('count-to test', () => {
  const wrapper = shallowMount(CountTo, {
    props: {}
  });

  it('count-to demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
