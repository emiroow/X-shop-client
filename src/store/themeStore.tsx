import { create } from "zustand";

interface themeState {
  theme: {
    sideMenu: boolean;
    loading: boolean;
    shoppingCart: boolean;
    topAlert: boolean;
    themeMode: string;
  };
  setShoppingCart: (data: boolean) => void;
  setSideMenu: (data: boolean) => void;
  setTopAlert: (data: boolean) => void;
}

export const useTheme = create<themeState>()((set) => ({
  theme: {
    sideMenu: false,
    shoppingCart: false,
    loading: false,
    themeMode: "dark",
    topAlert: true,
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
  setTopAlert: (value) =>
    set((state) => ({
      theme: {
        ...state.theme,
        topAlert: value,
      },
    })),
}));
