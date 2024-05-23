import mobile from "./images/image-hero-mobile.png"
import desktop from "./images/image-hero-desktop.png"
import audiophile from "./images/client-audiophile.svg"
import databiz from "./images/client-databiz.svg"
import marker from "./images/client-maker.svg"
import meet from "./images/client-meet.svg"

function App() {
  return (
    <>
      <section className=" flex flex-col-reverse md:grid py-12 md:gap-20 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto">
        <article className="text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
          <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl mb-5">Make remote work</h1>
          <p className="mb-5">Get your team in sync, no matter your location. Streamline process, create team rituals, and watch productivity soar.</p>
          <button className="bg-black rounded-lg shadow text-white font-bold hover:opactiy-75 transition-all duration-150 pt-3 pb-2 px-6 cursor-pointer">Learn more</button>
          <ul className=" grid grid-cols-4 gap-2 mt-10 place-items-center md:place-items-start">
            <li><img src={databiz} alt="" className="w-16 md:w-24"></img></li>
            <li><img src={audiophile} alt="" className="w-16 md:w-24"></img></li>
            <li><img src={marker} alt="" className="w-16 md:w-24"></img></li>
            <li><img src={meet} alt="" className="w-16 md:w-24"></img></li>
          </ul>
        </article>

        <article>
          <picture>
            <source media="(min-width: 768px)" srcSet={desktop} />
            <img src={mobile} alt="hero" className="w-full"/>
          </picture>
        </article>
      </section>
    </>
  );
}

export default App;
