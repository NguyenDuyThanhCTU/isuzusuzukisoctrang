import { useState } from "react";
import { Link } from "react-scroll";
import Button from "../Item/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const clickedStyle = "font-bold";
  const clickStyle = "font-medium";
  const [click, setClick] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex z-10 fixed top-0 justify-between items-center h-[98px] w-full px-60 bg-[#FDF5F7]">
      <div
        className="text-[18px] font-lato font-normal hover:scale-105 duration-300 w-[440px]  items-center flex  flex-col "
        onClick={() => handleClick()}
      >
        <img
          className="w-1/2"
          src="https://firebasestorage.googleapis.com/v0/b/isuzusuzukisoctrang.appspot.com/o/slider%2FLogo.jpg?alt=media&token=fd7ee9aa-71a9-4a66-b9f8-bb232f52097a&_gl=1*1oet3e6*_ga*MTA1MjQ5NTQ0OS4xNjg0NDAxMjc5*_ga_CW55HF8NVT*MTY4NTQwODM5Ni43LjEuMTY4NTQwODQxOC4wLjAuMA.."
          alt="logo"
        />

        <h3 className="">Xe Tải ISUZU Cẩm Phong Sóc Trăng</h3>
      </div>

      <div className="flex flex-row items-center">
        <ul className=" flex flex-row font-poppins  w-[500px] justify-between relative">
          <Link to="Home" spy={true} smooth={true} duration={500}>
            <button
              className={`${
                click === 0 ? clickedStyle : clickStyle
              } text-gray4a hover:scale-125 transition duration-500 `}
              onClick={() => setClick(0)}
            >
              Trang chủ
            </button>{" "}
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
              } text-gray4a hover:scale-125 transition duration-500 `}
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
    </div>
  );
};

export default Header;
