import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAppStore = create(persist((set) => ({
    darkMode: false,
    toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode }))
}), {
    name: 'app-storage',
    getStorage: () => localStorage,
}));
