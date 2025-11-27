Project: NextRead Book Discovery Website
Student Name: Vaughn Zamudio

1. Design Implemented:
I transformed my wireframe from Week 8 Monday Activity into a "Vibrant Modern Bookstore" theme. 
- Layout: I kept the wireframe's structure exactly (Header, Grid of Books, Grid of Genres, Circular Creators).
- Aesthetic: I upgraded the visual style from the sketch's plain look to a vibrant Purple and Coral color scheme to make it feel energetic and modern. I used Flexbox for the navigation bar and CSS Grid for the content sections to ensure everything aligns perfectly.

2. JavaScript Interactions:
My script.js includes three distinct interactions:
- Search Bar Input: Listens for the 'Enter' key. When pressed, it alerts the user with their search term.
- Book Selection (Click): Uses a "toggle" function. Clicking a book cover adds a visual border to show it is selected.
- Creator Follow (Click): Clicking a user profile updates the DOM text from their name to "Following!" to simulate a social media feature.

3. Challenges Faced:
- CSS Grid: It was initially tricky to get the images to look uniform. I solved this by using `object-fit: cover` and setting fixed heights in the CSS.
- Mobile Responsiveness: The 5-column grid looked bad on small screens. I added a Media Query (@media) to switch to a 2-column layout on screens smaller than 768px.
