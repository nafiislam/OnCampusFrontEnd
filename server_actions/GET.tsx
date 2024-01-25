import {getAccessToken, getIdToken} from "@/utils/sessionTokenAccessor";
export default async function GET(path: string) {
  "use server";
  const token = await getAccessToken();
  try{
      const res = await fetch(`http://localhost:5000/api/${path}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: token ? token : "",
        },
        cache: "no-store",
      })
      const data = await res.json();
      return data;
    }
    catch(err){
      console.log(err);
      return null;
    };
}
