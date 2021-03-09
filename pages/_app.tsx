import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/global.css";
import { DEFAULT_THEME } from "../core/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute={"class"} defaultTheme={DEFAULT_THEME}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
