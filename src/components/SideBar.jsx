"use client";
import Link from "next/link";
import { FaBell, FaSortDown, FaUser } from "react-icons/fa";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi";
import { useState } from "react";

const SideBar = () => {
  const [showSubRoutes, setShowSubRoutes] = useState(false);
  const [activeRoute, setActiveRoute] = useState("Disscussion Fourm");
  return (
    <div className="min-w-64 max-w-64 w-full border-2 border-blue-600 bg-navy text-white  min-h-screen">
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
