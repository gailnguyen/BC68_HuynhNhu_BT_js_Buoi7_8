let arrSoN = [];

document.getElementById("btnThemSo").onclick = function (event) {
  let soN = document.getElementById("soN").value * 1;
  arrSoN.push(soN);
  console.log(arrSoN);

  let chuoiSoN = document.createElement("span");
  chuoiSoN.className = "mt-3 text-dark";
  // chuoiSoN.innerHTML = arrSoN;
  for (let i = 0; i < arrSoN.length; i++) {
    chuoiSoN.innerHTML = `${arrSoN[i]},`;
    document.getElementById("chuoi").appendChild(chuoiSoN);
  }
};

// 1. Tổng số dương
document.getElementById("btnTongSoDuong").onclick = function (event) {
  //   console.log("nút tính tổng các số dương");
  let tongSoDuong = 0;
  for (let number of arrSoN) {
    // console.log(number);
    if (number > 0) {
      tongSoDuong += number;
    }
  }
  console.log(tongSoDuong);
  document.getElementById(
    "ketQua"
  ).innerHTML = `1. Tổng các số dương trong chuỗi trên là: ${tongSoDuong}`;
};

// 2. Đếm số dương
document.getElementById("btnDemSoDuong").onclick = function (event) {
  let count = 0;
  for (let number of arrSoN) {
    if (number > 0) {
      count++;
    }
  }
  console.log(count);
  document.getElementById(
    "ketQua"
  ).innerHTML = `2. Số số dương trong chuỗi trên là: ${count}`;
};

// 3. Tìm số nhỏ nhất trong mảng
document.getElementById("btnTimSoNhoNhat").onclick = function () {
  let soNhoNhat = arrSoN[0];
  //   console.log(soNhoNhat);
  for (let number of arrSoN) {
    if (number < soNhoNhat) {
      soNhoNhat = number;
    }
  }
  console.log(soNhoNhat);
  document.getElementById(
    "ketQua"
  ).innerHTML = `3. Số nhỏ nhất trong mảng là: ${soNhoNhat}`;
};

// 4. Tìm số dương nhỏ nhất trong mảng
document.getElementById("btnTimSoDuongNhoNhat").onclick = function () {
  let soDuongNhoNhat = arrSoN[0];
  for (let number of arrSoN) {
    if (number < soDuongNhoNhat && number > 0) {
      soDuongNhoNhat = number;
    }
  }
  console.log(soDuongNhoNhat);
  document.getElementById(
    "ketQua"
  ).innerHTML = `4. Số dương nhỏ nhất trong mảng là: ${soDuongNhoNhat}`;
};

// 5. Tìm số chẵn cuối cùng trong mảng
document.getElementById("btnTimSoChanCuoiCung").onclick = function () {
  let arrSoChan = [];
  arrSoN.findIndex((item, index) => {
    if (item % 2 == 0) {
      // console.log(item);
      arrSoChan.push(item);
    }
  });
  console.log(arrSoChan);
  console.log(arrSoChan[arrSoChan.length - 1]);
  document.getElementById(
    "ketQua"
  ).innerHTML = `5. Số chẵn cuối cùng trong mảng là: ${
    arrSoChan[arrSoChan.length - 1]
  }`;
};

// 6. Đổi vị trí phần tử
document.getElementById("btnDoiViTri").onclick = function () {
  let viTriSoThuNhat = document.getElementById("viTriSoThuNhat").value * 1;
  let viTriSoThuHai = document.getElementById("viTriSoThuHai").value * 1;
  console.log(viTriSoThuNhat);
  console.log(viTriSoThuHai);
  const soThuNhat = arrSoN[viTriSoThuNhat];
  arrSoN[viTriSoThuNhat] = arrSoN[viTriSoThuHai];
  arrSoN[viTriSoThuHai] = soThuNhat;
  console.log(arrSoN);

  let chuoiSoSauDoi = document.createElement("span");
  chuoiSoSauDoi.className = "mt-3 text-dark";
  chuoiSoSauDoi.innerHTML = arrSoN;
  document.getElementById("chuoiDoiSo").appendChild(chuoiSoSauDoi);
};

// 7. Sắp xếp mảng tăng dần
document.getElementById("btnSapXepTangDan").onclick = function () {
  arrSoN.sort((a, b) => {
    return a - b;
  });
  console.log(arrSoN);
  let chuoiTang = document.createElement("span");
  chuoiTang.className = "mt-3 text-dark";
  chuoiTang.innerHTML = arrSoN;
  document.getElementById("chuoiTang").appendChild(chuoiTang);
};

// 8. Tìm số nguyên tố đầu tiên trong mảng
function kiemTraSoNguyenTo(n) {
  // Boolean flag
  let flag = true;
  if (n < 2) {
    flag = false;
  } else {
    for (let i = 2; i < n - 1; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }

  // Kiểm tra biến flag
  if (flag == true) {
    return n;
  } else {
    console.log(n + " không phải là số nguyên tố");
  }
}

let arrSoNguyenTo = [];
document.getElementById("btnKiemTraSoNguyenTo").onclick = function () {
  for (let z = 0; z < arrSoN.length; z++) {
    if (kiemTraSoNguyenTo(arrSoN[z])) {
      arrSoNguyenTo.push(arrSoN[z]);
    }
  }
  console.log(arrSoNguyenTo);
  console.log(arrSoNguyenTo[0]);
  let soNguyenTo = document.createElement("span");
  soNguyenTo.className = "mt-3 text-dark";
  soNguyenTo.innerHTML = arrSoNguyenTo[0];
  document.getElementById("soNguyenTo").appendChild(soNguyenTo);
};

// 9. Tìm số nguyên
let arrSoThuc = [];
document.getElementById("btnThemSoThuc").onclick = function (event) {
  let soThuc = document.getElementById("soThuc").value * 1;
  arrSoThuc.push(soThuc);
  console.log(arrSoThuc);

  let mangSoThuc = document.createElement("span");
  mangSoThuc.className = "mt-3 text-dark";
  // mangSoThuc.innerHTML = arrSoN;
  for (let i = 0; i < arrSoThuc.length; i++) {
    mangSoThuc.innerHTML = `${arrSoThuc[i]},`;
    document.getElementById("mangSoThuc").appendChild(mangSoThuc);
  }
};

let arrSoNguyen = [];
document.getElementById("btnDemSoNguyen").onclick = function (event) {
  for (let number of arrSoThuc) {
    if (Number.isInteger(number)) {
      arrSoNguyen.push(number);
    }
  }
  console.log(arrSoNguyen);
  let mangSoNguyen = document.createElement("span");
  mangSoNguyen.className = "mt-3 text-dark";
  mangSoNguyen.innerHTML = arrSoNguyen;
  document.getElementById("mangSoNguyen").appendChild(mangSoNguyen);
};

// 10. So sánh số âm dương
document.getElementById("btnSoSanh").onclick = function (event) {
  let countSoDuong = 0;
  let countSoAm = 0;
  for (let number of arrSoN) {
    if (number > 0) {
      countSoDuong++;
    } else if (number < 0) {
      countSoAm++;
    }
  }
  if (countSoDuong > countSoAm) {
    console.log("Số dương > Số âm");
    document.getElementById("soSanhAmDuong").innerHTML = `Số dương > Số âm`;
  } else if (countSoDuong < countSoAm) {
    console.log("Số dương < Số âm");
    document.getElementById("soSanhAmDuong").innerHTML = `Số dương < Số âm`;
  } else {
    console.log("Số dương = Số âm");
    document.getElementById("soSanhAmDuong").innerHTML = `Số dương = Số âm`;
  }
};
