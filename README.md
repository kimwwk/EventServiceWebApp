# Event Service Web App

This project demonstrates building a web application for managing events using Vue.js and related technologies. It was developed as part of the "Real World Vue" course from Vue Mastery ([GitHub Link](https://github.com/Code-Pop/real-world-vue)). 

## Features

*   **Event Management:**
    *   Create new events with form validation.
    *   List all events.
    *   View individual event details.
*   **State Management:** Utilizes Vuex for efficient state management with modules, actions, mutations, and getters.
*   **User Interface:**
    *   Modern UI/UX with `nprogress` for loading progress indication.
    *   Form validation with `vuelidate`.
    *   Date selection using `vuejs-datepicker`.
*   **Code Quality:**
    *   Uses `ESLint` and `Prettier` for consistent code style and error checking.

## Technologies Used

*   **Frontend:**
    *   Vue.js
    *   Vue Router
    *   Vuex
    *   Axios
    *   nprogress
    *   vuelidate
    *   vuejs-datepicker
*   **Development Tools:**
    *   Vue CLI
    *   ESLint
    *   Prettier
    *   JSON Server

## Installation and Usage

1.  Clone the repository: `git clone https://github.com/your-username/EventServiceWebApp.git`
2.  Install dependencies: `npm install`
3.  Start the development server: `npm run serve`
4.  Build for production: `npm run build`

## Project Structure

*   `src/`: Contains the Vue.js application source code.
    *   `components/`: Reusable Vue components.
    *   `store/`: Vuex store modules.
    *   `views/`: Page components.
*   `public/`: Static assets.
*   `server.js`: Node.js server for serving the application.

## Concept

1. State management
   - state
   - getters
   - mutation
   - actions
   - modules
1. Error messages
1. Reusable components

## Future Enhancements

*   Implement mixins for code reusability.
*   Add filters for data manipulation.
*   Enhance event management with features like editing and deleting events.
*   Improve UI/UX with more interactive elements.

## Contributing


## License

This project is licensed under the [MIT License](LICENSE).
