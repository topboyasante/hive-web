import Avatar from "boring-avatars";

type ApplicantProps = {
  username: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
};

function ApplicantCard({ ...props }: ApplicantProps) {
  return (
    <div className="border-b p-5 flex flex-col justify-center hover:bg-[#f9f9f9] dark:hover:bg-[#191919] ease duration-200">
      <div className="w-full h-full">
        <Avatar
          size={40}
          name={props.username}
          variant="beam"
          colors={["#78C0E0", "#F28C35", "#9BB54D", "#E15780", "#4D8DBE"]}
        />
        <div className="mt-5">
          <h5>
            {props.first_name} {props.last_name}
          </h5>
          <span className="text-sm text-neutral-500">@{props.username}</span>
        </div>
      </div>
    </div>
  );
}

export default ApplicantCard;
