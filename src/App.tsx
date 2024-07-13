import { Route, Routes } from "react-router-dom";
import { UIProvider } from "@yamada-ui/react";
import "./App.css";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { MyPage } from "./pages/MyPage";
import { Pickup } from "./pages/Pickup";
import { Detail } from "./pages/Detail";
import { RelationArticle } from "./components/RelationArticle";

const App: React.FC = () => {
  return (
    <UIProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/post"></Route>
          <Route path="/profile"></Route>
          <Route path="/relation" element={<RelationArticle />}></Route>
          <Route path="/pickup" element={<Pickup />}></Route>
        </Route>
      </Routes>
    </UIProvider>
  );
};

export default App;
