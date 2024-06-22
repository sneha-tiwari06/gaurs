import './App.css';
import AllAmenities from './components/all-amenities';
import Header from './components/header';
import Overview from './components/overview';

function App() {
  return (
    <div className="App">
      <Header />
      <Overview />
      <AllAmenities />
    </div>
  );
}

export default App;
