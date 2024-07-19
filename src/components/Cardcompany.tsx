"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import * as React from "react";

interface ICardCompanyProps {
  id: string;
  title: string;
  image: string;
}

const CardCompany: React.FunctionComponent<ICardCompanyProps> = ({
  id,
  title,
  image,
}) => {
  const router = useRouter();
  return (
    <div
      key={id}
      className="flex w-60 h-60 shadow-md rounded-md items-center justify-center
    cursor-pointer flex-col xs:w-[100px] xs:h-[100px] xs:pt-5"
      onClick={() => router.push(`/company/${id}`)}
    >
      <div className="xs:w-[0px] xs:h-[50px]">
        <Image
          width={200}
          height={200}
          src={`https:${image}`}
          alt=""
          className="flex justify-center items-center"
        />
      </div>
      <div className="flex justify-center items-center">
        <h3 className="text-lg font-bold fle xs:text-sm ">{title}</h3>
      </div>
    </div>
  );
};

export default CardCompany;
