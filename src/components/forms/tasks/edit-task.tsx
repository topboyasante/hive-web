"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Loader from "@/components/ui/loader";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TASK_CATEGORIES } from "@/constants";
import { useFetchByID } from "@/hooks/useFetchById";
import useMutationRequest from "@/hooks/useMutation";
import { cn } from "@/lib/utils";
import { FullTaskSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title should have a minimum of 5 characters",
  }),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(10, {
      message: "Field must be at least 10 characters",
    })
    .max(500, {
      message: "Field must not be longer than 500 characters",
    }),
  requirements: z
    .string({
      required_error: "Requirements is required",
    })
    .min(10, {
      message: "Field must be at least 10 characters",
    })
    .max(500, {
      message: "Field must not be longer than 500 characters",
    }),
  responsibilities: z
    .string({
      required_error: "Responsibilities is required",
    })
    .min(10, {
      message: "Field must be at least 10 characters",
    })
    .max(500, {
      message: "Field must not be longer than 500 characters",
    }),
  price: z.string().transform((v) => Number(v) || 0),
  due_date: z.date({
    required_error: "Invalid Date",
  }),
  category: z.string({
    required_error: "Category is required",
  }),
});

function EditTaskForm() {
  const params = useParams();

  const { EditTask, isEditingTask } = useMutationRequest(
    "tasks",
    `${params.id}`
  );
  const session = useSession();

  //use the unused variables
  const { data, isLoading, isError } = useFetchByID<FullTaskSchema>(
    `${params.id}`,
    "task_detail"
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      responsibilities: "",
      requirements: "",
      price: 0,
      category: "",
      due_date: new Date(),
    },
  });

  const wasCreatedByUser =
    (session && session.data?.user.username) === data?.user.username;

  //Update the form's default values with the data from the API
  useEffect(() => {
    if (data) {
      form.reset({
        title: data.title,
        description: data.description,
        responsibilities: data.responsibilities,
        requirements: data.requirements,
        price: data.price,
        category: data.category, //find out why the category is not updating
        due_date: new Date(data.due_date),
      });
    }
  }, [data, form.reset]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = { ...values, user_id: session.data?.user.id };
    EditTask(payload);
  }
  return (
    <div>
      {wasCreatedByUser ? (
        <div>
          {data && (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What is the task about?"
                          className="resize-none"
                          rows={12}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide any and all information you deem valuable.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="requirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Requirements</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What is required of the applicant?"
                          className="resize-none"
                          rows={12}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide any and all information you deem valuable.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="responsibilities"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Responsibilities</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What does the task involve?"
                          className="resize-none"
                          rows={12}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide any and all information you deem valuable.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Offering Price</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="due_date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Due Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category for your task" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {TASK_CATEGORIES.map((item, index) => {
                            return (
                              <SelectItem value={item.value} key={index}>
                                {item.name}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Pick a category that relates to the task you are
                        creating.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  {isEditingTask ? (
                    <Loader width="20" height="20" color="black" />
                  ) : (
                    "Edit Task"
                  )}
                </Button>
              </form>
            </Form>
          )}
        </div>
      ) : (
        <div>This task was not created by you.</div>
      )}
    </div>
  );
}

export default EditTaskForm;
