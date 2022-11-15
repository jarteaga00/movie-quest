fetch(
  // Explain each parameter in comments below.
  // github to repo to ndejs to node. issues is the queston,10  per page. opens the information and sort/display it
  //
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// once the data is load it will .json it then log it in the consolelog
//