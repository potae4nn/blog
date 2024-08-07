import React from "react";
import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="mt-12">
      <div className="lg:flex grid grid-cols-1">
        <Image
          className="rounded-xl object-none h-[85%] object-top"
          width={200}
          height={200}
          alt="Profile"
          src={
            "https://shc.sut.ac.th/_next/image?url=https%3A%2F%2Fshc.sut.ac.th%2Fapisite%2Fuploads%2FDSC_2553_daa967e12a.jpg&w=640&q=75"
          }
        />
        <div className=" w-full bg-gray-500 lg:ml-6 mx-0 rounded-lg lg:p-10 p-2 ">
          <p>
            My name is{" "}
            <span className="text-2xl font-extrabold text-slate-200">
              Nattapon Chomsunthia
            </span>
          </p>
        </div>
      </div>
      <div className="lg:flex grid grid-cols-1 mt-6">
        <div className=" w-full bg-gray-500 rounded-lg lg:p-10 p-2">
          <p>
            การศึกษาฝึกงาน{" "}
            <span className="text-2xl font-extrabold text-slate-200">
              Nattapon Chomsunthia
            </span>
          </p>
        </div>
      </div>
      <div className="lg:flex grid grid-cols-1 mt-6">
        <div className=" w-full bg-gray-500 rounded-lg lg:p-10 p-2">
          <p>
            ภาษาที่ถนัด{" "}
            <span className="text-2xl font-extrabold text-slate-200">
              Nattapon Chomsunthia
              <div className="grid lg:grid-cols-4 grid-cols-1 mt-6 gap-4">
                <div className=" w-full bg-white rounded-lg lg:p-10 p-2">
                  <div className="flex gap-4 flex-col">
                    <div>
                      <Image width={200} alt="js" height={200} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"} />
                    </div>
                    <div id="progress_container">
                      <div id="progress_container_text">
                        <div id="progress_container_text_align_center">90%</div>
                      </div>
                      <div id="loading_bar"></div>
                    </div>
                    {/* <progress className="progress progress-warning h-4" value="40" max="100"></progress> */}
                  </div>

                </div>
                <div className=" w-full bg-white rounded-lg lg:p-10 p-2">
                  2
                </div>
                <div className=" w-full bg-white rounded-lg lg:p-10 p-2">
                  3
                </div>
                <div className=" w-full bg-white rounded-lg lg:p-10 p-2">
                  4
                </div>
              </div>

            </span>
          </p>
        </div>
      </div>
      <div className="lg:flex grid grid-cols-1 mt-6">
        <div className=" w-full bg-gray-500 rounded-lg lg:p-10 p-2">
          <p>
            ผลงานเด่นๆ{" "}
            <span className="text-2xl font-extrabold text-slate-200">
              Nattapon Chomsunthia
              <div className="grid lg:grid-cols-4 grid-cols-1 mt-6 gap-4">

                <div className=" w-full bg-white rounded-lg lg:p-10 p-2">
                  <progress className="progress progress-warning w-56" value="40" max="100"></progress>
                </div>
                <div className=" w-full bg-white rounded-lg lg:p-10 p-2">
                  2
                </div>
                <div className=" w-full bg-white rounded-lg lg:p-10 p-2">
                  3
                </div>
                <div className=" w-full bg-white rounded-lg lg:p-10 p-2">
                  4
                </div>
              </div>

            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
