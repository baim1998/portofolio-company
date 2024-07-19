import * as React from "react";
import Image from "next/image";

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
  return (
    <div>
      <div className="w-full min-h-[80vh] flex justify-center  items-center xs:w-full xs:h-[200px] xs:flex xs:items-center xs:justify-center">
        <Image
          width={500}
          height={500}
          src="/toei.png"
          alt=""
          className="xs:w-48"
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
