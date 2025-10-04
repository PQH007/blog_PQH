import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { privateRouters, publicRouters } from './routers'
import Navbar from './layout/Navbar'
import Loading from './components/common/Loadding'
function App() {
  return (
    <Navbar>
      <Suspense fallback={<Loading />}>
        <Routes>
          {publicRouters.map((route, index) => {
            const Page = route.component
            return <Route key={route?.keyPage} path={route?.path} element={<Page />} />
          })}
          {
            privateRouters.map((route, index) => {
              const Page = route.component
              return <Route key={route?.keyPage} path={route?.path} element={<Page />} />
            })
          }
        </Routes>
      </Suspense>
    </Navbar>
  )
}

export default App
