import {getAccessToken, getIdToken} from "@/utils/sessionTokenAccessor";
export default async function POST(path: string, body: any) {
  "use server";
  const token = await getAccessToken();
  try{
    const res = await fetch(`http://localhost:5000/api/${path}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: token ? token : "",
      },
        body: JSON.stringify(body),
        cache: "no-store",
    })
    const data = await res.json();
    console.log(data);
    return data;
  }
  catch(err){
      console.log(err);
      return null;
  };
}
