var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
// ajax returns immediately and the next statement, return result; , 
//is executed before the function you passed as success callback was even called.

//MAkes a GET request to requestURL and then uses .then to wait for it to be done and process the respones
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
//The fetch() method takes one mandatory argument,the path to the 
//resource you want to fetch. It returns a Promise that resolves 
//to the Response to that request — as soon as the server responds with headers 
//— even if the server response is an HTTP error status.

//MAkes a GET request to requestURL and then uses .then to wait for it to be done and process the respones
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
//XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve
// data from a URL without having to do a full page refresh. This enables a Web 
//page to update just part of a page without disrupting what the user is doing.

// creates a new XMLHttpRequest, then sets the onreadystatechange function to listen for when the request is done
//then opensa connetion to the server.
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
// returns a string
