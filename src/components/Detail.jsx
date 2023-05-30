import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const handlePost = () => {
    window.location.reload();
    navigate(`/post/${id}`);
  };
  const handleClick = () => {
    window.location.href = "http://zalo.me/0939699629";
  };

  const style =
    "px-2 border-b-[1px] border-opacity-20 border-[#59431a] text-[13px] font-bold leading-[30px] text-[#59431a]    py-[5px]";
  return (
    <div className="mt-[200px]">
      <div className="mx-[400px] flex justify-between flex-row">
        <div className="w-[553px] ">
          <img
            src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/isuzusuzukisoctrang/thungkin3.png"
            alt=""
          />
        </div>
        <div className="w-[520px] ">
          <h3 className="font-semibold text-[24px] text-[#59431a] mb-[15px]">
            XE ISUZU FRR90NE4 Thùng Mui bạt
          </h3>
          <h2 className="font-semibold text-[24px] text-[#ff0000] mb-[10px]">
            Liên hệ
          </h2>
          <div className="w-full max-w-[572px] bg-white flex flex-row items-center ">
            <div className="font-bold text-[16px] min-w-[134px] p-2 m-2">
              Khuyến mãi:
            </div>
            <div className="text-[13px] italic">
              * Giảm giá tiền mặt lên đến 30 triệu đồng, bảo hành 3 năm không
              giới hạn km, tặng 12 phiếu bảo dưỡng
            </div>
          </div>
          <div className="w-full max-w-[572px] bg-white flex flex-row items-center  ">
            <div className="font-bold text-[13px] min-w-[134px] p-2 m-2">
              Thông số sản phẩm:
            </div>
            <div>
              <div className="text-[13px] italic">
                * Khoảng sáng gầm xe: 210 mm, Số chỗ ngồi: 03 Chỗ
              </div>
              <div className="text-[13px] italic">
                * Chiều dài cơ sở: 4490mm, Trọng lượng bản thân: 3285kg
              </div>
              <div className="text-[13px] italic">
                * Trọng lượng toàn bộ: 1100 kg, Tải trọng tối đa : 6400KG
              </div>
              <div className="text-[13px] italic">
                * TCỡ lốp xe: Trước/Sau: 11.00R20/11.00R20
              </div>
            </div>
          </div>

          <div className=" mt-10 ">
            <button
              className=" w-[261px] h-[70px] bg-orange-500 rounded-sm hover:bg-orange-600  text-white uppercase mr-5"
              onClick={() => handleClick()}
            >
              Hotline <p>0939699629</p>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[50px] mx-[400px] flex justify-between">
        <div className="h-full w-full max-w-[826px] px-1 rounded-lg border-[1px] border-opacity-30  border-[#59431a] bg-white">
          <div className="mx-2 my-4">
            <h2 className="text-[#59431a] text-[22px] mt-[5px] font-semibold mb-4">
              MÔ TẢ
            </h2>

            <div>
              <h3 className="text-[18px] font-semibold underline">
                {" "}
                Đặc tính kỹ thuật:{" "}
              </h3>
              <p className="mb-4 text-base">
                Xe được nhập khẩu 100% Nhật Bản.
                <br /> Động cơ ISUZU 4HK1E4S ,Phun nhiên liệu điện tử, tăng
                áp-Làm mát bằng khí nạp.
                <br /> Dung tích xi-lanh: 5.193 cc.
                <br /> Công suất cực đại: 205kw/2600 vòng/phút <br /> Kiểu hộp
                số: số sàn – 06 số tiến, 01 số lùi.
                <br /> Mức tiêu hao nhiên liệu: 8.5 Lít/100km <br /> Dung tích
                thùng nhiên liệu: 100 lít.
              </p>

              <h3 className="text-[18px] font-semibold underline">
                {" "}
                Trang thiết bị theo tiêu chuẩn:{" "}
              </h3>
              <p className="mb-4 text-base">
                Trang bị AM-FM, Radio. USB tùy chọn.
                <br /> Đèn pha Halogen tăng cường khả năng chiếu sáng.
                <br /> Kính chiếu hậu có góc quan sát rộng.
                <br /> 01 bánh xe dự phòng, 01 bộ đồ nghề tiêu chuẩn, <br /> Hệ
                thống lái: Trục vít- ê cu bi trợ lực thủy lực
                <br /> Hệ thống phanh trước/ sau: Tang trống phanh dầu mạch kép
                trợ lực chân không.
              </p>
              <h3 className="text-[18px] font-semibold underline">
                {" "}
                Kích thước xe (mm):
              </h3>
              <p className="mb-4 text-base">
                Kích thước tổng thể: 8420x2280x2530mm.
                <br /> Kích thước thùng : 6680 x 2320 x 2060 mm.
              </p>

              <h3 className="text-[18px] font-semibold underline">
                {" "}
                Thông số:
              </h3>
              <p className="mb-4 text-base">
                Khoảng sáng gầm xe: 210 mm
                <br /> Chiều dài cơ sở: 4490mm
                <br /> Trọng lượng toàn bộ: 1100 kg
                <br /> Tải trọng tối đa : 6400KG
                <br /> Trọng lượng bản thân: 3285kg
                <br /> Số chỗ ngồi: 03 Chỗ <br />
                Cỡ lốp xe: Trước/Sau: 11.00R20/11.00R20
              </p>
              <h3 className="text-[18px] font-semibold ">
                {" "}
                Màu sơn: Màu trắng.
              </h3>

              <h3 className="text-[18px] font-semibold underline"> Ghi chú</h3>
              <p className="mb-4 text-base">
                Thông số kỹ thuật và trang bị theo tiêu chuẩn của công ty TNHH
                ISUZU Việt Nam
                <br /> Giá bán trên đã bao gồm 10% thuế VAT và, không bao gồm
                các chi phí khác như: lệ phí trước bạ, lệ phí đăng ký biển số,
                lệ phí kiểm định lưu hành, bảo hiểm...
              </p>

              <h3 className="text-[18px] font-semibold underline">Bảo hành</h3>
              <p className="mb-4 text-base">
                Xe được bảo hành 36 tháng hoặc 100.000km tùy theo điều kiện nào
                đến kể từ ngày giao xe
              </p>
              <h3 className="text-[18px] font-semibold underline">
                Hiệu lực báo giá:
              </h3>
              <p className="mb-4 text-base">
                trong vòng 07 ngày kể từ ngày báo giá.
              </p>

              <div className="border-t-[1px] py-10">
                <h4 className="text-xl mb-3 font-medium   ">
                  Bài viết liên quan
                </h4>
                <div className="grid grid-cols-3 gap-4 ">
                  <div
                    className="flex items-center justify-center flex-col text-center cursor-pointer  "
                    onClick={() => handlePost()}
                  >
                    <img
                      src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/isuzusuzukisoctrang/thungkin5.png"
                      alt=""
                    />

                    <p className="mt-2">XE ISUZU NPR85KE4 Thùng kín</p>
                  </div>

                  <div
                    className="flex items-center justify-center flex-col text-center cursor-pointer "
                    onClick={() => handlePost()}
                  >
                    <img
                      src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/isuzusuzukisoctrang/muibac3.png"
                      alt=""
                    />
                    <p className="mt-2">XE ISUZU QKR QLR77FE4 Thùng Mui bạt</p>
                  </div>
                  <div
                    className="flex items-center justify-center flex-col text-center cursor-pointer "
                    onClick={() => handlePost()}
                  >
                    <img
                      src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/isuzusuzukisoctrang/thungkin3.png"
                      alt=""
                    />
                    <p className="mt-2">XE ISUZU QKR QMR77HE4 Thùng kín</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="w-full max-w-[260px]  box-border mb-6">
            <h3 className="uppercase text-white bg-[#59431a] text-center text-[15px] font-semibold leading-[40px]">
              Danh mục sản phẩm
            </h3>
            <ul className="border-[1px] border-opacity-20 bg-white border-[#59431a] cursor-pointer ">
              <li className={style}>XE ISUZU NPR85KE4 Thùng Mui bạt</li>
              <li className={style}>XE ISUZU QKR QLR77FE4 Thùng kín</li>
              <li className={style}>XE ISUZU QKR QLR77FE4 Thùng kín</li>
              <li className={style}>XE ISUZU NPR85KE4 Thùng kín</li>
            </ul>
          </div>
          <div className="w-full max-w-[260px] bg-white box-border mb-4">
            <h3 className="uppercase text-white bg-[#59431a] text-center text-[15px] font-semibold leading-[40px]">
              video mới nhất
            </h3>
            <div className=" bg-white  mb-3 ">
              <a className="relative" href="/">
                <img
                  className="p-2"
                  src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/isuzusuzukisoctrang/thungkin3.png"
                  alt="img"
                />

                <h3 className="px-2 text-center font-bold text-[15px]">
                  XE ISUZU NPR85KE4 Thùng Mui bạt
                </h3>
              </a>
            </div>
            <div className=" bg-white  mb-3">
              <a className="" href="/">
                <img
                  className="p-2"
                  src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/isuzusuzukisoctrang/thungkin3.png"
                  alt="img"
                />
                <h3 className="px-2 text-center font-bold text-[15px]">
                  XE ISUZU QKR QLR77FE4 Thùng kín
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;