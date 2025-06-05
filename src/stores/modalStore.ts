import { makeAutoObservable } from "mobx";

class ModalStore {
  isOrderModalOpen: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  private setDocumentOverflow(isOpen: boolean) {
    document.documentElement.style.overflow = isOpen ? "hidden" : "auto";
  }

  setIsOpenOrderModal(isOpen: boolean) {
    this.setDocumentOverflow(isOpen);
    this.isOrderModalOpen = isOpen;
  }
}

export const modalStore = new ModalStore();
