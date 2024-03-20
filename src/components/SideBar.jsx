"use client";
import Link from "next/link";
import { FaBell, FaCaretRight, FaSortDown, FaUser } from "react-icons/fa";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi";
import { useState } from "react";

const SideBar = () => {
  const [showSubRoutes, setShowSubRoutes] = useState(false);
  const [activeRoute, setActiveRoute] = useState("Disscussion Fourm");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex">
      <div>
        <div
          className={`min-w-64 max-md:fixed duration-300 max-w-64 w-full bg-navy text-white  min-h-screen ${
            isSidebarOpen ? "ml-0" : "-ml-64"
          }`}
        >
          <div className="">
            <div className="flex items-center  justify-center min-h-24">
              <div className="flex items-center gap-2 flex-1">
                <div className="rounded-[50%] overflow-hidden cursor-pointer hover:bg-navy-dark p-2 duration-300 active:scale-95">
                  <FaUser className="text-3xl" />
                </div>
                <h3 className="text-xl">Hello, User</h3>
              </div>
              <div className="relative after:content-[''] after:absolute after:size-3 after:bg-red-600 after:top-2 after:right-2  after:rounded-[50%] cursor-pointer hover:bg-navy-dark p-2 duration-300 active:scale-95 rounded-[50%]">
                <FaBell className="text-3xl" />
              </div>
            </div>
            <hr className="pb-2" />
            <div>
              <div>
                {routes?.map(route => (
                  <div key={route.name}>
                    <Link
                      className={`flex gap-2 items-center text-xl p-2 pr-0 hover:bg-navy-dark duration-300 ${
                        activeRoute === route.name && "bg-navy-dark"
                      } `}
                      href={route.path}
                      onClick={() => {
                        setActiveRoute(route.name);
                        if (route.subRoutes) {
                          setShowSubRoutes(show => !show);
                        }
                      }}
                    >
                      <route.icon className="text-2xl" /> {route.name}{" "}
                      {route.subRoutes && <FaSortDown className="-mt-2" />}
                    </Link>
                    {route.subRoutes &&
                      route.subRoutes.map(subRoute => (
                        <Link
                          key={subRoute.name + "unique"}
                          className={` gap-2 items-center text-xl px-6 py-2 hover:bg-navy-dark duration-300  ${
                            activeRoute === subRoute.name && "bg-navy-dark"
                          } ${showSubRoutes ? "flex" : "hidden"}`}
                          onClick={() => setActiveRoute(subRoute.name)}
                          href={subRoute.path}
                        >
                          <subRoute.icon className="text-2xl" /> {subRoute.name}
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`min-w-64 max-md:hidden max-w-64 w-full duration-300 bg-green-600 ${
            isSidebarOpen ? "ml-0" : "-ml-64"
          }`}
        ></div>
      </div>

      <div
        className={`min-h-screen min-w-4 flex items-center justify-center duration-300 bg-gray-200 max-md:absolute ${
          isSidebarOpen ? "max-md:ml-64" : "max-md:ml-0"
        } `}
      >
        <div
          onClick={() => setIsSidebarOpen(open => !open)}
          className="py-10 bg-navy hover:bg-navy-dark duration-300 cursor-pointer"
        >
          <FaCaretRight className="text-white" />
        </div>
      </div>
    </div>
  );
};

const routes = [
  {
    name: "Disscussion Fourm",
    path: "/",
    icon: BiSolidMessageAltDetail,
    subRoutes: [
      {
        name: "Market Stories 2",
        path: "/",
        icon: HiCurrencyDollar,
      },
      {
        name: "Sentiment 2",
        path: "/",
        icon: BiSolidMessageAltDetail,
      },
      {
        name: "Market 2",
        path: "/",
        icon: HiCurrencyDollar,
      },
    ],
  },
  {
    name: "Market Stories",
    path: "/",
    icon: HiCurrencyDollar,
  },
  {
    name: "Sentiment",
    path: "/",
    icon: BiSolidMessageAltDetail,
  },
  {
    name: "Market",
    path: "/",
    icon: HiCurrencyDollar,
  },
  {
    name: "Sector",
    path: "/",
    icon: BiSolidMessageAltDetail,
  },
  {
    name: "Watchlist",
    path: "/",
    icon: HiCurrencyDollar,
  },
  {
    name: "Events",
    path: "/",
    icon: BiSolidMessageAltDetail,
  },
  {
    name: "News/Interview",
    path: "/",
    icon: HiCurrencyDollar,
  },
];

export default SideBar;
