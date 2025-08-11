const url = "https://api.themoviedb.org/3/authentication";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTNlYjdhOTQ3MWNlZWU4OTI4NTgxMWU5MWM2YjBhNSIsIm5iZiI6MTc0NDM3MjM3OC4xLCJzdWIiOiI2N2Y5MDI5YWVhODBkODUxNzU5OWE0Y2EiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aLE3NaT_6eFJi85WrBdMRp9JGjIAJ3CBklOE6o83CGU",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));
