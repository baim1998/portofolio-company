"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface IListMovieProps {}

const listfilm = [
  {
    judul: "Crayon Shin-chan",
    poster: "/sinchan.jpg",
  },
  {
    judul: "Tokyo Revenger",
    poster: "/tokyo.jpg",
  },
  {
    judul: "Slamdunk Movie",
    poster: "/slamdunk.jpg",
  },
  {
    judul: "Doraemon Movie",
    poster: "/doraemon.jpg",
  },
  {
    judul: "Ninja Hatori",
    poster: "/ninja.jpg",
  },
  {
    judul: "Hero Academya",
    poster: "/hero.jpg",
  },
];

const ListMovie: React.FunctionComponent<IListMovieProps> = (props) => {
  const [flim, setFlim] = React.useState([...listfilm]);
  const dataAsc = () => {
    const sortedMovies = [...flim].sort((a, b) =>
      a.judul.localeCompare(b.judul)
    );
    setFlim(sortedMovies);
  };

  const dataDesc = () => {
    const sortedMovies = [...flim].sort((a, b) =>
      b.judul.localeCompare(a.judul)
    );
    setFlim(sortedMovies);
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-10 pt-10 mb-40">
        <Button
          className="bg-orange-500 shadow-md items-center "
          onClick={dataAsc}
        >
          Sort Ascending Film
        </Button>
        <Button
          className="bg-orange-500 shadow-md items-center "
          onClick={dataDesc}
        >
          Sort Descending Film
        </Button>
      </div>
      <div className="flex justify-center items-center gap-10 pt-4">
        {flim.map((value, index) => (
          <div key={index}>
            <div className="w-44 h-60 relative xs:w-32 xs:h-32">
              <Image layout="fill" src={value.poster} alt="" />
            </div>
            <p className="text-center">{value.judul}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMovie;
