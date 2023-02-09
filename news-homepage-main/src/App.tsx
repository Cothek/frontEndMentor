import { useState, useEffect } from "react";
import "./App.css";
import Logo from "./components/Logo";
import MenuIcon from "./components/MenuIcon";

function App() {
  const [navHidden, setNavHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 770) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  function handleNavHidden() {
    setNavHidden(!navHidden);
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div
      className={`${
        isMobile && !navHidden ? "fixed " : ""
      }bg-off-white text-dark-grayish-blue`}
    >
      <Header
        isMobile={isMobile}
        navHidden={navHidden}
        handleNavHidden={handleNavHidden}
      />
      <Content isMobile={isMobile} />
    </div>
  );
}

export default App;

function Header({
  handleNavHidden = () => {},
  isMobile = false,
  navHidden = true,
}) {
  useEffect(() => {}, [navHidden]);

  return (
    <div className="sticky top-0 flex w-full justify-between bg-off-white px-5 py-2 xs:py-5 xs:px-16 md:px-32 md:pb-12 md:pt-20 xl:px-40">
      <Logo className="z-0 self-center text-5xl font-extrabold" />
      <button className="visible z-10 py-2 md:hidden" onClick={handleNavHidden}>
        <MenuIcon isOpen={navHidden} />
      </button>
      <div
        className={`${
          isMobile
            ? navHidden
              ? "hidden opacity-0"
              : "absolute top-0 left-0 right-0 h-screen bg-black/30 opacity-100 transition-opacity duration-500"
            : "hidden"
        }`}
        onClick={handleNavHidden}
      ></div>
      <div
        className={`${
          isMobile
            ? navHidden
              ? "w-0 overflow-hidden p-0"
              : "w-[min(75%,300px)] p-8"
            : ""
        } absolute top-0 right-0 flex h-screen flex-col gap-2 bg-off-white pt-36 transition-all duration-500 ease-in-out md:relative md:right-auto md:top-auto md:flex md:h-auto md:w-auto md:flex-row md:gap-8 md:p-0 lg:gap-11`}
      >
        <a className="py-2 hover:text-soft-red" href="">
          Home
        </a>
        <a className="py-2 hover:text-soft-red" href="">
          New
        </a>
        <a className="py-2 hover:text-soft-red" href="">
          Popular
        </a>
        <a className="py-2 hover:text-soft-red" href="">
          Trending
        </a>
        <a className="py-2 hover:text-soft-red" href="">
          Categories
        </a>
      </div>
    </div>
  );
}

function Content({ isMobile }: { isMobile: Boolean }) {
  return (
    <div className="grid h-full grid-flow-row grid-cols-1 gap-8 px-5 pb-5 xs:px-16 xs:pb-16 md:px-32 md:pb-32 lg:grid-cols-3 xl:px-40">
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-2">
        <img
          className="min-h-[300px] object-cover md:col-span-2"
          src={
            isMobile
              ? `./images/image-web-3-mobile.jpg`
              : `./images/image-web-3-desktop.jpg`
          }
          alt=""
        />
        <h1 className="text-6xl font-extrabold text-very-dark-blue">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex flex-col place-items-start gap-8">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="text-md bg-soft-red px-7 py-3 font-bold tracking-[0.2em] text-off-white hover:bg-very-dark-blue">
            READ MORE
          </button>
        </div>
      </section>
      <section className="text-white item grid items-center gap-2 bg-very-dark-blue p-6 text-grayish-blue">
        <h2 className="text-4xl font-bold text-soft-orange">New</h2>
        <a className="group" href="">
          <h3 className="mb-2 text-xl font-bold text-off-white group-hover:text-soft-orange">
            Hydrogen VS Electric Cars
          </h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </a>
        <hr className="" />
        <a className="group" href="">
          <h3 className="mb-2 text-xl font-bold text-off-white group-hover:text-soft-orange">
            The Downsides of AI Artistry
          </h3>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </a>
        <hr className="" />
        <a className="group" href="">
          <h3 className="mb-2 text-xl font-bold text-off-white group-hover:text-soft-orange">
            Is VC Funding Drying Up?
          </h3>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </a>
      </section>
      <section className="grid grid-cols-1 gap-8 lg:col-span-3 lg:grid-cols-3 lg:pt-8">
        <a className="group flex cursor-pointer gap-6">
          <img
            className="h-full max-w-[115px] object-cover"
            src="./images/image-retro-pcs.jpg"
            alt=""
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-grayish-blue">01</h2>
            <h3 className="text-lg font-bold text-very-dark-blue group-hover:text-soft-red">
              Reviving Retro PCs
            </h3>
            <p className="grow">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </a>
        <a className="group flex cursor-pointer gap-6">
          <img
            className="h-full max-w-[115px] object-cover"
            src="./images/image-top-laptops.jpg"
            alt=""
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-grayish-blue">02</h2>
            <h3 className="text-lg font-bold text-very-dark-blue group-hover:text-soft-red">
              Top 10 Laptops of 2022
            </h3>
            <p className="grow">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </a>
        <a className="group flex cursor-pointer gap-6">
          <img
            className="h-full max-w-[115px] object-cover"
            src="./images/image-gaming-growth.jpg"
            alt=""
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-grayish-blue">03</h2>
            <h3 className="text-lg font-bold text-very-dark-blue group-hover:text-soft-red">
              The Growth of Gaming
            </h3>
            <p className="grow">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </a>
      </section>
    </div>
  );
}
