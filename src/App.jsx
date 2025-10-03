import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRouters } from './routers'
import Navbar from './layout/Navbar'
import Loading from './components/common/Loadding'
function App() {
  return (
    <Navbar>
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            {publicRouters.map((route, index) => {
              const Page = route.component
              return <Route key={route?.keyPage} path={route?.path} element={<Page />} />
            })}
          </Routes>
        </Router>
      </Suspense>
    </Navbar>
  )
}

export default App
