import { Id, toast } from "react-toastify";

let idModal: Id;

export const startLoadingModal = (message: string) => {
  idModal = toast.loading(`${message}`);
};
export const stopOkLoadingModal = (message: string) => {
  toast.update(idModal, {
    render: `${message}`,
    type: "success",
    closeOnClick: true,
    autoClose: 1500,
    isLoading: false,
  });
};
export const stopErrorLoadingModal = (message: string) => {
  toast.update(idModal, {
    render: `${message}`,
    type: "error",
    closeOnClick: true,
    autoClose: 1500,
    isLoading: false,
  });
};
