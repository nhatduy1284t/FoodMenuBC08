export class Menu {
   arrMonAn = []; //[{},{}];
   constructor() {}

   themMonAn = (monAn) => {
      // monAn: đối tượng món ăn
      this.arrMonAn.push(monAn);
   };

   layThongTinMonAn =(maMon) => {
       //Tương tự hàm findIndex => hàm find trả về đối tượng (phần tử) trong mảng thoả điều kiên của arrow fucntion
       let monAn= this.arrMonAn.find(objectMonAn => objectMonAn.maMon== maMon);
       if(monAn) {
           return monAn;
       }
       return undefined;
   }

   xoaMonAn = (maMon) => {
      //Muốn xoá 1 phần tử phải tìm ra index của ptử đó
      //    index = 0                      index = 1                    index =2
      //[{maMon:1,tenMon:'ten mon'},{maMon:1,tenMon:'ten mon'},{maMon:1,tenMon:'ten mon'}]
      //findIndex là hàm tìm vị trí cuuả phần tử thoả điều kiện a0rrowFunction (tìm thấy thì trả về vị trí, ngược lại thì -1)
      let index = this.arrMonAn.findIndex((monAn) => monAn.maMon == maMon);
      //Nếu tìm thấy thì trả về vị trí, ko tìm thấy thì trả về -1
      if (index != -1) {
         this.arrMonAn.splice(index, 1);
      }

      this.luuStorage();
   };

   capNhatMonAn = (maMon, monAnCapNhat) => {
       let monAn=this.arrMonAn.find(objectMonAn=> objectMonAn.maMon ==maMon)
       
       if(monAn) {
           for(let keyMonAn in monAn) {
               monAn[keyMonAn]=monAnCapNhat[keyMonAn];
           }
       }
   };


   taoMenu = () => {
      //map là hàm dùng để tạo ra 1 mảng mới từ mảng ban đầu
      //arrMonAn = [{...},{...}]
      let arrResult = this.arrMonAn.map((monAn, index) => {
         //Chạy theo từng phần tử của mảng
         //map tạo ra 1 mảng theo yêu cầu
         //return về thành 1 phần tử của mảng
         return `
          <tr>
            <td>${monAn.maMon}</td>
            <td>${monAn.tenMon}</td>
            <td>${monAn.loaiMon}</td>
            <td>${monAn.giaMon}</td>
            <td>${monAn.khuyenMai}</td>
            <td>${monAn.tinhTrang ? "Còn" : "Hết"}</td>
            <td>
                <button onclick="xoaMonAn('${monAn.maMon}')">Xoá</button>
                <button data-toggle="modal" data-target="#exampleModal" onclick='chinhSua(${monAn.maMon})'>Chỉnh sửa</button>
            </td>
            </tr>
            `;
      });
      return arrResult;
   };

   renderMenu = (idTable) => {
      let arrHtmlMenu = this.taoMenu();
      //forEach(callback) : callback là 2 tham số : phần tử của mảng và chỉ số
      //forEach chạy hết mảng
      let content = "";
      arrHtmlMenu.forEach((htmlTrMonAn, index) => {
         content += htmlTrMonAn;
      });
      document.getElementById(idTable).innerHTML = content;
      // for(let tr of arrHtmlMenu) {
      //     document.getElementById(idTable).innerHTML+=tr;
      // }
   };
   luuStorage() {
      localStorage.setItem("danhSachMonAn", JSON.stringify(this.arrMonAn));
   }

   layStorage() {
      if (localStorage.getItem("danhSachMonAn")) {
         let stringMenu = localStorage.getItem("danhSachMonAn");
         this.arrMonAn = JSON.parse(stringMenu);
      }
      //   let stringMenu = localStorage.getItem("danhSachMonAn");
      //   this.arrMonAn = JSON.parse(stringMenu);
      //   return this.arrMonAn;
   }
}
