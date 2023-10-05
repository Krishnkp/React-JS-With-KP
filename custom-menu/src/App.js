import "./App.css";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
const menus = [
  {
    title: "Welcome",
    icon: "fa fa-universal-access",
  },
  {
    title: "About",
    icon: "fa fa-bullseye",
  },
  {
    title: "Services",
    icon: "fa fa-braille",
  },
  {
    title: "Resume",
    icon: "fa fa-id-badge",
  },
  {
    title: "Works",
    icon: "fa fa-life-ring",
  },
  {
    title: "Testimonials",
    icon: "fa fa-clipboard",
  },
  {
    title: "Contact",
    icon: "fa fa-map-signs",
  },
];

const menu = menus;
// const menu = [];
const numMenu = menu.length;

// const hour = new Date().getHours();
// const openHour = 10;
// const closeHour = 19;
// const isOpen = hour >= openHour && hour <= closeHour;
// console.log(isOpen);

function App() {
  return (
    <>
      {/* {isOpen ? null : <Article />} */}

      {numMenu > 0 ? (
        <>
          <main className="site-wrapper">
            <div className="pt-table desktop-768">
              <div className="pt-tablecell page-home relative">
                <div className="overlay"></div>

                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                      <div className="page-title  home text-center">
                        <span className="heading-page">
                          Welcome to the KP Trailblazers
                        </span>
                        <p className="mt20">
                          KP Trailblazers is the IT company of tomorrow,
                          dedicated to innovation, growth, and transformation.
                          Our vision is to lead the way in pioneering solutions
                          that shape the future of technology. Stay tuned for a
                          trailblazing journey where possibilities are limitless
                          with KP Trailblazers.
                        </p>
                      </div>
                      <div className="hexagon-menu clear">
                        {menu.map((menu) => (
                          <Menu titleObj={menu} key={menu.title} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </>
      ) : (
        <Article />
      )}
    </>
  );
}

export default App;
