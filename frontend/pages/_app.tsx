import { UserProvider } from '@/modules/userContext';
import '../styles/tailwind.css';

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <Component {...pageProps} />;
    </UserProvider>
  )
};

export default App;
