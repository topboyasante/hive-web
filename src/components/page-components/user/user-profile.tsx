"use client";
import Loader from "@/components/ui/loader";
import { Separator } from "@/components/ui/separator";
import { useFetchByID } from "@/hooks/useFetchById";
import { UserProfileSchema } from "@/types";
import Avatar from "boring-avatars";
import { useParams } from "next/navigation";
import React from "react";
import { GiToken } from "react-icons/gi";
import { LuMapPin } from "react-icons/lu";
import { FaPhone } from "react-icons/fa";

function UserProfile() {
  const params = useParams();
  const { data, isLoading, isError, error } = useFetchByID<UserProfileSchema>(
    `users/${params.id}`,
    "user"
  );

  console.log(data);
  return (
    <div>
      {isLoading ? (
        <Loader width="20" height="20" color="black" />
      ) : (
        <div>
          {isError ? (
            <div>{error?.message}</div>
          ) : (
            <div>
              <div>
                {data && (
                  <div className="max-w-screen-lg mx-auto min-h-screen pt-[2vh]">
                    {/* Heading */}
                    <div>
                      <div className="flex flex-col md:flex-row gap-5">
                        <Avatar
                          size={50}
                          name={data?.username}
                          variant="beam"
                          colors={[
                            "#78C0E0",
                            "#F28C35",
                            "#9BB54D",
                            "#E15780",
                            "#4D8DBE",
                          ]}
                        />
                        <div>
                          <h3 className="text-3xl font-semibold">
                            {data.first_name} {data.last_name}
                          </h3>
                          <p className="text-[#a3a3a3] text-sm">
                            @ {data.username}
                          </p>
                        </div>
                      </div>
                      <br />
                      <div className="flex items-center gap-5">
                        <div className="flex items-center gap-3">
                          <GiToken />
                          <span>{data.token_number}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <LuMapPin />
                          <span>{data.residential_address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <FaPhone />
                          <span>{data.phone_number}</span>
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <Separator className="my-5" />
                    <div></div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserProfile;
