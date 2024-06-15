// routes/routes.jsx
import { Route, createRoutesFromElements } from "react-router-dom";
import Page404 from "../Pages/Page404/Page404.jsx";
import HomePage from "../Pages/HomePage.jsx";
import ChatPage from "../Pages/ChatPage.jsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<HomePage />} />
      <Route path="chats" element={<ChatPage />} />

      <Route path="*" element={<Page404 />} />
    </Route>
  )
);
