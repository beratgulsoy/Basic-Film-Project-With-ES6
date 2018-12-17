const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");

// Load All Events
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        // Error
        UI.displayMessages("Tüm alanları doldurun..", "danger");
    } else {
        // New Film
        const newFilm = new Film(title, director, url);

        UI.addFilmToUI(newFilm); // adding film to the ui
        Storage.addFilmToStorage(newFilm); // adding film to storage
        UI.displayMessages("Film Başarıyla Eklendi", "success");


    }

    UI.clearInputs(titleElement, urlElement, directorElement);

    e.preventDefault();
}
function deleteFilm(e){
    if (e.target.id === "delete-film"){
        UI.deleteFilmFromUi(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Silme işlemi başarılı..","success");
    }

}
function clearAllFilms(e) {
    if(confirm("Tüm filmleri silmek istediğinizden emin misiniz?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
        UI.displayMessages("Tüm filmler başarıyla silindi..","success");
    }
}