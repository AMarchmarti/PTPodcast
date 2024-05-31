# Podcast Explorer App

Welcome to the Podcast Explorer App! This application allows users to explore information about top 100 podcast in apple, including details about their episodes and you can listen any of the last 20 episodes

## Table of Contents

1. [Getting Started](#getting-started)
2. [Architecture and Structure](#architecture-and-structure)
3. [Features](#features)
4. [Contributing](#contributing)

## Getting Started

To run the Podcast Explorer App locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/AMarchmarti/PTPodcast.git
    ```

2. Navigate to the project directory:

    ```bash
    cd PTPodcast
    ```

3. Install dependencies using pnpm:

    ```bash
    pnpm install
    ```

4. Start the development server:

    ```bash
    pnpm dev
    ```

# Architecture and Structure

The Podcast Explorer App follows a modular architecture and folder structure to keep the code organized and maintainable. Here's an overview of the main directories and files:

-   **assets**: Stores assets such as images, fonts, or other static files used in the application.
-   **constants**: Houses constant values or configurations used throughout the application.
-   **presentation**:
    -   **components**: Houses reusable UI components organized by feature or functionality.
    -   **hooks**: Contains custom React hooks created for the application.
    -   **pages**: Contains React components representing different pages/routes of the application.
    -   **routes**: Contains configuration for routing using react-router-dom.
        -   **Loaders**: Contains logic to use services directly from the route
-   **domain**: Contains model, repositories, and use cases.
    -   **model**: Defines the core entities of the application.
    -   **services**: Contains the business logic of the application.
-   **infrastructure**: Contains services for interacting with external resources.
    -   **http**: Implements concrete interactions with external services.
    -   **utils**: Contains utility functions for handling API responses and other services.
-   **utils**: Contains utility functions for app.

# Features

-   **Podcast List**: View a list of Podcast retrieved from the Podcast API.
-   **Podcast Details**: View detailed information about a selected Podcast, including their episodes.
-   **Episode Detail**: Select a episode, get details from it and listen it.

# Contributing

Contributions are welcome! If you'd like to contribute to the Podcast Explorer App, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure all tests pass.
4. Commit your changes and push them to your fork.
5. Submit a pull request with a detailed description of your changes.
