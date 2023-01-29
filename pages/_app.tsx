import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "../src/frontend/theme/ThemeProvider";
import "normalize.css";
import "../static/baseStyle.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const style = document.getElementById("server-side-styles");
    if (style && style.parentNode) {
      style.parentNode.removeChild(style);
    }
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
