document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if (day == 'Tuesday'.toLowerCase() || day == 'Thursday'.toLowerCase()) {
    document.querySelector("#placeToSee").innerHTML = 'class'
  } else if (day == 'Saturday'.toLowerCase() || day == 'Sunday'.toLowerCase()) {
    document.querySelector("#placeToSee").innerHTML = 'weekend'
  } else {
    document.querySelector("#placeToSee").innerHTML = 'boring day'
  }

}
