/**
 * Modal Class
 */
export class Modal {
  /**
   * Init Instance
   */
  constructor(element: HTMLElement);
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
 * Minimal Modal Class
 */
export default class MinimalModal {
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
  public static show(modalElement: HTMLElement): void;
  /**
   * Close the Active Modal
   */
  public static close(): void;
}
