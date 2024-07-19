import * as React from "react";
import Image from "next/image";

interface IFooterPageProps {}

const FooterPage: React.FunctionComponent<IFooterPageProps> = (props) => {
  return (
    <div>
      <div className="flex  mt-16 bg-black gap-10 pt-10 pb-20 justify-center  ">
        <div>
          <h3 className="text-white font-bold list-none ml-16 xs:text-[15px] ">
            COMPANY
            <br />
            <li className="text-white pt-5 font-normal ">message</li>
            <li className="text-white font-normal">Outline</li>
            <li className="text-white font-normal">History</li>
            <li className="text-white font-normal">Animation Production</li>
            <li className="text-white font-normal">Affiliated Companies</li>
            <li className="text-white font-normal">About Pero</li>
          </h3>
        </div>
        <div>
          <h3 className="text-white font-bold gap-5 list-none xs:text-[15px]">
            BUSINES
            <li className="font-normal pt-5">Flim</li>
            <li className="font-normal">Licensing</li>
            <li className="font-normal">Overseas</li>
            <li className="font-normal">Others</li>
          </h3>
        </div>
        <div>
          <h3 className="text-white font-bold list-none xs:text-[15px] xs:pr-14">
            INVESTOR RELATIONS
            <li className="pt-5 font-normal">Management Policy</li>
            <li className="font-normal">Financial Information</li>
            <li className="font-normal">IR Library</li>
            <li className="font-normal">IR Calender</li>
            <li className="font-normal">Stock Information</li>
            <li className="font-normal">Stock Price</li>
          </h3>
        </div>
      </div>
      <div className="bg-slate-600 pt-20 pb-20">
        <div className="flex-1 justify-center text-center">
          <h2 className="text-white xs:text-[12px]">Sitemap</h2>
          <h5 className="text-white bg-transparent xs:text-[13px]">
            © TOEI ANIMATION Co., Ltd. All Rights Reserved.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
