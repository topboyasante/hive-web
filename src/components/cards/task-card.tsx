import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Avatar from "boring-avatars";
import { Button } from "../ui/button";
import { getTimeAgo } from "@/utils";
import Link from "next/link";

type TaskProps = {
  id:number
  title: string;
  category: string;
  price: number;
  description: string;
  createdAt: string;
};

function TaskCard({ ...props }: TaskProps) {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <div className="flex gap-5 items-center">
          <div>
            <Avatar
              size={45}
              name="Maria Mitchell"
              variant="beam"
              colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
          </div>
          <div>
            <CardTitle className="text-sm">{props.title}</CardTitle>
            <CardDescription className="mt-[0.125rem]">
              @mariamitchell • {getTimeAgo(props.createdAt)} ago
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{props.description}</p>
      </CardContent>
      <CardFooter className="justify-between items-center">
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "GHC",
          }).format(Number(props.price))}
        </p>
        <Button variant={`link`} className="p-0">
          <Link href={`/tasks/${props.id}`}>View Task</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
