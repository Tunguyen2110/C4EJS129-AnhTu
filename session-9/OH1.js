// Câu 1: Cho array sau arr1 = [1,2,3,5].
// Hãy duplicate array cho bên trên bằng ít nhất 2 cách;
// trong đó có 1 cách dùng Spread Operator.

arr1 = [1, 2, 3, 5];

{
  // Method 1:
  const newArr = [...arr1];
  console.log(newArr);
}

{
  // Method 2:
  const newArr = arr1.map((number) => {
    return number;
  });
  console.log(newArr);
}
