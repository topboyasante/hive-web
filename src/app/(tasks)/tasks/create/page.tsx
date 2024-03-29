import CreateTaskForm from "@/components/forms/tasks/create-task";
import BackButton from "@/components/ui/back-button";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Hive | Create A Task",
  description: "Create a Task",
};

function Page() {
  return (
    <div className="max-w-   mx-auto">
      <div className="my-5">
        <BackButton />
      </div>
      <div>
        <h2 className="text-3xl font-semibold">Create A Task</h2>
        <p className="text-[#a3a3a3] text-md">Need to get something done but can&apos;t? Assign it to a peer!</p>
      </div>
      <div className="my-8">
        <CreateTaskForm />
      </div>
    </div>
  );
}

export default Page;
