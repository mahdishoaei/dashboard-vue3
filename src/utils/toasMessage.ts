import { useToast } from "vue-toastification"
const toast = useToast();

export const successToast = (position: any, text: string) => {
    toast.success(text, {
        position: position,
        timeout: 3000,
        hideProgressBar: false,
    });
}

export const infoToast = (position: any, text: string) => {
    toast.info(text, {
        position: position,
        timeout: 3000,
        hideProgressBar: false,
    });
}

export const warningToast = (position: any, text: string) => {
    toast.warning(text, {
        position: position,
        timeout: 3000,
        hideProgressBar: false,
    });
}

export const errorToast = (position: any, text: string) => {
    toast.error(text, {
        position: position,
        timeout: 3000,
        hideProgressBar: false,
    });
}