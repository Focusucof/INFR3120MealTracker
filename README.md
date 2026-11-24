# CalLog

<!-- One or two sentences on what the app does -->
CalLog is a meal tracker for logging what you eat along with its calories and nutrition info.

**Live site:** https://infr3120mealtracker.onrender.com
**Repo:** https://github.com/Focusucof/INFR3120MealTracker


## Features

- View all logged meals
- Add a meal
- Edit a meal
- Delete a meal (with a confirmation)

## Tech Stack

- Node.js + Express
- MongoDB Atlas + Mongoose
- EJS templates
- Bootstrap 5
- Hosted on Render

## Running Locally

1. Clone the repo and install dependencies:
   ```bash
   git clone https://github.com/Focusucof/INFR3120MealTracker.git
   cd INFR3120MealTracker
   npm install
   ```
2. Create a `.env` file in the project root:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```
3. Start the app:
   ```bash
   npm start
   ```
4. Open http://localhost:3000

`.env` is listed in `.gitignore`, so the database credentials are never committed.

## Credits

- [Bootstrap 5.3.3](https://getbootstrap.com/): layout and components (loaded from the jsDelivr CDN)
- [Font Awesome 6.5.2](https://fontawesome.com/): icons (loaded from the cdnjs CDN)
- [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans): font (Google Fonts)
- `public/stylesheets/style.css` is my own CSS.
- The project structure was generated with `express-generator`.
