"use client";
import BackButton from "@/components/ui/back-button";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { Separator } from "@/components/ui/separator";
import { useFetchByID } from "@/hooks/useFetchById";
import { FullTaskSchema } from "@/types";
import { findCategory } from "@/utils";
import { useParams } from "next/navigation";

function TaskDetail() {
  const params = useParams();
  const { data, isLoading, isError } = useFetchByID<FullTaskSchema>(
    `${params.id}`,
    "task_detail"
  );
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <Loader width="20" height="20" color="black" />
      ) : (
        <div>
          {isError ? (
            <div>Error</div>
          ) : (
            <div>
              {data && (
                <div className="max-w-2xl mx-auto min-h-screen">
                  <div className="my-5">
                    <BackButton />
                  </div>
                  <div>
                    <div>
                      <h2 className="text-3xl font-semibold">{data.title}</h2>
                      <p className="text-[#a3a3a3] text-sm mt-2">
                        22 February 2024 | <span>{findCategory(data.category)}</span> | Budget:{" "}
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "GHC",
                        }).format(Number(data.price))}
                      </p>
                    </div>
                    <Separator className="my-5" />
                    <div>
                      <h2 className="text-xl font-semibold">
                        Task Description
                      </h2>
                      <p className="text-[#a3a3a3] text-m mt-2">
                       {data.description}
                      </p>
                    </div>
                    <br />
                    <div>
                      <h2 className="text-xl font-semibold">
                        Requirements
                      </h2>
                      <p className="text-[#a3a3a3] text-m mt-2">
                       {data.requirements}
                      </p>
                    </div>
                    <br />
                    <div>
                      <h2 className="text-xl font-semibold">
                        Responsibilities
                      </h2>
                      <p className="text-[#a3a3a3] text-m mt-2">
                       {data.responsibilities}
                      </p>
                    </div>
                    <br />
                    <div className="flex justify-end">
                      <Button>Apply</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TaskDetail;
