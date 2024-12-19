import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";

const LoggedInGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(UserAtom);
  if (user) {
    return <Navigate to={`/`} />;
  }
  return <>{children || <Outlet />}</>;
};
export default LoggedInGuard;
