//Cho 1 mảng học sinh: arrStudents = [‘Lan’, ‘Điệp’, ‘Ngọc’,’Ngạn’, ‘Trinh’];
// + Thêm ‘An’ vào sau ‘Ngạn’ -> Hiển thị [‘Lan’, ‘Điệp’, ‘Ngọc’,’Ngạn’, ‘An’, ‘Trinh’];
// + Xóa ‘Ngọc’ -> hiển thị [‘Lan’, ‘Điệp’,,’Ngạn’, ‘Trinh’];
// + Tìm kiếm và hiển thị vị trí của người tên là Trinh  trong mảng
// + Cập nhật ‘Lan’ thành ‘Phú’ -> Hiển thị [‘Phú, ‘Điệp’, ‘Ngọc’,’Ngạn’, ‘Trinh’];
// * Lưu ý: các yêu cầu trên là riêng biệt *

{
  console.log(
    "Thêm ‘An’ vào sau ‘Ngạn’ -> Hiển thị [‘Lan’, ‘Điệp’, ‘Ngọc’,’Ngạn’, ‘An’, ‘Trinh’]"
  );
  const arrStudents = ["Lan", "Diep", "Ngoc", "Ngan", "Trinh"];
  console.log("First Array: ", arrStudents);
  console.log("adding An after Ngan:");
}

{
  console.log("Xóa ‘Ngọc’ -> hiển thị [‘Lan’, ‘Điệp’,,’Ngạn’, ‘Trinh’]");
  const arrStudents = ["Lan", "Diep", "Ngoc", "Ngan", "Trinh"];
  arrStudents.splice(4, 0, "An");
  console.log("Fixed Array: ", arrStudents);
}

{
  console.log("Tìm kiếm và hiển thị vị trí của người tên là Trinh  trong mảng");
  let isName = true;
  const arrStudents = ["Lan", "Diep", "Ngoc", "Ngan", "Trinh"];
  for (let i = 0; i < arrStudents.length; i++) {
    console.log(arrStudents[i]);
    if (arrStudents[i] === "Trinh") {
      console.log(i);
      isName = false;
    }
  }
  if (isName === true) {
    console.log("Not Exist");
  }
}

{
  console.log(
    "Cập nhật ‘Lan’ thành ‘Phú’ -> Hiển thị [‘Phú, ‘Điệp’, ‘Ngọc’,’Ngạn’, ‘Trinh’]"
  );

    let isName = true;
  const arrStudents = ["Lan", "Diep", "Ngoc", "Ngan", "Trinh"];
  for (let i = 0; i < arrStudents.length; i++) {
    console.log(arrStudents[i]);
    if (arrStudents[i] === "Lan") {
      arrStudents.splice(arrStudents[i], 1 , "Phu");
    //   or use arrStudents[i] = 'phu' to make it faster and easier
    //   break;
      isName = false;
    }
  }
//   console.log(arrStudents);
  if (isName === true) {
      console.log("Not Exist");
  }

    console.log(arrStudents);
}
