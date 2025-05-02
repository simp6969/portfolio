import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Page3() {
  const [projectDetails, setProjectDetails] = useState([
    {
      name: "Canu",
      description: "A painting canvas that you can work with teams",
      thumbnail: "./canu.png",
      hovering: false,
      id: 1,
      link: "https://canu.vercel.app",
    },
    {
      hovering: false,
      thumbnail: "./hediinbee.png",
      name: "hediinbee",
      description: "Money you can use it all (except its digital)",
      id: 2,
      link: "https://hediinbee.vercel.app",
    },
    {
      hovering: false,
      thumbnail: "./mogio.png",
      name: "mogio",
      description: "2 player snake game",
      link: "https://mogio.vercel.app",
      id: 3,
    },
    {
      hovering: false,
      thumbnail: "./todo.png",
      name: "Todo",
      description: "finnaly everyone's favourite",
      id: 4,
      link: "nexy-beta.vercel.app",
    },
  ]);
  const router = useRouter();

  // removed due to error handling
  // function handleMouse(id, state) {
  //   // this.setState(prevState => {
  //   //   const components = prevState.components.slice(0);
  //   //   components.splice(0, 0, element);
  //   //   return { components };
  //   // });
  //   setProjectDetails((prev) => {});
  // }
  return (
    <div
      id="page3"
      className="w-[100vw] bg-[#001220] flex-wrap gap-[25px] h-[100vh] flex justify-center items-center"
    >
      {projectDetails.map((e, key) => {
        return (
          <div
            // onMouseEnter={() => handleMouse(e.id, true)}
            key={key}
            onClick={() => router.push(e.link)}
            className="w-[20%] hover:cursor-pointer projectDisplay duration-300 h-[30%] max-[810px]:w-[90%]  max-[840px]:w-[50%]  flex-col max-[1420px]:w-[30%] p-[20px] text-center rounded-[10px] flex justify-center items-center border-8 border-[#18213a] "
          >
            {!e.hovering ? (
              <>
                <p className="text-[white] text-[30px]">{e.name}</p>
                <p className="text-[#c9c8c8]">{e.description}</p>
              </>
            ) : (
              <img src={e.thumbnail}></img>
            )}
          </div>
        );
      })}
    </div>
  );
}
