import React from "react";

export default function page() {
  return (
    <div className="">
      <div className="absolute pt-[100px]  top-0 left-0 z-[100]  w-full h-full bg-[#FF9A9E]">
        <div class="flex mb-3 items-center space-x-2">
          <div class="group relative flex flex-shrink-0 self-start cursor-pointer">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/29/06/08/woman-1867715_1280.jpg"
              alt=""
              class="h-8 w-8 object-fill rounded-full"
            />
          </div>
          <div class="block">
            <div class="flex justify-center items-center space-x-2">
              <div class="bg-gray-100 w-auto rounded-xl px-2 pb-2">
                <div class="md:text-sm">
                  <Image src={a1} width={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mb-3 items-center space-x-2">
          <div class="group relative flex flex-shrink-0 self-start cursor-pointer">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/29/06/08/woman-1867715_1280.jpg"
              alt=""
              class="h-8 w-8 object-fill rounded-full"
            />
          </div>
          <div class="block">
            <div class="flex justify-center items-center space-x-2">
              <div class="bg-gray-100 w-auto rounded-xl px-2 pb-2">
                <div class="md:text-sm">
                  <Image src={a2} width={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mb-3 items-center space-x-2">
          <div class="group relative flex flex-shrink-0 self-start cursor-pointer">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/29/06/08/woman-1867715_1280.jpg"
              alt=""
              class="h-8 w-8 object-fill rounded-full"
            />
          </div>
          <div class="block">
            <div class="flex justify-center items-center space-x-2">
              <div class="bg-gray-100 w-auto rounded-xl px-2 pb-2">
                <div class="md:text-sm">
                  <span>Cho phép tui được call với bà nha! </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="rounded-full p-4 px-6 bg-[#E0AD82] text-white outline-none"
          onClick={() => {
            sendEmail();
          }}
        >
          Đồng Ý
        </button>
        <br />
        <button
          className={`${
            click ? `bottom-[70%] left-[30%]` : ``
          } absolute z-[200]  mt-3 rounded-full p-4 px-6 bg-[#E0AD82] text-white outline-none`}
          onClick={() => {
            setClick(!click);
          }}
        >
          Không Đồng Ý
        </button>
      </div>
    </div>
  );
}
