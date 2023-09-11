import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);

// TODOs for index
// 1. Add PropTypes
// 2. Add default props
// 3. Add tests
// 4. Add storybook
// 5. Add styles
// TODO idea in the future for index file
// 1. Add a service worker
// 2. Add a manifest file
// 3. Add a robots.txt file
// 4. Add a sitemap.xml file
// 5. Add a humans.txt file
// 6. Add a security.txt file
// 7. Add a ads.txt file
// 8. Add a favicon.ico file
// 9. Add a favicon.svg file
// 10. Add a favicon.png file
// 11. Add a favicon.gif file
// 12. Add a favicon.jpg file
// 13. Add a favicon.jpeg file
// 14. Add a favicon.webp file
// 15. Add a favicon.apng file
// 16. Add a favicon.bmp file
// 17. Add a favicon.tiff file
// 18. Add a favicon.tif file
// 19. Add a favicon.ico file
