import React from 'react';
import {ThemeProvider} from './src/context/ThemeContext.tsx';
import Home from './src/pages/Home';
import {FontSizeProvider} from './src/context/FontSizeContext.tsx';

function App(): React.JSX.Element {
  return (
    <FontSizeProvider>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </FontSizeProvider>
  );
}

export default App;
