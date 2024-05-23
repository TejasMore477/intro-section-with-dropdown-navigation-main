import { useState } from "react"

import mobile from "./images/image-hero-mobile.png"
import desktop from "./images/image-hero-desktop.png"
import audiophile from "./images/client-audiophile.svg"
import databiz from "./images/client-databiz.svg"
import marker from "./images/client-maker.svg"
import meet from "./images/client-meet.svg"
import logo from "./images/logo.svg"
import chevronDown from "./images/icon-arrow-down.svg"
import chevronUp from "./images/icon-arrow-up.svg"
import menuOpen from "./images/icon-menu.svg"
import closeMenu from "./images/icon-close-menu.svg"
import todolist from "./images/icon-todo.svg"
import calendar from "./images/icon-calendar.svg"
import reminders from "./images/icon-reminders.svg"
import planning from "./images/icon-planning.svg"


function App() {
  const [openFeature, setFeatures] =  useState(false)
  const [opencompany, setCompany] = useState(false)


  const handelOpenMenu = () => {
    const navbar = document.querySelector(".navbar")
    const menuButton = document.querySelector(".menu-button")

    navbar.classList.toggle("open")

    if(navbar.classList.contains("open")) {
      menuButton.src = closeMenu
    } else {
      menuButton.src = menuOpen
    }
  }


  return (
    <>
      <header className="p-5 flex justify-between items-center">
        <div className="lg:flex justify-start items-start">
          <img src={logo} alt="" className="lg:mr-6"/>

          <nav className="navbar open">
            <div>
              <button onClick={()=>setFeatures(!openFeature)} className="flex items-center justify-start">
                Feature {openFeature ? <img src={chevronUp} alt="" className="ml-2" /> : <img src={chevronDown} alt="" className="ml-2" />}
              </button>


              {openFeature &&               <ul className="mt-2 lg:p-3 lg:shadow">
                <li className="flex items-center justify-start text-small mb-2">
                   <img src={todolist} alt="" className="mr-2"/>ToDO List
                </li>

                <li className="flex items-center justify-start text-small mb-2">
                   <img src={calendar} alt="" className="mr-2"/>Calendar
                </li>

                <li className="flex items-center justify-start text-small mb-2">
                   <img src={reminders} alt="" className="mr-2"/>Reminders
                </li>

                <li className="flex items-center justify-start text-small mb-2">
                   <img src={planning} alt="" className="mr-2"/>Planning
                </li>

              </ul>}
            </div>

            <div>
              <button onClick={()=>setCompany(!opencompany)} className="flex items-center justify-start">
                Company {opencompany ? <img src={chevronUp} alt="" className="ml-2 " /> : <img src={chevronDown} alt="" className="ml-2" />}
              </button>

              {opencompany &&               <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                <li className="flex items-center justify-start text-small mb-2">
                   History
                </li>

                <li className="flex items-center justify-start text-small mb-2">
                    Our Team
                </li>

                <li className="flex items-center justify-start text-small mb-2">
                    Blog
                </li>

              </ul>}
            </div>

            <div className="mb-2 lg:mb2">
              <button>Careers</button>
            </div>

            <div>
              <button>About</button>
            </div>
          </nav>

        </div>

        <div className="lg:hidden">
          <button onClick={handelOpenMenu}>
            <img src={menuOpen} alt="" className="menu-button"/>
          </button>
        </div>

        <div className="hidden lg:block">
          <button className="mr-10 opacity-75">Login</button>
          <button className="border-2 border-black opacity-75 px-6 py-2 rounded-xl">Register</button>
        </div>
      </header>


      <section className=" flex flex-col-reverse md:grid py-20 md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto">
        
        <article className="text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
          <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl mb-5">
            Make remote work
          </h1>
          <p className="mb-5">
            Get your team in sync, no matter your location. 
            Streamline process, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-black rounded-lg shadow text-white font-bold hover:opactiy-75 transition-all duration-150 pt-3 pb-2 px-6 cursor-pointer">
            Learn more
          </button>
          
          <ul className=" grid grid-cols-4 gap-1 mt-10 place-items-center md:place-items-start">
            <li>
              <img src={databiz} alt="" className="w-16 md:w-24"/>
            </li>

            <li>
              <img src={audiophile} alt="" className="w-16 md:w-24"/>
            </li>

            <li>
              <img src={marker} alt="" className="w-16 md:w-24"/>
            </li>

            <li>
              <img src={meet} alt="" className="w-16 md:w-24"/>
            </li>
          </ul>
        </article>

        <article>
          <picture>
            <source media="(min-width: 768px)" srcSet={desktop} />
            <img src={mobile} alt="hero" className="w-full"/>
          </picture>
        </article>

      </section>

      <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/TejasMore477/intro-section-with-dropdown-navigation-main">Tejas More</a>.
    </div>
    </>
  );
}

export default App;
