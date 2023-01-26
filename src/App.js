import logo from './logo.svg';
import './App.css';
import Review from './Review';

function App() {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"><hr /></div>
        </div>
        <div className="">
          <Review/>
        </div>
      </div>
    </main>
  );
}

export default App;
