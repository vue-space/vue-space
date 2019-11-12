import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { isEmptyNode } from "../../utils/judgeNode";
import { HTMLAttributes } from "../../types/dom";

const classNamePrefix = "vs-breadcrumb";

interface VsBreadcrumbProps extends HTMLAttributes {
  /**
   * separator node between link
   */
  separator: number | boolean;
}

const VsBreadcrumb = createComponent<VsBreadcrumbProps>({
  props: {
    separator: {
      default: ">"
    }
  },
  setup(props, ctx) {
    return (): VNode => {
      const { separator } = props;

      return (
        <nav
          aria-label="Breadcrumb"
          class={classNamePrefix}
          {...{ on: ctx.listeners }}
        >
          <ol>
            {ctx.slots
              .default()
              .filter(node => !isEmptyNode(node))
              .reduce<Array<VNode | string>>((prev, curr, index) => {
                const currentNode = <li>{curr}</li>;
                if (index !== 0) {
                  return [
                    ...prev,
                    <li
                      class={`${classNamePrefix}__separator`}
                      aria-hidden="true"
                    >
                      {separator}
                    </li>,
                    currentNode
                  ];
                } else {
                  return [currentNode];
                }
              }, [])}
          </ol>
        </nav>
      );
    };
  }
});

export default VsBreadcrumb;
