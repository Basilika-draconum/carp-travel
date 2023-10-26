# CarpTravel

Site offer to join you unforgettable trips to the most beautiful parts of the Carpathians.

## Project Overview

This project is a website created using a variety of technologies, including Next.js 13 (with the app router), Tailwind CSS, and TypeScript.

# CarpTravel

CarpTravel is a website that offers unforgettable trips to the most beautiful parts of the Carpathian Mountains.

## Project Overview

This project was built using a combination of technologies, including Next.js 13 with the app router, Tailwind CSS, and TypeScript. It meets a range of technical and functional requirements.

## Technologies Used

- **Next.js 13:** Utilized for routing and server-side rendering.
- **Tailwind CSS:** Used for responsive and efficient styling.
- **TypeScript:** Employed for strong typing and code quality.

## Layout

- Fixed layout in pixels (px).
- Semantic and valid structure.
- Responsive and cross-browser compatible design:
  - Mobile devices from 320px.
    ![Логотип CarpTravel](images/320.png)
  - Tablets from 768px.
    ![Логотип CarpTravel](images/768.png)
  - Desktops from 1280px.
    ![Логотип CarpTravel](images/1280.png)

## Functionality

### Header

- Non-fixed header with a logo and navigation menu.
- Navigation menu with links to various sections.
- Smooth scrolling to corresponding sections on menu item click.
- Utilized the **react-scroll** library for smooth navigation.

### Hero (Home)

- Clicking "Join Now" smoothly scrolls to the "Contacts" section.

### About (Who we are) and Services (We offer)

- Slider with different background images implemented using **Swiper**.
- Images fade in for a pleasing effect.
- Active items are highlighted with relevant call-to-action text.

### Career (Choose us)

- Form validation with **react-hook-form** and **Tailwind CSS** for error styling.

### Gallery (Our gallery)

- Infinite slider with larger active slide.
- Slide changes can be made by clicking buttons or dragging.

### Contacts (Contact us)

- Form validation with **react-hook-form** and **Tailwind CSS** for error styling.

## Running the Project

To run the project, follow these steps:

1. Clone the project repository to your local computer.

2. Open a terminal and navigate to the project folder.

3. Execute the following commands:

   ```shell
   # Install project dependencies
   npm install

   # Start the development server
   npm run dev
   ```

The project will be accessible at http://localhost:3000.
