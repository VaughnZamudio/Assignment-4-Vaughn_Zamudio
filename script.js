// Interaction 1: Search Bar Alert
// When the user presses "Enter" in the search bar, show an alert.
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const query = searchInput.value;
        if(query) {
            alert('You searched for: ' + query);
            searchInput.value = ''; // Clear the bar
        }
    }
});

// Interaction 2: "Select" a Book
// Clicking a book card highlights it with a darker border (toggling a class).
const bookCards = document.querySelectorAll('.book-card');

bookCards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle a specific style via JS
        if (card.style.border === "2px solid black") {
            card.style.border = "none";
        } else {
            card.style.border = "2px solid black";
        }
    });
});

// Interaction 3: "Follow" a Creator
// Clicking a creator profile updates their name to say "Following!"
const creators = document.querySelectorAll('.creator-profile');

creators.forEach(creator => {
    creator.addEventListener('click', () => {
        const nameTag = creator.querySelector('p');
        
        if (nameTag.innerText !== "Following!") {
            const originalName = nameTag.innerText;
            nameTag.innerText = "Following!";
            nameTag.style.color = "green";
            nameTag.style.fontWeight = "bold";
            
            // Optional: Revert back after 2 seconds
            setTimeout(() => {
                nameTag.innerText = "Name"; // Reset to placeholder
                nameTag.style.color = "black";
                nameTag.style.fontWeight = "normal";
            }, 2000);
        }
    });
});
