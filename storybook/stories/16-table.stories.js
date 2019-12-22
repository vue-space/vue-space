import { html } from './utils/editor';
import { paddingDecorator } from './utils/decorators';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'vs-table',
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  template: html`
    <vs-table>
      <vs-table-head>
        <vs-table-row>
          <vs-table-cell>#</vs-table-cell>
          <vs-table-cell>First</vs-table-cell>
          <vs-table-cell>Last</vs-table-cell>
          <vs-table-cell>Handle</vs-table-cell>
        </vs-table-row>
      </vs-table-head>
      <tbody>
        <vs-table-row>
          <vs-table-cell tag="th" scope="row">1</vs-table-cell>
          <vs-table-cell>Mark</vs-table-cell>
          <vs-table-cell>Otto</vs-table-cell>
          <vs-table-cell>@mdo</vs-table-cell>
        </vs-table-row>
        <vs-table-row>
          <vs-table-cell tag="th" scope="row">2</vs-table-cell>
          <vs-table-cell>Jacob</vs-table-cell>
          <vs-table-cell>Thornton</vs-table-cell>
          <vs-table-cell :padding="false">
            <vs-button size="small">Jacob</vs-button>
          </vs-table-cell>
        </vs-table-row>
        <vs-table-row>
          <vs-table-cell tag="th" scope="row">3</vs-table-cell>
          <vs-table-cell>Larry</vs-table-cell>
          <vs-table-cell>the Bird</vs-table-cell>
          <vs-table-cell>@twitter</vs-table-cell>
        </vs-table-row>
      </tbody>
    </vs-table>
  `
});
