import React from "react";
import aboutIllustration from "../Assets/illustrations/aboutIllustartion.svg";
import { Link } from "react-router-dom";

import elgato from "../Assets/partners/elgato.png";
import monster from "../Assets/partners/monster.png";
import corsair from "../Assets/partners/corsair.svg";
import amd from "../Assets/partners/amd.png";
import redbull from "../Assets/partners/redbull.png";
import { Icon } from "semantic-ui-react";
import Appointment from "./Appointment";

const Home = () => {
  const partners = [
    {
      name: "elgato",
      icon: elgato,
    },
    {
      name: "monster",
      icon: monster,
    },
    {
      name: "corsair",
      icon: corsair,
    },
    {
      name: "redbull",
      icon: redbull,
    },
    {
      name: "amd",
      icon: amd,
    },
  ];

  const services = [
    {
      name: "Event Management",
      icon: "balance scale",
    },
    {
      name: "GFX/VFX Designing",
      icon: "paint brush",
    },
    {
      name: "Discord Server Developement",
      icon: "discord",
    },
    {
      name: "Event Casting",
      icon: "podcast",
    },
    {
      name: "Team Coaching",
      icon: "superpowers",
    },
    {
      name: "Brand Endorsement",
      icon: "handshake",
    },
  ];

  return (
    <div className="py-14">
      <div className="w-screen h-fit bg-headerBG bg-auto laptop:bg-cover bg-no-repeat">
        <div className="header w-full h-full space-y-4 bg-black/50 laptop:bg-black/10">
          <div className="py-20">
            <div className="welcome text-white px-4 laptop:px-48 text-6xl font-bold font-inter">
              <p>Welcome to Optic eSports</p>
            </div>
            <div className="desc text-white px-4 laptop:px-48 text-2xl w-full laptop:w-[70%] font-inter">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                a expedita hic ex voluptatum nam possimus temporibus
              </p>
            </div>

            <div className="px-4 laptop:px-48 mt-16">
              <button
                className="bg-gradient-to-r from-logoColor to-headingColor text-xl text-white hover:text-white focus:text-white hover:outline hover:outline-offset-2 rounded-lg"
              >
                <Appointment />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 laptop:px-48 pt-10">
        <p className="text-headingColor text-2xl font-medium font-inter">
          WHO ARE WE?
        </p>
        <div className="space-y-1">
          <div className="h-1 w-40 bg-logoColor"></div>
          <div className="h-1 w-32 bg-logoColor"></div>
        </div>
        <div className="py-10 flex flex-col tablet:flex-row space-x-0 tablet:space-x-10 space-y-4 tablet:space-y-0">
          <div className="w-full tablet:w-[70%]">
            <p className="font-inter text-xl text-subHeadingColor mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              quidem harum facilis odio error voluptate, libero rem officiis
              quod tempore, molestias sint voluptatum consequuntur. Hic odit
              omnis fuga exercitationem atque.
              <br />
              <br /> Reprehenderit voluptatum hic sed quos, sint quo assumenda
              sunt voluptatem, atque, doloremque quisquam porro veniam facere
              enim a repellendus aut non quae inventore vel ex dolorem. Atque
              inventore iusto error? Quidem sapiente rerum labore sint ducimus,
              optio, veritatis amet id ad debitis corrupti perferendis pariatur
              beatae placeat facere in error repellendus ipsam tempora
              consectetur a magni est non! Eos, nihil!
            </p>
            <div className="mt-6 laptop:mt-16 flex">
              <Link
                to="/About"
                className="bg-headingColor px-4 py-3 text-white hover:text-white focus:text-white rounded-md text-xl"
              >
                Know more
              </Link>
            </div>
          </div>
          <div className="w-full tablet:w-[30%] flex my-auto">
            <img src={aboutIllustration} alt="about" />
          </div>
        </div>
      </div>

      <div className="px-4 laptop:px-48 pt-10">
        <p className="text-headingColor text-2xl font-medium font-inter">
          OUR SERVICES
        </p>
        <div className="space-y-1">
          <div className="h-1 w-44 bg-logoColor"></div>
          <div className="h-1 w-36 bg-logoColor"></div>
        </div>
        <div className="py-10 px-4 laptop:px-48 flex flex-col tablet:flex-row space-x-0 tablet:space-x-10 space-y-4 tablet:space-y-0">
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-autofit gap-10 px-4 laptop:px-10 mt-10">
              {services.map((service) => {
                return (
                  <div className="grid grid-cols-autofit gap-10" key={service.name}>
                    <div className="bg-white my-4 p-10 rounded-3xl shadow-lg">
                      <div className="iconDiv p-2 rounded-2xl bg-logoColor w-fit flex flex-col items-center">
                        <Icon
                          name={service.icon}
                          size="large"
                          className="text-white"
                        />
                      </div>
                      <p className="text-2xl text-headingColor font-bold mt-6 mb-3">
                        {service.name}
                      </p>
                      <p className="text-xl text-subHeadingColor">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Doloremque inventore, cupiditate culpa accusantium
                        sunt suscipit.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 laptop:px-48 pt-10">
        <p className="text-headingColor text-2xl font-medium font-inter">
          OUR PARTNERS
        </p>
        <div className="space-y-1">
          <div className="h-1 w-44 bg-logoColor"></div>
          <div className="h-1 w-36 bg-logoColor"></div>
        </div>
        <div className="grid grid-cols-autofit gap-10 px-4 laptop:px-10 mt-10">
          {partners.map((partner) => {
            return (
              <div className="grid grid-cols-autofit gap-4" key={partner.name}>
                <img
                  src={partner.icon}
                  alt={partner.name}
                  className="aspect-video w-36"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
