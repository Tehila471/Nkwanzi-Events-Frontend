/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const Events = () => {
  return (
    <div className="w-full">
      <div className="h-[44px]"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-10">
        <div className="w-full">
          <div className="text-3xl text-gray-800 font-sans font-bold mt-10 mb-6">
            Current Events
          </div>
          <div className="flex flex-row items-center space-x-8 bg-gray-100 rounded p-2">
            <div className="w-1/3 h-[180px] bg-indigo-100">
              <img
                className="object-cover h-[180px] w-full"
                src="/cheers.jpg"
                alt="Instagram Icon"
              ></img>
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-gray-800 text-2xl">Music Concert</div>
              <div className="text-gray-800 text-md flex flex-row items-center justify-between">
                <span>12/12/2012</span>{" "}
                {/* <div className="flex flex-row items-center justify-end">
                  <div className="rounded bg-yellow-600 text-gray-800 py-1 px-4 border-2 border-dotted border-gray-50">
                    Ord. ZMW 100
                  </div>
                  <div className="rounded bg-blue-600 text-gray-200 py-1 px-4 border-2 border-dotted border-gray-50">
                    VIP. ZMW 300
                  </div>
                  <div className="rounded bg-red-600 text-gray-200 py-1 px-4 border-2 border-dotted border-gray-50">
                    VVIP. ZMW 1000
                  </div>
                </div> */}
              </div>
              <div className="text-gray-800 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                tempora quaerat neque nisi nihil, dignissimos accusantium
                repudiandae est et rerum totam ducimus non quos voluptatum
                voluptate, optio perspiciatis ad. Inventore.
              </div>
              <div className="flex flex-row items-center justify-end mt-6 space-x-6 pr-10">
                <div className="bg-indigo-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600">
                  More Info
                </div>
                <div className="bg-purple-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600 flex flex-row items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M7 15h0M2 9.5h20" />
                  </svg>
                  <span>Buy Ticket</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center space-x-8 bg-gray-100 rounded p-2 mt-8">
            <div className="w-1/3 h-[180px] bg-indigo-900">
              <img
                className="object-cover h-[180px] w-full"
                src="/popcorn.png"
                alt="Instagram Icon"
              ></img>
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-gray-800 text-2xl">Music Concert</div>
              <div className="text-gray-800 text-md flex flex-row items-center justify-between">
                <span>12/12/2012</span>{" "}
              </div>
              <div className="text-gray-800 text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam nisi magni molestiae excepturi laborum dolorem ea, totam
                omnis amet beatae fugiat dolores cum delectus praesentium.
                Deleniti sapiente doloribus fugit labore.
              </div>
              <div className="flex flex-row items-center justify-end mt-6 space-x-6 pr-10">
                <div className="bg-indigo-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600">
                  More Info
                </div>
                <div className="bg-purple-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600 flex flex-row items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M7 15h0M2 9.5h20" />
                  </svg>
                  <span>Buy Ticket</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-8 bg-gray-100 rounded p-2 mt-8">
            <div className="w-1/3 h-[180px] bg-indigo-900">
              <img
                className="object-cover h-[180px] w-full"
                src="/poster.jpg"
                alt="Instagram Icon"
              ></img>
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-gray-800 text-2xl">Music Concert</div>
              <div className="text-gray-800 text-md flex flex-row items-center justify-between">
                <span>12/12/2012</span>{" "}
              </div>
              <div className="text-gray-800 text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum deserunt deleniti accusantium, unde vel animi
                exercitationem iure modi nesciunt saepe repellendus,
                necessitatibus laboriosam itaque earum aliquam fuga inventore
                optio odio.
              </div>
              <div className="flex flex-row items-center justify-end mt-6 space-x-6 pr-10">
                <div className="bg-indigo-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600">
                  More Info
                </div>
                <div className="bg-purple-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600 flex flex-row items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M7 15h0M2 9.5h20" />
                  </svg>
                  <span>Buy Ticket</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-8 bg-gray-100 rounded p-2 mt-8">
            <div className="w-1/3 h-[180px] bg-indigo-900">
              <img
                className="object-cover h-[180px] w-full"
                src="/sunset.jpg"
                alt="Instagram Icon"
              ></img>
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-gray-800 text-2xl">Music Concert</div>
              <div className="text-gray-800 text-md flex flex-row items-center justify-between">
                <span>12/12/2012</span>{" "}
              </div>
              <div className="text-gray-800 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                atque, dolores molestiae magnam obcaecati iusto nesciunt beatae
                enim iste nihil, nulla nostrum eveniet eos corrupti. Vitae dolor
                commodi sit atque?
              </div>
              <div className="flex flex-row items-center justify-end mt-6 space-x-6 pr-10">
                <div className="bg-indigo-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600">
                  More Info
                </div>
                <div className="bg-purple-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600 flex flex-row items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M7 15h0M2 9.5h20" />
                  </svg>
                  <span>Buy Ticket</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-8 bg-gray-100 rounded p-2 mt-8">
            <div className="w-1/3 h-[180px] bg-indigo-900">
              <img
                className="object-cover h-[180px] w-full"
                src="/tango.png"
                alt="Instagram Icon"
              ></img>
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-gray-800 text-2xl">Music Concert</div>
              <div className="text-gray-800 text-md flex flex-row items-center justify-between">
                <span>12/12/2012</span>{" "}
              </div>
              <div className="text-gray-800 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
                enim praesentium earum vero accusantium sapiente eum repudiandae
                suscipit ipsam voluptatem ad, laboriosam tempore beatae illo
                magni necessitatibus pariatur! Facere, quasi?
              </div>
              <div className="flex flex-row items-center justify-end mt-6 space-x-6 pr-10">
                <div className="bg-indigo-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600">
                  More Info
                </div>
                <div className="bg-purple-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600 flex flex-row items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M7 15h0M2 9.5h20" />
                  </svg>
                  <span>Buy Ticket</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="text-3xl text-gray-800 font-sans font-bold mt-10 mb-6">
            UpComing Events
          </div>
          <div className="flex flex-row items-center space-x-8 bg-gray-100 rounded p-2">
            <div className="w-1/3 h-[180px] bg-indigo-900">
              <img
                className="object-cover h-[180px] w-full"
                src="/musician.jpg"
                alt="Instagram Icon"
              ></img>
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-gray-800 text-2xl">Music Concert</div>
              <div className="text-gray-800 text-md flex flex-row items-center justify-between">
                <span>12/12/2012</span>{" "}
              </div>
              <div className="text-gray-800 text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                libero eum accusantium ad asperiores molestias voluptate est.
                Magni aperiam natus commodi quo, voluptates a. Vitae officiis ex
                aliquam perferendis deleniti.
              </div>
              <div className="flex flex-row items-center justify-end mt-6 space-x-6 pr-10">
                <div className="bg-indigo-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600">
                  More Info
                </div>
                <div className="bg-purple-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600 flex flex-row items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M7 15h0M2 9.5h20" />
                  </svg>
                  <span>Buy Ticket</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-8 bg-gray-100 rounded p-2 mt-8">
            <div className="w-1/3 h-[180px] bg-indigo-900">
              <img
                className="object-cover h-[180px] w-full"
                src="/label.png"
                alt="Instagram Icon"
              ></img>
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-gray-800 text-2xl">Music Concert</div>
              <div className="text-gray-800 text-md flex flex-row items-center justify-between">
                <span>12/12/2012</span>{" "}
              </div>
              <div className="text-gray-800 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                quidem, amet saepe magnam ullam corrupti, voluptate laborum,
                odio reiciendis tempore voluptatem vel optio consequuntur sint
                natus similique itaque. Maiores, quibusdam.
              </div>
              <div className="flex flex-row items-center justify-end mt-6 space-x-6 pr-10">
                <div className="bg-indigo-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600">
                  More Info
                </div>
                <div className="bg-purple-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600 flex flex-row items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M7 15h0M2 9.5h20" />
                  </svg>
                  <span>Buy Ticket</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-8 bg-gray-100 rounded p-2 mt-8">
            <div className="w-1/3 h-[180px] bg-indigo-900">
              <img
                className="object-cover h-[180px] w-full"
                src="/fruit.png"
                alt="Instagram Icon"
              ></img>
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-gray-800 text-2xl">Music Concert</div>
              <div className="text-gray-800 text-md flex flex-row items-center justify-between">
                <span>12/12/2012</span>{" "}
              </div>
              <div className="text-gray-800 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                eaque reprehenderit, eligendi ullam quibusdam sint sit
                consequatur accusamus hic nisi consequuntur ab a nihil eius
                laboriosam cumque corrupti deserunt omnis?
              </div>
              <div className="flex flex-row items-center justify-end mt-6 space-x-6 pr-10">
                <div className="bg-indigo-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600">
                  More Info
                </div>
                <div className="bg-purple-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600 flex flex-row items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M7 15h0M2 9.5h20" />
                  </svg>
                  <span>Buy Ticket</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-8 bg-gray-100 rounded p-2 mt-8">
            <div className="w-1/3 h-[180px] bg-indigo-900">
              <img
                className="object-cover h-[180px] w-full"
                src="/digital.png"
                alt="Instagram Icon"
              ></img>
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-gray-800 text-2xl">Music Concert</div>
              <div className="text-gray-800 text-md flex flex-row items-center justify-between">
                <span>12/12/2012</span>{" "}
              </div>
              <div className="text-gray-800 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                ipsam explicabo sed velit fugit assumenda nobis doloribus
                eveniet soluta est. Minus possimus aliquid quis molestias
                reiciendis dicta sit beatae libero?
              </div>
              <div className="flex flex-row items-center justify-end mt-6 space-x-6 pr-10">
                <div className="bg-indigo-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600">
                  More Info
                </div>
                <div className="bg-purple-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600 flex flex-row items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M7 15h0M2 9.5h20" />
                  </svg>
                  <span>Buy Ticket</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-8 bg-gray-100 rounded p-2 mt-8">
            <div className="w-1/3 h-[180px] bg-indigo-900">
              <img
                className="object-cover h-[180px] w-full"
                src="/couple.jpg"
                alt="Instagram Icon"
              ></img>
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-gray-800 text-2xl">Music Concert</div>
              <div className="text-gray-800 text-md flex flex-row items-center justify-between">
                <span>12/12/2012</span>{" "}
              </div>
              <div className="text-gray-800 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                ipsam praesentium dolorum similique laboriosam. Consequatur
                aperiam temporibus aut aspernatur vel vero, ex beatae maxime
                incidunt, harum aliquam sunt? Tenetur, consectetur?
              </div>
              <div className="flex flex-row items-center justify-end mt-6 space-x-6 pr-10">
                <div className="bg-indigo-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600">
                  More Info
                </div>
                <div className="bg-purple-900 rounded full py-2 px-6 text-gray-100 hover:bg-indigo-600 flex flex-row items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M7 15h0M2 9.5h20" />
                  </svg>
                  <span>Buy Ticket</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
