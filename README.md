# NextJS Large Table with Smooth Horizontal Scrolling

## Overview

This project demonstrates a NextJS application featuring a large table with smooth horizontal scrolling. The table content moves using user-defined controls, offering a seamless user experience. The project emphasizes clean code practices and reusable components to ensure maintainability and scalability.

## Features

- **Large Data Table**: Handles large datasets efficiently.
- **Smooth Horizontal Scrolling**: Table content moves smoothly without relying on the default scrollbar.
- **Reusable Components**: Modular components that can be reused across different parts of the application.
- **Clean Code**: Adherence to best coding practices for readability and maintainability.

## Tech Stack

### Client Side

- **NextJS**: A React library for building user interfaces (SSR).
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.

### Server Side

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database for storing large amounts of data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.

## Installation

### Client Side

1. Clone the repository:
   ```sh
   git clone https://github.com/lomsadze123/tetrobyte-crm.git
   ```
2. Navigate to the project directory:
   ```sh
   cd tetrobyte-crm/client
   ```
3. Install dependencies:

   ```sh
   npm install
   ```

   4. Start the development server:

   ```sh
   npm start
   ```

   5. Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Server Side

1. Navigate to the server directory:
   ```sh
   cd tetrobyte-crm/server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your environment variables:
   - Create a `.env` file in the `server` directory and add your MongoDB URI and other environment variables as needed.
   ```plaintext
   MONGO_URI=your_mongodb_uri
   PORT=3001
   ```
4. Start the server:
   ```sh
   npm start
   ```

## Project Structure

### Client Side

```plaintext
src/
├── components/
│   ├── Table.tsx
│   ├── TableRow.tsx
│   ├── TableHeader.tsx
│   ├── ScrollControl.tsx
│   └── Filter.tsx
├── hooks/
│   ├── useTableData.ts
│   └── useScroll.ts
├── styles/
│   ├── index.css
│   └── tailwind.css
├── types/
│   └── index.d.ts
├── utils/
│   ├── data.ts
│   └── helpers.ts
└── App.tsx
```

### Server Side

```plaintext
server/
├── models/
│ └── TableData.js
├── routes/
│ └── tableData.js
├── controllers/
│ └── tableDataController.js
├── config/
│ └── db.js
├── middlewares/
│ └── errorHandler.js
├── .env
├── server.js
```

## Highlights

### Clean Code

The codebase adheres to clean code principles:

- **Readability**: Code is easy to read and understand.
- **Maintainability**: Modular and reusable components enhance maintainability.
- **Consistency**: Consistent naming conventions and coding style.

### Reusable Components

The application leverages reusable components:

- **Table Component**: Manages the table structure and data rendering.
- **Scroll Control Component**: Handles the smooth horizontal scrolling functionality.
- **Filter Component**: Provides the filtering mechanism for the table data.

### Tailwind CSS Integration

Tailwind CSS is used for styling:

- **Utility-First**: Enables rapid UI development with utility classes.
- **Responsive Design**: Ensures the application is responsive across different screen sizes.

## Demo

tetrobyte-crm.vercel.app
