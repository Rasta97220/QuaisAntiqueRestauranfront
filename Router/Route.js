export default class Route {
    constructor(url, title, pathHtml, pathJS =""){
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;

    }
}

//Définir ici vos routes

export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
];
//Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "Quai Antique";
