import AllTasks from "@/components/page-components/tasks/all-tasks";
import Greeting from "./greeting";

function Main() {
  return (
    <div className="pt-[0vh] min-h-screen">
      <div className="mt-2">
        <Greeting />
        <AllTasks />
      </div>
    </div>
  );
}

export default Main;
