let arrSoN = [];

document.getElementById("btnThemSo").onclick = function (event) {
  let soN = document.getElementById("soN").value * 1;
  arrSoN.push(soN);
  console.log(arrSoN);

  document.getElementById("chuoiSoN").className = "mt-3 text-dark";
  for (let i = 0; i < arrSoN.length; i++) {
    document.getElementById(
      "chuoiSoN"
    ).innerHTML = `<i class="fa-solid fa-arrow-right"></i> Chuỗi số N gồm: ${arrSoN}, `;
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
    "ketQua1"
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
    "ketQua2"
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
    "ketQua3"
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
    "ketQua4"
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
  if (arrSoChan.length) {
    document.getElementById(
      "ketQua5"
    ).innerHTML = `5. Số chẵn cuối cùng trong mảng là: ${
      arrSoChan[arrSoChan.length - 1]
    }`;
  } else {
    document.getElementById("ketQua5").innerHTML = `5. -1`;
  }
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

  document.getElementById("ketQua6").className = "my-2 text-dark";
  document.getElementById("ketQua6").innerHTML = `6. Mảng mới: ${arrSoN}`;
};

// 7. Sắp xếp mảng tăng dần
document.getElementById("btnSapXepTangDan").onclick = function () {
  arrSoN.sort((a, b) => {
    return a - b;
  });
  console.log(arrSoN);
  document.getElementById("ketQua7").className = "my-2 text-dark";
  document.getElementById("ketQua7").innerHTML = `7. Mảng tăng dần: ${arrSoN}`;
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

  document.getElementById("ketQua8").className = "my-2 text-dark";
  if (arrSoNguyenTo.length * 1) {
    document.getElementById(
      "ketQua8"
    ).innerHTML = `8. Số nguyên tố đầu tiên trong mảng là: ${arrSoNguyenTo[0]}`;
  } else {
    document.getElementById("ketQua8").innerHTML = "9. -1";
  }
};

// 9. Tìm số nguyên
let arrSoThuc = [];
document.getElementById("btnThemSoThuc").onclick = function (event) {
  let soThuc = document.getElementById("soThuc").value * 1;
  arrSoThuc.push(soThuc);
  console.log(arrSoThuc);

  document.getElementById("mangSoThuc").className = "mb-3 text-dark";
  for (let i = 0; i < arrSoThuc.length; i++) {
    document.getElementById(
      "mangSoThuc"
    ).innerHTML = `<i class="fa-solid fa-arrow-right"></i> Chuỗi số thực: ${arrSoThuc},`;
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
  document.getElementById("ketQua9").className = "mb-3 text-dark";
  document.getElementById(
    "ketQua9"
  ).innerHTML = `9. Lọc số nguyên: ${arrSoNguyen}`;
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
  document.getElementById("ketQua10").className = "mt-3 text-dark";
  if (countSoDuong > countSoAm) {
    console.log("Số dương > Số âm");
    document.getElementById("ketQua10").innerHTML = `10. Số dương > Số âm`;
  } else if (countSoDuong < countSoAm) {
    console.log("Số dương < Số âm");
    document.getElementById("ketQua10").innerHTML = `10. Số dương < Số âm`;
  } else {
    console.log("Số dương = Số âm");
    document.getElementById("ketQua10").innerHTML = `10. Số dương = Số âm`;
  }
};
