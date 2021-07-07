import { Menu } from "../models/Menu.js";
import {MonAn} from "../models/MonAn.js";
let menu = new Menu();
menu.layStorage();
menu.renderMenu("tbodyFood");

window.xoaMonAn =function (maMon) {
    menu.xoaMonAn(maMon)
    menu.renderMenu('tbodyFood');
    // menu.luuStorage();
}

window.chinhSua = function(maMon) {
    /*
    flow : cài đặt onclick hàm này cho button chỉnh sửa trước.
    Sau đó -> lấy thông tin đã có -> gán vào giao diện chỉnh sửa
    */
    //Trong hàm này xử lý load thông tin món ăn của mã này lên giao diện
    let monAn= menu.layThongTinMonAn(maMon);
    if(monAn) {
        //Dom đến các tag input
        let arrInput= document.querySelectorAll('#foodForm input,#foodForm select, #foodForm textarea');
        console.log(arrInput)
        //Loád dữ liệu lên các input của popup modal
        for(let input of arrInput) {
            //{id,className,name,value} = input
            let name=input.getAttribute('name');
            input.value=monAn[name];
        }
    }
}

document.querySelector('#btnCapNhat').onclick = () => {
    let monAnCapNhat= new MonAn();
    let arrInput= document.querySelectorAll('#foodForm input,#foodForm select, #foodForm textarea');
    for(let input of arrInput) {
        let name = input.getAttribute('name');
        let value=input.value;
        monAnCapNhat[name]=value;
    }
    menu.capNhatMonAn(monAnCapNhat.maMon,monAnCapNhat);
    menu.renderMenu('tbodyFood');
    menu.luuStorage();
    document.querySelector('.btn-secondary').click();
}
