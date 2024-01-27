import { Avatar, Typography } from "@material-tailwind/react";

export default function AvatarImageText({user}: {user: any }) {
    return (
        <div className="flex items-center gap-4">
  <Avatar
    src={user?.profilePicture}
    alt="avatar"
    placeholder={""}
  />
  <div>
    <Typography placeholder={""} variant="h6">
      {user?.name??""}
    </Typography>
    <Typography
      placeholder={""}
      variant="small"
      color="gray"
      className="font-normal"
    >
      {user?.email??""}
    </Typography>
  </div>
</div>
    );
}
