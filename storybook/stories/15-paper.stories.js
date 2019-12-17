import { html } from './utils/editor';
import { paddingDecorator } from './utils/decorators';
import { radios, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'vs-paper',
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  props: {
    shadow: {
      default: radios(
        'shadow',
        {
          sm: 'sm',
          md: 'md',
          lg: 'lg',
          xl: 'xl'
        },
        'md'
      )
    },
    padding: {
      default: radios(
        'padding',
        {
          sm: 'sm',
          md: 'md',
          lg: 'lg',
          xl: 'xl'
        },
        'md'
      )
    }
  },
  template: html`
    <vs-paper :shadow="shadow" :padding="padding">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit Assumenda, quia
      temporibus eveniet a libero incidunt suscipit Quidem, ipsam illum quis sed
      voluptatum quae eum fugit earumLorem ipsum dolor sit amet, consectetur
      adipisicing elit Assumenda, quia temporibus eveniet a libero incidunt
      suscipit Quidem, ipsam illum quis sed voluptatum quae eum fugit earumLorem
      ipsum dolor sit amet, consectetur adipisicing elit Assumenda, quia
      temporibus eveniet a libero incidunt suscipit Quidem, ipsam illum quis sed
      voluptatum quae eum fugit earum
    </vs-paper>
  `
});
