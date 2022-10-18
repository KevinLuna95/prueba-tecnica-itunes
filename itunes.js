$(document).ready(function() {

    "use strict";
    
    var artistwait = "";
    var id = "#newestSong"
    const newestSongs = async () => {
        try {
            let artist = await artistwait;
            var apiRest = `https://itunes.apple.com/search?term=${artist}&media=music&limit=50`;
            const response = await fetch(apiRest);
            const result = await response.json();
            let dataObject = result.results;
        
        dataObject.sort( (a,b) => {
            if (a.releaseDate == b.releaseDate) {
                return 0;
            }
            if (a.releaseDate < b.releaseDate) {
                return 1;
            }
            return -1;
        });

        const fragment = document.createDocumentFragment();
        const h2 = document.createElement("h2");
        h2.textContent = `Last 10 songs of ${artist.charAt(0).toUpperCase() + artist.slice(1)}:`;
        fragment.appendChild(h2);
        
        for (let i = 0; i < 10; i++) {
            const li = document.createElement("li");
            li.textContent = `${dataObject[i].trackName}`;
            fragment.appendChild(li);
        }
        
        $(id).append(fragment);
        
    } catch (e) {
        console.log(e);
        console.log("API call error - newestSongs");
    }
}

const newestSongButton = document.getElementById("newestSongButton");
newestSongButton.addEventListener("click",() => {
    const newestSearchSongs = () => {
        const search = document.querySelector("#artist")
        artistwait = search.value;
        id = "#searchNewestSong";
        newestSongs();
    }

    newestSearchSongs();
    $('#searchNewestSong').empty();
    $('#artist').val('');
})

const newestgalantisSongs = () => {
    artistwait = "galantis";
    newestSongs();
}
newestgalantisSongs();

const newestGagaSongs = () => {
    artistwait = "lady gaga";
    newestSongs();
}
newestGagaSongs();

const searchingPeace = async () => {
    try {
        const response = await fetch("https://itunes.apple.com/search?term=peace&limit=30");  
        //La API retornaba 200 resultados. he puesto límite a lo solicitado, 30.      
        const result = await response.json();
        let dataObject = result.results;
        const fragment = document.createDocumentFragment();
        const h2 = document.createElement("h2");
        h2.textContent = `30 results of "Peace":`;
        fragment.appendChild(h2);

        for (let i = 0; i < dataObject.length; i++) {
            const li = document.createElement("li");
            li.textContent = `Response ${[i+1]} from the artist ${dataObject[i].artistName} media type - ${dataObject[i].wrapperType}`;
            fragment.appendChild(li);
        }
        document.getElementById("searchingPeace").appendChild(fragment);

    } catch (e) {
        console.log(e);
        console.log("API call error - searchingPeace");
    }
}
searchingPeace();

const releaseAdele2021 = async () => {
    try {
        const response = await fetch("https://itunes.apple.com/search?term=adele&media=music&limit=200");        
        const result = await response.json();
        let dataObject = result.results;
        const fragment = document.createDocumentFragment();

        const h2 = document.createElement("h2");
        h2.textContent = `Adele's themes in 2021 are:`;
        fragment.appendChild(h2);

        for (let i = 0; i < dataObject.length; i++) {
            const element = dataObject[i];
            const date = element.releaseDate.substring(0,4)
            if (date == "2021") {
                const li = document.createElement("li");
                li.textContent = `${element.trackName}`;
                fragment.appendChild(li);
            }
            document.getElementById("releaseAdele2021").appendChild(fragment);
        }

    } catch (e) {
        console.log(e);
        console.log("API call error - releaseAdele2021");
    }
}
releaseAdele2021();

// Por falta de conocimiento de la API no he podido encontrar la propiedad ratingIndex, éste es un simulacro del result:

var typewait = "";
const bestRatingIndex = async () => {
    try {
        let type = await typewait;
        var apiRest = `https://itunes.apple.com/search?term=${type}&ratingIndex&limit=11`;
        const response = await fetch(apiRest);
        const result = await response.json();
        let dataObject = result.results;

        const fragment = document.createDocumentFragment();
        const h2 = document.createElement("h2");
        h2.textContent = `Top 10 rated ${type} on itunes`;
        fragment.appendChild(h2);

        for (let i = 0; i < 10; i++) {
            const li = document.createElement("li");
            li.textContent = `${dataObject[i].trackName}`;
            fragment.appendChild(li);
        }
        document.getElementById("bestRatingIndex").appendChild(fragment);

    } catch (e) {
        console.log(e);
        console.log("API call error - bestRatingIndex");
    }
}

const bestRatingIndexMovies = () => {
    typewait = "movies";
    bestRatingIndex();
}
bestRatingIndexMovies();

const bestRatingIndexPodcasts = () => {
    typewait = "podcast";
    bestRatingIndex();
}
bestRatingIndexPodcasts();
});