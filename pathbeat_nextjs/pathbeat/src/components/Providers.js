// src/app/components/Providers.js

"use client"; // This is a client component

import { Provider } from "react-redux";
import { store as reduxStore } from "@/redux-store";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/react-query/Client";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Providers = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId="your-google-client-id">
      <Provider store={reduxStore}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>
    </GoogleOAuthProvider>
  );
};

export default Providers;
