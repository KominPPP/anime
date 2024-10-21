const mainData = () => {
fetch('https://anime-intensiv-default-rtdb.firebaseio.com/anime.json')
.then((response) => {
return response.json()
})
.then((data) => {
console.log(data);
})
}

mainData();