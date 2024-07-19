import * as React from "react";

interface IWarningPageProps {}

const WarningPage: React.FunctionComponent<IWarningPageProps> = (props) => {
  return (
    <div
      className="border-4 border-solid border-gray-400 bg-slate-200 mt-5 mb-5 xs:w-full xs:h-20 
    flex justify-center items-center"
    >
      <div>
        <div>
          <p className="pt-5 font-bold text-3xl hover:text-orange-600 xs:text-[15px]  xs:text-center ">
            Important Notices about the fake web-site
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarningPage;
