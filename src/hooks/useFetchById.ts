import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export function useFetchByID<T>(id: string, key: string) {
  const session = useSession();
  const accessToken = session.data?.user.token;

  const { isLoading, data, isError, error } = useQuery<T>({
    queryKey: [key],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:6001/api/v1/tasks/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return res.data;
    },
    enabled: session.status === "authenticated",
  });
  return {
    isLoading,
    data,
    isError,
    error,
  };
}
