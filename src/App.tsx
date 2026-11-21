import { Routes, Route } from "react-router";
import HomePage from "./pages/home_page/home_page";
import Layout from "./components/layout/layout";
import ArticulePage from "./pages/article_page/articule_page";
import { ArticulesListTotal } from "./utils/articules";
import ScrollToTop from "./effects/ScrollToTop";
import GitHubPage from "./pages/creator_page/creator_page";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/article/:titulo"
            element={<ArticulePage articules={ArticulesListTotal} />}
          />
          <Route path="/creator" element={<GitHubPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
