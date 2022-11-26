import '../styles/globals.css'
import '../amplify-configure'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../redux/store'
import { useRouter } from 'next/router'
import Mentor from './mentor'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  if (router.asPath.includes('/mentor/')) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Mentor>
            <Component {...pageProps} />
          </Mentor>
        </PersistGate>
      </Provider>
    )
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
