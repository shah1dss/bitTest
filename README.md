This is a React-based application that fetches cocktail data from the CocktailDB API and displays it to the user. The application is designed with scalability and clean architecture in mind, using TypeScript, React Query for state management, Tailwind CSS for styling, and Eslint/Prettier for code quality.

## Features

* **Cocktail List**: The app fetches and displays a list of cocktails based on their unique `cocktail_code` (e.g., margarita, mojito, etc.).
* **Dynamic Routing**: Each cocktail code leads to a separate page displaying all related cocktails.
* **Lazy Loading**: Images are lazy-loaded to improve performance.
* **Error Handling**: Gracefully handles errors with meaningful messages.
* **Responsive Design**: The app is fully responsive with a maximum width of 1024px and a minimum of 360px.
* **State Management**: React Query is used to manage data fetching and prevent duplicate requests.
* **404 Handling**: Displays a custom 404 page when the user navigates to a non-existent page.


## Stack

* **Frontend**: React, TypeScript, React Query, TailwindCSS
* **State Management**: React Query
* **Styling**: Tailwind CSS (with utility-first classes)
* **Code Quality**: ESLint, Prettier, Husky
* **Testing**: Vitest for unit tests
* **Build Tool**: Vite

## Functional Requirements

* **Menu Navigation**: The menu displays the cocktail codes and leads to respective pages for each cocktail. The active menu item is highlighted.
* **Default Page**: The first menu item is the default landing page, and `/` redirects to this first page.
* **404 Page**: A custom 404 error page is shown for invalid routes.

## Nefunctional Requirements

* **Scalable Architecture**: The application is designed to be modular and easy to extend.
* **Quality Gates**: The application ensures code quality with ESLint, Prettier, and automated tests.


## Deployment

The app is deployed on **Vercel**. Visit the app at [live demo](https://bit-test-kps1.vercel.app).

## Ideas for Scaling the Project

If the project were to be scaled, here are a few ideas:

1. **User Authentication**: Implement user authentication so that users can save their favorite cocktails or create custom cocktail lists.
2. **Search Functionality**: Allow users to search for cocktails by name or ingredients.
3. **Cocktail Reviews and Ratings**: Add a feature where users can leave ratings and reviews for cocktails.
4. **Cocktail Recommendations**: Implement a recommendation system that suggests cocktails based on user preferences.
5. **Pagination/Infinite Scroll**: If the number of cocktails increases, consider adding pagination or infinite scroll to improve the user experience.
