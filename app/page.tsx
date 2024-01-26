import Image from "next/image";
import { getAccessToken, getIdToken } from "@/utils/sessionTokenAccessor";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import Carousel from "./Carousel";
export default async function Home() {
  const token = await getAccessToken();
  return (
    <>
      {/* <Client e={token??''} GET={GET}/> */}
      <Carousel />
    </>
  );
}
