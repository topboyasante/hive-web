import { getTimeAgo } from "@/utils";
import Link from "next/link";

type TaskProps = {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  createdAt: string;
};

function TaskCard({ ...props }: TaskProps) {
  return (
    <Link href={`/tasks/${props.id}`}>
      <div className="border-b py-5 flex flex-col justify-center">
        <div className="w-full h-full">
          <div>
            <span className="text-sm text-neutral-500">
              Posted {getTimeAgo(props.createdAt)} ago
            </span>
            <h4>{props.title}</h4>
            <p className="text-sm">
              Budget: {""}
              <span>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "GHC",
                }).format(Number(props.price))}
              </span>
            </p>
          </div>
          <br />
          <div>
            <p className="text-sm">{props.description}</p>
          </div>
          <br />
          <div>
            <p className="uppercase text-sm bg-[#f5f5f5] dark:bg-[#121212] w-fit px-4 py-1 rounded-full">
              {props.category}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TaskCard;
