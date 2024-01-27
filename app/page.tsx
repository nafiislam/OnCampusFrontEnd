import Image from "next/image";
import {getAccessToken, getIdToken} from "@/utils/sessionTokenAccessor";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import Carousel from "./Carousel";
import AllPosts from "@/components/AllPosts";
export default async function Home() {
  const token = await getAccessToken();
  return (
    <>
    <AllPosts/>
      {/* <Client e={token??''} GET={GET}/> */}
      {/* <Carousel/> */}
    </>
  );
}
