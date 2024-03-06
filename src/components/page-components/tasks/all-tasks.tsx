"use client";
import TaskCard from "@/components/cards/task-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchData } from "@/hooks/useFetchData";
import { BaseTaskSchema } from "@/types";

function AllTasks() {
  const {
    data: tasks,
    isLoading,
    isError,
  } = useFetchData<BaseTaskSchema[]>("tasks");
  return (
    <>
      <div>
        {isLoading ? (
          <div>
            <Skeleton className="h-[50vh] w-full rounded-md" />
          </div>
        ) : (
          <div>
            {isError ? (
              <div>
                <p className="text-center">
                  An error occured while fetching data. Please try again.
                </p>
              </div>
            ) : (
              <div>
                {tasks && tasks.length < 0 ? (
                  <div>No Tasks, Yet</div>
                ) : (
                  <div className="">
                    {tasks &&
                    // Change the way we sort here
                      tasks.sort((a, b) => b.id - a.id).map((item) => {
                        return (
                          <div key={item.id}>
                            <TaskCard
                              id={item.id}
                              title={item.title}
                              createdAt={item.created_at}
                              description={item.description}
                              price={item.price}
                              category={item.category}
                            />
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default AllTasks;
