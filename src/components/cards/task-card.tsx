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

function TaskCard() {
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
            <CardTitle>Need a Babysitter</CardTitle>
            <CardDescription className="mt-[0.125rem]">
              @mariamitchell • 2h ago
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          amet, ipsum odit natus doloremque dolore eius voluptate quasi, esse
          totam, porro tempore id corrupti inventore neque? Magni dolore tempore
          perspiciatis.
        </p>
      </CardContent>
      <CardFooter>
        <Button>View Task</Button>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
