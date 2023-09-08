import { AuthUser } from "@/types/response.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthUserState = {
    authUser: {
        token?: string;
        profile?: AuthUser;
    } | null;
    setToken: (token: string) => void;
    setProfile: (profile: AuthUser) => void;
    setAuthUser: (token: string, profile: AuthUser) => void;
    logout: () => void
}

const useAuthUserStore = create<AuthUserState>()(persist(
    (set) => ({
        authUser: null,
        setToken: (token: string) => set((state) => ({ authUser: { ...state.authUser, token: token } })),
        setProfile: (profile: AuthUser) => set((state) => ({ authUser: { ...state.authUser, profile: profile } })),
        setAuthUser: (token: string, profile: AuthUser) => set({ authUser: { profile: profile, token: token } }),
        logout: () => set({ authUser: null })
    }),
    {
        name: "auth-user-storage",
        storage: createJSONStorage(() => localStorage)
    }
))


export default useAuthUserStore