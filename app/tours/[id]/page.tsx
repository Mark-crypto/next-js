import dataImage from "@/images/data.jpg";
import Image from "next/image";
import { FC } from "react";

type PageProps = {
  params: {
    id: string;
  };
};
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

const PageTour = ({ params }: PageProps) => {
  return (
    <>
      <h1 className="text-4xl">ID: {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        <div>
          <Image
            src={dataImage}
            alt="Data image"
            width={192}
            height={192}
            priority={true}
            className="w-48 h-48 object-cover rounded"
          />
          <h2>Local image</h2>
        </div>
        <div>
          <Image
            src={url}
            alt="Remote image"
            width={192}
            height={192}
            priority={true}
            className="w-48 h-48 object-cover rounded"
          />
          <h2>Remote Image</h2>
        </div>
      </section>
    </>
  );
};
export default PageTour;
