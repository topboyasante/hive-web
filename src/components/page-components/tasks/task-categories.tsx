import { TASK_CATEGORIES } from "@/constants";
import React from "react";

function TaskCategories() {
  return (
    <div className="w-full border-b">
      <div className="max-w-screen-xl mx-auto h-full px-5 py-3 flex items-center">
        <div className="w-full h-full flex items-center space-x-5 overflow-x-scroll">
          {TASK_CATEGORIES.map((item, index) => {
            return (
              <span className="text-sm text-nowrap text-neutral-500" key={index}>
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TaskCategories;
