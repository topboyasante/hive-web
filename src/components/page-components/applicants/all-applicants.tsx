"use client";
import { useFetchByBody, useFetchByID } from "@/hooks/useFetchById";
import { useParams } from "next/navigation";
import React from "react";
import BackButton from "@/components/ui/back-button";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { Separator } from "@/components/ui/separator";
import useMutationRequest from "@/hooks/useMutation";
import { FullTaskSchema, Applicants } from "@/types";
import { findCategory, formatDate } from "@/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import Avatar from "boring-avatars";
import ApplicantCard from "@/components/cards/applicant-card";

function AllApplicants() {
  const session = useSession();
  const params = useParams();
  const { data, isError, isLoading } = useFetchByBody<Applicants[]>(
    `tasks/task_applicants`,
    "applicants",
    `${params.id}`
  );

  console.log(data);
  return (
    <div>
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
                        <h3 className="text-3xl font-semibold">Applicants</h3>
                      </div>
                      <Separator className="mt-5" />
                      <div>
                        <div>
                          {data.map((item) => {
                            return (
                              <ApplicantCard
                                key={item.email}
                                username={item.username}
                                first_name={item.first_name}
                                last_name={item.last_name}
                                phone_number={item.phone_number}
                                email={item.email}
                              />
                            );
                          })}
                        </div>
                      </div>
                      <br />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AllApplicants;
