import { html } from "./utils/editor";
import { paddingDecorator } from "./utils/decorators";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "vs-modal",
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  data() {
    return {
      visible: false
    };
  },
  methods: {
    openModal() {
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
    }
  },
  template: html`
    <div>
      <vs-button @click="openModal">
        open
      </vs-button>
      <vs-modal @close="closeModal">
        <template #title>
          abc
        </template>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit Assumenda, quia
        temporibus eveniet a libero incidunt suscipit Quidem, ipsam illum quis
        sed voluptatum quae eum fugit earumLorem ipsum dolor sit amet,
        consectetur adipisicing elit Assumenda, quia temporibus eveniet a libero
        incidunt suscipit Quidem, ipsam illum quis sed voluptatum quae eum fugit
        earumLorem ipsum dolor sit amet, consectetur adipisicing elit Assumenda,
        quia temporibus eveniet a libero incidunt suscipit Quidem, ipsam illum
        quis sed voluptatum quae eum fugit earum Lorem ipsum dolor sit amet,
        consectetur adipisicing elit Assumenda, quia temporibus eveniet a libero
        incidunt suscipit Quidem, ipsam illum quis sed voluptatum quae eum fugit
        earumLorem ipsum dolor sit amet, consectetur adipisicing elit Assumenda,
        quia temporibus eveniet a libero incidunt suscipit Quidem, ipsam illum
        quis sed voluptatum quae eum fugit earumLorem ipsum dolor sit amet,
        consectetur adipisicing elit Assumenda, quia temporibus eveniet a libero
        incidunt suscipit Quidem, ipsam illum quis sed voluptatum quae eum fugit
        earum
        <template #extra>
          <div>
            <vs-button>取消</vs-button>
            <vs-button>确认</vs-button>
          </div>
        </template>
      </vs-modal>
    </div>
  `
});
