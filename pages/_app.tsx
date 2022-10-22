import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

function MyApp({
  Component,
  pageProps,
}: AppProps & { pageProps: SessionProviderProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
