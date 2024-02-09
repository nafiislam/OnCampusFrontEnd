import React from 'react'
import { Dialog, DialogHeader, DialogBody, List, ListItem } from '@material-tailwind/react'
import AvatarImageText from './AvatarImageText';
const IntPost = ({users}:{users:any}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
  return (
    <>
    <Dialog
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
          placeholder={undefined}
        >
          <DialogHeader placeholder={undefined}>Option Body</DialogHeader>
          <DialogBody placeholder={undefined}>
            <List placeholder={undefined}>
              {users.map((user: any, index: number) => (
                <ListItem key={index} placeholder={undefined}>
                  <AvatarImageText user={user} />
                </ListItem>
              ))}
            </List>
          </DialogBody>
        </Dialog>
    </>
  )
}

export default IntPost