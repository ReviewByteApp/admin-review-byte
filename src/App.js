import { Route, Routes ,useLocation } from 'react-router-dom'
import './App.css';
import SideNav from './components/sidenav/SideNav';
import TopNav from './components/topnav/TopNav';
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Setting from './pages/setting/Setting';

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
      <Route element={<Home/>} path='/home'/>
      <Route element={<Setting/>} path='/setting'/>
      <Route element={<Dashboard/>} path='/'/>
    </Routes>
    </div>
  );
}

export default App;
