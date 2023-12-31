"use client";

import { persistor, store } from "./configureStore";
import { Provider } from "react-redux";
// import { PersistGate } from "";
import { PersistGate } from "redux-persist/integration/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
