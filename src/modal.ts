import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import type { FocusTrap } from "focus-trap";
import type { Modal as IModal, ModalOptions } from "../types/index";
import { createFocusTrap } from "focus-trap";
import merge from "lodash.merge";

/**
 * Modal Class
 */
export class Modal implements IModal {
  /** element */
  private _element: HTMLElement;

  /** focusTrap Instance */
  private _focusTrap: FocusTrap;

  /** Modal Options */
  private options: ModalOptions;

  /**
   * Init Instance
   */
  public constructor(element: HTMLElement, options?: ModalOptions) {
    this._element = element;

    this.options = merge(
      {
        focusTrap: {
          onActivate: undefined,
          onDeactivate: undefined,
          initialFocus: undefined,
          fallbackFocus: undefined,
          returnFocusOnDeactivate: undefined,
          setReturnFocus: undefined,
          allowOutsideClick: undefined,
        },
        bodyScrollLock: {
          reserveScrollBarGap: true,
          allowTouchMove: (element: HTMLElement | Element): boolean => {
            const ignoreDatasetKey = "bodyScrollLockIgnore";
            while (element && element !== document.body) {
              if ("dataset" in element && ignoreDatasetKey in element.dataset) {
                return true;
              }
              if (element.parentElement) element = element.parentElement;
            }
            return false;
          },
        },
      },
      options,
      {
        focusTrap: {
          escapeDeactivates: false,
          clickOutsideDeactivates: false,
        },
      }
    );
    // Create FocusTrap Instance
    this._focusTrap = createFocusTrap(this._element, this.options?.focusTrap);
  }

  /**
   * Modal Element Getter
   */
  public get element(): HTMLElement {
    return this._element;
  }

  /**
   * Show Modal
   */
  public show(): void {
    this._element.setAttribute("open", "");
    // console.log(this._element.getAttribute("area-hidden"));
    if (this._element.getAttribute("area-hidden") === "true") {
      this._element.setAttribute("area-hidden", "false");
    }
    disableBodyScroll(this._element, this.options?.bodyScrollLock);
    this._focusTrap.activate();
  }

  /**
   * Close Modal
   */
  public close(): void {
    this._focusTrap.deactivate();
    enableBodyScroll(this._element);
    // console.log(this._element.getAttribute("area-hidden"));
    if (this._element.getAttribute("area-hidden") === "false") {
      this._element.setAttribute("area-hidden", "true");
    }
    this._element.removeAttribute("open");
  }
}
