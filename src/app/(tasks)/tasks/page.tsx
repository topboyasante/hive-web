import TaskCard from "@/components/cards/task-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hive | Tasks",
  description: "View all Tasks",
};

function Page() {
  return (
    <div className="pt-[5vh]">
      {/* Greetings */}
      <div className="mb-5">
        <h2 className="text-3xl font-semibold">Welcome, Nana!</h2>
        <p className="text-neutral-600 text-md">Lorem ipsum dolor sit amet.</p>
        <br />
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="search" placeholder="Search" />
          <Button type="submit">Search</Button>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Browse Tasks */}
      <div className="my-8">
        <h3 className="mb-3 text-xl font-semibold">Browse Tasks</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default Page;
