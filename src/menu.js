export function loadmenu(){
const content = document.querySelector("#content");
content.innerHTML = "";


const menuHeading = document.createElement("h1");
menuHeading.textContent="Capybara Café - Menu";
content.append(menuHeading);

const menu = [
    {
        category: "Starters",
        items: [
            {
                name: "Chill Nachos",
                description: "Crispy tortilla chips with creamy cheese, salsa, and a little capybara-approved spice."
            },
            {
                name: "Capy Corn Ribs",
                description: "Sweet corn roasted with herbs, butter, and a sprinkle of chili."
            },
            {
                name: "Lazy Garlic Bread",
                description: "Warm, buttery garlic bread for people who believe appetizers should be comforting."
            }
        ]
    },

    {
        category: "Main Course",
        items: [
            {
                name: "Capybara Ramen",
                description: "Our signature bowl of rich broth, noodles, vegetables, and a perfectly cooked egg."
            },
            {
                name: "Chill Teriyaki Rice Bowl",
                description: "Steamed rice topped with glazed vegetables, crispy tofu, and our house teriyaki sauce."
            },
            {
                name: "Cozy Creamy Pasta",
                description: "Creamy pasta tossed with mushrooms, herbs, parmesan, and a whole lot of comfort."
            },
            {
                name: "Golden Capy Burger",
                description: "Crispy veggie patty, fresh lettuce, tomato, cheese, and our special house sauce."
            }
        ]
    },

    {
        category: "Drinks",
        items: [
            {
                name: "Chill Brew",
                description: "Smooth, freshly brewed coffee for maximum relaxation."
            },
            {
                name: "Capy Cocoa",
                description: "Rich hot chocolate topped with soft marshmallows."
            },
            {
                name: "Lazy Lemonade",
                description: "Fresh lemon, mint, and just enough sweetness."
            },
            {
                name: "Tropical Capy Cooler",
                description: "A refreshing blend of pineapple, orange, and passion fruit."
            }
        ]
    },

    {
        category: "Desserts",
        items: [
            {
                name: "Capy Cake",
                description: "Soft chocolate cake with silky chocolate frosting."
            },
            {
                name: "Lazy Pancake Stack",
                description: "Fluffy pancakes layered with berries, cream, and maple syrup."
            },
            {
                name: "Chill Sundae",
                description: "Vanilla ice cream, chocolate sauce, crushed cookies, and absolutely no rush."
            }
        ]
    }
];

const menuSection = document.createElement("div");
menuSection.id = "menu-section";

menu.forEach(category => {

    const categoryHeading = document.createElement("h2");
    categoryHeading.textContent = category.category;

    const categoryList = document.createElement("div");
    categoryList.className = "category-list";

    category.items.forEach(item => {

        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";

        const itemName = document.createElement("p");
        itemName.className = "menu-name";
        itemName.textContent = item.name;

        const itemDesc = document.createElement("p");
        itemDesc.className = "menu-desc";
        itemDesc.textContent = item.description;

        menuItem.append(itemName, itemDesc);

        categoryList.append(menuItem);
    });

    menuSection.append(categoryHeading, categoryList);
});

content.append(menuSection);

}