import React from 'react'
import AppBar from './AppBar';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import {HashRouter, Routes, Route} from 'react-router-dom'

function NavBar() {
    

    return (
        <div>
            
            {/* <HashRouter> */}
                

                <Routes>
                    <Route path='/' element={<AppBar/>}/>
                    <Route path='/register' element={<Register/>} /> 
                    <Route path='/login' element={<Login/>} /> 
                    <Route path='/dashboard' element={<Dashboard/>}/>

              
                     <Route path='/' element={<AppBar />} />
                     <Route path='/login' element={<Login/>}   />
                     <Route path='/dashboard' element={<Dashboard/>}/>

                     {/* <Route path='/register' element={<Register/>}/>                    */}
{/* 
                     <React.Suspense fallback={<h2>Loading....</h2>}>
                            <App />
                        </React.Suspense> */}
                 
                    
                   
                </Routes>

                
            {/* </HashRouter> */}



        </div>

    );
}

export default NavBar;