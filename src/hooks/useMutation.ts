import axios, { AxiosError } from "axios";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const queryClient = new QueryClient();

function useMutationRequest<T>(key?: string, id?: string) {
  const { toast } = useToast();
  const router = useRouter();
  const session = useSession();
  const accessToken = session.data?.user?.token;

  // Create Task
  const {
    mutate: createTask,
    data: CreatedTask,
    isPending: isCreatingTask,
  } = useMutation({
    mutationFn: async (payload: T) => {
      const res = await axios.post(
        `http://localhost:6001/api/v1/tasks`,
        payload,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${key}`],
      });
      router.push("/tasks");
    },
    onError: (error: AxiosError<any, any>) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `${error?.response?.data.errors[0]}`,
      });
    },
  });

  // Edit Task
  const {
    mutate: EditTask,
    data: EditedTask,
    isPending: isEditingTask,
  } = useMutation({
    mutationFn: async (payload: T) => {
      const res = await axios.put(
        `http://localhost:6001/api/v1/tasks/${id}`,
        payload,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${key}`],
      });
      router.push("/tasks");
    },
    onError: (error: AxiosError<any, any>) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `${error?.response?.data.errors[0]}`,
      });
    },
  });

  // Apply for Task
  const { mutate: ApplyForTask, isPending: isApplyingForTask } = useMutation({
    mutationFn: async (payload: T) => {
      const res = await axios.post(
        `http://localhost:6001/api/v1/applications`,
        payload,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${key}`],
      });
      router.push("/tasks");
      toast({
        title: "Action Successful",
        description: `You have successfully applied for the task`,
      });
    },
    onError: (error: AxiosError<any, any>) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `${error?.response?.data.errors}`,
      });
    },
  });

  return {
    createTask,
    CreatedTask,
    isCreatingTask,
    EditTask,
    EditedTask,
    isEditingTask,
    ApplyForTask,
    isApplyingForTask,
  };
}

export default useMutationRequest;
