import * as React from "react";
import { getEntryById } from "@/utili/contentful";
import Image from "next/image";
interface IDetialPageProps {
  params: { id: string };
}

const DetialPage: React.FunctionComponent<IDetialPageProps> = async ({
  params,
}) => {
  const CompanyId = await getEntryById(params.id);
  const data = CompanyId?.map((value: any) => {
    const { sys, fields } = value;
    return (
      <div className="flex flex-col justify-center items-center">
        <div key={sys.id}>
          <div>
            <h1 className="font-bold text-2xl pl-[650px] pt-5 xs:pr-[400px] xs:text-sm xs:text-center">
              {fields.title}
            </h1>
          </div>
          <div className="ml-[450px]">
            <Image
              width={500}
              height={500}
              src={`https:${fields.image.fields.file.url}`}
              alt=""
              className="xs:w-[100px] xs:h-[100px] xs:items-center xs:flex xs:justify-center"
            ></Image>
          </div>
          <div>
            <p className="pt-[100px] text-start pr-10 pl-10 xs:text-sm xs:text-center xs:text-balance xs:text-ellipsis">
              {fields.description} <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  });
  return <div>{data}</div>;
};

export default DetialPage;
