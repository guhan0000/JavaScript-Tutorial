let tbody = document.getElementById("tbody");
const api_url = "https://jsonplaceholder.typicode.com/posts";
async function getPosts() {
  try {
    let response = await fetch(api_url);
    // console.log(response);
    if (!response.ok) {
      throw new Error("Users not Found");
    } else {
      let data = await response.json();
      console.log(data);
      data.forEach((obj) => {
        const row = `<tr><td>${obj.userId}</td><td>${obj.id}</td><td>${obj.title}</td></tr>`;
        tbody.innerHTML += row;
      });
    }
  } catch (err) {
    console.log(err.message);
  }
}
getPosts();
