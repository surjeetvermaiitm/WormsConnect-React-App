import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Component/Layout";
import theme from "./theme";
import Username from "./RoundTwoComponent/Username";
import Groccery from "./RoundTwoComponent/Groccery";
import Gallery from "./RoundTwoComponent/Gallery";

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Layout />} />
            <Route path="/username" element={<Username />} />
            <Route path="/groccery" element={<Groccery />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
