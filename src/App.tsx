
import Navbar from './components/layout/Navbar';
import Router from './Router';

function App() {
  return (
    <div
      style={{
        marginLeft: 'calc((100vw - 1520px) /2)',
        marginRight: 'calc((100vw - 1520px) /2)',
      }}>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
