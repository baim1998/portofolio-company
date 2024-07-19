"use client";
import * as React from "react";
import { NavigationMenu, NavigationMenuItem } from "../ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const router = useRouter();
  return (
    <nav>
      <div className="flex items-center w-full bg-white shadow-md justify-between xs:">
        <div className="flex items-center justify-center">
          <Image
            width={100}
            height={100}
            src="/logocompany.png"
            alt=""
            className="xs:w-16"
          ></Image>
          <h1 className="font-sans font-bold text-[20px]  mr-10 xs:w-[200px] xs:h-[100px] xs:text-[12px] xs:pt-10">
            TOEI ANIMATION
          </h1>
        </div>
        <div>
          <NavigationMenu className=" gap-10 list-none mr-56 flex justify-center items-center xs:hidden">
            <NavigationMenuItem>
              <Link href="/" className="font-bold hover:text-orange-600">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/company" className="font-bold hover:text-orange-600">
                Company
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/list" className="font-bold hover:text-orange-600">
                Film List
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/business"
                className="font-bold hover:text-orange-600"
              >
                Business
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/team" className="font-bold hover:text-orange-600">
                Our Team
              </Link>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2 xs:hidden">
          <Image width={15} height={15} src="/tandatanya.png" alt=""></Image>
          <Link href="/testimoni" className="font-bold hover:text-orange-600">
            <h4 className="font-bold hover:text-orange-600">Testimoni</h4>
          </Link>
          <Image width={15} height={15} src="/message.png" alt=""></Image>
          <Link href="/aboutus" className="font-bold hover:text-orange-600">
            <h4 className="mr-5">Contact Us</h4>
          </Link>
        </div>
        <div className="xs:w-7 xs:h-7 xs:pt-2 xs:pr-2 hidden xs:block">
          <Image width={20} height={20} src="/menu.png" alt=""></Image>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
