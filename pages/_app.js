import '../styles/globals.css'
import '../amplify-configure'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../redux/store'
import { useRouter } from 'next/router'
import Student from './student'
import Mentor from './mentor'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// debugger
// toast.configure()

function MyApp({ Component, pageProps }) {
  debugger
  // console.log('toast', toast)
  const router = useRouter()
  if (router.asPath.includes('/mentor/')) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Mentor>
            <Component {...pageProps} />
          </Mentor>
        </PersistGate>
        <ToastContainer />
      </Provider>
    )
  }
  if (router.asPath.includes('/student/')) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Student>
            <Component {...pageProps} />
          </Student>
        </PersistGate>
        <ToastContainer />
      </Provider>
    )
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
      <ToastContainer />
    </Provider>
  )
}

export default MyApp
