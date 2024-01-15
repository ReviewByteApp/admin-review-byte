import { Route, Routes ,useLocation } from 'react-router-dom'
import './App.css';
import SideNav from './components/sidenav/SideNav';
import TopNav from './components/topnav/TopNav';
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/register/Register';

function App() {
  const {pathname}=useLocation()
  const hideNavbar = ["/register"];
  const shouldHideNavbar = hideNavbar.includes(pathname);
  return (
    <div className={!shouldHideNavbar?"App":"nonav"}>
      {!shouldHideNavbar && <TopNav/>}
      {!shouldHideNavbar && <SideNav/>}
      <Routes>
      <Route element={<Register/>} path='/register'/>
      <Route element={<Dashboard/>} path='/'/>
    </Routes>
    </div>
  );
}

export default App;
