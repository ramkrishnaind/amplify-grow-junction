import "../styles/globals.css";
import "../amplify-configure";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper, persistor, store } from "../redux/Store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
