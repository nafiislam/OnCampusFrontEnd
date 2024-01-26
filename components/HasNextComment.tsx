import CommentBody from "./SingleComment";
import CollapseDefault from "./Collapse";
import { Button } from "@material-tailwind/react";

function HasNextComment({count, toggleOpen}: {count:number, toggleOpen: () => void}) {
    const handleClick = () => {
        // Update the variable using the function passed as a prop
        toggleOpen();
      };
  }

