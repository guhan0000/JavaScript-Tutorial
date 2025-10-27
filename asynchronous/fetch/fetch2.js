let pic = document.getElementById("pic");
let fname = document.getElementById("firstnames");
let lname = document.getElementById("lname");

const api = "https://dummyjson.com/users";
async function getUsers() {
  try {
    let response = await fetch(api);
    if (response.ok) {
      let data = await response.json();
      console.log(data.users);
      data.users.forEach((user) => {
        // pic.src = user.image;
        // fname.innerText = firstName;
        // lname.innerText = lastName;
        // console.log(user.firstName);
        // const row = `<h2>${user.firstName}</h2><img src=${user.image}/>`;
        const row = `<img src=${user.image}/>`;
        fname.innerHTML += row;
      });
    } else {
      console.log("users not found");
    }
  } catch (err) {
    console.log(err);
  }
}
getUsers();
