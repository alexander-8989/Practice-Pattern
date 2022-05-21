let n1 =5, n2=20, n3=9;
let print = "";
  // if n1 is greater than both n2 and n3, n1 is the largest
  if (n1 >= n2 && n1 >= n3){
    print += ("The Gretest number is : ", n1);
  }
  // if n2 is greater than both n1 and n3, n2 is the largest
  else if (n2 >= n1 && n2 >= n3){
    print += ("The Greatest number is : ", n2);
  }
  // if both above conditions are false, n3 is the largest
  else{
    print += ("The Greatest number is : ", n3);
}
console.log("The Greatest number is : " + print);