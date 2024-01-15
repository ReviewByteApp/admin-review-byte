import './App.css';
import SideNav from './components/sidenav/SideNav';
import TopNav from './components/topnav/TopNav';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <SideNav/>
      <Dashboard/>
    </div>
  );
}

export default App;
