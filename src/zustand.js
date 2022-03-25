import create from "zustand";

const useStore = create((set) => ({
    show: true,
    changetrue: () => {
        set(() => ({ show: true }));
    },
    changefalse: () => {
        set(() => ({ show: false }));
    },
}));

export default useStore;
