# React Large Table with Smooth Horizontal Scrolling

## Overview

This project demonstrates a React application featuring a large table with smooth horizontal scrolling. The table content moves using user-defined controls, offering a seamless user experience. The project emphasizes clean code practices and reusable components to ensure maintainability and scalability.

## Features

- **Large Data Table**: Handles large datasets efficiently.
- **Smooth Horizontal Scrolling**: Table content moves smoothly without relying on the default scrollbar.
- **Filter Mechanism**: Users can filter data by city and street, enhancing data accessibility.
- **Reusable Components**: Modular components that can be reused across different parts of the application.
- **Clean Code**: Adherence to best coding practices for readability and maintainability.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/lomsadze123/tetrobyte-crm.git
   ```
2. Navigate to the project directory:
   ```sh
   cd large-table-scroll
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

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
