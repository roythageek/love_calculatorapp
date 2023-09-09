
function calculateLove() {
  var firstUser = input1.value;
  var secondUser = input2.value;
  var randomNumber = Math.round(Math.random() * 100);

  console.log(randomNumber);

  document.getElementById("print").innerHTML =
    firstUser +
    " and " +
    secondUser +
    " have " +
    randomNumber +
    " % " +
    " of love ";

  if (randomNumber <= 0 && randomNumber <= 10) {
    document.getElementById("comment").innerHTML = "this one no be love";
  } else if (randomNumber > 10 && randomNumber <= 20) {
    document.getElementById("comment").innerHTML =
      " Sorry!, you both are not compatible";
  } else if (randomNumber > 20 && randomNumber <= 30) {
    document.getElementById("comment").innerHTML =
      "lolx, you guys just playing with your hearts";
  } else if (randomNumber > 30 && randomNumber <= 40) {
    document.getElementById("comment").innerHTML =
      " lolx... please don't trust  " + secondUser;
  } else if (randomNumber > 40 && randomNumber <= 50) {
    document.getElementById("comment").innnerHTML =
      " you both should reconsider this relationship";
  } else if (randomNumber > 50 && randomNumber <= 60) {
    document.getElementById("comment").innerHTML =
      " waw, i think there might be a chemistry between you two";
  } else if (randomNumber > 60 && randomNumber <= 70) {
    document.getElementById("comment").innerHTML =
      " awww, you guys shud consider getting engaged";
  } else if (randomNumber > 70 && randomNumber <= 80) {
    document.getElementById("comment").innerHTML =
      " you two are  perfect match";
  } else if (randomNumber > 80 && randomNumber <= 100) {
    document.getElementById("comment").innerHTML =
      " i wish you both can get married right away";
  } else if (firstUser && secondUser == "") {
    alert("please input a name !!!");
  }else{
    alert("please input a name");
  }


  input1.value = ""; 
  input2.value ="";

}