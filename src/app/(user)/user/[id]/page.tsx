import Avatar from "boring-avatars";
import React from "react";

function Page() {
  return (
    <div className="max-w-2xl mx-auto min-h-screen">
      {/* Heading */}
      <div className="flex flex-col md:flex-row gap-5">
        <Avatar
          size={50}
          name="Maria Mitchell"
          variant="beam"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
        <div>
          <h2 className="text-3xl font-semibold">Nana Kwasi Asante</h2>
          <p className="text-[#a3a3a3] text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      {/* Content */}
      <div></div>
    </div>
  );
}

export default Page;
