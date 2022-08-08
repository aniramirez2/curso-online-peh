import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Landing}  from './components/Landing';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
};

const theme = extendTheme({ colors });

root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
		<Router>
        <Routes>
          <Route path="/:id" element={<Landing />} />
          <Route path="/" element={<App />} />
        </Routes>
    </Router>
		</ChakraProvider>
	</React.StrictMode>
);
