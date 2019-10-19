/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* spell-checker: disable */
// This code is based on react definition in DefinitelyTyped and vue-tsx-support published under the MIT license.
//      React Repository: https://github.com/DefinitelyTyped/DefinitelyTyped
//      Path in the repository: types/react/v15/index.d.ts
//
//      vue-tsx-support Repository: https://github.com/wonderful-panda/vue-tsx-support/
//
// Copyrights of original definition are:
//      Asana <https://asana.com>
//      AssureSign <http://www.assuresign.com>
//      Microsoft <https://microsoft.com>
//      John Reilly <https://github.com/johnnyreilly/>
//      Benoit Benezech <https://github.com/bbenezech>
//      Patricio Zavolinsky <https://github.com/pzavolinsky>
//      Digiguru <https://github.com/digiguru>
//      Eric Anderson <https://github.com/ericanderson>
//      Albert Kurniawan <https://github.com/morcerf>
//      Tanguy Krotoff <https://github.com/tkrotoff>
//      Dovydas Navickas <https://github.com/DovydasNavickas>
//      Stéphane Goetz <https://github.com/onigoetz>
//      wonderful-panda <https://github.com/wonderful-panda>
import { VNodeData } from "vue";

type KnownAttrs = Pick<
  VNodeData,
  "class" | "staticClass" | "key" | "ref" | "slot" | "scopedSlots"
> & {
  style?: VNodeData["style"] | string;
  id?: string;
  refInFor?: boolean;
  domPropsInnerHTML?: string;
};

type EventHandlers<E> = {
  [K in keyof E]?: E[K] extends Function ? E[K] : (payload: E[K]) => void;
};

type ElementAttrs<T> = T & KnownAttrs & EventHandlers<EventsOn>;

export type VIntrinsicElementAttributes = {
  [K in keyof IntrinsicElementAttributes]: ElementAttrs<
    IntrinsicElementAttributes[K]
  >;
};

export interface HTMLAttributes extends AriaAttributes {
  // Standard HTML Attributes, 'class' and 'style' aren't defined here because they exist in VNodeData
  accessKey?: string;
  contentEditable?: boolean;
  contextMenu?: string;
  dir?: string;
  draggable?: boolean;
  hidden?: boolean;
  id?: string;
  lang?: string;
  slot?: string;
  spellCheck?: boolean;
  tabIndex?: number;
  title?: string;

  // Unknown
  radioGroup?: string; // <command>, <menuitem>

  // WAI-ARIA
  role?: string;

  // RDFa Attributes
  about?: string;
  datatype?: string;
  inlist?: any;
  prefix?: string;
  property?: string;
  resource?: string;
  typeof?: string;
  vocab?: string;

  // Non-standard Attributes
  autoCapitalize?: string;
  autoCorrect?: string;
  autoSave?: string;
  color?: string;
  itemProp?: string;
  itemScope?: boolean;
  itemType?: string;
  itemID?: string;
  itemRef?: string;
  results?: number;
  security?: string;
  unselectable?: boolean;

  // Living Standard
  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents
   * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
   */
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  /**
   * Specify that a standard HTML element should behave like a defined custom built-in element
   * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
   */
  is?: string;
}

export interface AnchorHTMLAttributes extends HTMLAttributes {
  download?: any;
  href?: string;
  hreflang?: string;
  media?: string;
  rel?: string;
  target?: string;
}

export interface AreaHTMLAttributes extends HTMLAttributes {
  alt?: string;
  coord?: string;
  download?: any;
  href?: string;
  hreflang?: string;
  media?: string;
  rel?: string;
  shape?: string;
  target?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AudioHTMLAttributes extends MediaHTMLAttributes {}

export interface BaseHTMLAttributes extends HTMLAttributes {
  href?: string;
  target?: string;
}

export interface BlockquoteHTMLAttributes extends HTMLAttributes {
  cite?: string;
}

export interface ButtonHTMLAttributes extends HTMLAttributes {
  autofocus?: boolean;
  disabled?: boolean;
  form?: string;
  formaction?: string;
  formenctype?: string;
  formmethod?: string;
  formnovalidate?: boolean;
  formtarget?: string;
  name?: string;
  type?: string;
  value?: string | string[] | number;
}

export interface CanvasHTMLAttributes extends HTMLAttributes {
  height?: number | string;
  width?: number | string;
}

export interface ColHTMLAttributes extends HTMLAttributes {
  span?: number;
}

export interface ColgroupHTMLAttributes extends ColHTMLAttributes {}

export interface DetailsHTMLAttributes extends HTMLAttributes {
  open?: boolean;
}

export interface DelHTMLAttributes extends HTMLAttributes {
  cite?: string;
  datetime?: string;
}

export interface EmbedHTMLAttributes extends HTMLAttributes {
  height?: number | string;
  src?: string;
  type?: string;
  width?: number | string;
}

export interface FieldsetHTMLAttributes extends HTMLAttributes {
  disabled?: boolean;
  form?: string;
  name?: string;
}

export interface FormHTMLAttributes extends HTMLAttributes {
  acceptcharset?: string;
  action?: string;
  autocomplete?: string;
  enctype?: string;
  method?: string;
  name?: string;
  novalidate?: boolean;
  target?: string;
}

export interface HtmlHTMLAttributes extends HTMLAttributes {
  manifest?: string;
}

export interface IframeHTMLAttributes extends HTMLAttributes {
  allowfullscreen?: boolean;
  allowtransparency?: boolean;
  frameborder?: number | string;
  height?: number | string;
  marginheight?: number;
  marginwidth?: number;
  name?: string;
  sandbox?: string;
  scrolling?: string;
  seamless?: boolean;
  src?: string;
  srcdoc?: string;
  width?: number | string;
}

export interface ImgHTMLAttributes extends HTMLAttributes {
  alt?: string;
  height?: number | string;
  sizes?: string;
  src?: string;
  srcset?: string;
  usemap?: string;
  width?: number | string;
}

export interface InsHTMLAttributes extends HTMLAttributes {
  cite?: string;
  datetime?: string;
}

export interface InputHTMLAttributes extends HTMLAttributes {
  accept?: string;
  alt?: string;
  autocomplete?: string;
  autofocus?: boolean;
  capture?: boolean; // https://www.w3.org/tr/html-media-capture/#the-capture-attribute
  checked?: boolean;
  crossorigin?: string;
  disabled?: boolean;
  form?: string;
  formaction?: string;
  formenctype?: string;
  formmethod?: string;
  formnovalidate?: boolean;
  formtarget?: string;
  height?: number | string;
  list?: string;
  max?: number | string;
  maxlength?: number;
  min?: number | string;
  minlength?: number;
  multiple?: boolean;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: number;
  src?: string;
  step?: number | string;
  type?: string;
  value?: string | string[] | number;
  width?: number | string;
}

export interface KeygenHTMLAttributes extends HTMLAttributes {
  autofocus?: boolean;
  challenge?: string;
  disabled?: boolean;
  form?: string;
  keytype?: string;
  keyparams?: string;
  name?: string;
}

export interface LabelHTMLAttributes extends HTMLAttributes {
  form?: string;
  htmlfor?: string;
}

export interface LiHTMLAttributes extends HTMLAttributes {
  value?: string | string[] | number;
}

export interface LinkHTMLAttributes extends HTMLAttributes {
  href?: string;
  hreflang?: string;
  integrity?: string;
  media?: string;
  rel?: string;
  sizes?: string;
  type?: string;
}

export interface MapHTMLAttributes extends HTMLAttributes {
  name?: string;
}

export interface MenuHTMLAttributes extends HTMLAttributes {
  type?: string;
}

export interface MediaHTMLAttributes extends HTMLAttributes {
  autoplay?: boolean;
  controls?: boolean;
  crossorigin?: string;
  loop?: boolean;
  mediagroup?: string;
  muted?: boolean;
  preload?: string;
  src?: string;
}

export interface MetaHTMLAttributes extends HTMLAttributes {
  charset?: string;
  content?: string;
  httpequiv?: string;
  name?: string;
}

export interface MeterHTMLAttributes extends HTMLAttributes {
  form?: string;
  high?: number;
  low?: number;
  max?: number | string;
  min?: number | string;
  optimum?: number;
  value?: string | string[] | number;
}

export interface QuoteHTMLAttributes extends HTMLAttributes {
  cite?: string;
}

export interface ObjectHTMLAttributes extends HTMLAttributes {
  classid?: string;
  data?: string;
  form?: string;
  height?: number | string;
  name?: string;
  type?: string;
  usemap?: string;
  width?: number | string;
  wmode?: string;
}

export interface OlHTMLAttributes extends HTMLAttributes {
  reversed?: boolean;
  start?: number;
}

export interface OptgroupHTMLAttributes extends HTMLAttributes {
  disabled?: boolean;
  label?: string;
}

export interface OptionHTMLAttributes extends HTMLAttributes {
  disabled?: boolean;
  label?: string;
  selected?: boolean;
  value?: string | string[] | number;
}

export interface OutputHTMLAttributes extends HTMLAttributes {
  form?: string;
  htmlfor?: string;
  name?: string;
}

export interface ParamHTMLAttributes extends HTMLAttributes {
  name?: string;
  value?: string | string[] | number;
}

export interface ProgressHTMLAttributes extends HTMLAttributes {
  max?: number | string;
  value?: string | string[] | number;
}

export interface ScriptHTMLAttributes extends HTMLAttributes {
  async?: boolean;
  charset?: string;
  crossorigin?: string;
  defer?: boolean;
  integrity?: string;
  nonce?: string;
  src?: string;
  type?: string;
}

export interface SelectHTMLAttributes extends HTMLAttributes {
  autofocus?: boolean;
  disabled?: boolean;
  form?: string;
  multiple?: boolean;
  name?: string;
  required?: boolean;
  size?: number;
  value?: string | string[] | number;
}

export interface SourceHTMLAttributes extends HTMLAttributes {
  media?: string;
  sizes?: string;
  src?: string;
  srcset?: string;
  type?: string;
}

export interface StyleHTMLAttributes extends HTMLAttributes {
  media?: string;
  nonce?: string;
  scoped?: boolean;
  type?: string;
}

export interface TableHTMLAttributes extends HTMLAttributes {
  cellpadding?: number | string;
  cellspacing?: number | string;
  summary?: string;
}

export interface TextareaHTMLAttributes extends HTMLAttributes {
  autocomplete?: string;
  autofocus?: boolean;
  cols?: number;
  dirname?: string;
  disabled?: boolean;
  form?: string;
  maxlength?: number;
  minlength?: number;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  value?: string | string[] | number;
  wrap?: string;
}

export interface TdHTMLAttributes extends HTMLAttributes {
  colspan?: number;
  headers?: string;
  rowspan?: number;
}

export interface ThHTMLAttributes extends HTMLAttributes {
  colspan?: number;
  headers?: string;
  rowspan?: number;
  scope?: string;
}

export interface TimeHTMLAttributes extends HTMLAttributes {
  datetime?: string;
}

export interface TrackHTMLAttributes extends HTMLAttributes {
  default?: boolean;
  kind?: string;
  label?: string;
  src?: string;
  srclang?: string;
}

export interface VideoHTMLAttributes extends MediaHTMLAttributes {
  height?: number | string;
  playsinline?: boolean;
  poster?: string;
  width?: number | string;
}

export interface AllHTMLAttributes extends HTMLAttributes {
  accept?: string;
  acceptcharset?: string;
  action?: boolean;
  allowfullscreen?: boolean;
  allowtransparency?: boolean;
  alt?: string;
  async?: boolean;
  autocomplete?: string;
  autofocus?: boolean;
  autoplay?: boolean;
  capture?: boolean; // https://www.w3.org/tr/html-media-capture/#the-capture-attribute
  cellpadding?: number | string;
  cellspacing?: number | string;
  challenge?: string;
  charset?: string;
  checked?: boolean;
  cite?: string;
  classid?: string;
  cols?: number;
  colspan?: number;
  content?: string;
  controls?: boolean;
  coord?: string;
  crossorigin?: string;
  data?: string;
  datetime?: string;
  default?: boolean;
  defer?: boolean;
  dirname?: string;
  disabled?: boolean;
  download?: any;
  enctype?: string;
  form?: string;
  formaction?: string;
  formenctype?: string;
  formmethod?: string;
  formnovalidate?: boolean;
  formtarget?: string;
  frameborder?: number | string;
  headers?: string;
  height?: number | string;
  high?: number;
  href?: string;
  hreflang?: string;
  htmlfor?: string;
  httpequiv?: string;
  integrity?: string;
  keyparams?: string;
  keytype?: string;
  kind?: string;
  label?: string;
  list?: string;
  loop?: boolean;
  low?: number;
  manifest?: string;
  marginheight?: number;
  marginwidth?: number;
  max?: number | string;
  maxlength?: number;
  media?: string;
  mediagroup?: string;
  method?: string;
  min?: number | string;
  minlength?: number;
  multiple?: boolean;
  muted?: boolean;
  name?: string;
  nonce?: string;
  novalidate?: boolean;
  open?: boolean;
  optimum?: number;
  pattern?: string;
  placeholder?: string;
  playsinline?: boolean;
  poster?: string;
  preload?: string;
  readonly?: boolean;
  rel?: string;
  required?: boolean;
  reversed?: boolean;
  rows?: number;
  rowspan?: number;
  sandbox?: string;
  scope?: string;
  scoped?: boolean;
  scrolling?: string;
  seamless?: boolean;
  selected?: boolean;
  shape?: string;
  size?: number;
  sizes?: string;
  span?: number;
  src?: string;
  srcdoc?: string;
  srclang?: string;
  srcset?: string;
  start?: number;
  step?: number | string;
  summary?: string;
  target?: string;
  type?: string;
  usemap?: string;
  value?: string | string[] | number;
  width?: number | string;
  wmode?: string;
  wrap?: string;
}

export interface IntrinsicElementAttributes {
  a: AnchorHTMLAttributes;
  abbr: HTMLAttributes;
  address: HTMLAttributes;
  area: AreaHTMLAttributes;
  article: HTMLAttributes;
  aside: HTMLAttributes;
  audio: AudioHTMLAttributes;
  b: HTMLAttributes;
  base: BaseHTMLAttributes;
  bdi: HTMLAttributes;
  bdo: HTMLAttributes;
  big: HTMLAttributes;
  blockquote: BlockquoteHTMLAttributes;
  body: HTMLAttributes;
  br: HTMLAttributes;
  button: ButtonHTMLAttributes;
  canvas: CanvasHTMLAttributes;
  caption: HTMLAttributes;
  cite: HTMLAttributes;
  code: HTMLAttributes;
  col: ColHTMLAttributes;
  colgroup: ColgroupHTMLAttributes;
  data: HTMLAttributes;
  datalist: HTMLAttributes;
  dd: HTMLAttributes;
  del: DelHTMLAttributes;
  details: DetailsHTMLAttributes;
  dfn: HTMLAttributes;
  dialog: HTMLAttributes;
  div: HTMLAttributes;
  dl: HTMLAttributes;
  dt: HTMLAttributes;
  em: HTMLAttributes;
  embed: EmbedHTMLAttributes;
  fieldset: FieldsetHTMLAttributes;
  figcaption: HTMLAttributes;
  figure: HTMLAttributes;
  footer: HTMLAttributes;
  form: FormHTMLAttributes;
  h1: HTMLAttributes;
  h2: HTMLAttributes;
  h3: HTMLAttributes;
  h4: HTMLAttributes;
  h5: HTMLAttributes;
  h6: HTMLAttributes;
  head: HTMLAttributes;
  header: HTMLAttributes;
  hgroup: HTMLAttributes;
  hr: HTMLAttributes;
  html: HtmlHTMLAttributes;
  i: HTMLAttributes;
  iframe: IframeHTMLAttributes;
  img: ImgHTMLAttributes;
  input: InputHTMLAttributes;
  ins: InsHTMLAttributes;
  kbd: HTMLAttributes;
  keygen: KeygenHTMLAttributes;
  label: LabelHTMLAttributes;
  legend: HTMLAttributes;
  li: LiHTMLAttributes;
  link: LinkHTMLAttributes;
  main: HTMLAttributes;
  map: MapHTMLAttributes;
  mark: HTMLAttributes;
  menu: MenuHTMLAttributes;
  menuitem: HTMLAttributes;
  meta: MetaHTMLAttributes;
  meter: MeterHTMLAttributes;
  nav: HTMLAttributes;
  noscript: HTMLAttributes;
  object: ObjectHTMLAttributes;
  ol: OlHTMLAttributes;
  optgroup: OptgroupHTMLAttributes;
  option: OptionHTMLAttributes;
  output: OutputHTMLAttributes;
  p: HTMLAttributes;
  param: ParamHTMLAttributes;
  picture: HTMLAttributes;
  pre: HTMLAttributes;
  progress: ProgressHTMLAttributes;
  q: QuoteHTMLAttributes;
  rp: HTMLAttributes;
  rt: HTMLAttributes;
  ruby: HTMLAttributes;
  s: HTMLAttributes;
  samp: HTMLAttributes;
  script: ScriptHTMLAttributes;
  section: HTMLAttributes;
  select: SelectHTMLAttributes;
  small: HTMLAttributes;
  source: SourceHTMLAttributes;
  span: HTMLAttributes;
  strong: HTMLAttributes;
  style: StyleHTMLAttributes;
  sub: HTMLAttributes;
  summary: HTMLAttributes;
  sup: HTMLAttributes;
  table: TableHTMLAttributes;
  tbody: HTMLAttributes;
  td: TdHTMLAttributes;
  textarea: TextareaHTMLAttributes;
  tfoot: HTMLAttributes;
  th: ThHTMLAttributes;
  thead: HTMLAttributes;
  time: TimeHTMLAttributes;
  title: HTMLAttributes;
  tr: HTMLAttributes;
  track: TrackHTMLAttributes;
  u: HTMLAttributes;
  ul: HTMLAttributes;
  var: HTMLAttributes;
  video: VideoHTMLAttributes;
  wbr: HTMLAttributes;
}

export interface Events {
  // clipboard events
  copy: ClipboardEvent;
  cut: ClipboardEvent;
  paste: ClipboardEvent;

  // composition events
  compositionend: CompositionEvent;
  compositionstart: CompositionEvent;
  compositionupdate: CompositionEvent;

  // drag drop events
  drag: DragEvent;
  dragend: DragEvent;
  dragenter: DragEvent;
  dragexit: DragEvent;
  dragleave: DragEvent;
  dragover: DragEvent;
  dragstart: DragEvent;
  drop: DragEvent;

  // focus events
  focus: FocusEvent;
  blur: FocusEvent;

  // form events
  change: Event;
  input: Event;
  reset: Event;
  submit: Event;
  invalid: Event;

  // image events
  load: Event;
  error: Event;

  // keyboard events
  keydown: KeyboardEvent;
  keypress: KeyboardEvent;
  keyup: KeyboardEvent;

  // mouse events
  click: MouseEvent;
  contextmenu: MouseEvent;
  dblclick: MouseEvent;
  mousedown: MouseEvent;
  mouseenter: MouseEvent;
  mouseleave: MouseEvent;
  mousemove: MouseEvent;
  mouseout: MouseEvent;
  mouseover: MouseEvent;
  mouseup: MouseEvent;

  // media events
  abort: Event;
  canplay: Event;
  canplaythrough: Event;
  durationchange: Event;
  emptied: Event;
  encrypted: Event;
  ended: Event;
  loadeddata: Event;
  loadedmetadata: Event;
  loadstart: Event;
  pause: Event;
  play: Event;
  playing: Event;
  progress: Event;
  ratechange: Event;
  seeked: Event;
  seeking: Event;
  stalled: Event;
  suspend: Event;
  timeupdate: Event;
  volumechange: Event;
  waiting: Event;

  // selection events
  select: Event;

  // UI events
  scroll: UIEvent;

  // touch events
  touchcancel: TouchEvent;
  touchend: TouchEvent;
  touchmove: TouchEvent;
  touchstart: TouchEvent;

  // wheel events
  wheel: WheelEvent;

  // animation events
  animationstart: AnimationEvent;
  animationend: AnimationEvent;
  animationiteration: AnimationEvent;

  // transition events
  transitionend: TransitionEvent;
  transitionstart: TransitionEvent;
}

export interface EventsOn {
  // clipboard events
  onCopy: ClipboardEvent;
  onCut: ClipboardEvent;
  onPaste: ClipboardEvent;

  // composition events
  onCompositionend: CompositionEvent;
  onCompositionstart: CompositionEvent;
  onCompositionupdate: CompositionEvent;

  // drag drop events
  onDrag: DragEvent;
  onDragend: DragEvent;
  onDragenter: DragEvent;
  onDragexit: DragEvent;
  onDragleave: DragEvent;
  onDragover: DragEvent;
  onDragstart: DragEvent;
  onDrop: DragEvent;

  // focus events
  onFocus: FocusEvent;
  onBlur: FocusEvent;

  // form events
  onChange: Event;
  onInput: Event;
  onReset: Event;
  onSubmit: Event;
  onInvalid: Event;

  // image events
  onLoad: Event;
  onError: Event;

  // keyboard events
  onKeydown: KeyboardEvent;
  onKeypress: KeyboardEvent;
  onKeyup: KeyboardEvent;

  // mouse events
  onClick: MouseEvent;
  onContextmenu: MouseEvent;
  onDblclick: MouseEvent;
  onMousedown: MouseEvent;
  onMouseenter: MouseEvent;
  onMouseleave: MouseEvent;
  onMousemove: MouseEvent;
  onMouseout: MouseEvent;
  onMouseover: MouseEvent;
  onMouseup: MouseEvent;

  // media events
  onAbort: Event;
  onCanplay: Event;
  onCanplaythrough: Event;
  onDurationchange: Event;
  onEmptied: Event;
  onEncrypted: Event;
  onEnded: Event;
  onLoadeddata: Event;
  onLoadedmetadata: Event;
  onLoadstart: Event;
  onPause: Event;
  onPlay: Event;
  onPlaying: Event;
  onProgress: Event;
  onRatechange: Event;
  onSeeked: Event;
  onSeeking: Event;
  onStalled: Event;
  onSuspend: Event;
  onTimeupdate: Event;
  onVolumechange: Event;
  onWaiting: Event;

  // selection events
  onSelect: Event;

  // UI events
  onScroll: UIEvent;

  // touch events
  onTouchcancel: TouchEvent;
  onTouchend: TouchEvent;
  onTouchmove: TouchEvent;
  onTouchstart: TouchEvent;

  // wheel events
  onWheel: WheelEvent;

  // animation events
  onAnimationstart: AnimationEvent;
  onAnimationend: AnimationEvent;
  onAnimationiteration: AnimationEvent;

  // transition events
  onTransitionend: TransitionEvent;
  onTransitionstart: TransitionEvent;
}

export interface EventsNativeOn {
  // clipboard events
  nativeOnCopy: ClipboardEvent;
  nativeOnCut: ClipboardEvent;
  nativeOnPaste: ClipboardEvent;

  // composition events
  nativeOnCompositionend: CompositionEvent;
  nativeOnCompositionstart: CompositionEvent;
  nativeOnCompositionupdate: CompositionEvent;

  // drag drop events
  nativeOnDrag: DragEvent;
  nativeOnDragend: DragEvent;
  nativeOnDragenter: DragEvent;
  nativeOnDragexit: DragEvent;
  nativeOnDragleave: DragEvent;
  nativeOnDragover: DragEvent;
  nativeOnDragstart: DragEvent;
  nativeOnDrop: DragEvent;

  // focus events
  nativeOnFocus: FocusEvent;
  nativeOnBlur: FocusEvent;

  // form events
  nativeOnChange: Event;
  nativeOnInput: Event;
  nativeOnReset: Event;
  nativeOnSubmit: Event;
  nativeOnInvalid: Event;

  // image events
  nativeOnLoad: Event;
  nativeOnError: Event;

  // keyboard events
  nativeOnKeydown: KeyboardEvent;
  nativeOnKeypress: KeyboardEvent;
  nativeOnKeyup: KeyboardEvent;

  // mouse events
  nativeOnClick: MouseEvent;
  nativeOnContextmenu: MouseEvent;
  nativeOnDblclick: MouseEvent;
  nativeOnMousedown: MouseEvent;
  nativeOnMouseenter: MouseEvent;
  nativeOnMouseleave: MouseEvent;
  nativeOnMousemove: MouseEvent;
  nativeOnMouseout: MouseEvent;
  nativeOnMouseover: MouseEvent;
  nativeOnMouseup: MouseEvent;

  // media events
  nativeOnAbort: Event;
  nativeOnCanplay: Event;
  nativeOnCanplaythrough: Event;
  nativeOnDurationchange: Event;
  nativeOnEmptied: Event;
  nativeOnEncrypted: Event;
  nativeOnEnded: Event;
  nativeOnLoadeddata: Event;
  nativeOnLoadedmetadata: Event;
  nativeOnLoadstart: Event;
  nativeOnPause: Event;
  nativeOnPlay: Event;
  nativeOnPlaying: Event;
  nativeOnProgress: Event;
  nativeOnRatechange: Event;
  nativeOnSeeked: Event;
  nativeOnSeeking: Event;
  nativeOnStalled: Event;
  nativeOnSuspend: Event;
  nativeOnTimeupdate: Event;
  nativeOnVolumechange: Event;
  nativeOnWaiting: Event;

  // selection events
  nativeOnSelect: Event;

  // UI events
  nativeOnScroll: UIEvent;

  // touch events
  nativeOnTouchcancel: TouchEvent;
  nativeOnTouchend: TouchEvent;
  nativeOnTouchmove: TouchEvent;
  nativeOnTouchstart: TouchEvent;

  // wheel events
  nativeOnWheel: WheelEvent;

  // animation events
  nativeOnAnimationstart: AnimationEvent;
  nativeOnAnimationend: AnimationEvent;
  nativeOnAnimationiteration: AnimationEvent;

  // transition events
  nativeOnTransitionend: TransitionEvent;
  nativeOnTransitionstart: TransitionEvent;
}

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  "aria-activedescendant"?: string;
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  "aria-atomic"?: boolean | "false" | "true";
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  "aria-autocomplete"?: "none" | "inline" | "list" | "both";
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  "aria-busy"?: boolean | "false" | "true";
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  "aria-checked"?: boolean | "false" | "mixed" | "true";
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  "aria-colcount"?: number;
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  "aria-colindex"?: number;
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  "aria-colspan"?: number;
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  "aria-controls"?: string;
  /** Indicates the element that represents the current item within a container or set of related elements. */
  "aria-current"?:
    | boolean
    | "false"
    | "true"
    | "page"
    | "step"
    | "location"
    | "date"
    | "time";
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  "aria-describedby"?: string;
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  "aria-details"?: string;
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden @see aria-readonly.
   */
  "aria-disabled"?: boolean | "false" | "true";
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup";
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid @see aria-describedby.
   */
  "aria-errormessage"?: string;
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  "aria-expanded"?: boolean | "false" | "true";
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  "aria-flowto"?: string;
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  "aria-grabbed"?: boolean | "false" | "true";
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  "aria-haspopup"?:
    | boolean
    | "false"
    | "true"
    | "menu"
    | "listbox"
    | "tree"
    | "grid"
    | "dialog";
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  "aria-hidden"?: boolean | "false" | "true";
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling";
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  "aria-keyshortcuts"?: string;
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  "aria-label"?: string;
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  "aria-labelledby"?: string;
  /** Defines the hierarchical level of an element within a structure. */
  "aria-level"?: number;
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  "aria-live"?: "off" | "assertive" | "polite";
  /** Indicates whether an element is modal when displayed. */
  "aria-modal"?: boolean | "false" | "true";
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  "aria-multiline"?: boolean | "false" | "true";
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  "aria-multiselectable"?: boolean | "false" | "true";
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  "aria-orientation"?: "horizontal" | "vertical";
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  "aria-owns"?: string;
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  "aria-placeholder"?: string;
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  "aria-posinset"?: number;
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  "aria-pressed"?: boolean | "false" | "mixed" | "true";
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  "aria-readonly"?: boolean | "false" | "true";
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  "aria-relevant"?:
    | "additions"
    | "additions text"
    | "all"
    | "removals"
    | "text";
  /** Indicates that user input is required on the element before a form may be submitted. */
  "aria-required"?: boolean | "false" | "true";
  /** Defines a human-readable, author-localized description for the role of an element. */
  "aria-roledescription"?: string;
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  "aria-rowcount"?: number;
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  "aria-rowindex"?: number;
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  "aria-rowspan"?: number;
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  "aria-selected"?: boolean | "false" | "true";
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  "aria-setsize"?: number;
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  "aria-sort"?: "none" | "ascending" | "descending" | "other";
  /** Defines the maximum allowed value for a range widget. */
  "aria-valuemax"?: number;
  /** Defines the minimum allowed value for a range widget. */
  "aria-valuemin"?: number;
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  "aria-valuenow"?: number;
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  "aria-valuetext"?: string;
}
