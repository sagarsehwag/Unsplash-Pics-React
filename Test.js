class testThis {
  firstFuntion() {
    console.log(this);
  }
}

let newTest = new testThis();
newTest.firstFuntion();
