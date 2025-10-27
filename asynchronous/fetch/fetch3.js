const api_url = "https://dummyjson.com/quotes";
fetch(api_url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Error", err));

fetch("https://dummyjson.com/recipes")
  .then((response) => {
   return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
