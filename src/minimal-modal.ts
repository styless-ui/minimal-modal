import type { MinimalModal as IMinimalModal, ModalOptions } from "../types/index";
import { Modal } from "./modal";

/**
 * Minimal Modal Class
 */
export class MinimalModal implements IMinimalModal {
  // ===================
  //  Static
  // ===================

  /** Minimal Modal Instance */
  private static _instance: MinimalModal;

  /**
   * Minimal Modal Instance Getter
   */
  private static get instance(): MinimalModal {
    if (!MinimalModal._instance) {
      MinimalModal._instance = new MinimalModal();
    }
    return MinimalModal._instance;
  }

  /**
   * Active Minimal Modal
   */
  public static activate(): void {
    this.instance._activate();
  }

  /**
   * Deactive Minimal Modal
   */
  public static deactivate(): void {
    this.instance._deactivate();
  }

  /**
   * Show Modal
   */
  public static show(modalElement: HTMLElement, options?: ModalOptions): void {
    this.instance._show(modalElement, options);
  }

  /**
   * Close the Active Modal
   */
  public static close(): void {
    this.instance._close();
  }

  /**
   * Close All Modals
   */
  public static closeAll(): void {
    this.instance._closeAll();
  }

  // ===================
  //  Non-Static
  // ===================

  /** is Active */
  private _isActive = false;

  /** Active Modal Instances */
  private _activeModals: Modal[] = [];

  /** Active Modal Instance */
  private get _activeModal(): Modal | null {
    return this._activeModals[this._activeModals.length - 1] || null;
  }
  /** Active Modal Instance */
  private set _activeModal(modal: Modal | null) {
    if (modal == null) {
      if (this._activeModals.length > 0) {
        // remove latest modal
        this._activeModals.pop();
      }
      return;
    }
    // add latest modal
    this._activeModals.push(modal);
  }

  /** Dataset Key Set */
  private datasetKeySet: {
    showTrigger: string;
    closeTrigger: string;
  } = {
    showTrigger: "modalShow",
    closeTrigger: "modalClose",
  };

  /**
   * Init Instance
   */
  private constructor() {
    window.addEventListener<"click">("click", (event: Event): void => {
      if (!this._isActive) {
        return;
      }

      if (!(event.target instanceof HTMLElement)) {
        // Not HTML Element
        return;
      }

      const target: HTMLElement = event.target;

      if (this.datasetKeySet.closeTrigger in target.dataset) {
        // on Click Close Modal trigger
        this._close();
        event.preventDefault();
      }

      if (this.datasetKeySet.showTrigger in target.dataset) {
        // on Click Show Modal trigger
        const modalSelector: string | undefined = target.dataset[this.datasetKeySet.showTrigger];
        if (modalSelector) {
          const modalElement: HTMLElement | null = document.querySelector(modalSelector);
          if (modalElement) {
            this._show(modalElement);
            event.preventDefault();
          }
        }
      }
    });

    window.addEventListener<"keydown">("keydown", (event: KeyboardEvent): void => {
      if (event.key === "Escape" || event.key === "Esc") {
        this._close();
        event.preventDefault();
        return;
      }
    });
  }

  /**
   * Active Minimal Modal
   */
  private _activate(): void {
    this._isActive = true;
  }

  /**
   * Deactive Minimal Modal
   */
  private _deactivate(): void {
    this._isActive = false;
  }

  /**
   * Show Modal
   */
  private _show(modalElement: HTMLElement, options?: ModalOptions): void {
    this._activeModal = new Modal(modalElement, options);
    this._activeModal.show();
  }

  /**
   * Close the Active Modal
   */
  private _close(): void {
    this._activeModal?.close();
    this._activeModal = null;
  }

  /**
   * Close All Modals
   */
  private _closeAll(): void {
    while (this._activeModal != null) {
      this._close();
    }
  }
}
