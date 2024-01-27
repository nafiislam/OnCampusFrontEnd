"use client";
import React, { ReactEventHandler, useTransition } from "react";
import { useEffect, useRef, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import writePost from "../../server_actions/writePost";
import {
  Textarea,
  Button,
  IconButton,
  Card,
  Input,
  Checkbox,
  Typography,
  Select,
  Option,
  Alert,
} from "@material-tailwind/react";
import { redirect } from "next/navigation";
import { Replace } from "lucide-react";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import {
  MultiImageDropzone,
  type FileState,
} from "../../components/MultiImageDropzone";
import { MultiFileDropzone } from "../../components/MultiFileDropzone";
import { useEdgeStore } from "@/lib/edgestore";
import { useRouter } from 'next/navigation'
import { set } from "zod";

interface customImg {
  url: string;
  key: string;
  name: string;
}
interface customFile {
  url: string;
  key: string;
  name: string;
}

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const WritePost = () => {
  const formHandler = async () => {
    //errror handling
    if (!submit) {
      return;
    }
    setSubmit(false);

    if (title === "") {
      setAlertMsg("Title is required");
      setAlertOpen(true);
      scrollToTop();
      return;
    }

    if (content === "") {
      setAlertMsg("Content is required");
      setAlertOpen(true);
      scrollToTop();
      return;
    }

    if (postType === "") {
      setAlertMsg("Post type is required");
      setAlertOpen(true);
      scrollToTop();
      return;
    }

    if (pollCheck) {
      if (options.length < 2) {
        setAlertMsg("At least two options are required");
        setAlertOpen(true);
        scrollToTop();
        return;
      }
    }

    if (reminderCheck) {
      if (reminder === "") {
        setAlertMsg("Reminder date and time is required");
        setAlertOpen(true);
        scrollToTop();
        return;
      }
    }

    if (imgStates?.length > 6) {
      setAlertMsg("Maximum 6 images are allowed");
      setAlertOpen(true);
      scrollToTop();
      return;
    }

    if (fileStates?.length > 6) {
      setAlertMsg("Maximum 6 files are allowed");
      setAlertOpen(true);
      scrollToTop();
      return;
    }

    if (imgStates?.length > 0) {
      if (imgStates?.some((imgState) => imgState.progress !== "COMPLETE")) {
        setAlertMsg("Images are still uploading");
        setAlertOpen(true);
        scrollToTop();
        return;
      }
    }

    if (fileStates?.length > 0) {
      if (fileStates?.some((fileState) => fileState.progress !== "COMPLETE")) {
        setAlertMsg("Files are still uploading");
        setAlertOpen(true);
        scrollToTop();
        return;
      }
    }

    var imgList: customImg[] = [];
    imgStates?.map((imgState) => {
      imgList.push(
        imgUrls?.find((url) => url.key === imgState.key) ?? {
          url: "",
          key: "",
          name: "",
        }
      );
    });

    var list: customFile[] = [];
    fileStates?.map((fileState) => {
      list.push(
        urls?.find((url) => url.key === fileState.key) ?? {
          url: "",
          key: "",
          name: "",
        }
      );
    });
    const data = {
      title,
      content,
      postType,
      isComment,
      isNotify,
      isAnonymous,
      reminderCheck,
      reminder,
      discussionCheck,
      bloodCheck,
      tutionCheck,
      productCheck,
      techCheck,
      pollCheck,
      options,
      imgList,
      list,
    };
    startTransition(async() => {
      const res = await writePost(data);
      if (res) {
        console.log(res);
        imgStates?.map(async (imgState) => {
          try {
            const res = await edgestore.myPublicFiles.confirmUpload({
              url: imgUrls?.find((url) => url.key === imgState.key)?.url ?? "",
            });
          } catch (err) {
            console.log(err);
          }
        });

        fileStates?.map(async (fileState) => {
          try {
            const res = await edgestore.myPublicFiles.confirmUpload({
              url: urls?.find((url) => url.key === fileState.key)?.url ?? "",
            });
          } catch (err) {
            console.log(err);
          }
        });

          setAlertMsg("Post created successfully");
          setAlertOpen(true);
          setTitle("");
          setContent("");
          setPostType("");
          setIsComment(false);
          setIsNotify(false);
          setIsAnonymous(false);
          setReminderCheck(false);
          setReminder("");
          setDiscussionCheck(false);
          setBloodCheck(false);
          setTutionCheck(false);
          setProductCheck(false);
          setTechCheck(false);
          setPollCheck(false);
          setOptions([""]);
          setImgStates([]);
          setImgUrls([]);
          setFileStates([]);
          seturls([]);
          scrollToTop();
          return;
      } else {
        console.log("error");
      }
    });
    setAlertMsg("Error happened!!");
    setAlertOpen(true);
    scrollToTop()
  };

  const[isPending,startTransition] =  useTransition()

  const [open, setOpen] = React.useState(0);
  const { data: session, status } = useSession();
  const [reminderCheck, setReminderCheck] = React.useState(false);
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [title, setTitle] = useState("");
  const [postType, setPostType] = useState("");
  const [isComment, setIsComment] = useState(false);
  const [isNotify, setIsNotify] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [reminder, setReminder] = useState("");
  const [discussionCheck, setDiscussionCheck] = useState(false);
  const [bloodCheck, setBloodCheck] = useState(false);
  const [tutionCheck, setTutionCheck] = useState(false);
  const [productCheck, setProductCheck] = useState(false);
  const [techCheck, setTechCheck] = useState(false);
  const [pollCheck, setPollCheck] = useState(false);
  const [options, setOptions] = useState([""]);
  const [submit, setSubmit] = useState(false);

  const [imgStates, setImgStates] = useState<FileState[]>([]);
  const { edgestore } = useEdgeStore();
  const [imgUrls, setImgUrls] = useState<customImg[]>();

  function updateImgProgress(key: string, progress: FileState["progress"]) {
    setImgStates((imgStates) => {
      const newFileStates = structuredClone(imgStates);
      const imgState = newFileStates.find((imgState) => imgState.key === key);
      if (imgState) {
        imgState.progress = progress;
      }
      return newFileStates;
    });
  }

  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const [urls, seturls] = useState<customFile[]>();
  function updateFileProgress(key: string, progress: FileState["progress"]) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState('');

  const router = useRouter()

  useEffect(() => {
    if (
      status != "loading" &&
      session &&
      session?.error === "RefreshAccessTokenError"
    ) {
      signOut({ callbackUrl: "/" });
    }
  }, [session, status]);

  if (!session) {
    return <></>;
  }

  return (
    <>
      <Alert open={alertOpen} onClose={() => setAlertOpen(false)}>
        {alertMsg}
      </Alert>
      <div className="grid justify-center w-full">
        <div>
          <Typography variant="h4" color="blue-gray">
            Write a post
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Share your ideas and feelings
          </Typography>
        </div>
        <div>
          <form
            action={formHandler}
            className="mt-8 mb-2 max-w-screen-xl sm:w-200"
          >
            <div className="mb-1 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-1">
                <div className="col-span-1">
                  <Select
                    value={postType}
                    onChange={(e) => {
                      setPostType(e ?? "");
                    }}
                    variant="static"
                    label="Select Division:"
                  >
                    <Option value="General">General</Option>
                    <Option value="Batch">Batch</Option>
                    <Option value="Dept">Dept</Option>
                    <Option value="Batch Dept">Batch Dept</Option>
                  </Select>
                </div>
                <div className="col-span-1">
                  <Checkbox
                    checked={discussionCheck}
                    onClick={() => {
                      setDiscussionCheck((prev) => !prev);
                    }}
                    label={
                      <div>
                        <Typography color="blue-gray" className="font-medium">
                          Discussions
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          Discussions about important topics
                        </Typography>
                      </div>
                    }
                    containerProps={{
                      className: "-mt-5",
                    }}
                  />
                  <Checkbox
                    onClick={() => {
                      setBloodCheck((prev) => !prev);
                    }}
                    checked={bloodCheck}
                    label={
                      <div>
                        <Typography color="blue-gray" className="font-medium">
                          Blood Posts
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          Emergency blood donation posts
                        </Typography>
                      </div>
                    }
                    containerProps={{
                      className: "-mt-5",
                    }}
                  />
                  <Checkbox
                    onClick={() => {
                      setTutionCheck((prev) => !prev);
                    }}
                    checked={tutionCheck}
                    label={
                      <div>
                        <Typography color="blue-gray" className="font-medium">
                          Tution Posts
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          Share and help students who need tution
                        </Typography>
                      </div>
                    }
                    containerProps={{
                      className: "-mt-5",
                    }}
                  />
                  <Checkbox
                    onClick={() => {
                      setProductCheck((prev) => !prev);
                    }}
                    checked={productCheck}
                    label={
                      <div>
                        <Typography color="blue-gray" className="font-medium">
                          Product Posts
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          Polling about important topics
                        </Typography>
                      </div>
                    }
                    containerProps={{
                      className: "-mt-5",
                    }}
                  />
                  <Checkbox
                    onClick={() => {
                      setTechCheck((prev) => !prev);
                    }}
                    checked={techCheck}
                    label={
                      <div>
                        <Typography color="blue-gray" className="font-medium">
                          Tech Talks
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          Tech geeks can share their ideas
                        </Typography>
                      </div>
                    }
                    containerProps={{
                      className: "-mt-5",
                    }}
                  />
                </div>
              </div>

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Title
              </Typography>
              <Input
                required
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                size="lg"
                placeholder="Write a title"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Post content
              </Typography>
              <JoditEditor
                ref={null}
                value={content}
                onBlur={(newContent) => {
                  setContent(newContent);
                }}
              />
              <Checkbox
                label="Poll"
                onClick={() => {
                  setPollCheck((prev) => !prev);
                }}
                checked={pollCheck}
              />
              {pollCheck && (
                <>
                  {options.map((option, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        required
                        key={index}
                        size="lg"
                        placeholder=""
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        value={options[index]}
                        onChange={(e) => {
                          setOptions((prev) => {
                            const updatedOptions = [...prev]; // Create a copy of the options array
                            updatedOptions[index] = e.target.value; // Update the value at the specified index
                            return updatedOptions;
                          });
                        }}
                      />
                      <IconButton
                        key={index + 1}
                        color="red"
                        onClick={() => {
                          setOptions((prev) =>
                            prev.filter((_, i) => i !== index)
                          );
                        }}
                      >
                        <Replace key={index + 2} size={24} />
                      </IconButton>
                    </div>
                  ))}
                  <Button
                    size="sm"
                    color="blue"
                    variant="text"
                    className="rounded-md"
                    onClick={() => {
                      setOptions((prev) => [...prev, ""]);
                    }}
                  >
                    Add option
                  </Button>
                </>
              )}
              <Checkbox
                label={`Reminder Date and time ${reminderCheck ? "on" : "off"}`}
                onClick={() => {
                  setReminderCheck((prev) => !prev);
                }}
                checked={reminderCheck}
              />
              <Input
                required={reminderCheck}
                value={reminder}
                onChange={(e) => {
                  setReminder(e.target.value);
                }}
                disabled={!reminderCheck}
                size="lg"
                placeholder="Select a date for reminder"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                type="datetime-local"
              />
              <div>
                <Checkbox
                  onClick={() => setIsComment((prev) => !prev)}
                  label="Comment Section"
                  checked={isComment}
                />
              </div>
              <div>
                <Checkbox
                  onClick={() => setIsNotify((prev) => !prev)}
                  label="Notify All (initially when posting)"
                    checked={isNotify}
                />
              </div>
              <div>
                <Checkbox
                  onClick={() => setIsAnonymous((prev) => !prev)}
                  label="Post Anonymously"
                checked={isAnonymous}
                />
              </div>

              <MultiImageDropzone
                value={imgStates}
                dropzoneOptions={{
                  maxFiles: 6,
                }}
                onChange={(files) => {
                  setImgStates(files);
                }}
                onFilesAdded={async (addedFiles) => {
                  setImgStates([...imgStates, ...addedFiles]);
                  await Promise.all(
                    addedFiles.map(async (addedFileState) => {
                      try {
                        const res = await edgestore.myPublicFiles.upload({
                          file: addedFileState.file,
                          options: {
                            temporary: true,
                          },
                          onProgressChange: async (progress) => {
                            updateImgProgress(addedFileState.key, progress);
                            if (progress === 100) {
                              await new Promise((resolve) =>
                                setTimeout(resolve, 1000)
                              );
                              updateImgProgress(addedFileState.key, "COMPLETE");
                            }
                          },
                        });
                        setImgUrls((prevurls) => [
                          ...(prevurls ?? []),
                          {
                            url: res.url,
                            key: addedFileState.key,
                            name: addedFileState.file.name,
                          },
                        ]);
                      } catch (err) {
                        updateImgProgress(addedFileState.key, "ERROR");
                      }
                    })
                  );
                }}
              />

              <MultiFileDropzone
                value={fileStates}
                onChange={(files) => {
                  setFileStates(files);
                }}
                dropzoneOptions={{
                    maxFiles: 6,
                }}
                onFilesAdded={async (addedFiles) => {
                  setFileStates([...fileStates, ...addedFiles]);
                  await Promise.all(
                    addedFiles.map(async (addedFileState) => {
                      try {
                        const res = await edgestore.myPublicFiles.upload({
                          file: addedFileState.file,
                          options: {
                            temporary: true,
                          },
                          onProgressChange: async (progress) => {
                            updateFileProgress(addedFileState.key, progress);
                            if (progress === 100) {
                              await new Promise((resolve) =>
                                setTimeout(resolve, 1000)
                              );
                              updateFileProgress(
                                addedFileState.key,
                                "COMPLETE"
                              );
                            }
                          },
                        });
                        seturls((prevurls) => [
                          ...(prevurls ?? []),
                          {
                            url: res.url,
                            key: addedFileState.key,
                            name: addedFileState.file.name,
                          },
                        ]);
                      } catch (err) {
                        updateFileProgress(addedFileState.key, "ERROR");
                      }
                    })
                  );
                }}
              />

              <div className="flex gap-2">
                <Button
                  size="sm"
                  color="red"
                  variant="text"
                  className="rounded-md"
                  onClick={() => router.push('/../')}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  onClick={() => setSubmit(true)}
                  type="submit"
                  className="rounded-md"
                >
                  {isPending?"Posting...":"Post Comment"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default WritePost;
