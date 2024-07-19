"use client";
import * as React from "react";
import axiosInstance from "@/helper/axiosInstance";
import Image from "next/image";

interface ITeamPageProps {}

const TeamPage: React.FunctionComponent<ITeamPageProps> = (props) => {
  const [tampildata, setTampilData] = React.useState([]);

  React.useEffect(() => {
    dataTampil();
  }, []);

  const dataTampil = async () => {
    try {
      const dataTeam = await axiosInstance.get("/?results=3");
      setTampilData(dataTeam.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="font-bold text-2xl flex items-center pl-10 pt-5">
        <h1>Our Team </h1>
        <div className="flex justify-center gap-6 pl-24 xs:flex-1 xs:flex-col xs:pr-5">
          {tampildata.map((data: any) => (
            <>
              <Image
                width={100}
                height={100}
                src={data.picture.large}
                alt=""
                className="xs:w-16 xs:h-16"
              />
              <p className="font-normal xs:text-sm">
                {data.name.first} {data.name.last}
                <br />
                <p className="text-sm font-normal xs:text-sm">
                  {data.location.country}
                </p>
                <p className="text-sm font-normal xs:text-sm">{data.email}</p>
                <p className="text-sm font-normal xs:text-sm">{data.phone}</p>
                <p className="text-sm font-normal xs:text-sm">{data.gender}</p>
              </p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
