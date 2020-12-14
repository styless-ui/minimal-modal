import type { BodyScrollOptions } from "body-scroll-lock";
import type { Options as FocusTrapOptions } from "focus-trap";

/**
 * Modal Class
 */
export class Modal {
  /**
   * Init Instance
   */
  constructor(element: HTMLElement, options?: ModalOptions);
  /**
   * Modal Element Getter
   */
  public get element(): HTMLElement;
  /**
   * Show Modal
   */
  public show(): void;
  /**
   * Close Modal
   */
  public close(): void;
}

/**
 * Modal Options
 */
export interface ModalOptions {
  focusTrap?: Pick<FocusTrapOptions, "escapeDeactivates" | "clickOutsideDeactivates">;
  bodyScrollLock?: BodyScrollOptions;
}

/**
 * Minimal Modal Class
 */
export class MinimalModal {
  // ===================
  //  Static
  // ===================
  /**
   * Active Minimal Modal
   */
  public static activate(): void;
  /**
   * Deactive Minimal Modal
   */
  public static deactivate(): void;
  /**
   * Show Modal
   */
  public static show(modalElement: HTMLElement, options?: ModalOptions): void;
  /**
   * Close the Active Modal
   */
  public static close(): void;
}
