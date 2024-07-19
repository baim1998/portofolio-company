import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface IContentPageProps {}

const ContentPage: React.FunctionComponent<IContentPageProps> = (props) => {
  return (
    <div>
      <div className="flex mt-10 bg-orange-200 ">
        <div className="relative left-[380px]">
          <p className="pt-36 text-5xl font-bold font-sans">COMPANY</p>
        </div>
        <div className="bg-slate-50 w-[500px] h-[200px] rounded-md mt-52 relative left-36 ">
          <p className="pl-10 text-left pt-14 ">
            Information about TOEI ANIMATION CO., LTD. is as follows.
          </p>
          <Button className="bg-orange-400 ml-10">More </Button>
        </div>
        <div className="pt-10">
          <Image
            width={900}
            height={900}
            src="/kantor2.jpg"
            alt=""
            className="xs:w- xs:h-28"
          ></Image>
        </div>
      </div>
      <div className="flex  bg-orange-200 pt-20">
        <div>
          <Image
            width={900}
            height={900}
            src="/museum onepiece.jpg"
            alt=""
          ></Image>
        </div>
        <div>
          <p className="pl-2 pt-24 font-bold text-5xl">BUSSINESS</p>
        </div>
        <div className="bg-slate-50 w-[600px] h-[200px] mt-36 relative right-[400px] rounded-md">
          <p className="text-left pt-10 pl-10">
            We are expanding our business worldwide,
            <br />
            from the planning and production of animation to licensing business
            and associated business.
          </p>
          <Button className="bg-orange-400 ml-10">More </Button>
        </div>
      </div>
      <div className="flex  bg-orange-200 pb-10">
        <div className="relative left-[380px]">
          <p className="pt-[100px] text-5xl font-bold font-sans">
            INVESTOR <br />
            RELATIONS
          </p>
        </div>
        <div className="bg-slate-50 w-[500px] h-[200px] rounded-md mt-52 relative left-32 ">
          <p className="pl-10 text-left pt-14 ">
            Financial results,and stock information are <br /> as follows.
          </p>
          <Button className="bg-orange-400 ml-10">More </Button>
        </div>
        <div className="pt-10">
          <Image width={900} height={900} src="/investor.jpg" alt=""></Image>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
