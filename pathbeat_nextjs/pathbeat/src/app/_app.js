import { Provider } from "react-redux";
import { store as reduxStore } from "../redux-store";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../react-query/Client";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import "../styles/globals.css"; // Global styles

function MyApp({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId="your-google-client-id">
      <Provider store={reduxStore}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;
