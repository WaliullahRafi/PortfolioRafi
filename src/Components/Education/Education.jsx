import React from "react";
import { GiAchievement } from "react-icons/gi";
import { MdAnimation } from "react-icons/md";

function Education() {
  return (
    <div className="bg-[#161513]">
      <div className="max-w-5xl mx-auto py-8 px-3">
        <h2 className="uppercase text-2xl lg:text-4xl text-[#FF8660] text-center font-bold">
          Education
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          <div className="flex lg:items-center lg:justify-center gap-8">
            <div>
              <GiAchievement size={40} className="text-[#FF8660]" />
            </div>
            <div className="space-y-2 text-zinc-200">
              <span className="font-normal md:font-medium">2019</span>
              <h3 className="text-md md:text-xl font-semibold">
                Secondary School Certificate
              </h3>
              <p className="font-normal">Jamalpur Technical Training Center</p>
            </div>
          </div>

          <div className="flex lg:items-center lg:justify-center gap-8">
            <div>
              <GiAchievement size={40} className="text-[#FF8660]" />
            </div>
            <div className="space-y-2 text-zinc-200">
              <span className="font-normal md:font-medium">2020 - 2021</span>
              <h3 className="text-md md:text-xl font-semibold">Deploma In Engineering</h3>
              <p className="font-normal">Graphic Art Institute, Dhaka</p>
            </div>
          </div>

          <div className="flex lg:items-center lg:justify-center gap-8 lg:col-span-2 mt-6">
            <div>
              <MdAnimation size={40} className="text-[#FF8660]" />
            </div>
            <div className="space-y-2 text-zinc-200">
              <span className="font-normal md:font-medium">Currently Learning_</span>
              <h3 className="text-md md:text-xl font-semibold">
                Animation with Javascript
              </h3>
              <p className="font-normal">
                Advanced Animation with Javascript from scratch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
