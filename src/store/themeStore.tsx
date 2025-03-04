import { create } from "zustand";

interface themeState {
  theme: {
    sideMenu: boolean;
    loading: boolean;
    shoppingCart: boolean;
    themeMode: string;
  };
  setShoppingCart: (data: boolean) => void;
  setSideMenu: (data: boolean) => void;
}

export const useTheme = create<themeState>()((set) => ({
  theme: {
    sideMenu: false,
    shoppingCart: false,
    loading: false,
    themeMode: "dark",
  },
  setShoppingCart: (value) =>
    set((state) => ({
      theme: {
        ...state.theme,
        shoppingCart: value,
      },
    })),
  setSideMenu: (value) =>
    set((state) => ({
      theme: {
        ...state.theme,
        sideMenu: value,
      },
    })),
}));
