import React from 'react';
import Home from './pages/Home';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008394',
    },
    secondary: purple,
  },
  typography: {
    fontFamily: 'Raleway',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
});

const App = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyBlQqVqBFALfpY7ELjsROl9wLV5wU_vCks',
    authDomain: 'grocery-list-to-go-again.firebaseapp.com',
    projectId: 'grocery-list-to-go-again',
    storageBucket: 'grocery-list-to-go-again.appspot.com',
    messagingSenderId: '321547169222',
    appId: '1:321547169222:web:58d32a44c41a37ccef16c7',
    measurementId: 'G-SKEYNFQ3JW',
  };

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography
          variant="h2"
          component="h1"
          color="primary"
          align="center"
          className="slogan"
          gutterBottom
        >
          Here is your grocery list to-go! 🛒
        </Typography>
        <Home firestore={firestore} />
      </div>
    </ThemeProvider>
  );
};

export default App;
