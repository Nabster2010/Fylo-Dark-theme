import { useState } from "react";
import "./App.css";
import { cardData } from "./cardData";
import Card from "./components/Card";

const App = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEmail.test(email)) {
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError(true);
      return;
    }
    setError(validateEmail(email));
  };

  return (
    <div className="w-full min-h-screen bg-DarkBlueIntro py-8 font-OpenSans">
      <header className="px-16 ">
        <nav className="flex justify-between items-center text-White ">
          <div className="">
            <img
              src="/images/logo.svg"
              className="max-w-full h-auto"
              alt="logo"
              width="150"
              height="150"
            />
          </div>
          <ul className="flex justify-center items-center gap-8 ">
            <li className="cursor-pointer hover:opacity-70 transition">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="cursor-pointer hover:opacity-70 transition">
              <a className="nav-link" href="#">
                Team
              </a>
            </li>
            <li className="cursor-pointer hover:opacity-70 transition">
              <a className="nav-link" href="#">
                SignIn
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="bg-DarkBlueMain">
        <section className="bg-sectionMobile bg-DarkBlueIntro bg-bottom md:bg-sectionDesktop bg-contain bg-no-repeat flex flex-col justify-center items-center mt-16  gap-8 px-16 text-White">
          <div className="max-w-md">
            <img
              className="max-w-full h-auto bg-cover"
              src="/images/illustration-intro.png"
              alt=""
            />
          </div>

          <h1 className="max-w-md text-center text-3xl font-Raleway font-bold leading-normal ">
            All your files in one secure location, accessible anywhere
          </h1>
          <p className="max-w-md text-center px-4">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="font-Raleway font-bold  rounded-3xl px-20 py-3 bg-gradient-to-r from-[#65e2d9] to-[#339ecc]">
            Get Started
          </button>
        </section>
        <section className=" flex flex-col justify-center items-center mt-24 ">
          <div className="grid md:grid-cols-2 items-start justify-center gap-20">
            {cardData.map((item) => (
              <Card
                key={item.title}
                img={item.img}
                title={item.title}
                txt={item.txt}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col md:flex-row justify-center pt-16 pb-24 px-16 gap-8  bg-cover bg-center w-full mt-16 ">
          <div className="flex-1 md:pl-8 pt-8">
            <img
              className="max-w-full h-auto bg-cover"
              src="/images/illustration-stay-productive.png"
              alt=""
            />
          </div>
          <article className="flex-1 flex flex-col  md:pr-16 pt-8 self-center text-White">
            <div className="space-y-4 flex flex-col">
              <h1 className="text-2xl text-VeryDarkBlue font-bold font-Raleway text-center md:text-start">
                Stay productive, wherever you are
              </h1>
              <p className="text-DesaturatedBlue text-sm  ">
                Never let location be an issue when accessing our files. Flo has
                vou covered for all of your file storage needs.
              </p>
              <p className="text-DesaturatedBlue text-sm  ">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required!
              </p>
              <div className="inline-flex items-center md:self-start self-center justify-start gap-2 border-b border-Cyan group hover:border-White hover:text-White cursor-pointer transition">
                <small className="text-Cyan group-hover:text-white text-xs leading-7">
                  See how Fylo works
                </small>
                <img src="/images/icon-arrow.svg" alt="" />
              </div>
            </div>
          </article>
        </section>
        <section className="relative z-10 mx-16 grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8">
          <img
            src="/images/bg-quotes.png"
            alt=""
            className="absolute -top-8 -left-2 -z-10 "
          />
          <div className="bg-DarkBlueTestimonials text-White px-6 py-8 flex flex-col justify-center items-start shadow-2xl rounded">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex justify-start items-center mt-4">
              <img
                src="/images/profile-1.jpg"
                alt=""
                className="rounded-full w-8 h-8"
              />

              <div className="ml-4">
                <h4 className="text-sm font-bold">Satish Patel</h4>
                <h4 className="text-xs">Founder & CEO, Huddle</h4>
              </div>
            </div>
          </div>
          <div className="bg-DarkBlueTestimonials text-White px-6 py-8 flex flex-col justify-center items-start shadow-2xl rounded">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex justify-start items-center mt-4">
              <img
                src="/images/profile-2.jpg"
                alt=""
                className="rounded-full w-8 h-8"
              />

              <div className="ml-4">
                <h4 className="text-sm font-bold">Bruce McKenzie</h4>
                <h4 className="text-xs">Founder & CEO, Huddle</h4>
              </div>
            </div>
          </div>
          <div className="bg-DarkBlueTestimonials text-White px-6 py-8 flex flex-col justify-center items-start shadow-2xl rounded">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex justify-start items-center mt-4">
              <img
                src="/images/profile-3.jpg"
                alt=""
                className="rounded-full w-8 h-8"
              />

              <div className="ml-4">
                <h4 className="text-sm font-bold"> Iva Boyd</h4>
                <h4 className="text-xs">Founder & CEO, Huddle</h4>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center mt-24">
          <div className="-mb-20 w-[90%] md:w-[80%] lg:w-[70%] rounded shadow-2xl md:px-24 px-6 py-12 bg-DarkBlueIntro text-White text-center flex flex-col gap-4 justify-center items-center">
            <h1 className="font-Raleway font-bold text-2xl tracking-widest">
              Get early access today
            </h1>
            <p className="text-sm">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row w-full gap-4 "
            >
              <div className="flex-1 relative">
                <input
                  className={`py-3 text-black w-full inline-block outline-none border pl-8 rounded-3xl  placeholder:text-xs ${
                    error ? "border-LightRed" : "border-transparent"
                  } `}
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                />
                {error && (
                  <span className="absolute -bottom-6 left-4 text-xs text-start text-LightRed">
                    Please enter valid email
                  </span>
                )}
              </div>
              <button className="font-Raleway mt-4 md:mt-0 font-bold  rounded-3xl px-8 py-3 bg-gradient-to-r from-[#65e2d9] to-[#339ecc] whitespace-nowrap hover:bg-[#339ecc] transition">
                Get Started For Free
              </button>
            </form>
          </div>
        </section>

        <footer className=" bg-DarkBlueFooter py-24  px-16 text-sm flex flex-col justify-center items-start   ">
          <img
            src="/images/logo.svg"
            alt=""
            width="150"
            height="150"
            className="w-40 h-auto mt-20"
          />
          <div className="flex w-full flex-col md:flex-row gap-12  justify-between items-start ">
            <div className=" space-y-6 text-start w-[16rem] ">
              <p className="text-White">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, amet.
              </p>
            </div>
            <ul className=" space-y-6 text-white ">
              <a
                href="tel:+1-543-123-4567"
                className="flex gap-4 items-center text-white whitespace-nowrap "
              >
                <img src="/images/icon-phone.svg" alt="" />
                <span>phone:+1-543-123-4567</span>
              </a>
              <a
                href="mailto:example@fylo.com"
                className="flex gap-4 items-center text-white "
              >
                <img src="/images/icon-email.svg" alt="" />
                <span>example@fylo.com</span>
              </a>{" "}
            </ul>
            <ul className=" space-y-6 text-white ">
              <li className="transition hover:text-LightGray whitespace-nowrap">
                <a href="#">About Us</a>
              </li>
              <li className="transition hover:text-LightGray">
                <a href="#">Jobs</a>
              </li>
              <li className="transition hover:text-LightGray">
                <a href="#">Press</a>
              </li>
              <li className="transition hover:text-LightGray">
                <a href="#">Blogs</a>
              </li>
            </ul>
            <ul className=" space-y-6 text-white ">
              <li className="transition hover:text-LightGray whitespace-nowrap">
                <a href="#">Contact Us</a>
              </li>
              <li className="transition hover:text-LightGray">
                <a href="#">Terms</a>
              </li>
              <li className="transition hover:text-LightGray">
                <a href="#">Privacy</a>
              </li>
              <li className="transition hover:text-LightGray">
                <a href="#">Blogs</a>
              </li>
            </ul>
            <div className="flex gap-4 self-center  md:self-start">
              <div className="w-8 h-8 border transition hover:text-BrightBlue hover:border-BrightBlue text-white grid place-items-center border-white rounded-full">
                <a
                  href="#"
                  className="cursor-pointer  fa-brands fa-facebook-f  "
                />
              </div>
              <div className="w-8 h-8 border transition hover:text-BrightBlue hover:border-BrightBlue text-white grid place-items-center border-white rounded-full">
                <a href="#" className="cursor-pointer  fa-brands fa-twitter " />
              </div>
              <div className="w-8 h-8 border transition hover:text-BrightBlue hover:border-BrightBlue text-white grid place-items-center border-white rounded-full">
                <a
                  href="#"
                  className="cursor-pointer  fa-brands fa-instagram  "
                />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
