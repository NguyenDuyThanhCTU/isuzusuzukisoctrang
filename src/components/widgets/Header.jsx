import { useState } from "react";
import { Link } from "react-scroll";
import Button from "../Item/Button";

import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
  const clickedStyle = "font-bold";
  const clickStyle = "font-medium";
  const [click, setClick] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex z-10 fixed top-0 justify-end items-center h-[98px] w-full px-60 bg-[#FDF5F7] ">
      <div className="flex-row items-center phone:hidden desktop:flex ">
        <ul className=" flex flex-row font-poppins  w-[500px] justify-between relative ">
          <Link to="Home" spy={true} smooth={true} duration={500}>
            <button
              className={`${
                click === 0 ? clickedStyle : clickStyle
              } text-gray4a3 px-8  border-blue-100  `}
              onClick={() => setClick(0)}
            >
              Trang chủ
            </button>
          </Link>
          <Link to="firstFeatures" spy={true} smooth={true} duration={500}>
            <button
              className={`${
                click === 1 ? clickedStyle : clickStyle
              } text-gray4a hover:scale-125 transition duration-500 `}
              onClick={() => setClick(1)}
            >
              Các loại xe
            </button>
          </Link>
          <Link to="secondFeatures" spy={true} smooth={true} duration={500}>
            <button
              className={`${
                click === 2 ? clickedStyle : clickStyle
              } text-gray4a hover:scale-125 transition duration-500 `}
              onClick={() => setClick(2)}
            >
              Video giới thiệu
            </button>
          </Link>
          <Link to="subcription" spy={true} smooth={true} duration={500}>
            <button
              className={`${
                click === 3 ? clickedStyle : clickStyle
              }   hover:scale-125 transition duration-500 `}
              onClick={() => setClick(3)}
            >
              Liên hệ
            </button>
          </Link>
          <div
            className={`bg-violetf9 w-[10px] h-1 rounded-xl absolute -bottom-2 ${
              click === 0
                ? "translate-x-[35px] transform  transition duration-1000"
                : click === 1
                ? "translate-x-[170px]  transform  transition duration-1000"
                : click === 2
                ? "translate-x-[330px]  transform  transition duration-1000"
                : click === 3
                ? "translate-x-[470px]  transform  transition duration-1000"
                : null
            } `}
          ></div>
        </ul>
        <div className="ml-[70px]">
          <Button
            text="0939699629"
            style="button-violet h-[50px] w-[154px] hover:bg-[#270bc9]"
          />
        </div>
      </div>
      <div className="desktop:hidden phone:flex items-center justify-between  relative">
        <IoMenuOutline
          className="text-[30px] font-bold mr-10 "
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <div className="">
          <Button
            className=""
            text="0939699629"
            style="button-violet h-[50px] w-[154px] hover:bg-[#270bc9]"
          />
        </div>

        {isOpen && (
          <div className="absolute -bottom-[210px] left-0">
            <ul className=" flex flex-col font-poppins   justify-between relative bg-blue-50 border-blue-100 border">
              <Link to="Home" spy={true} smooth={true} duration={500}>
                <button
                  className={`${
                    click === 0 ? clickedStyle : clickStyle
                  } text-gray4a py-3 px-8 border-b border-blue-100 w-full`}
                  onClick={() => setClick(0)}
                >
                  Trang chủ
                </button>{" "}
              </Link>
              <Link to="firstFeatures" spy={true} smooth={true} duration={500}>
                <button
                  className={`${
                    click === 1 ? clickedStyle : clickStyle
                  } text-gray4a py-3 px-8 border-b border-blue-100  w-full `}
                  onClick={() => setClick(1)}
                >
                  Các loại xe
                </button>
              </Link>
              <Link to="secondFeatures" spy={true} smooth={true} duration={500}>
                <button
                  className={`${
                    click === 2 ? clickedStyle : clickStyle
                  } text-gray4a py-3 px-8 border-b border-blue-100  w-full  `}
                  onClick={() => setClick(2)}
                >
                  Video giới thiệu
                </button>
              </Link>
              <Link to="subcription" spy={true} smooth={true} duration={500}>
                <button
                  className={`${
                    click === 3 ? clickedStyle : clickStyle
                  }   py-3 px-8 w-full `}
                  onClick={() => setClick(3)}
                >
                  Liên hệ
                </button>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
