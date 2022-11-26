// Marvel Info
fetch('https://gateway.marvel.com/v1/public/characters?ts=HelloWorld123&apikey=58cf9dccb6a433565258dd4185258cc5&hash=6a3f4d8c242a80ba92ccd1d638bc7c4f')
.then(function (response) {
   return response.json();
})
.then(function (data){
   console.log(data);
   document.getElementById('id1').innerHTML=data.data.results[11].id[1017100];
   

});
