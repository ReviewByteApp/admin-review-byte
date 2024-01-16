import {Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import SideNav from './components/sidenav/SideNav';
import TopNav from './components/topnav/TopNav';
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Setting from './pages/setting/Setting';
import Post from './pages/post/Post';
import Reviews from './pages/reviews/Reviews';
import Analysis from './pages/analysis/Analysis';

function App () {
  const {pathname} = useLocation ();
  const hideNavbar = ['/register','/'];
  const shouldHideNavbar = hideNavbar.includes (pathname);
  return (
    <div className={!shouldHideNavbar ? 'App' : 'nonav'}>
      {!shouldHideNavbar && <TopNav />}
      {!shouldHideNavbar && <SideNav />}
      <div className="layout">
        <Routes>
          <Route element={<Register />} path="/register" />
          <Route element={<Home />} path="/home" />
          <Route element={<Reviews />} path="/reviews" />
          <Route element={<Analysis />} path="/analysis" />
          <Route element={<Post />} path="/post" />
          <Route element={<Setting />} path="/setting" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
