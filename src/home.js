import capy1 from "./assets/images/capy1.png";
import capy2 from "./assets/images/capy2.png";
import capy3 from "./assets/images/capy3.png";
import capy4 from "./assets/images/capy4.png";
import capy5 from "./assets/images/capy5.png";

export function loadhome(){

const content=document.querySelector("#content");
content.innerHTML = "";

const heroSection=document.createElement("section");
heroSection.id="hero-section";

const heroLeft=document.createElement("div");
heroLeft.id="hero-left";

const heroTitle=document.createElement("h1");
heroTitle.textContent="Welcome to Capybara Café";

const heroTagline=document.createElement("p");
const italicsTagline=document.createElement("i");
italicsTagline.textContent="Good food. Good vibes. Chill capybaras.";
heroTagline.append(italicsTagline);

const heroRight=document.createElement("div");
heroRight.id="hero-right";

const heroPara=document.createElement("p");
heroPara.textContent="Step into the chillest restaurant in town, where delicious food meets the peaceful energy of capybaras. Whether you're here for a cozy meal, a cup of coffee, or just some quality capybara time,you're always welcome.";

heroSection.append(heroLeft,heroRight);
heroLeft.append(heroTitle,heroTagline);
heroRight.append(heroPara);

content.append(heroSection);

const specialsSection = document.createElement("section");
specialsSection.id="specials-section";

const SpecialsHeading= document.createElement("h2");
SpecialsHeading.textContent="Our Specials";

const SpecialsPara= document.createElement("p");
SpecialsPara.textContent="A place to slow down. At Capybara Café, we believe great food doesn't need to be rushed. Enjoy freshly prepared dishes, warm drinks, and an atmosphere so relaxed that even a capybara would approve.";

const specialsBtn= document.createElement("button");
specialsBtn.textContent="Explore our specials";

const specials=[ 
    {
        name: "Capybara Ramen",
        description: "Our signature bowl of warm, comforting goodness."
    },
    {
        name: "Lazy Capy Pancakes",
        description: "Fluffy pancakes for mornings that deserve absolutely zero urgency."
    },
    {
        name: "Chill Brew",
        description: "A smooth cup of coffee for maximum relaxation."
    },
    {
        name: "Capy Cake",
        description: "Because every peaceful afternoon deserves cake."
    }];

const specialsList= document.createElement("div");
specialsList.id="specials-list";


specialsBtn.addEventListener("click", () => {

    if (specialsList.children.length > 0) {
        return;
    }
    
    specials.forEach(special => {

    const specialItem = document.createElement("div");
    specialItem.id="special-item";

    const specialName = document.createElement("p");
    specialName.className="special-name";
    specialName.textContent= special.name;

    const specialDesc = document.createElement("p");
    specialDesc.className="special-desc";
    specialDesc.textContent= special.description;
    
    specialItem.append(specialName, specialDesc);

    specialsList.append(specialItem);
});
specialsSection.append(specialsList);

});

specialsSection.append(SpecialsHeading,SpecialsPara,specialsBtn,specialsList);
content.append(specialsSection);

const gallerySection = document.createElement("section");
gallerySection.id = "gallery-section";

const galleryHeading = document.createElement("h2");
galleryHeading.textContent = "A Little Capybara Calm";

const gallery = document.createElement("div");
gallery.id = "gallery";

const images = [capy1, capy2, capy3, capy4, capy5];

images.forEach(image => {
    const img = document.createElement("img");

    img.src = image;
    img.className = "gallery-image";

    gallery.append(img);
});

gallerySection.append(galleryHeading, gallery);
content.append(gallerySection);

const footerLine = document.createElement("p");
footerLine.textContent="Come hungry. Leave happy. Take a little capybara calm with you. 🦫";
content.append(footerLine);

}