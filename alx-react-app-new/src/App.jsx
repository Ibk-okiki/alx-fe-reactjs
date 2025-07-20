// src/App.js

export default App;

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter'; // 🆕 Import

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Counter /> {/* 🆕 Add counter here */}
      <Footer />
    </div>
  );
}

export default App;
