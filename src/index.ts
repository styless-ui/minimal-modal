import Modal from "./modal";
import IMinimalModal from "../types/index";

/**
 * Minimal Modal Class
 */
class MinimalModal implements IMinimalModal {
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
  public static show(modalElement: HTMLElement): void {
    this.instance._show(modalElement);
  }

  /**
   * Close the Active Modal
   */
  public static close(): void {
    this.instance._close();
  }

  // ===================
  //  Non-Static
  // ===================

  /** is Active */
  private _isActive = false;

  /** Active Modal Instance */
  private _activeModal: Modal | null = null;

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

      if (this.datasetKeySet.showTrigger in target.dataset) {
        // on Click Show Modal trigger
        const modalSelector: string | undefined = target.dataset[this.datasetKeySet.showTrigger];
        if (!modalSelector) {
          return;
        }
        const modalElement: HTMLElement | null = document.querySelector(modalSelector);
        if (!modalElement) {
          // console.log('target is not found');
          return;
        }
        this._show(modalElement);
        event.preventDefault();
        return;
      }

      if (this.datasetKeySet.closeTrigger in target.dataset) {
        // on Click Close Modal trigger
        this._close();
        event.preventDefault();
        return;
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
  private _show(modalElement: HTMLElement): void {
    // close current modal
    this._close();
    this._activeModal = new Modal(modalElement);
    this._activeModal.show();
  }

  /**
   * Close the Active Modal
   */
  private _close(): void {
    if (!this._activeModal) {
      return;
    }
    this._activeModal.close();
    this._activeModal = null;
  }
}

export default MinimalModal;
