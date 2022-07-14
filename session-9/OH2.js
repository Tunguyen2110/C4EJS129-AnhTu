// Câu 2: Cho arrX = [0,1,2,3,4,5,6,7,8].
// Hãy tạo ra arrSquare, chứa các giá trị của phần tử trong arrX đã được bình phương.
// Hãy tạo ra arrOdds chứa các phần tử là số lẻ nằm trong arrX.

const arrX = [0, 1, 3, 2, 4, 5, 6, 7, 8, 10];

// Hãy tạo ra arrSquare, chứa các giá trị của phần tử trong arrX đã được bình phương.
const arrSquare = arrX.map((x) => {
  return x * x; // or x** are the same
});
console.log(arrSquare);

// Hãy tạo ra arrOdds chứa các phần tử là số lẻ nằm trong arrX. - su dung filter

//cach 1

{
  console.log("Using casual for loop");
  const arrOdds = [];
  for (let i = 0; i < arrX.length; i++) {
    if (arrX[i] % 2 !== 0) {
      arrOdds.push(arrX[i]);
    }
  }
  console.log(arrOdds);
}

{
  //cach 2 - su dung filter
  console.log("Using filter");
  const arrOdds = arrX.filter((number) => {
    return number % 2 !== 0;
  });
  console.log(arrOdds);
}

//bonus: Trả về: chứa các index số % 3 = 0 - chia hết cho 3
{
  console.log("Bonus");
  const arr3 = arrX.filter((number, index) => { //Bien 1 la number - gia tri cua bien, bien 2 la index 0 1 2 3 ...
    return index %3 ==0;
  });
  console.log(arr3);
}
