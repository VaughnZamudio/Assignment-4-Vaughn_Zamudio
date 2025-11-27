Project: Book Discovery Website
Student Name: Vaughn Zamudio

Design Implemented:
I implemented a layout based on a Figma wireframe for a book discovery platform I did for the Week 8 Monday Activity. The design features a centered navigation bar, a "Trending Now" section with vertical book covers, an "Explore by Genre" section with tall cards, and a "Creator" section featuring circular profile images. The aesthetic matches the wireframe's clean, grayscale look.

JavaScript Interactions:
1. Search Functionality: When the user types in the search bar and hits "Enter," an alert confirms the search term.
2. Book Selection: Clicking on any book cover in the "Trending" section toggles a black border around the card to simulate selecting a book.
3. Follow Creator: Clicking on a circular creator profile changes the text below the image to "Following!" in green text, simulating a social follow action.

Challenges Faced:
One challenge was ensuring the grid layout switched from the 5-column layout (required by the wireframe) to a smaller column layout on mobile devices so the content wouldn't get squished. I solved this using a Media Query in CSS. Another challenge was selecting multiple elements in JavaScript (like all books), which I solved using querySelectorAll and a forEach loop.
