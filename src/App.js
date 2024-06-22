import './App.css';
import AllAmenities from './components/all-amenities';
import Header from './components/header';
import Overview from './components/overview';
import Overview2 from './components/overview2';

function App() {
  return (
    <div className="App">
      <Header />
      <Overview2 />
      <AllAmenities />
    </div>
  );
}

export default App;
