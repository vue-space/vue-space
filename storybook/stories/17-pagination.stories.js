import { html } from './utils/editor';
import { paddingDecorator } from './utils/decorators';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'vs-pagination',
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  data() {
    return {
      page: 1,
      size: 10
    };
  },
  methods: {
    handleChange({ page, size }) {
      this.page = page;
      this.size = size;
    }
  },
  template: html`
    <vs-pagination
      :page="page"
      totalElements="100"
      :size="size"
      @change="handleChange"
    />
  `
});
