import React from 'react'
import { Outlet, HashRouter, Routes, Route } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Analytics from './Analytics';
import Dashboard from './Dashboard';

const Routing = () => {
  return (
    <div>
      {/* <HashRouter> */}


        <Routes>

          <Route path='/' element={<React.Suspense fallback={<h2>Loading...</h2>}>
            <Login />
          </React.Suspense>} />
          <Route path='register' element={<React.Suspense fallback={<h2>Loading...</h2>}>
            <Register />
          </React.Suspense>} />
          <Route path='analytics' element={<React.Suspense fallback={<h2>Loading...</h2>}>
            <Analytics/>
          </React.Suspense>} />
          <Route path='dashboard' element={<React.Suspense fallback={<h2>Loading...</h2>}>
            <Dashboard/>
          </React.Suspense>} />
       
          <Route path='login' element={
            <React.Suspense fallback={<h2>Loading...</h2>}>
              <Outlet />
            </React.Suspense>
          }>

            {/* <Route path='home' element={<React.Suspense fallback={<h2>Loading...</h2>}>
              <AppBar />
            </React.Suspense>} /> */}
            <Route path='login' element={<React.Suspense fallback={<h2>Loading...</h2>}>
              <Login />
            </React.Suspense>} />
            <Route path='register' element={<React.Suspense fallback={<h2>Loading...</h2>}>
              <Register />
            </React.Suspense>} />
            <Route path='analytics' element={<React.Suspense fallback={<h2>Loading...</h2>}>
              <Analytics />
            </React.Suspense>} />
            <Route path='dashboard' element={<React.Suspense fallback={<h2>Loading...</h2>}>
              <Dashboard />
            </React.Suspense>} />


          </Route>


        </Routes>


      {/* </HashRouter> */}
    </div>



  )
};

export default Routing;