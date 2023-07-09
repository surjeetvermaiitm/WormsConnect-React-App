import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Component/Layout";
import theme from "./theme";

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Layout />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
