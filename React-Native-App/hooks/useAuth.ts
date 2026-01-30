import { useContext } from "react";
import { AuthContext } from "@/providers/auth/AuthProvider";

export const useAuth = () => useContext(AuthContext)