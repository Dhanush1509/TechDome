import '../styles/globals.css'
import ProgramState from '../context/program/programState'
function MyApp({ Component, pageProps }) {

  return (
    <ProgramState>
      <Component {...pageProps} />
    </ProgramState>
  );
}

export default MyApp
