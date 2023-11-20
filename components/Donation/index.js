"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import myImage from "../../public/Rectangle 19.png";
import myRwdImage from "../../public/Rectangle 19trans.png";
import DonationCard from "../Card/DonationCard";
export default function Donation() {
  return (
    <>
      <div className="grid grid-flow-col gap-4 justify-stretch mt-20">
        <div className="bg-white h-auto py-16 px-10 grid grid-cols-2 rounded-3xl">
          <div className="w-64 grid grid-rows-3  gap-4">
            <p class="text-2xl font-bold">小額捐款</p>
            <p class="text-xl font-medium  text-[#EF6A23]">
              您的小筆捐款， 是每隻毛孩未來的大大動力！
            </p>
            <p className="text-sm font-normal">
              目前小額贊助總金額：987,655,873
            </p>
          </div>
          <div className="stroke-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="179"
              height="249"
              viewBox="0 0 179 249"
              fill="none"
            >
              <path
                d="M46.0923 26.3944C49.8172 23.3488 61.8373 30.9647 70.3023 37.5691C78.7673 44.1735 81.8129 47.3889 85.7076 46.8795C89.6023 46.37 103.823 38.0748 117.707 36.5539C131.591 35.0329 145.132 42.479 150.552 48.4041C155.971 54.3293 156.654 57.338 158.171 59.0694C161.136 62.4546 163.129 62.222 165.791 67.0249C168.837 72.5255 167.751 78.2365 169.627 81.81C173.126 88.4698 182.492 96.9348 176.061 110.025C171.244 119.83 159.356 122.95 157.326 115.67C155.296 108.39 156.986 98.5148 160.936 95.6944C164.407 93.2136 167.087 102.354 160.486 114.204C153.885 126.055 148.857 130.337 138.026 132.205C125.271 134.405 117.201 133.05 107.215 128.14C97.2256 123.231 93.6705 118.151 90.1155 112.735C86.5604 107.316 89.1003 105.965 81.6505 99.6998C74.2007 93.4351 59.5485 79.5433 55.2403 64.6548C50.4079 47.9796 42.5594 29.285 46.0923 26.3944Z"
                stroke="#FFC4A6"
                stroke-miterlimit="10"
              />
              <path
                d="M138.018 132.205C138.018 132.205 141.404 153.03 129.383 160.31C117.363 167.59 76.3933 149.135 85.3641 143.04C94.3348 136.945 134.46 167.59 148.344 178.425C162.228 189.26 169.014 203.894 167.134 209.575C164.004 219.055 173.495 223.544 162.225 233.955C144.449 250.375 106.975 248.965 68.375 246.935C19.2943 244.351 42.585 235.819 32.2594 227.52C21.9339 219.225 7.31485 204.495 2.40494 189.766C-2.50498 175.036 4.43535 157.766 10.1944 146.086C15.9534 134.405 26.6149 121.536 34.4043 114.935C42.1937 108.335 61.9146 89.6254 62.7637 79.6357"
                stroke="#FFC4A6"
                stroke-miterlimit="10"
              />
              <path
                d="M34.2676 229.725C34.2676 229.725 40.2776 243.55 68.3823 246.935"
                stroke="#FFC4A6"
                stroke-miterlimit="10"
              />
              <path
                d="M103.144 39.9392C103.144 39.9392 103.258 34.6343 104.838 31.8139C106.418 28.9934 102.583 22.7841 100.438 17.8188C98.293 12.8535 99.4226 6.19371 99.5334 4.38848C99.6478 2.58326 99.9837 1.22842 101.789 1.00323C103.594 0.778034 109.124 12.4031 113.864 16.8036C118.605 21.204 127.52 30.7987 128.764 37.1188"
                stroke="#FFC4A6"
                stroke-miterlimit="10"
              />
            </svg>
          </div>
        </div>
        <div className="bg-gray-300 grid grid-cols-1 ">
          <span className="text-3xl font-bold">最新活動</span>
          <div className="grid justify-stretch gap-2 divide-y divide-black">
            <DonationCard />
            <DonationCard />
            <DonationCard />
          </div>
        </div>
      </div>
    </>
  );
}
