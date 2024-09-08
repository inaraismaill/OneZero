import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../page/Menu";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
