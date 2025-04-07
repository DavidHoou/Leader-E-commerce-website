import React ,{useEffect} from 'react'
import { Outlet,useLocation } from 'react-router-dom'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import ScrollToTop from '../component/ScrollToTop'


export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    const excludedPaths = ['/fichTechnique', '/reviews'];

    const shouldScroll = !excludedPaths.some((path) =>
      pathname.includes(path)
    );

    if (shouldScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },[pathname])
  return (
    <>
         <ScrollToTop/>
          <NavBar />
          <Outlet />
          <Footer/>
    </>
  )
}
