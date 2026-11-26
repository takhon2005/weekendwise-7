const weekendForm = document.getElementById("weekendForm");
const results = document.getElementById("results");

const places = [
    {
        name: "Karura Forest",
        interest: "nature",
        cost: 500,
        description: "Enjoy nature, walking trails and a relaxing outdoor experience."
    },
    {
        name: "TRM",
        interest: "fun",
        cost: 500,
        description: "Enjoy nature, walking trails and a relaxing outdoor experience."
    },
    {
        name: "Nairobi Arboretum",
        interest: "nature",
        cost: 300,
        description: "Enjoy a peaceful green space and a picnic."
    },
    {
        name: "Nairobi National Museum",
        interest: "culture",
        cost: 350,
        description: "Explore Kenyan history, culture and exhibitions."
    },
    {
        name: "Nairobi Gallery",
        interest: "culture",
        cost: 300,
        description: "Discover art and Kenyan heritage."
    },
    {
        name: "Entertainment and Games",
        interest: "fun",
        cost: 1000,
        description: "Enjoy games and fun activities with friends."
    },
    {
        name: "Restaurant Experience",
        interest: "food",
        cost: 800,
        description: "Enjoy a meal and explore Nairobi's food scene."
    }
];

weekendForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const budget = Number(document.getElementById("budget").value);
    const interest = document.getElementById("interest").value;

    const recommendations = places.filter(function(place) {
        return place.interest === interest && place.cost <= budget;
    });

    if (recommendations.length === 0) {
        results.innerHTML = `
            <h3>No matches found</h3>
            <p>Try increasing your budget or choosing another interest.</p>
        `;
        return;
    }

    results.innerHTML = `
        <h3>We found these ideas for you!</h3>
        ${recommendations.map(function(place) {
            return `
                <div class="recommendation">
                    <h4>${place.name}</h4>
                    <p>${place.description}</p>
                    <strong>Estimated activity budget: KSh ${place.cost}</strong>
                </div>
            `;
        }).join("")}
        <p>Prices are planning estimates. Confirm current fees before visiting.</p>
    `;
})
function openGallery(category) {
    const popup = document.getElementById("galleryPopup");
    const title = document.getElementById("galleryTitle");
    const items = document.getElementById("galleryItems");

    title.textContent = category;
    items.innerHTML = "";

    galleryData[category].forEach(media => {
        const element = document.createElement("img");
        element.src = media.src;
        items.appendChild(element);
    });

    popup.classList.add("active");
}