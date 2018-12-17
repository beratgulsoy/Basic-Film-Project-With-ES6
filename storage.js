class Storage {
    static addFilmToStorage(newFilm){
        let films = this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films));
    
    }
    static getFilmsFromStorage(){
        let films;
    
        if(localStorage.getItem("films")===null) {
            films = [];
        } else {
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }
    static deleteFilmFromStorage(filmTitle){
        let films = this.getFilmsFromStorage();
        films.forEach(function(film,index){
            if (film.title === filmTitle) {
                films.splice(index,1);
            }
            
        });
        // if we don't have any films we must remove the "films" key
        if (films == "") {
            localStorage.removeItem("films");
        } else {
            localStorage.setItem("films",JSON.stringify(films));
        }
    }
    static clearAllFilmsFromStorage(){
        localStorage.removeItem("films");
    }
}
