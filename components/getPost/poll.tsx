import { Card, List } from "@material-tailwind/react";
import PollOptions from "./pollOptions";
export default function PollList({options}: {options: any[]}) {
  return (
    <Card className="w-full shadow-none" placeholder={undefined}>
      <List className="border-0" placeholder={undefined}>
        {options.map((option, index) => (
          <PollOptions key={index} option={option} />
        ))}
      </List>
    </Card>
  );
}
