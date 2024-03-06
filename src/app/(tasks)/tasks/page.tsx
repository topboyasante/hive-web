import Main from "@/components/page-components/tasks/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hive | Tasks",
  description: "View all Tasks",
};

function Page() {
  return <Main />;
}

export default Page;
