"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import myImage from "/public/Rectangle 19.png";
export default function DonationCard() {
  return (
    <>
      <div className="flex flex-row gap-x-7 p-2">
        <div className="basis-1/4 bg-blue-300 ">
          <Image
            src={myImage}
            class="w-28 h-28 object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className="basis-3/4 bg-red-300 grid grid-rows-3 ">
          <p class="text-2xl font-bold">小額捐款</p>{" "}
          <p class="text-lg font-bold">小額捐款</p>{" "}
          <p class="text-lg ">小額捐款</p>
        </div>
      </div>
    </>
  );
}
