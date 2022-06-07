import { Id, toast } from "react-toastify";

let idModal: Id;

export const startLoadingModal = () => {
  idModal = toast.loading("Loading...");
};
export const stopLoadingModal = () => {
  toast.dismiss(idModal);
};
