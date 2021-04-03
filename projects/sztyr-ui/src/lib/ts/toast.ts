import { ToastType } from "./toastType";

export interface Toast {
    type?: ToastType;
    message: String;
    duration?: number;
    params?;
}