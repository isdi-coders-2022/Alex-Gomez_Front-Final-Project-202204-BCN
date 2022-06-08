import { Id, toast } from "react-toastify";

let idModal: Id;

export const startLoadingModal = (message: string) => {
  idModal = toast.loading(`${message}`);
};
export const stopLoadingModal = () => {
  toast.dismiss(idModal);
};
