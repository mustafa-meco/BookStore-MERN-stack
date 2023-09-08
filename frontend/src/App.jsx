import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

// TODOs for App
// 1. Add PropTypes
// 2. Add default props
// 3. Add tests
// 4. Add storybook
// 5. Add styles
// Ideas for App
// 1. Add a navbar
// 2. Add a footer
// 3. Add a sidebar
// 4. Add a modal
// 5. Add a toast
// 6. Add a spinner
// 7. Add a loader
// 8. Add a progress bar
// 9. Add a slider
// 10. Add a carousel
// 11. Add a dropdown
// creative ideas for App
// 1. Add a dark mode
// 2. Add a light mode
// 3. Add a toggle button for dark and light mode
// 4. Add a toggle button for navbar
// 5. Add a toggle button for footer
// 6. Add a toggle button for sidebar
// 7. Add a toggle button for modal
// 8. Add a toggle button for toast
// 9. Add a toggle button for spinner
// 10. Add a toggle button for loader
// 11. Add a toggle button for progress bar
// 12. Add a toggle button for slider
// 13. Add a toggle button for carousel
// 14. Add a toggle button for dropdown

export default App;
