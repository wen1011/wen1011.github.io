"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "候選人主張", href: "#" },
  { name: "最新活動", href: "#" },
  { name: "政治議題", href: "#" },
  { name: "小額捐款", href: "#" },
  { name: "民眾服務信箱", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between py-4 px-6 lg:mx-24"
          aria-label="Global"
        >
          <div className="flex  lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">喵莉涵</span>
            </a>
            <a
              href="#"
              className="hidden lg:flex -m-3 block rounded-lg px-3 py-2.5 -base font-bold text-4xl leading-10 text-gray-900 hover:bg-gray-50"
            >
              喵莉涵
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
                className="text-xl font-bold leading-7 text-gray-950  hover:underline underline-offset-8 decoration-4 decoration-yellow-500"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* socialmedia icon  */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-Gray-950 hover:bg-yellow-400 rounded-full"
              aria-hidden="true"
            >
              <path
                d="M13.0281 2.001C13.7578 1.9982 14.4876 2.00554 15.2171 2.023L15.4111 2.03C15.6351 2.038 15.8561 2.048 16.1231 2.06C17.1871 2.11 17.9131 2.278 18.5501 2.525C19.2101 2.779 19.7661 3.123 20.3221 3.679C20.8305 4.17861 21.2239 4.78295 21.4751 5.45C21.7221 6.087 21.8901 6.814 21.9401 7.878C21.9521 8.144 21.9621 8.366 21.9701 8.59L21.9761 8.784C21.9939 9.51319 22.0015 10.2426 21.9991 10.972L22.0001 11.718V13.028C22.0026 13.7577 21.9949 14.4875 21.9771 15.217L21.9711 15.411C21.9631 15.635 21.9531 15.856 21.9411 16.123C21.8911 17.187 21.7211 17.913 21.4751 18.55C21.2247 19.2178 20.8312 19.8226 20.3221 20.322C19.8221 20.8303 19.2174 21.2238 18.5501 21.475C17.9131 21.722 17.1871 21.89 16.1231 21.94C15.8561 21.952 15.6351 21.962 15.4111 21.97L15.2171 21.976C14.4876 21.9938 13.7578 22.0014 13.0281 21.999L12.2821 22H10.9731C10.2434 22.0025 9.51361 21.9948 8.78409 21.977L8.59009 21.971C8.3527 21.9624 8.11536 21.9524 7.87809 21.941C6.81409 21.891 6.08809 21.721 5.45009 21.475C4.78277 21.2243 4.17833 20.8308 3.67909 20.322C3.17013 19.8223 2.77631 19.2176 2.52509 18.55C2.27809 17.913 2.11009 17.187 2.06009 16.123C2.04895 15.8857 2.03895 15.6484 2.03009 15.411L2.02509 15.217C2.00665 14.4875 1.99832 13.7577 2.00009 13.028V10.972C1.9973 10.2426 2.00463 9.5132 2.02209 8.784L2.02909 8.59C2.03709 8.366 2.04709 8.144 2.05909 7.878C2.10909 6.813 2.27709 6.088 2.52409 5.45C2.77546 4.78262 3.17005 4.17845 3.68009 3.68C4.17898 3.17075 4.78305 2.77657 5.45009 2.525C6.08809 2.278 6.81309 2.11 7.87809 2.06L8.59009 2.03L8.78409 2.025C9.51327 2.00657 10.2427 1.99824 10.9721 2L13.0281 2.001ZM12.0001 7.001C11.3376 6.99163 10.6798 7.11403 10.0651 7.36107C9.45029 7.60811 8.89074 7.97488 8.41893 8.44006C7.94713 8.90523 7.57249 9.45954 7.31678 10.0708C7.06106 10.682 6.92938 11.3379 6.92938 12.0005C6.92938 12.6631 7.06106 13.319 7.31678 13.9302C7.57249 14.5415 7.94713 15.0958 8.41893 15.5609C8.89074 16.0261 9.45029 16.3929 10.0651 16.6399C10.6798 16.887 11.3376 17.0094 12.0001 17C13.3262 17 14.5979 16.4732 15.5356 15.5355C16.4733 14.5979 17.0001 13.3261 17.0001 12C17.0001 10.6739 16.4733 9.40215 15.5356 8.46447C14.5979 7.52679 13.3262 7.001 12.0001 7.001ZM12.0001 9.001C12.3986 8.99366 12.7946 9.0658 13.1649 9.21321C13.5352 9.36062 13.8724 9.58034 14.1569 9.85955C14.4413 10.1387 14.6673 10.4718 14.8215 10.8393C14.9758 11.2069 15.0553 11.6014 15.0554 12C15.0554 12.3986 14.9761 12.7932 14.8219 13.1607C14.6678 13.5283 14.4419 13.8614 14.1576 14.1407C13.8732 14.42 13.5361 14.6399 13.1658 14.7874C12.7955 14.9349 12.3996 15.0072 12.0011 15C11.2054 15 10.4424 14.6839 9.87977 14.1213C9.31716 13.5587 9.00109 12.7957 9.00109 12C9.00109 11.2044 9.31716 10.4413 9.87977 9.87868C10.4424 9.31607 11.2054 9 12.0011 9L12.0001 9.001ZM17.2501 5.501C16.9275 5.51391 16.6224 5.65115 16.3987 5.88397C16.175 6.11679 16.0501 6.42714 16.0501 6.75C16.0501 7.07287 16.175 7.38321 16.3987 7.61603C16.6224 7.84885 16.9275 7.98609 17.2501 7.999C17.5816 7.999 17.8996 7.86731 18.134 7.63288C18.3684 7.39846 18.5001 7.08052 18.5001 6.749C18.5001 6.41748 18.3684 6.09954 18.134 5.86512C17.8996 5.6307 17.5816 5.499 17.2501 5.499V5.501Z"
                fill="#262626"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-Gray-950 hover:bg-yellow-400 rounded-full"
              aria-hidden="true"
            >
              <path
                d="M12.001 2C6.47798 2 2.00098 6.477 2.00098 12C2.00098 16.991 5.65798 21.128 10.439 21.878V14.891H7.89898V12H10.439V9.797C10.439 7.291 11.931 5.907 14.216 5.907C15.31 5.907 16.454 6.102 16.454 6.102V8.562H15.194C13.951 8.562 13.564 9.333 13.564 10.124V12H16.337L15.894 14.89H13.564V21.878C18.343 21.128 22 16.991 22 12C22 6.477 17.524 2 12.001 2Z"
                fill="#262626"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-Gray-950 hover:bg-yellow-400 rounded-full"
              aria-hidden="true"
            >
              <path
                d="M12.244 4C12.778 4.003 14.114 4.016 15.534 4.073L16.038 4.095C17.467 4.162 18.895 4.278 19.604 4.475C20.549 4.741 21.291 5.515 21.542 6.497C21.942 8.057 21.992 11.099 21.998 11.836L21.999 11.988V12.162C21.992 12.899 21.942 15.942 21.542 17.501C21.288 18.486 20.545 19.261 19.604 19.523C18.895 19.72 17.467 19.836 16.038 19.903L15.534 19.926C14.114 19.982 12.778 19.996 12.244 19.998L12.009 19.999H11.754C10.624 19.992 5.898 19.941 4.394 19.523C3.45 19.257 2.707 18.483 2.456 17.501C2.056 15.941 2.006 12.899 2 12.162V11.836C2.006 11.099 2.056 8.056 2.456 6.497C2.71 5.512 3.453 4.737 4.395 4.476C5.898 4.057 10.625 4.006 11.755 4H12.244ZM9.999 8.5V15.5L15.999 12L9.999 8.5Z"
                fill="#262626"
              />
            </svg>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl "
          aria-hidden="true"
        >
          {/* <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          /> */}
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-left">
            <h1 className=" font-['Mantou_Sans'] font-normal tracking-tight text-gray-900 sm:text-8xl">
              台灣的明天
            </h1>
            <h1 className="font-['Mantou_Sans'] font-normal tracking-tight text-gray-900 sm:text-9xl">
              喵先鋪路
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
