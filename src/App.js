import React, { } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes/Routes'
import { ThemeProvider } from './context'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
