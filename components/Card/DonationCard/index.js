"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import myImage from "/public/cd2b2162630f5301d85d57e3123d9473.png";
export default function DonationCard({ myImage, date, title, text }) {
  return (
    <>
      <div className="flex flex-row items-center gap-6 mb-3 ">
        <div className="basis-1/5 ">
          <Image
            src={myImage}
            class="w-28 h-28 object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className="basis-4/5 grid grid-rows-3 ">
          <p class="text-2xl font-bold text-mainBlue">{date}</p>
          <p class="text-lg font-bold">{title}</p>{" "}
          <p class="text-lg truncate ...">{text}</p>
        </div>
      </div>
    </>
  );
}
