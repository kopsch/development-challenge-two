import { ToastContainer } from "react-toastify";
import Providers from "./providers";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "./themes/muiTheme";
import GlobalStyle from "./themes/global";

const App = () => {
  return (
    <Providers>
      <ThemeProvider theme={muiTheme}>
        <GlobalStyle />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Dashboard />
      </ThemeProvider>
    </Providers>
  );
};

export default App;
