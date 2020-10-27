import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import type { BodyScrollOptions } from "body-scroll-lock";
import type { FocusTrap } from "focus-trap";
import type { Options as FocusTrapOptions } from "focus-trap";
import { Modal as IModal } from "../types/index";
import { createFocusTrap } from "focus-trap";

/**
 * Modal Class
 */
export default class Modal implements IModal {
  /** element */
  private _element: HTMLElement;

  /** focusTrap Instance */
  private _focusTrap: FocusTrap;

  /** Modal Options */
  private options:
    | {
        focusTrap?: FocusTrapOptions;
        bodyScrollLock?: BodyScrollOptions;
      }
    | undefined;

  /**
   * Init Instance
   */
  public constructor(element: HTMLElement) {
    this._element = element;

    this.options = {
      focusTrap: {
        onActivate: undefined,
        onDeactivate: undefined,
        initialFocus: undefined,
        fallbackFocus: undefined,
        returnFocusOnDeactivate: undefined,
        setReturnFocus: undefined,
        escapeDeactivates: false,
        clickOutsideDeactivates: false,
        allowOutsideClick: undefined,
      },
      bodyScrollLock: {
        reserveScrollBarGap: true,
        allowTouchMove: undefined,
      },
    };
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
    console.log(this._element.getAttribute("area-hidden"));
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
    console.log(this._element.getAttribute("area-hidden"));
    if (this._element.getAttribute("area-hidden") === "false") {
      this._element.setAttribute("area-hidden", "true");
    }
    this._element.removeAttribute("open");
  }
}
