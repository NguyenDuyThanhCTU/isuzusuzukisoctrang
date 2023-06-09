const Footer = () => {
  return (
    <div className="desktop:px-44 mt-[45px] phone:px-5 phone:bg-[#FDF5F7] phone:pt-5">
      <div className="flex justify-between phone:gap-10 desktop:flex-row phone:flex-col pb-[43px] border-b-2">
        <div className="flex flex-col phone:items-center">
          <div className="ml-15 mb-2 w-[140px] h-[60px]">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/isuzusuzukisoctrang.appspot.com/o/slider%2FLogo.jpg?alt=media&token=fd7ee9aa-71a9-4a66-b9f8-bb232f52097a&_gl=1*1oet3e6*_ga*MTA1MjQ5NTQ0OS4xNjg0NDAxMjc5*_ga_CW55HF8NVT*MTY4NTQwODM5Ni43LjEuMTY4NTQwODQxOC4wLjAuMA.."
              alt="logo"
            />
          </div>
          <div className="flex flex-col font-light text-[16px] font-poppins">
            <a href="/">Xe Tải Sóc Trăng</a>
            <a href="/">Tin tức</a>
            <a href="/">Liên hệ</a>
          </div>
        </div>
        <div className="flex items-center  flex-col">
          <h3 className="font-poppins font-medium text-[18px]  mb-2">
            Từ khóa
          </h3>
          <div className="flex flex-col font-light text-[16px] font-poppins">
            <a href="/">Xe tải Sóc Trăng </a>
            <a href="/">Bán xe trả góp trả trước 25% giá trị xe </a>
          </div>
        </div>
        <div className="flex  flex-col items-center font-poppins ">
          <h3 className="font-poppins font-medium text-[18px] ml-15 mb-2">
            Thông tin liên hệ
          </h3>
          <div className="flex flex-col font-light text-[16px] font-poppins">
            <a href="/">Bán xe ISUZU/SUZUKI/SHINERAY Sóc Trăng</a>
            <a href="/">
              <strong>Địa chỉ:</strong> Quốc lộ 1A, ấp Phụng Hiệp, xã An Hiệp,
              huyện Châu Thành, tỉnh Sóc Trăng.
            </a>
            <a href="/">
              <strong>Điện thoại:</strong> 0939 699 629
            </a>

            <a href="/">
              <strong>Website:</strong> https://isuzusuzukisoctrang.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-[14px] font-poppins font-normal my-[36px]">
        <p className="pr-2 text-center">
          ©2023 All Rights reserved ADS Company
        </p>
        <p className="pl-2 border-l-[1px] border-gray-400 text-center">
          Designed by Thanh Dev ADS Company
        </p>
      </div>
    </div>
  );
};

export default Footer;
