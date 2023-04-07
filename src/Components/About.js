import React from "react";
import aboutUS from "../Assets/illustrations/aboutUs.svg";
import ourTeam from "../Assets/illustrations/ourTeam.svg";

const Member = (props) => {
  const { first_name, last_name, email, avatar } = props;

  return (
    <div>
      <div
        className={`card bg-white rounded-3xl card-side p-1 desktop:p-3 shadow-xl w-72`}
      >
        <figure className="w-full">
          <img
            src={avatar}
            className="aspect-square w-36 h-32 rounded-full px-4"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className={`card-title text-2xl px-4`}>
            {first_name} {last_name}
          </h2>
          <p className={`text-lg px-4`}>{email}</p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  document.title = "About | Optic eSports"
  const team = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
    {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 12,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
    },
  ];

  return (
    <div className="py-14 min-h-screen ">
      <div className="w-screen h-fit bg-headerBG bg-auto laptop:bg-cover bg-no-repeat">
        <div className="header w-full h-full space-y-4 bg-black/50 laptop:bg-black/10">
          <div className="py-20">
            <div className="welcome text-white px-4 laptop:px-48 text-6xl font-bold font-inter">
              <p>About us</p>
            </div>
            <div className="desc space-y-6 text-white px-4 laptop:px-48 text-2xl w-full laptop:w-[70%] font-inter">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                a expedita hic ex voluptatum nam possimus temporibus
              </p>

              <p className="uppercase">
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 laptop:px-48 pt-10">
        <p className="text-headingColor text-2xl font-medium font-inter">
          ABOUT OPTIC ESPORTS
        </p>
        <div className="space-y-1">
          <div className="h-1 w-72 bg-logoColor"></div>
          <div className="h-1 w-64 bg-logoColor"></div>
        </div>
        <div className="py-10 flex flex-col tablet:flex-row space-x-0 tablet:space-x-10 space-y-4 tablet:space-y-0">
          <div className="w-full tablet:w-[30%] flex my-auto">
            <img src={aboutUS} alt="about" />
          </div>
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
              <br />
              <br /> Reprehenderit voluptatum hic sed quos, sint quo assumenda
              sunt voluptatem, atque, doloremque quisquam porro veniam facere
              enim a repellendus aut non quae inventore vel ex dolorem. Atque
              inventore iusto error? Quidem sapiente rerum labore sint ducimus,
              optio, veritatis amet id ad debitis corrupti perferendis pariatur
              beatae placeat facere in error repellendus ipsam tempora
              consectetur a magni est non! Eos, nihil!
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 laptop:px-48 pt-10">
        <p className="text-headingColor text-2xl font-medium font-inter">
          VISION & MISSION
        </p>
        <div className="space-y-1">
          <div className="h-1 w-52 bg-logoColor"></div>
          <div className="h-1 w-44 bg-logoColor"></div>
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
              <br />
              <br /> Reprehenderit voluptatum hic sed quos, sint quo assumenda
              sunt voluptatem, atque, doloremque quisquam porro veniam facere
              enim a repellendus aut non quae inventore vel ex dolorem. Atque
              inventore iusto error? Quidem sapiente rerum labore sint ducimus,
              optio, veritatis amet id ad debitis corrupti perferendis pariatur
              beatae placeat facere in error repellendus ipsam tempora
              consectetur a magni est non! Eos, nihil!
            </p>
          </div>
          <div className="w-full tablet:w-[30%] flex my-auto">
            <img src={ourTeam} alt="team" />
          </div>
        </div>
      </div>

      <div className="pt-10">
        <p className="text-headingColor text-2xl font-medium font-inter px-4 laptop:px-48">
          OUR TEAM
        </p>
        <div className="space-y-1 px-4 laptop:px-48">
          <div className="h-1 w-32 bg-logoColor"></div>
          <div className="h-1 w-24 bg-logoColor"></div>
        </div>
        <div className="py-10 px-4 flex flex-col tablet:flex-row space-x-0 tablet:space-x-10 space-y-4 tablet:space-y-0">
          <div className="flex justify-center w-full px-4 laptop:px-48">
          <div className='grid grid-cols-autofit gap-10 w-full items-center'>
            {
                team.map((member) => {
                    return(
                        <div className="box flex justify-center" key={member.id}>
                                <Member first_name={member.first_name} last_name={member.last_name} email={member.email} avatar={member.avatar} />
                        </div>
                    )
                })
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
