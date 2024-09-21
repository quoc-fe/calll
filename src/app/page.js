"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Loading from "../../public/loading.gif";
import a1 from "../../public/1.gif";
import a2 from "../../public/2.gif";
import T from "../../public/typing.gif";
import Countdown from "react-countdown";
import emailjs from "emailjs-com";
import LL from "../../public/IMG_5425 2.JPG";
export default function Home() {
  const [login, setLogin] = useState(false);
  const [lod, setLod] = useState(false);
  const [con, setCon] = useState(false);
  const [click, setClick] = useState(false);
  function sendEmail() {
    //This is important, i'm not sure why, but the email won't send without it
    try {
      emailjs.sendForm(
        "service_ki5ykv2",
        "template_t84piag",
        form.current,
        "ysKcnErGp5FB9GlMt"
      );
    } catch (error) {
      console.log(error);
    }
  }
  const form = useRef();
  const lick = useRef(false);
  useEffect(() => {
    if (login) {
      setTimeout(() => {
        setLod(false);
        setCon(true);
      }, 6000);
    }
  }, [login]);
  return (
    <div className="h-screen flex items-center justify-center">
      <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
        <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div class="relative rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
          {!login && (
            <div className="flex items-end justify-center w-full h-full">
              <div className="w-full text-center ">
                <div className="mb-[100px]">
                  <img src="/halo.gif" />
                </div>
                <button
                  className="w-[90%] rounded-full outline-none py-2 mb-5 text-center text-white bg-gradient-to-r from-[#FF7785] to-[#FF1691]"
                  onClick={() => {
                    setLogin(true);
                    setLod(true);
                  }}
                >
                  LOG IN TO SEE
                </button>
                <p className="text-[#B3B3BF]/80 text-center py-2 border-t text-[13px] w-full">
                  Create by Quoc....
                </p>
              </div>
            </div>
          )}
          <div className={con ? "block" : "hidden"}>
            <div className="absolute pt-[100px]  top-0 left-0 z-[150]  w-full h-full bg-[#FF9A9E]">
              <div class="flex mb-3 items-center space-x-2">
                <div class="group relative flex flex-shrink-0 rounded-full self-start cursor-pointer">
                  <Image src={LL} width={30} className="rounded-full" />
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
                  <Image src={LL} width={30} className="rounded-full" />
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
                  <Image src={LL} width={30} className="rounded-full" />
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
          <div
            className={`${
              lod ? "flex" : "hidden"
            } absolute  items-center top-0 left-0 z-[100]  w-full h-full bg-[#FF9A9E]`}
          >
            <div>
              <Image src={Loading} />
            </div>
          </div>

          <form className="hidden" ref={form}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}
