function SwapWithoutThirdvariable(a, b) {
  console.log("before swap:-");
  console.log("a:-", a);
  console.log("b:-", b);

  a = a + b
  b = a - b
  a = a - b

  console.log("after swap:-");
  console.log("a:-", a);
  console.log("b:-", b);
}

SwapWithoutThirdvariable(10, 20)
