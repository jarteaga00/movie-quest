//Movie info
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=5d92eb43')
.then(function (response) {
    return response.json();
})
.then(function (data){
    console.log(data);
    document.getElementById('id2');

});