import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import Validate from "./Pages/Validate";
import Footer from "./Components/Footer";

import { ThemeProvider } from "@mui/material/styles";
import themeOptions from "./Theme";

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path="/" element={<Validate />} />
        <Route path="/validate" element={<Validate />}>
          <Route path=":ID" element={<Validate />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
