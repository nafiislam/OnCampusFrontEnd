import Image from "next/image";
import { json } from "stream/consumers";
import Link from "next/link";
import First from "./components/First";
import { set } from "@boiseitguru/cookie-cutter";
import User from "./user/page";
export default async function Home() {
  var token:string = ""
  return (
    <>
      <h1>Home</h1>
      <p>We are at home</p>
      {/* <User/> */}
    </>
  );
}
