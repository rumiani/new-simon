import { DataContextProvider } from '../dataContext/dataContext'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return <DataContextProvider>
          <Component {...pageProps} />
        </DataContextProvider>
}

export default MyApp
