import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";
import { AUTH_PATHS } from "@/pages/authorization-layout/auth.enum";

const GuestGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(UserAtom);
  if (!user) {
    return <Navigate to={AUTH_PATHS.SIGN_IN} />;
  }
  return <>{children || <Outlet />}</>;
};
export default GuestGuard;
