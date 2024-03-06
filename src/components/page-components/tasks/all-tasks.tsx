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
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {tasks &&
                      tasks.map((item) => {
                        return (
                          <div className="col-span-1" key={item.id}>
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
