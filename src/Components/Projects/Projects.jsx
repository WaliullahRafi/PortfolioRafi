import React from "react";

function Projects() {
  return (
    <div className="bg-[#161513]">
      <div className="max-w-5xl mx-auto py-12 min-h-screen space-y-6 px-3">
        <h2 className="uppercase text-2xl lg:text-4xl text-[#EEEDEB] text-center font-bold">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url('./assets/1.png')] bg-no-repeat bg-center">
            <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
              <h2 className="mt-4 mb-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                VistaVillas: Residential Home Rental
              </h2>
              <a
                className="mt-2 text-lg tracking-wider text-[#FF8660] uppercase underline"
                href="https://assainment-9-63540.web.app"
              >
                Website
              </a>
            </div>
          </div>

          <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url('./assets/3.png')] bg-no-repeat bg-center">
            <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
              <h2 className="mt-4 mb-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                Block of Website collections
              </h2>
              <a
                className="mt-2 text-lg tracking-wider text-[#FF8660] uppercase underline"
                href="https://book-vibe-store.netlify.app"
              >
                Website
              </a>
            </div>
          </div>

          <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url('./assets/5.png')] bg-no-repeat bg-center">
            <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
              <h2 className="mt-4 mb-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                ShopNest Online <br />
                Shopping Nest
              </h2>
              <a
                className="mt-2 text-lg tracking-wider text-[#FF8660] uppercase underline"
                href="https://assainment-11-c2b9c.web.app"
              >
                Website
              </a>
            </div>
          </div>

          <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url('./assets/4.png')] bg-no-repeat bg-center">
            <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
              <h2 className="mt-4 mb-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                Byte Blaze Tech <br />
                Blog
              </h2>
              <a
                className="mt-2 text-lg tracking-wider text-[#FF8660] uppercase underline"
                href="https://byte-blaze-techblog-123.netlify.app"
              >
                Website
              </a>
            </div>
          </div>

          <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url('./assets/6.png')] bg-no-repeat bg-center">
            <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
              <h2 className="mt-4 mb-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                DocHouse: Medical <br />
                Help Center
              </h2>
              <a
                className="mt-2 text-lg tracking-wider text-[#FF8660] uppercase underline"
                href="https://doc-house-f6840.web.app"
              >
                Website
              </a>
            </div>
          </div>

          <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url('./assets/2.png')] bg-no-repeat bg-center">
            <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
              <h2 className="mt-4  mb-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                ExplorePlusNet: Tourist <br />
                Place Finder
              </h2>
              <a
                className="mt-2 text-lg tracking-wider text-[#FF8660] uppercase underline"
                href="https://assainment-10-7f4f3.web.app"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
