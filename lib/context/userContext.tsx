"use client";
import { useSession } from "next-auth/react";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const UserContext = createContext({
  loading: true,
  user: {
    name: "",
    email: "",
    profession: "",
    applied: [],
  },
});

export default function UserProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    profession: "",
    applied: [],
  });
  const session = useSession();
  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
      const buffer = await fetch(
        `api/get-user-profile?email=${session.data?.user?.email}`,
      );
      const userInfo = await buffer.json();
      setUser(userInfo.data);
      setLoading(false);
    };
    fetchUser();
  }, [session]);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export const useGetUser = () => {
  const data = useContext(UserContext);
  return data;
};
