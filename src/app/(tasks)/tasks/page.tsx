import AllTasks from "@/components/page-components/tasks/all-tasks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hive | Tasks",
  description: "View all Tasks",
};

function Page() {
  return (
    <div className="pt-[0vh] min-h-screen">
      {/* Browse Tasks */}
      <div className="my-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-5">
          <h3>Browse Tasks</h3>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="search" placeholder="Search" />
            <Button type="submit">Search</Button>
          </div>
        </div>
        <Separator className="my-8" />
        <AllTasks />
      </div>
    </div>
  );
}

export default Page;
