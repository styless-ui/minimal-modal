import Modal from './modal';
import IMinimalModal from '../types/index';

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
  public static get instance(): MinimalModal {
    if (!MinimalModal._instance) {
      MinimalModal._instance = new MinimalModal();
    }
    return MinimalModal._instance;
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
    showTrigger: 'modalShow',
    closeTrigger: 'modalClose',
  };

  /**
   * Init Instance
   */
  private constructor() {
    // Nothing
    window.addEventListener<'click'>('click', (event: Event): void => {
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
        const modalSelector: string | undefined =
          target.dataset[this.datasetKeySet.showTrigger];
        if (!modalSelector) {
          return;
        }
        const modalElement: HTMLElement | null = document.querySelector(
          modalSelector
        );
        if (!modalElement) {
          // console.log('target is not found');
          return;
        }
        this.show(modalElement);
        event.preventDefault();
        return;
      }

      if (this.datasetKeySet.closeTrigger in target.dataset) {
        // on Click Close Modal trigger
        this.close();
        event.preventDefault();
        return;
      }
    });
  }

  /**
   * Active Minimal Modal
   */
  public activate(): void {
    this._isActive = true;
  }

  /**
   * Deactive Minimal Modal
   */
  public deactivate(): void {
    this._isActive = false;
  }

  /**
   * Show Modal
   */
  public show(ModalElement: HTMLElement): void {
    // close current modal
    this.close();
    this._activeModal = new Modal(ModalElement);
    this._activeModal.show();
  }

  /**
   * Close the Active Modal
   */
  public close(): void {
    if (!this._activeModal) {
      return;
    }
    this._activeModal.close();
    this._activeModal = null;
  }
}

export default MinimalModal;
