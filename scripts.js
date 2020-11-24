// async function getUsers() {
//     let url = 'https://api.kanye.rest';
//     try {
//         let res = await fetch(url);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

// define joke
const kanyeJoke = document.querySelector('.joke-container');
// add animation
kanyeJoke.classList.add('animate__bounceInLeft');

async function fetchJoke() {
    let response = await fetch('https://api.kanye.rest');
    let data = await response.json();
    console.log(data.quote);
    // kanyeJoke.innerHTML = data.quote;
    kanyeJoke.innerHTML = `<h1 class="display-4 fw-bold lh-1 py-3 animate__animated animate__bounceInLeft animate_slower">"${data.quote}"</h1>`
}
fetchJoke();

const getNewJoke = document.getElementById('getJoke');
getNewJoke.addEventListener('click', fetchNewJoke);
async function fetchNewJoke() {
    fetchJoke();
}
