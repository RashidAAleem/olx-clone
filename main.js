// Function to calculate the time difference
function getTimeDifference(createdAt) {
    var now = new Date();
    var diffInSeconds = Math.floor((now - createdAt) / 1000);

    if (diffInSeconds < 60) {
        return `${diffInSeconds} seconds ago`;
    }

    var diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes} minutes ago`;
    }

    var diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours} hours ago`;
    }

    var diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} days ago`;
}

// Card data with createdAt field for 12 cards
var cardData = [
    { title: "Rs 12000", 
      text: "This is a wider card with supporting text below as a natural lead-in to additional content.", 
      imgSrc: "images/mobile1.jpg", 
      createdAt: new Date(new Date() - 3 * 60 * 1000) },
    { title: "Rs 12000", text: "This card has even longer content to show equal height alignment.", imgSrc: "images/mobile2.jpg", createdAt: new Date(new Date() - 5 * 60 * 1000) },
    { title: "Rs 12000", text: "This card demonstrates how cards in Bootstrap can adapt to their content.", imgSrc: "images/mobile3.jpg", createdAt: new Date(new Date() - 10 * 60 * 1000) },
    { title: "Rs 12000", text: "This is a sample card with some placeholder text for testing layout alignment.", imgSrc: "images/mobile4.jpg", createdAt: new Date(new Date() - 12 * 60 * 1000) },
    { title: "Rs 12000", text: "Card 5 description with some longer text to showcase the card.", imgSrc: "images/house1.jpg", createdAt: new Date(new Date() - 15 * 60 * 1000) },
    { title: "Rs 12000", text: "A brief description about the content of card 6.", imgSrc: "images/house2.jpg", createdAt: new Date(new Date() - 18 * 60 * 1000) },
    { title: "Rs 12000", text: "This is the seventh card with some placeholder text.", imgSrc: "images/house3.jpg", createdAt: new Date(new Date() - 20 * 60 * 1000) },
    { title: "Rs 12000", text: "Content for the eighth card, discussing layout details.", imgSrc: "images/house4.jpg", createdAt: new Date(new Date() - 25 * 60 * 1000) },
    { title: "Rs 12000", text: "Card number 9 with some simple text content.", imgSrc: "images/car1.jpg", createdAt: new Date(new Date() - 30 * 60 * 1000) },
    { title: "Rs 12000", text: "This is the tenth card with placeholder text.", imgSrc: "images/car2.jpg", createdAt: new Date(new Date() - 35 * 60 * 1000) },
    { title: "Rs 12000", text: "Card 11 text to demonstrate varied content.", imgSrc: "images/car3.jpg", createdAt: new Date(new Date() - 40 * 60 * 1000) },
    { title: "Rs 12000", text: "Final card with some interesting placeholder content.", imgSrc: "images/car4.jpg", createdAt: new Date(new Date() - 45 * 60 * 1000) }
];

// Populate cards with the relative time in 'updated' field
cardData.forEach(function (data, index) {
    var card = document.getElementById(`card${index + 1}`);
    if (card) {
        // Set the image source and alt text
        card.querySelector(".card-img-top").src = data.imgSrc;
        card.querySelector(".card-img-top").alt = data.title;

        // Set the title and text content
        card.querySelector(".card-title").textContent = data.title;
        card.querySelector(".card-text").textContent = data.text;

        // Set the updated time using the getTimeDifference function
        card.querySelector(".text-body-secondary").textContent = "Posted " + getTimeDifference(data.createdAt);
    }
});
