"use strict";

const newestgalantisSongs = async() =>{
    try{
    const response = await fetch("https://itunes.apple.com/search?term=galantis&media=music");        
    const result = await response.json();
    let release_date = result.results.releaseDate;
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
        document.write("<b>Las últimas 10 canciones de Galantis:<br></b>");
    for (let i = 0; i < 10; i++) {
        release_date = (dataObject[i].releaseDate);
        document.write(dataObject[i].trackName); document.write("<br>");
    }
    } catch (e){
        console.log(e);
        console.log("API call error - newestgalantisSongs");
    }
}
newestgalantisSongs();

const newestGagaSongs = async() =>{
    try{
    const response = await fetch("https://itunes.apple.com/search?term=lady+gaga&media=music");        
    const result = await response.json();
    let release_date = result.results.releaseDate;
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
        document.write("<br>");
        document.write("<b>Las últimas 10 canciones de Lady Gaga:<br></b>");
    for (let i = 0; i < 10; i++) {
        release_date = (dataObject[i].releaseDate);
        document.write(dataObject[i].trackName); document.write("<br>");
    }
    } catch (e){
        console.log(e);
        console.log("API call error - newestGagaSongs");
    }
}
newestGagaSongs();

const searchingPeace = async() =>{
    try{
    const response = await fetch("https://itunes.apple.com/search?term=peace&limit=2000");        
    const result = await response.json();
    let dataObject = result.results;
    document.write("<br>");
    document.write("<b>30 results de la búsqueda peace:<br></b>");
        for (let i = 0; i < 30; i++) {
            document.write(`La consulta ${[i+1]} es del artista <b>${dataObject[i].artistName}</b> y corresponde a un <b>${dataObject[i].wrapperType}</b>`); document.write("<br>");
        }
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
    document.write("<br>");
    document.write("<b>Los temas de Adele en 2021 son :<br></b>");
    for (let i = 0; i < dataObject.length; i++) {
        const element = dataObject[i];
        const date = element.releaseDate.substring(0,4)
        if (date == "2021") {
            document.write(element.trackName); document.write("<br>");
        }

    }

    } catch (e){
        console.log(e);
        console.log("API call error - releaseAdele2021");
    }
}
// Por falta de conocimiento de la API no he podido encontrar la propiedad ratingIndex, éste es un simulacro del result:
releaseAdele2021();

const bestRatingIndexPodcasts = async() =>{
    try{
    const response = await fetch("https://itunes.apple.com/search?term=podcast&ratingIndex&limit=10");        
    const result = await response.json();
    let dataObject = result.results;
    document.write("<br>");
    document.write("<b>Los 10 podcast mejor valorados son :<br></b>");
    for (let i = 0; i < 10; i++) {
        document.write(dataObject[i].trackName); document.write("<br>");
    }
    } catch (e){
        console.log(e);
        console.log("API call error - bestRatingIndexPodcasts");
    }
}
bestRatingIndexPodcasts();

const bestRatingIndexMovies = async() =>{
    try{
    const response = await fetch("https://itunes.apple.com/search?term=movies&ratingIndex&limit=10");        
    const result = await response.json();
    let dataObject = result.results;
    document.write("<br>");
    document.write("<b>Las 10 películas mejor valoradas son :<br></b>");
    for (let i = 0; i < 10; i++) {
        document.write(dataObject[i].trackName); document.write("<br>");
    }
    } catch (e){
        console.log(e);
        console.log("API call error - bestRatingIndexMovies");
    }
}
bestRatingIndexMovies();