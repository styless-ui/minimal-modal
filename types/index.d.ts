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
  close(): void;
}

/**
 * Minimal Modal Class
 */
export default class MinimalModal {
  // ===================
  //  Static
  // ===================
  /**
   * Minimal Modal Instance Getter
   */
  public static get instance(): MinimalModal;

  // ===================
  //  Non-Static
  // ===================
  /**
   * Active Minimal Modal
   */
  public activate(): void;
  /**
   * Deactive Minimal Modal
   */
  public deactivate(): void;
  /**
   * Show Modal
   */
  public show(ModalElement: HTMLElement): void;
  /**
   * Close the Active Modal
   */
  public close(): void;
}
