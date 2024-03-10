import EditTaskForm from "@/components/forms/tasks/edit-task";
import BackButton from "@/components/ui/back-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hive | Edit Task",
  description: "Edit a Task",
};

function Page() {
  return (
    <div className="max-w-   mx-auto">
      <div className="my-5">
        <BackButton />
      </div>
      <div>
        <h2 className="text-3xl font-semibold">Edit Task</h2>
      </div>
      <div className="my-8">
        <EditTaskForm />
      </div>
    </div>
  );
}

export default Page;
