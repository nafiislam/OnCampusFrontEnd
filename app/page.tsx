import { getAccessToken } from "@/utils/sessionTokenAccessor";
import Landing from "@/components/Landing";
export default async function Home() {
  const token = await getAccessToken();
  return (
    <>
      {/* <Client e={token??''} GET={GET}/> */}
      <Landing />
    </>
  );
}
