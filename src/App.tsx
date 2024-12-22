import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/routes/routes";
import { UserAtom } from "./store/auth";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import useGetUserSession from "./hooks/use-get-user-session";

function App() {
  const [, setLoading] = useState(true);
  const setUser = useSetAtom(UserAtom);

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setUser(session);
  //     setLoading(false);
  //   });
  useGetUserSession((session) => {
    if (session) {
      setUser(session);
      setLoading(false);
    }
  });

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return <RouterProvider router={router} />;
}

export default App;
