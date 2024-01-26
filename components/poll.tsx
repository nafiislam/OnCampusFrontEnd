import { Card, List } from "@material-tailwind/react";
import PollOptions from "./pollOptions";
export default function PollList() {
  return (
    <Card className="w-full shadow-none" placeholder={undefined}>
      <List className="border-0" placeholder={undefined}>
        <PollOptions />
        <PollOptions />
        <PollOptions />
      </List>
    </Card>
  );
}
