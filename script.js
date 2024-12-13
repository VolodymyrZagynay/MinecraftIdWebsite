const objects = [
    { id: 1, name: "Stone", description: "Just ordinary stone.", type: "block", img: "../Images/Blocks/Stone.png" },
    { id: 2, name: "Grass Block", description: "Dirt block with grass, from standart biom.", type: "block", img: "../Images/Blocks/grass-2.png" },
    { id: 3, name: "Dirt", description: "Just ordinary dirt lol.", type: "block", img: "../Images/Blocks/Dirt.png" },
    { id: 4, name: "Cobblestone", description: "Just ordinary cobblestone!", type: "block", img: "../Images/Blocks/cobblestone-1.png" },
    { id: 5, name: "Plank", description: "Wood is the BEST material", type: "block", img: "../Images/Blocks/Plank.png" },
    { id: 6.0, name: "Sapling(Oak)", description: "Love chomp the tree? Then love to plant them!.", type: "item", img: "../Images/Blocks/Sapling(Oak).png" },
    { id: 6.1, name: "Sapling(Birch)", description: "Love chomp the tree? Then love to plant them!.", type: "item", img: "../Images/Blocks/Sapling(Birch).png" },
    { id: 6.2, name: "Sapling(Spruce)", description: "Love chomp the tree? Then love to plant them!.", type: "item", img: "../Images/Blocks/Sapling(Spruce).png" },
    { id: 7, name: "Bedrock", description: "That's it! You found the end of your world! Maybe you that's it, you should find something else...", type: "unobtainable", img: "../Images/Blocks/Bedrock.png" },
    { id: 8, name: "Flowing Water", description: "Flow with water like a penguin.", type: "unobtainable", img: "../Images/Blocks/Flowing_water.png" },
    { id: 9, name: "Still Water", description: "Welp, maybe time to make infity water suplie?", type: "unobtainable", img: "../Images/Blocks/Still_water.png" },
    { id: 10, name: "Flowing Lava", description: "I hate when this happen.", type: "unobtainable", img: "../Images/Blocks/Flowing_lava.png" },
    { id: 11, name: "Still Lava", description: "Why it's so hot right here?", type: "unobtainable", img: "../Images/Blocks/Still_lava.png" },
    { id: 12, name: "Sand", description: "Just ordinary sand, if it isn't falling on your hand.", type: "block", img: "../Images/Blocks/Sand.png" },
    { id: 13, name: "Gravel", description: "Everything same with sand but now more unuselese.", type: "block", img: "../Images/Blocks/Gravel.png" },
    { id: 14, name: "Gold Ore", description: "Oh look a shiny!", type: "block", img: "../Images/Blocks/Gold_Ore.png" },
    { id: 15, name: "Iron Ore", description: "It's time to became an ironman!", type: "block", img: "../Images/Blocks/Iron_Ore.png" },
    { id: 16, name: "Coal Ore", description: "You know what they say! No power without the fire!", type: "unobtainable", img: "../Images/Blocks/Coal_Ore.png" },
    { id: 17.0, name: "Oak Log", description: "Maybe it was painfull to punch that tree.", type: "block", img: "../Images/Blocks/Oak_Log.png" },
    { id: 17.1, name: "Spruce Log", description: "Oh and now we are into dark theme, right?", type: "block", img: "../Images/Blocks/Spruce_Log.png" },
    { id: 17.2, name: "Birch Log", description: "You choose that type cause its funny, right?", type: "block", img: "../Images/Blocks/Birch_Log.png" },
    { id: 18, name: "Oak Leaves", description: "Some of them will give you sticks.", type: "block", img: "../Images/Blocks/Oak_Leaves.png" },
    { id: 18, name: "Spruce Leaves", description: "Some of them will give you sticks.", type: "block", img: "../Images/Blocks/Spruce_Leaves.png" },
    { id: 18, name: "Birch Leaves", description: "Some of them will give you sticks.", type: "block", img: "../Images/Blocks/Birch_Leaves.png" },
    { id: 19, name: "Sponge", description: "Funniest block in the game. SO SAD THAT THOUGHT IT WOULD BE GOOD IDEA TO DELETE HIM, AND REVIVE ON OTHER UPDATE >:l", type: "deleted", img: "../Images/Blocks/Sponge.png" },
    { id: 20, name: "Glass", description: "It's nice to see from your struckture, but awere of the other's eyes.", type: "block", img: "../Images/Blocks/Glass_Block.png" },
    { id: 21, name: "Lapis Lazuli Ore", description: "Lapis.", type: "unobtainable", img: "../Images/Blocks/Lapis_Lazuli_Ore.png" },
    { id: 22, name: "Block of Lapis Lazul", description: "Cool looking ore, so sad that they added enchancas table.", type: "block", img: "../Images/Blocks/Block_of_Lapis_Lazul.png" },
    { id: 23, name: "Dispenser!", description: "POOTISpenser here!", type: "block", img: "../Images/Blocks/Dispenser.png" },
    { id: 24, name: "Sandstone", description: "Looks great in some type of dycoretion", type: "block", img: "../Images/Blocks/Sandstone.png" },
    { id: 25, name: "Note Block", description: "ITS TIME TO BECAME MUSITIAN MAN!", type: "block", img: "../Images/Blocks/Note_Block.png" },
    { id: 26, name: "Bed", description: "Let's just say, a good sleep, will make your day.", type: "unobtainable", img: "../Images/Blocks/Red_Bed.png" },
    { id: 27, name: "Powered Rail", description: "Gotta gO Fasst!", type: "block", img: "../Images/Blocks/Powered_Rail.png" },
    { id: 28, name: "Detector Rail", description: "I don't like that sound!", type: "block", img: "../Images/Blocks/Detector_Rail.png" },
    { id: 29, name: "Sticky Piston", description: "Please be responsive!", type: "block", img: "../Images/Blocks/Sticky_Piston.png" },
    { id: 30, name: "CobWeb", description: "Look's like you're not alone!", type: "unobtainable", img: "../Images/Blocks/CobWeb.png" },
    { id: 31.0, name: "Dead Bush", description: "I actually don't know the difference with 'Dead Shrub' lol", type: "unobtainable", img: "../Images/Blocks/Dead_Bush.png" },
    { id: 31.1, name: "Grass", description: "At least in THIS game, your PC can show the grass in the terrain lol", type: "unobtainable", img: "../Images/Blocks/Grass.png" },
    { id: 31.2, name: "Fern", description: "I can feel how you smoked that weed", type: "unobtainable", img: "../Images/Blocks/Fern.png" },
    { id: 32, name: "Dead_Shrub", description: "I actually don't know the difference with 'Dead Bush' lol", type: "unobtainable", img: "../Images/Blocks/Dead_Shrub.png" },
    { id: 33, name: "Piston", description: "Pes Piston!", type: "block", img: "../Images/Blocks/Piston.png" },
    { id: 34, name: "Piston Head", description: "For some reason :/", type: "unobtainable", img: "../Images/Blocks/Piston_Head.png" },
    { id: 35.0, name: "White Wool", description: "10/10", type: "block", img: "../Images/Blocks/White_Wool.png" },
    { id: 35.1, name: "Orange Wool", description: "4/10", type: "block", img: "../Images/Blocks/Orange_Wool.png" },
    { id: 35.2, name: "Magenta Wool", description: "8/10", type: "block", img: "../Images/Blocks/Magenta_Wool.png" },
    { id: 35.3, name: "Light Blue Wool", description: "3/10", type: "block", img: "../Images/Blocks/Light_Blue_Wool.png" },
    { id: 35.4, name: "Yellow Wool", description: "5/10", type: "block", img: "../Images/Blocks/Yellow_Wool.png" },
    { id: 35.5, name: "Lime Wool", description: "6/10", type: "block", img: "../Images/Blocks/Lime_Wool.png" },
    { id: 35.6, name: "Pink Wool", description: "5/10", type: "block", img: "../Images/Blocks/Pink_Wool.png" },
    { id: 35.7, name: "Grey Wool", description: "7/10", type: "block", img: "../Images/Blocks/Gray_Wool.png" },
    { id: 35.8, name: "Light Grey Wool", description: "6/10", type: "block", img: "../Images/Blocks/Light_Gray_Wool.png" },
    { id: 35.9, name: "Cyan Wool", description: "6/10", type: "block", img: "../Images/Blocks/Cyan_Wool.png" },
    { id: 35.10, name: "Purple Wool", description: "4/10", type: "block", img: "../Images/Blocks/Purple_Wool.png" },
    { id: 35.11, name: "Blue Wool", description: "8/10", type: "block", img: "../Images/Blocks/Blue_Wool.png" },
    { id: 35.12, name: "Brown Wool", description: "let's just say it universal", type: "block", img: "../Images/Blocks/Brown_Wool.png" },
    { id: 35.13, name: "Green Wool", description: "8/10", type: "block", img: "../Images/Blocks/Green_Wool.png" },
    { id: 35.14, name: "Red Wool", description: "9/10", type: "block", img: "../Images/Blocks/Red_Wool.png" },
    { id: 35.15, name: "Black Wool", description: "10/10", type: "block", img: "../Images/Blocks/Black_Wool.png" },
    { id: 36, name: "Piston Push", description: "When 'Piston' is pushing smt, that object is creating. And it haven't (as I understood) any texture. Also it was renamed in latest ver the id", type: "unobtainable", img: "../Images/Blocks/Porrige.png" },
    { id: -1, name: "PLEASE CLICK", description: "Вибачте, що не встиг заповнити всі об'єкти, із-за хвороби, яка помішала заповнити сайт. Тому надіюсь що найближчим часом я його закінчу як планував!!", type: "block", img: "../Images/Blocks/maro.png" },
];

const grid = document.getElementById('object-grid');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const popupId = document.getElementById('popup-id');
const popupClose = document.getElementById('popup-close');
const searchInput = document.getElementById('search-input');
const filterSelect = document.getElementById('filter-select');

// Відображення об'єктів
function displayObjects(filteredObjects) {
    grid.innerHTML = '';
    filteredObjects.forEach(obj => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.innerHTML = `
            <img src="${obj.img}" alt="${obj.name}">
            <p>${obj.name}</p>
        `;
        item.addEventListener('click', () => showPopup(obj));
        grid.appendChild(item);
    });
}

// Показати вікно з деталями об'єкта
function showPopup(obj) {
    popupTitle.textContent = obj.name;
    popupDescription.textContent = obj.description;
    popupId.textContent = obj.id;
    popup.classList.remove('hidden');
}

// Закриття вікна
popupClose.addEventListener('click', () => {
    popup.classList.add('hidden');
});

// Фільтрування об'єктів
function filterObjects() {
    const query = searchInput.value.trim();
    const filter = filterSelect.value;

    let filtered = objects;

    if (query) {
        filtered = filtered.filter(obj => obj.id == parseFloat(query));
    }

    if (filter === 'blocks') {
        filtered = filtered.filter(obj => obj.type === 'block');
    } else if (filter === 'items') {
        filtered = filtered.filter(obj => obj.type === 'item');
    } else if (filter === 'deleted') {
        filtered = filtered.filter(obj => obj.type === 'deleted');
    } else if (filter === 'unobtainable') {
        filtered = filtered.filter(obj => obj.type === 'unobtainable');
    }

    displayObjects(filtered);
}

// Події пошуку та скидання
document.getElementById('search-btn').addEventListener('click', filterObjects);
document.getElementById('reset-btn').addEventListener('click', () => {
    searchInput.value = '';
    filterSelect.value = 'all';
    displayObjects(objects);
});

// Ініціалізація
displayObjects(objects);
