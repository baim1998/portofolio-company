import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { title } from "process";
import { url } from "inspector";

interface ICarouselPageProps {}
const gambar = [
  {
    title: "Kimetsu No Yaiba 1",
    url: "/kimetsu1.jpg",
  },
  {
    title: "Kimetsu No Yaiba 2",
    url: "/kimetsu2.jpg",
  },
  {
    title: "One Piece 1",
    url: "/onepiece1.jpg",
  },
  {
    title: "One Piece 2",
    url: "/onepiece2.jpg",
  },
  {
    title: "Black Clover 1",
    url: "/blackclover1.jpg",
  },
  {
    title: "Black Clover 2",
    url: "/blackclover2.jpg",
  },
];
const CarouselPage: React.FunctionComponent<ICarouselPageProps> = (props) => {
  return (
    <Carousel className="w-full max-w-lg ml-[450px] pt-5">
      <CarouselContent className="-ml-1">
        {gambar.map(({ title, url }, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="h-52 w-40">
                <CardContent className="flex flex-col gap-10 items-center justify-center p-6 ">
                  <div className="w-20 h-20 relativ">
                    <Image width={200} height={200} src={url} alt=""></Image>
                  </div>
                  <div className="">
                    <p className="text-center text-sm ">{title}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselPage;
