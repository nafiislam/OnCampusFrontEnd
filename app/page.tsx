import MultiSelectUltra from "@/components/Posts/MultiselectUltra";
import ScheduLar from "@/components/Posts/schedular";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12">
      {/* <PostBody /> */}
      {/* <AllPosts />/ */}
      {/* <Landing /> */}
      <MultiSelectUltra />
      <ScheduLar />
      {/* <ScrollSpy /> */}
    </div>
  );
}
