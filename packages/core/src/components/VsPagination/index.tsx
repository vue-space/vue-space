import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { HTMLAttributes } from "../../types/dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import VsIconArrowheadLeftOutline from "@vue-space/icons/dist/VsIconArrowheadLeftOutline";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import VsIconArrowIosBackOutline from "@vue-space/icons/dist/VsIconArrowIosBackOutline";

const classPrefix = "vs-";
const paginationClassPrefix = `${classPrefix}pagination`;
const SHOW_PAGE_NUM = 5;

interface VsPaginationProps extends HTMLAttributes {
  page: number;
  size: number;
  totalElements: number;
}

const VsPagination = createComponent<VsPaginationProps>({
  props: {
    page: {
      default: 1
    },
    size: {
      default: 10
    },
    totalElements: {
      default: 0
    }
  },
  setup(props, ctx) {
    function handleChange(page: number, size: number, totalPage: number): void {
      const correctPage = page < 1 ? 1 : page > totalPage ? totalPage : page;
      ctx.emit("change", { page: correctPage, size });
    }

    return (): VNode => {
      const { totalElements, page, size } = props;
      const totalPage = Math.ceil(totalElements / size);

      const hasLeftDot =
        page >= SHOW_PAGE_NUM && totalPage >= SHOW_PAGE_NUM + 2;
      const hasRightDot =
        page <= totalPage - (SHOW_PAGE_NUM - 1) &&
        totalPage >= SHOW_PAGE_NUM + 2;

      const theCenter =
        page < 3 ? 3 : page > totalPage - 2 ? totalPage - 2 : page;
      const centerPages = Array(SHOW_PAGE_NUM)
        .fill(0)
        .map((_, index) => theCenter + (index - Math.floor(SHOW_PAGE_NUM / 2)))
        .filter(item => item > 1 && item < totalPage);

      return (
        <div class={paginationClassPrefix}>
          <span class={`${paginationClassPrefix}__arrow`}>
            <VsIconArrowIosBackOutline />
          </span>
          <span
            class={{
              [`${paginationClassPrefix}__page`]: true,
              "--active": Number(page) === 1
            }}
            onClick={(): void => handleChange(1, size, totalPage)}
          >
            1
          </span>
          {hasLeftDot && (
            <span
              class={`${paginationClassPrefix}__hidden-arrow`}
              onClick={(): void => handleChange(page - 5, size, totalPage)}
            >
              <VsIconArrowheadLeftOutline />
              <span class={`${paginationClassPrefix}__hidden-ellipsis`}>
                •••
              </span>
            </span>
          )}

          {centerPages.map(item => (
            <span
              key={item}
              class={{
                [`${paginationClassPrefix}__page`]: true,
                "--active": Number(page) === item
              }}
              onClick={(): void => handleChange(item, size, totalPage)}
            >
              {item}
            </span>
          ))}

          {hasRightDot && (
            <span
              class={`${paginationClassPrefix}__hidden-arrow --right`}
              onClick={(): void => handleChange(page + 5, size, totalPage)}
            >
              <VsIconArrowheadLeftOutline />
              <span class={`${paginationClassPrefix}__hidden-ellipsis`}>
                •••
              </span>
            </span>
          )}

          {totalPage > 1 && (
            <span
              class={{
                [`${paginationClassPrefix}__page`]: true,
                "--active": Number(page) === totalPage
              }}
              onChange={(): void => handleChange(totalPage, size, totalPage)}
            >
              {totalPage}
            </span>
          )}

          <span class={`${paginationClassPrefix}__arrow --right`}>
            <VsIconArrowIosBackOutline />
          </span>
        </div>
      );
    };
  }
});

export default VsPagination;
