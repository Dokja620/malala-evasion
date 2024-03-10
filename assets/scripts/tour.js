// Define the places data
const places = [
    {
        name: "Lemuria Land",
        description: "Lemuria Land est un parc à thème situé sur l'île de Nosy Be, Madagascar. Ce parc offre aux visiteurs une combinaison unique d'attractions axées sur la nature, la faune et la flore, ainsi que sur la production locale, notamment la distillation d'ylang-ylang, une des activités économiques principales de l'île.",
        image: "../assets/imgs/tour/lemuria.webp"
    },
    {
        name: "Andilana",
        description: "Située à l'extrémité nord de Nosy-Be, Andilana est célèbre pour ses plages de sable blanc et ses eaux turquoise cristallines. C'est le paradis pour ceux qui cherchent à se détendre au soleil ou à pratiquer des activités nautiques dans un cadre idyllique.",
        image: "../assets/imgs/tour/andilana.webp"
    },
    {
        name: "Mont Passot",
        description: "Offrant un panorama spectaculaire sur Nosy-Be et les îles avoisinantes, le Mont Passot est le point culminant de l'île. Un endroit idéal pour admirer le coucher du soleil, avec des lacs de cratère et une nature luxuriante qui ajoutent à la magie du lieu.",
        image: "../assets/imgs/tour/passot.webp"
    },
    {
        name: "Arbre sacré",
        description: "Entouré de mystères et de légendes, l'arbre sacré de Nosy-Be, un banian majestueux, est un lieu de culte et de rassemblement pour la communauté locale. C'est un site emblématique qui reflète les croyances et les traditions de l'île.",
        image: "../assets/imgs/tour/sacre.webp"
    },
    {
        name: "Hell Ville",
        description: "Nom donné en hommage à l'amiral de Hell, ce port animé est le cœur battant de Nosy-Be. Avec ses marchés colorés, ses bâtiments coloniaux et son ambiance vibrante, Hell-Ville est parfait pour s'imprégner de la vie locale et dénicher des souvenirs artisanaux.",
        image: "../assets/imgs/tour/ville-1.webp"
    },
];

let currentIndex = 0;

function updateContent() {
    const currentPlace = places[currentIndex];

    // Update description
    document.querySelector('.descr').textContent = currentPlace.description;

    // Update program name
    document.querySelector('.illustration h3').textContent = currentPlace.name;

    // Update program image
    document.querySelector('.illustration img').src = currentPlace.image;
}

// Add event listeners for next and previous buttons
document.querySelector(".right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % places.length;
    updateContent();
});

document.querySelector(".left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + places.length) % places.length;
    updateContent();
});

// Initial update
updateContent();
