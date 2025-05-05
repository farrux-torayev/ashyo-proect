
"use client";
import { IMG_API } from "@/hooks/getEnv";
import Image from "next/image";
import { useParams } from "next/navigation";

const CategoryPage = () => {
  const { categoryId } = useParams();  
 

  return (
    <div className="containers">
      <h1 className="pt-[50px]">Category ID: {categoryId}</h1>
      <Image src={`${IMG_API}/${categoryId}`} alt="alt" width={200} height={200} />
    </div>
  );
};

export default CategoryPage;


