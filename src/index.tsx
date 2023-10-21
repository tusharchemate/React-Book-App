import { createRoot } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBooks from "./components/AddBook";
import BookContainer from "./container/BookContainer";
import ViewBook from "./components/ViewBook";
const rootElement = document.getElementById("root");

// New as of React v18.x
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<BookContainer />} />
          <Route path="/addBook" element={<AddBooks />} />
          <Route path="/edit/:id" element={<AddBooks />} />
          <Route path="/view/:id" element={<ViewBook />} />
        </Routes>
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
