"use client";
import BackButton from "@/components/ui/back-button";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { Separator } from "@/components/ui/separator";
import { useFetchByID } from "@/hooks/useFetchById";
import useMutationRequest from "@/hooks/useMutation";
import { FullTaskSchema } from "@/types";
import { findCategory, formatDate } from "@/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";

function TaskDetail() {
  const session = useSession();
  const params = useParams();
  const { data, isLoading, isError } = useFetchByID<FullTaskSchema>(
    `tasks/${params.id}`,
    "task_detail"
  );
  const { ApplyForTask, isApplyingForTask } = useMutationRequest();

  function applyForTask() {
    const payload = {
      message: "please employ i beg",
      task_id: `${params.id}`,
      user_id: `${session.data?.user.id}`,
    };
    ApplyForTask(payload);
  }

  return (
    <div>
      {isLoading ? (
        <Loader width="20" height="20" color="black" />
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
              {data && (
                <div className="w-full mx-auto min-h-screen">
                  <div className="my-5">
                    <BackButton />
                  </div>
                  <div>
                    <div>
                      <h2 className="text-3xl font-semibold">{data.title}</h2>
                      <p className="text-[#a3a3a3] text-sm mt-2">
                        {formatDate(data.created_at)}
                      </p>
                      <br />
                      <div className="flex flex-col md:flex-row gap-3 md:items-center text-sm">
                        <div className="flex items-center md:space-x-2">
                          <MdOutlineCategory size={20} />
                          <span>{findCategory(data.category)}</span>
                        </div>
                        <div className="flex items-center md:space-x-2">
                          <GiTakeMyMoney size={20} />
                          <span>
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "GHC",
                            }).format(Number(data.price))}
                          </span>
                        </div>
                        <div className="flex items-center md:space-x-2">
                          <MdOutlineDateRange size={20} />
                          <span>{formatDate(data.due_date)}</span>
                        </div>
                      </div>
                    </div>
                    <Separator className="my-5" />
                    <div>
                      <h2 className="text-xl font-semibold">Description</h2>
                      <p className="text-[#a3a3a3] text-m mt-2 whitespace-pre-line">
                        {data.description}
                      </p>
                    </div>
                    <br />
                    <div>
                      <h2 className="text-xl font-semibold">Requirements</h2>
                      <p className="text-[#a3a3a3] text-m mt-2 whitespace-pre-line">
                        {data.requirements}
                      </p>
                    </div>
                    <br />
                    <div>
                      <h2 className="text-xl font-semibold">
                        Responsibilities
                      </h2>
                      <p className="text-[#a3a3a3] text-m mt-2 whitespace-pre-line">
                        {data.responsibilities}
                      </p>
                    </div>
                    <br />
                    <div className="flex justify-end space-x-5">
                      {data.user.username === session.data?.user.username && (
                        <Link href={`edit/${data.id}`}>
                          <Button variant={`secondary`}>Edit Task</Button>
                        </Link>
                      )}
                      <Button onClick={() => applyForTask()}>Apply</Button>
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
