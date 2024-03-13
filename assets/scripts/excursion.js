document.addEventListener("DOMContentLoaded", function() {
    // Get the switch buttons
    const switchButtons = document.getElementById("switch-btn").getElementsByTagName("button");

    // Island slides data
    const islandSlides = {
        "Nosy Komba": [
            "../assets/imgs/Nosy/Komba/kom-001.webp",
            "../assets/imgs/Nosy/Komba/kom-002.webp",
            "../assets/imgs/Nosy/Komba/kom-003.webp",
            "../assets/imgs/Nosy/Komba/kom-004.webp",
            "../assets/imgs/Nosy/Komba/kom-005.webp",
            "../assets/imgs/Nosy/Komba/kom-006.webp",
            "../assets/imgs/Nosy/Komba/kom-007.webp",
            "../assets/imgs/Nosy/Komba/kom-008.webp",
            "../assets/imgs/Nosy/Komba/kom-009.webp",
            "../assets/imgs/Nosy/Komba/kom-010.webp"
        ],
        "Nosy Tanikely": [
            "../assets/imgs/Nosy/Tanikely/tan-001.webp",
            "../assets/imgs/Nosy/Tanikely/tan-002.webp",
            "../assets/imgs/Nosy/Tanikely/tan-003.webp",
            "../assets/imgs/Nosy/Tanikely/tan-004.webp",
            "../assets/imgs/Nosy/Tanikely/tan-005.webp",
            "../assets/imgs/Nosy/Tanikely/tan-006.webp",
            "../assets/imgs/Nosy/Tanikely/tan-007.webp",
            "../assets/imgs/Nosy/Tanikely/tan-008.webp",
            "../assets/imgs/Nosy/Tanikely/tan-009.webp",
            "../assets/imgs/Nosy/Tanikely/tan-010.webp"
        ],
        "Nosy Iranja": [
            "../assets/imgs/Nosy/Iranja/ira-001.webp",
            "../assets/imgs/Nosy/Iranja/ira-002.webp",
            "../assets/imgs/Nosy/Iranja/ira-003.webp",
            "../assets/imgs/Nosy/Iranja/ira-004.webp",
            "../assets/imgs/Nosy/Iranja/ira-005.webp",
            "../assets/imgs/Nosy/Iranja/ira-006.webp",
            "../assets/imgs/Nosy/Iranja/ira-007.webp",
            "../assets/imgs/Nosy/Iranja/ira-008.webp",
            "../assets/imgs/Nosy/Iranja/ira-009.webp",
            "../assets/imgs/Nosy/Iranja/ira-010.webp"
        ],
        "Nosy Sakatia": [
            "../assets/imgs/Nosy/Sakatia/sak-001.webp",
            "../assets/imgs/Nosy/Sakatia/sak-002.webp",
            "../assets/imgs/Nosy/Sakatia/sak-003.webp",
            "../assets/imgs/Nosy/Sakatia/sak-004.webp",
            "../assets/imgs/Nosy/Sakatia/sak-005.webp",
            "../assets/imgs/Nosy/Sakatia/sak-006.webp",
            "../assets/imgs/Nosy/Sakatia/sak-007.webp",
            "../assets/imgs/Nosy/Sakatia/sak-008.webp",
            "../assets/imgs/Nosy/Sakatia/sak-009.webp",
            "../assets/imgs/Nosy/Sakatia/sak-010.webp"
        ],
        "Lokobe": [
            "../assets/imgs/Nosy/Lokobe/lok-001.webp",
            "../assets/imgs/Nosy/Lokobe/lok-002.webp",
            "../assets/imgs/Nosy/Lokobe/lok-003.webp",
            "../assets/imgs/Nosy/Lokobe/lok-004.webp",
            "../assets/imgs/Nosy/Lokobe/lok-005.webp",
            "../assets/imgs/Nosy/Lokobe/lok-006.webp",
            "../assets/imgs/Nosy/Lokobe/lok-007.webp",
            "../assets/imgs/Nosy/Lokobe/lok-008.webp",
            "../assets/imgs/Nosy/Lokobe/lok-009.webp",
            "../assets/imgs/Nosy/Lokobe/lok-010.webp"
        ]
    };

    // Add click event listeners to each button
    for (let i = 0; i < switchButtons.length; i++) {
        switchButtons[i].addEventListener("click", function() {
            // Update content based on the clicked button
            updateContent(this.textContent, islandSlides);
        });
    }

    // Function to update content based on the clicked button
    function updateContent(buttonText, islandSlides) {
        // Update title based on button text
        document.getElementById("title").textContent = buttonText;

        // Update slides based on button text
        const slides = islandSlides[buttonText];
        const swiperWrapper = document.querySelector(".swiper-wrapper");
        swiperWrapper.innerHTML = ""; // Clear existing slides

        // Add new slides
        slides.forEach(slide => {
            const slideElement = document.createElement("div");
            slideElement.classList.add("swiper-slide");
            const imgElement = document.createElement("img");
            imgElement.src = slide;
            imgElement.alt = "";
            slideElement.appendChild(imgElement);
            swiperWrapper.appendChild(slideElement);
        });

        // Initialize Swiper with updated slides
        swiper.update();
        
        // Update description, amenities, and price based on button text
        const descriptions = {
            "Nosy Komba": "Situé entre Nosy Be et le continent, Nosy Komba est souvent appelé l'île aux lémuriens en raison de la présence de ces créatures sympathiques qui peuvent être facilement observées dans leur habitat naturel. Outre sa faune riche, l'île est célèbre pour ses villages pittoresques où les traditions malgaches sont encore bien vivantes. Les visiteurs peuvent parcourir les marchés locaux à la recherche d'artisanat, notamment des sculptures sur bois et des textiles. Nosy Komba est également réputé pour ses plages isolées et ses spots de plongée offrant une belle diversité de faune sous-marine.",
            "Nosy Tanikely": "Cette petite île est une réserve marine nationale et constitue un véritable aquarium à ciel ouvert. Nosy Tanikely est une destination incontournable pour les amateurs de plongée et de snorkeling, offrant des eaux cristallines peuplées de coraux colorés, de poissons tropicaux, de tortues marines, et parfois même de requins-baleines. L'île possède également une plage magnifique où les visiteurs peuvent se détendre après leurs explorations sous-marines. Un phare situé sur l'île offre une vue panoramique sur l'archipel après une courte ascension.",
            "Nosy Iranja": "Composée de deux îles reliées par un banc de sable de 1,5 km visible à marée basse, Nosy Iranja est souvent décrite comme l'une des plages les plus belles du monde. L'île principale, Iranja Be, abrite un village de pêcheurs et un phare historique conçu par Gustave Eiffel, tandis que la seconde, Iranja Kely, est inhabitée et offre un cadre parfait pour la détente et le snorkeling. Les eaux turquoise, le sable blanc et la végétation luxuriante font d'Iranja un lieu paradisiaque pour les visiteurs à la recherche de tranquillité et de beauté naturelle.",
            "Nosy Sakatia": "Connue comme l'île aux Orchidées pour ses nombreuses espèces d'orchidées sauvages, Nosy Sakatia offre une expérience plus authentique et moins touristique que les autres îles. C'est le lieu idéal pour les randonnées à travers des sentiers verdoyants, la découverte de petites plages isolées et la plongée avec tuba dans des eaux peu profondes abritant une grande variété de vie marine, y compris des tortues vertes. Les visiteurs peuvent également s'immerger dans la vie locale en visitant les petits villages de l'île.",
            "Lokobe": "La réserve de Lokobe, située sur Nosy Be à Madagascar, est un sanctuaire de biodiversité préservant la dernière forêt primaire de l'île. Accessible par pirogue, elle offre une immersion dans un habitat riche en faune et flore endémiques, avec des lémuriens, caméléons, et une diversité d'oiseaux et de plantes. Les visites, axées sur l'écotourisme, permettent de découvrir la nature tout en interagissant respectueusement avec l'écosystème et les communautés locales. Lokobe est une expérience unique pour les passionnés de nature et de conservation."
        };

        const amenities = {
            "Nosy Komba": "Transfert - Eau minérale - Entrée parcs - Déjeuner - Guide",
            "Nosy Tanikely": "Transfert - Eau minérale - Entrée parcs - Déjeuner - Guide",
            "Nosy Iranja": "Transfert - Eau minérale - Entrée parcs - Déjeuner - Guide",
            "Nosy Sakatia": "Transfert - Eau minérale - Entrée parcs - Déjeuner - Guide - Equipement Snorkeling",
            "Lokobe": "Transfert - Eau minérale - Entrée parcs - Déjeuner - Guide"
        };

        const prices = {
            "Nosy Komba": "55€ / personne (Minimum 3 personnnes)",
            "Nosy Tanikely": "55€ / personne (Minimum 3 personnnes)",
            "Nosy Iranja": "55€ / personne (Minimum 3 personnnes)",
            "Nosy Sakatia": "55€ / personne (Minimum 3 personnnes)",
            "Lokobe": "55€ / personne (Minimum 3 personnnes)"
        };

        document.getElementById("description").textContent = descriptions[buttonText];
        document.getElementById("aminities").textContent = amenities[buttonText];
        document.getElementById("price").textContent = prices[buttonText];
    
        // Show or hide the iranja-bivouac section based on the selected island
        if (buttonText === "Nosy Iranja") {
            document.querySelector(".iranja-bivouac").style.display = "flex";
        } else {
            document.querySelector(".iranja-bivouac").style.display = "none";
        }
    }
});
