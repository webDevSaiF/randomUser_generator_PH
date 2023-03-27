// RECEIVING DATA
async function loadData() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  return data;
}
loadData()
  .then((data) => printData(data.results[0]))
  .catch((err) => console.log("Could Not Fetch the data from API"));

// PRINTING DATA
let userName = document.querySelector(".print-user-name");
let userImg = document.querySelector(".print-user-img");
let userProfession = document.querySelector(".print-user-profession");
let userEmail = document.querySelector(".print-user-email");
let userAge = document.querySelector(".print-user-age");
let userGender = document.querySelector(".print-user-gender");
let userPhone = document.querySelector(".print-user-phone");
let userCity = document.querySelector(".print-user-city");
let userState = document.querySelector(".print-user-state");
let userPost = document.querySelector(".print-user-postcode");
let userCountry = document.querySelector(".print-user-country");

function printData(obj) {
  const { title, first, last } = obj.name;
  const { large } = obj.picture;
  const { name } = obj.id;
  const { email } = obj;
  const { gender } = obj;
  const { age } = obj.dob;
  const { phone } = obj;
  const { city, state, postcode, country } = obj.location;

  console.log(email);
  userName.innerText = `${title} ${first} ${last}`;
  userImg.src = large;
  userProfession.innerText = `Company : ${name ? name : "Not Available"}`;
  userEmail.innerText = email;
  userAge.innerText += " " + age;
  userGender.innerText += " " + gender;
  userPhone.innerText += " +" + phone;
  userCity.innerText += " " + city;
  userState.innerText += " " + state;
  userPost.innerText += " " + postcode;
  userCountry.innerText += " " + country;

  console.log(obj);
}
