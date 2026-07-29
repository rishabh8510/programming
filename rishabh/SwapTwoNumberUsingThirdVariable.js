function SwapTwoNumberUsingThirdVariable(a, b) {
  console.log("before swap:-");
  console.log("a:-", a);
  console.log("b:-", b);

  let temp = a;
  a = b;
  b = temp;

  console.log("after swap:-");
  console.log("a:-", a);
  console.log("b:-", b);
}

SwapTwoNumberUsingThirdVariable(10, 20)
