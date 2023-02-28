export interface ModalComponentModel {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    dataT: string;
    dataF: string;
    setDataT: React.Dispatch<React.SetStateAction<string>>;
    setDataF: React.Dispatch<React.SetStateAction<string>>;
}