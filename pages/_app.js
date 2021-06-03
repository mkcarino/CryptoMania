import '../styles/globals.css'
import {AuthProvider} from "../contexts/AuthContext";
import {PortProvider} from "../contexts/PortContext";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <PortProvider>
      <Component {...pageProps} />
      </PortProvider>
    </AuthProvider>
  ) 
}

export default MyApp
