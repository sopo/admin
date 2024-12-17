import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserAtom } from "./store/auth";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
const queryClient = new QueryClient();
function App() {
  const [loading, setLoading] = useState(true);
  const setUser = useSetAtom(UserAtom);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
