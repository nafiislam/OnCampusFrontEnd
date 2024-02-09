import { Breadcrumbs } from "@material-tailwind/react";
 
export default function BreadcrumbsDefault() {
  return (
    <Breadcrumbs placeholder={""} className="bg-white">
      <a href="#" className="opacity-60">
        Posts
      </a>
      <a href="#" className="opacity-60">
        General
      </a>
      <a href="#">Blood</a>
    </Breadcrumbs>
  );
}