import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';

import App from './App';
import theme from './theme';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </StrictMode>
);
