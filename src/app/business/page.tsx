"use client";
import * as React from "react";

interface IBusinesPageProps {}

const BusinesPage: React.FunctionComponent<IBusinesPageProps> = (props) => {
  return (
    <div>
      <div className="w-[200px] has-[100px] ">
        <h1 className="text-2xl font-bold pl-5 pt-4 hover:text-orange-400">
          OUR BUSINESS
        </h1>
      </div>
      <div className="flex gap-10 justify-center items-center pt-[200px] xs:flex-col xs:flex-1">
        <div className="mb-14">
          <div className="bg-blue-400 w-[370px] border-2 border-black shadow-md rounded-md">
            <h1 className="text-center font-bold text-lg">
              Wordl-Class Ability to <br />
              Plan and Produce
            </h1>
          </div>
          <div className="text-center pb-5 pt-3 ">
            <h5> Creating Content as a Hit-Maker</h5>
          </div>
          <div className="pl-5">
            <li className="text-start">
              A Powerful planning and production <br />
              staff
            </li>
            <li className="text-start">
              Full Digitalization of film production
            </li>
            <li className="text-start">
              Making Networks through system <br /> construction
            </li>
          </div>
        </div>
        <div className="mb-8">
          <div className="bg-blue-400 w-[370px]">
            <h1 className="text-center font-bold text-lg border-2 border-black shadow-md rounded-md">
              Incomparable Sales and <br /> Development Powers
            </h1>
          </div>
          <div className="text-center pb-5 pt-3">
            <h5>
              Effective Aplication and operation <br />
              of the rich content in our possession
            </h5>
          </div>
          <div className="pl-4">
            <li className="text-startxt-">
              The Top Runner in the Character Business
            </li>
            <li>
              Digitalization of all of our Foremost <br />
              connect
            </li>
            <li className="text-start">
              Dealing with Increasing Multi-Media
              <br />
              and Pioneering new enterprises
            </li>
          </div>
        </div>
        <div>
          <div className="bg-blue-400 w-[370px] ">
            <h1 className="text-center font-bold text-lg  border-2 border-black shadow-md rounded-md">
              Animation that Runs <br />
              Around the World
            </h1>
          </div>
          <div className="text-center pb-3 pt-2">
            <h5>
              Developing the same enterprise in markets <br />
              throughout the World as within Japan
            </h5>
          </div>
          <div className="pl-5">
            <li className="text-start">
              establising a more Powerful sales <br />
              foundation by setting up locally <br />
              incorporated companies
            </li>
            <li className="text-start">
              Revolutionary tecnological development <br />
              strength That Triumphs over powerful <br />
              international competition
            </li>
            <li className="text-start">
              Joint Productions with overseas ventures
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinesPage;
