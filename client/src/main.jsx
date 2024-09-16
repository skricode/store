import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import TextComp from './components/TextComp.jsx';
import CountCapitalLetters from './components/CountCapitalLetters.jsx';
import Fontsize from './components/Fontsize.jsx';
import Colors from './components/Colors.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        {/* <App /> */}
        {/* <TextComp /> */}
      {/* <CountCapitalLetters/> */}
      {/* <Fontsize/> */}
      {/* <RandomColors /> */}
      <Colors />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
