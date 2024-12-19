import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";

const GuestGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(UserAtom);
  if (!user) {
    return <Navigate to={`/sign-in`} />;
  }
  return <>{children || <Outlet />}</>;
};
export default GuestGuard;
