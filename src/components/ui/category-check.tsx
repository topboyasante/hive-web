import { TASK_CATEGORIES } from "@/constants";
import React from "react";

interface TaskCategoryProps {
  category: string;
}

function CategoryCheck({ category }: TaskCategoryProps) {
  const selectedCategory = TASK_CATEGORIES.find(
    (cat) => cat.value === category
  );

  return (
    <div>
      {selectedCategory ? (
        <p className="uppercase text-sm bg-[#f5f5f5] dark:bg-[#121212] w-fit px-4 py-1 rounded-full">
          {selectedCategory.name}
        </p>
      ) : (
        <p>Category not found</p>
      )}
    </div>
  );
}

export default CategoryCheck;
