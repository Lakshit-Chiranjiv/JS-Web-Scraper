let eps = document.getElementById('epsds');
let btn = document.getElementById('geb');

const getEpisodes = async() => {
    const res = await fetch('http://localhost:4000/episodes');
    const data = await res.json();

    console.log(data);
    let snippet = '';
    data.forEach(episode => {
        if(episode.episode_name[0].toUpperCase() === 'A')
            snippet+=`<h5><a href=${episode.episode_link} target=_blank>${episode.episode_name}</a></h5>`;
    });
    eps.innerHTML = snippet;
}

btn.addEventListener('click',getEpisodes);