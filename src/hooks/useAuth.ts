import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

function useAuthMutations<T>() {
  const {
    mutate: SignIn,
    isPending: IsSigningIn,
    data: SignedInData,
    error: SignInError,
  } = useMutation<LoginSchema, AxiosError, T>({
    mutationFn: async (payload) => {
      const res = await axios.post(`http://localhost:3000/api/v1/auth/login`, payload);
      return res.data;
    },
    onSuccess: async (res) => {
      //Here, "res" is whatever is returned from the mutationFn()
    },
    onError: (err) => {},
  });

  return { SignIn, IsSigningIn, SignedInData, SignInError };
}

export default useAuthMutations;
