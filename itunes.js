"use strict";

var artistwait = "";
const newestSongs = async() =>{
    try{
        let artist = await artistwait;
        var apiRest = `https://itunes.apple.com/search?term=${artist}&media=music&limit=50`;
        const response = await fetch(apiRest);
        const result = await response.json();
        let dataObject = result.results;
        dataObject.sort( (a,b) =>{
            if(a.releaseDate == b.releaseDate){
                return 0;
            }
            if(a.releaseDate < b.releaseDate){
                return 1;
            }
            return -1;
        });
        const fragment = document.createDocumentFragment();
        const h2 = document.createElement("h2");
        h2.textContent = `Las últimas 10 canciones de ${artist.charAt(0).toUpperCase() + artist.slice(1)}:`;
        fragment.appendChild(h2);
        for (let i = 0; i < 10; i++) {
            const li = document.createElement("li");
            li.textContent = `${dataObject[i].trackName}`;
            fragment.appendChild(li);
        }
        document.body.appendChild(fragment);
    } catch (e){
        console.log(e);
        console.log("API call error - newestSongs");
    }
}

const newestgalantisSongs = () =>{
        artistwait = "galantis";
        newestSongs();
        }
newestgalantisSongs();

const newestGagaSongs = () =>{
    artistwait = "lady gaga";
    newestSongs();
}
newestGagaSongs();

const searchingPeace = async() =>{
    try{
        const response = await fetch("https://itunes.apple.com/search?term=peace&limit=30");  
        //La API retornaba 200 resultados. he puesto límite a lo solicitado, 30.      
        const result = await response.json();
        let dataObject = result.results;
        const fragment = document.createDocumentFragment();
        const h2 = document.createElement("h2");
        h2.textContent = `30 resultadoss de la búsqueda Peace:`;
        fragment.appendChild(h2);
        for (let i = 0; i < dataObject.length; i++) {
            const li = document.createElement("li");
            li.textContent = `La consulta ${[i+1]} es del artista ${dataObject[i].artistName} y corresponde a un ${dataObject[i].wrapperType}`;
            fragment.appendChild(li);
        }
        document.body.appendChild(fragment);
    } catch (e){
        console.log(e);
        console.log("API call error - searchingPeace");
    }
}
searchingPeace();

const releaseAdele2021 = async() =>{
    try{
        const response = await fetch("https://itunes.apple.com/search?term=adele&media=music&limit=200");        
        const result = await response.json();
        let dataObject = result.results;
        const fragment = document.createDocumentFragment();
        const h2 = document.createElement("h2");
        h2.textContent = `Los temas de Adele en 2021 son :`;
        fragment.appendChild(h2);
        for (let i = 0; i < dataObject.length; i++) {
            const element = dataObject[i];
            const date = element.releaseDate.substring(0,4)
            if (date == "2021") {
                const li = document.createElement("li");
                li.textContent = `${element.trackName}`;
                fragment.appendChild(li);
            }
            document.body.appendChild(fragment);
        }
    } catch (e){
        console.log(e);
        console.log("API call error - releaseAdele2021");
    }
}
releaseAdele2021();

// Por falta de conocimiento de la API no he podido encontrar la propiedad ratingIndex, éste es un simulacro del result:

var typewait = "";
const bestRatingIndex = async() =>{
    try{
        let type = await typewait;
        var apiRest = `https://itunes.apple.com/search?term=${type}&ratingIndex&limit=10`;
        const response = await fetch(apiRest);
        const result = await response.json();
        let dataObject = result.results;
        const fragment = document.createDocumentFragment();
        const h2 = document.createElement("h2");
        h2.textContent = `Los 10 mejor valorados en Itunes:`;
        fragment.appendChild(h2);
        for (let i = 0; i < 10; i++) {
            const li = document.createElement("li");
            li.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} - ${dataObject[i].trackName}`;
            fragment.appendChild(li);
        }
        document.body.appendChild(fragment);
    } catch (e){
        console.log(e);
        console.log("API call error - bestRatingIndex");
    }
}

const bestRatingIndexMovies = () =>{
    typewait = "movie";
    bestRatingIndex();
}
bestRatingIndexMovies();

const bestRatingIndexPodcasts = () =>{
    typewait = "podcast";
    bestRatingIndex();
        }
bestRatingIndexPodcasts();