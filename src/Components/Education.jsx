import React from "react";
import { GiAchievement } from "react-icons/gi";
import { MdAnimation } from "react-icons/md";

function Education() {
  return (
    <div className="bg-[#161513]">
      <div className="max-w-5xl mx-auto py-8">
        <h2 className="uppercase text-2xl lg:text-4xl text-[#FF8660] text-center font-bold">
          Education
        </h2>

        <div className="grid grid-cols-2 gap-6 mt-12">
          <div className="flex items-center justify-center gap-8">
            <div>
              <GiAchievement size={40} className="text-[#FF8660]" />
            </div>
            <div className="space-y-2">
              <span className="font-medium">2018</span>
              <h3 className="text-xl font-semibold">
                Secondary School Certificate
              </h3>
              <p className="font-normal">Jamalpur Technical Training Center</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8">
            <div>
              <GiAchievement size={40} className="text-[#FF8660]" />
            </div>
            <div className="space-y-2">
              <span className="font-medium">2020 - 2021</span>
              <h3 className="text-xl font-semibold">Deploma In Engineering</h3>
              <p className="font-normal">Graphic Art Institute, Dhaka</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 col-span-2 mt-6">
            <div>
              <MdAnimation size={40} className="text-[#FF8660]" />
            </div>
            <div className="space-y-2">
              <span className="font-medium">Currently Learning_</span>
              <h3 className="text-xl font-semibold">
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
