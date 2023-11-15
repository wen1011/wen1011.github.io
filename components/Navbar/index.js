"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import myImage from "../../public/Rectangle 19.png";

const navigation = [
  { name: "首頁", href: "#" },
  { name: "認識候選人", href: "#" },
  { name: "最新活動", href: "#" },
  { name: "政治議題", href: "#" },
  { name: "小額捐款", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition duration-10 ${
          scrolled ? "lg:bg-white opacity-90 " : "bg-transparent "
        } `}
      >
        <nav
          className={`flex items-center justify-between lg:justify-start py-6 mx-10 sm:mx-6 lg:gap-x-10`}
          aria-label="Global"
        >
          <div className="flex lg:flex-initial ">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lg:h-14 h-10 w-auto "
                viewBox="0 0 41 56"
                fill="none"
              >
                <path
                  d="M10.9105 6.54851C11.7244 5.88302 14.3508 7.54715 16.2005 8.99025C18.0501 10.4334 18.7156 11.1359 19.5667 11.0246C20.4177 10.9133 23.5249 9.10076 26.5587 8.76842C29.5925 8.43608 32.5513 10.0631 33.7355 11.3578C34.9197 12.6525 35.0689 13.3099 35.4004 13.6882C36.0482 14.4279 36.4838 14.3771 37.0654 15.4265C37.7309 16.6284 37.4937 17.8763 37.9035 18.6572C38.6682 20.1124 40.7147 21.962 39.3095 24.8224C38.2568 26.9649 35.6594 27.6465 35.2157 26.0558C34.7721 24.4651 35.1415 22.3073 36.0046 21.691C36.7629 21.1489 37.3485 23.1462 35.9062 25.7356C34.4639 28.3249 33.3653 29.2606 30.9985 29.6688C28.2116 30.1496 26.4482 29.8535 24.2662 28.7807C22.0834 27.7078 21.3066 26.5979 20.5298 25.4145C19.753 24.2303 20.308 23.9351 18.6801 22.5662C17.0523 21.1973 13.8507 18.1619 12.9093 14.9087C11.8534 11.265 10.1385 7.18012 10.9105 6.54851Z"
                  stroke="#3670C7"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M30.9968 29.6694C30.9968 29.6694 31.7365 34.2197 29.11 35.8104C26.4836 37.4011 17.5313 33.3687 19.4915 32.0369C21.4517 30.7051 30.2192 37.4011 33.253 39.7687C36.2868 42.1362 37.7694 45.3338 37.3589 46.5752C36.6748 48.6467 38.7487 49.6276 36.286 51.9023C32.402 55.4903 24.2136 55.1822 15.7793 54.7385C5.05483 54.1739 10.144 52.3097 7.88779 50.4963C5.63158 48.6838 2.43724 45.4652 1.36439 42.2467C0.29154 39.0281 1.80805 35.2546 3.06643 32.7024C4.3248 30.1501 6.65442 27.3381 8.35646 25.8958C10.0585 24.4535 14.3676 20.3654 14.5532 18.1826"
                  stroke="#3670C7"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M8.32715 50.9775C8.32715 50.9775 9.64038 53.9985 15.7814 54.7382"
                  stroke="#3670C7"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M23.3763 9.50847C23.3763 9.50847 23.4013 8.34931 23.7466 7.73303C24.0918 7.11675 23.2537 5.75996 22.7851 4.67501C22.3164 3.59006 22.5632 2.13486 22.5874 1.74041C22.6124 1.34595 22.6858 1.04991 23.0803 1.0007C23.4748 0.951499 24.6831 3.49165 25.7189 4.45318C26.7546 5.41471 28.7027 7.5112 28.9745 8.89219"
                  stroke="#3670C7"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </svg>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 "
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12  ">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-semibold leading-6 text-[#3670C7]  hover:underline underline-offset-8 decoration-4 decoration-yellow-500"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* socialmedia icon  */}
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full  overflow-y-auto  bg-[#6386D1] px-10 py-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className={`-m-1.5 p-1.5  `}>
                <span className="sr-only">Your Company</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-auto"
                  viewBox="0 0 41 56"
                  fill="none"
                >
                  <path
                    d="M10.9105 6.54851C11.7244 5.88302 14.3508 7.54715 16.2005 8.99025C18.0501 10.4334 18.7156 11.1359 19.5667 11.0246C20.4177 10.9133 23.5249 9.10076 26.5587 8.76842C29.5925 8.43608 32.5513 10.0631 33.7355 11.3578C34.9197 12.6525 35.0689 13.3099 35.4004 13.6882C36.0482 14.4279 36.4838 14.3771 37.0654 15.4265C37.7309 16.6284 37.4937 17.8763 37.9035 18.6572C38.6682 20.1124 40.7147 21.962 39.3095 24.8224C38.2568 26.9649 35.6594 27.6465 35.2157 26.0558C34.7721 24.4651 35.1415 22.3073 36.0046 21.691C36.7629 21.1489 37.3485 23.1462 35.9062 25.7356C34.4639 28.3249 33.3653 29.2606 30.9985 29.6688C28.2116 30.1496 26.4482 29.8535 24.2662 28.7807C22.0834 27.7078 21.3066 26.5979 20.5298 25.4145C19.753 24.2303 20.308 23.9351 18.6801 22.5662C17.0523 21.1973 13.8507 18.1619 12.9093 14.9087C11.8534 11.265 10.1385 7.18012 10.9105 6.54851Z"
                    stroke="#3670C7"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M30.9968 29.6694C30.9968 29.6694 31.7365 34.2197 29.11 35.8104C26.4836 37.4011 17.5313 33.3687 19.4915 32.0369C21.4517 30.7051 30.2192 37.4011 33.253 39.7687C36.2868 42.1362 37.7694 45.3338 37.3589 46.5752C36.6748 48.6467 38.7487 49.6276 36.286 51.9023C32.402 55.4903 24.2136 55.1822 15.7793 54.7385C5.05483 54.1739 10.144 52.3097 7.88779 50.4963C5.63158 48.6838 2.43724 45.4652 1.36439 42.2467C0.29154 39.0281 1.80805 35.2546 3.06643 32.7024C4.3248 30.1501 6.65442 27.3381 8.35646 25.8958C10.0585 24.4535 14.3676 20.3654 14.5532 18.1826"
                    stroke="#3670C7"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M8.32715 50.9775C8.32715 50.9775 9.64038 53.9985 15.7814 54.7382"
                    stroke="#3670C7"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M23.3763 9.50847C23.3763 9.50847 23.4013 8.34931 23.7466 7.73303C24.0918 7.11675 23.2537 5.75996 22.7851 4.67501C22.3164 3.59006 22.5632 2.13486 22.5874 1.74041C22.6124 1.34595 22.6858 1.04991 23.0803 1.0007C23.4748 0.951499 24.6831 3.49165 25.7189 4.45318C26.7546 5.41471 28.7027 7.5112 28.9745 8.89219"
                    stroke="#3670C7"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  className="h-7 w-7 text-white stroke-2"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="mt-6 flow-root text-center">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 text-white">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-xl font-medium leading-8  hover:bg-gray-50 hover:text-gray-500"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
