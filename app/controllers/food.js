import { MonAn } from "../models/MonAn.js";


let arrMonAn=[];

document.querySelector("#btnThemMon").onclick = () => {
   let monAn = new MonAn();

   let arrTagInput = document.querySelectorAll("form input,form select,form textarea");

   for (let input of arrTagInput) {
      //Mỗi lần duyệt 1 taginput lấy ra name và value
      let { name, value } = input; //bóc tách phần tử
      //Gán giá trị value dựa vào name(thuộc tính) cho object món ăn
      monAn[name] = value;
    //   monAn = { ...monAn, [name]: value };
   }
   //    console.log(monAn['hinhAnh']);
   console.log("món ăn",monAn);
   console.log("arrTagInput", arrTagInput);

   let arrTagOutput = document.querySelectorAll(".list-group-item span,p");

   //    for (let tag of arrTagOutput) {
   //       //Đối với một số thẻ không có thuộc tính dom mà ta thêm vào
   //       let name = tag.getAttribute("name");
   //       if (name == "giaSauKhuyenMai") {
   //          tag.innerHTML = monAn.tinhGiaKhuyenMai();
   //       } else if (name == "loaiMon") {
   //          if (monAn[name] == "loai1") {
   //             tag.innerHTML = "Chay";
   //          } else {
   //             tag.innerHTML = "Mặn";
   //          }
   //       } else if (name == "tinhTrang") {
   //          tag.innerHTML = monAn[name] == "0" ? "Hết" : "Còn";
   //       } else {
   //          tag.innerHTML = monAn[name];
   //       }
   //    }

   //    console.log(monAn.hinhAnh);
   //    document.querySelector("#imgMonAn").src = monAn.hinhAnh;

   //cách 2
   document.querySelector(".noiDungHienThi").innerHTML = monAn.hienThiThongTin();
   

   //Thêm món ăn
   arrMonAn.push(monAn);
   localStorage.setItem('danhSachMonAn',JSON.stringify(arrMonAn));

};

// let sinhVien = {ma:1,ten:'A'};
// sinhVien.ten='B';
// sinhVien['ten']='B';
// sinhVien ={...sinhVien,ten:'B'}
// sinhVien={...sinhVien,['ten']:'B'};
