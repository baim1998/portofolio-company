import * as React from "react";
import { Button } from "@/components/ui/button";

interface IRealesPageProps {}

const RealesPage: React.FunctionComponent<IRealesPageProps> = (props) => {
  return (
    <div>
      <div className="flex justify-center items-center ">
        <Button className="w-[1020px] bg-orange-400 xs:w-32">
          Press Release
        </Button>
      </div>
      <div className="flex justify-center items-center gap-10 mt-5 xs:flex xs:justify-center xs:items-center">
        <p className="">2024/06/13</p>
        <Button className="h-5">PRESS</Button>
        <p className="text-left xs:text-[12px]">
          The all-new anime <br /> Series One Piece
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Button className=" bg-orange-400 mt-5 w-[200px] h-[40px] xs:w-20 xs:h-10 xs:flex xs:justify-center xs:items-center">
          More
        </Button>
      </div>
    </div>
  );
};

export default RealesPage;
