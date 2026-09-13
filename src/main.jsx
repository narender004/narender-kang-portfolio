import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/* Simple inline SVG icon component */
const Icon = ({ type, size = 18 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),

    external: (
      <>
        <path d="M14 3h7v7" />
        <path d="M10 14 21 3" />
        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
      </>
    ),

    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),

    zap: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />,

    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),

    menu: (
      <>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </>
    ),

    close: (
      <>
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </>
    ),

    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5 0 3.8.5 3.8.5A5.1 5.1 0 0 0 3.7 4 5.5 5.5 0 0 0 2.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
        <path d="M8 18c-3 .9-3-1.5-4.2-2" />
      </>
    ),

    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 11v5" />
        <path d="M8 8v.01" />
        <path d="M12 16v-5" />
        <path d="M12 13a3 3 0 0 1 6 0v3" />
      </>
    ),
  };

  return <svg {...common}>{paths[type]}</svg>;
};

const projects = [
  {
    name: "Redtag",
    tag: "Travelling",
    desc: "Mobile shopping experience focused on a polished, production-ready customer journey.",
    link: "https://play.google.com/store/apps/details?id=com.redtagapp.mobile",
  },
  {
    name: "Ooredoo Kuwait",
    tag: "Telecom & Digital Services",
    desc: "Mobile app for balances, prepaid recharge, postpaid bill payment, balance transfer, offers, device shopping and eSIM access.",
    link: "https://play.google.com/store/apps/details?id=com.wataniya",
  },
  {
    name: "The Beer Store",
    tag: "E-commerce & Delivery",
    desc: "Ordering and delivery experience with store discovery, product search, filtering, order tracking and notifications.",
    link: "https://play.google.com/store/apps/details?id=com.beerstore&hl=en_IN",
  },
  {
    name: "WaysExpress",
    tag: "Shopping & Delivery",
    desc: "Shopping application for products, price comparison, reviews, wish lists, reorder flows, delivery updates and secure transactions.",
    link: "https://play.google.com/store/apps/details?id=com.waysexpress",
  },
  {
    name: "MinuteBag",
    tag: "Shopping & Commerce",
    desc: "Mobile commerce application included among Narender's production project portfolio.",
    link: "https://play.google.com/store/apps/details?id=com.minutebag",
  },
  {
    name: "Wedding Velvet",
    tag: "Photography & Events",
    desc: "Wedding photography platform for discovering and sharing event photos and media.",
    link: "https://play.google.com/store/apps/details?id=com.photography.weddingvelvet",
  },
];

const otherProjects = [
  {
    name: "PlanTech",
    desc: "Field-team management with geo-fencing, check-in/out, timesheets, tasks, equipment tracking, QR/barcode inventory and project workflows.",
  },
  {
    name: "Sons of Korah",
    desc: "Content-rich mobile experience with music, videos, Psalms, offline playback, sheet music, commentaries, podcasts, forums and playlists.",
  },
];

const skills = [
  "React Native",
  "React",
  "JavaScript",
  "Android",
  "iOS",
  "REST APIs",
  "Redux",
  "Native APIs",
  "Native Modules",
  "Node.js",
  "MySQL",
  "MongoDB",
  "Git",
  "CI/CD",
  "Payment Gateways",
  "App Store Deployment",
];

const experience = [
  [
    "TRUQUANTUM IT India",
    "Software Engineer",
    "Oct 2025 – Present",
    "Develop cross-platform Android/iOS apps; guide mobile developers; coordinate product, UI/UX and backend; integrate APIs, SDKs and payment gateways; resolve crashes and performance issues.",
  ],
  [
    "Digitral Pvt. Ltd.",
    "Software Engineer",
    "Dec 2022 – Sep 2025",
    "Developed reusable React Native applications for Android and iOS, built responsive interfaces and collaborated across product, design and engineering in Agile teams.",
  ],
  [
    "Tezlogic Software (OPC) Pvt. Ltd.",
    "Software Engineer",
    "Nov 2021 – Dec 2022",
    "Built React Native applications, integrated third-party libraries, supported responsive multi-device experiences and applied performance optimization.",
  ],
  [
    "Suffescom Solutions Inc",
    "Software Engineer",
    "Oct 2019 – Jul 2020",
    "Integrated custom native modules, set up CI/CD pipelines and applied testing/QA practices for React Native applications.",
  ],
  [
    "Solitaire Infosys Pvt. Ltd.",
    "Software Engineer",
    "Feb 2019 – Sep 2019",
    "Implemented live and OTA updates, accelerated development with hot reloading/dev tools and integrated native device features.",
  ],
  [
    "PiZone Infotech Solution Pvt. Ltd.",
    "Software Engineer",
    "Feb 2018 – Dec 2018",
    "Used Native APIs, modular/reusable architecture and high-performance React Native development across Android and iOS.",
  ],
  [
    "Functionae Technologies Pvt. Ltd.",
    "Software Engineer",
    "Apr 2017 – Dec 2017",
    "Built mobile applications using React Native, JavaScript and React with a shared codebase for Android and iOS.",
  ],
];

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setOpen(false);

    window.addEventListener("resize", fn);

    return () => {
      window.removeEventListener("resize", fn);
    };
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <div className="app">
      <header className="nav">
        <div className="wrap navin">
          <a className="brand" href="#top">
            NK<span>.</span>
          </a>

          <nav className={open ? "navlinks open" : "navlinks"}>
            {["about", "skills", "projects", "experience", "contact"].map(
              (x) => (
                <button key={x} onClick={() => go(x)}>
                  {x}
                </button>
              )
            )}
          </nav>

          <button
            className="menubtn"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <Icon type={open ? "close" : "menu"} />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap heroGrid">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                SOFTWARE ENGINEER · 8+ YEARS
              </div>

              <h1>
                Building mobile products
                <br />
                <em>that ship.</em>
              </h1>

              <p className="lead">
                I'm Narender Singh Kang, a Software Engineer specializing in
                React Native, Android and iOS — from architecture and APIs to
                performance, deployment and team leadership.
              </p>

              <div className="heroBtns">
                <button
                  className="primary"
                  onClick={() => go("projects")}
                >
                  Explore projects
                  <Icon type="arrow" size={18} />
                </button>

                <a
                  className="secondary"
                  href="https://github.com/narender004"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon type="github" size={18} />
                  GitHub
                </a>
              </div>
            </div>

            <div className="heroCard">
              <div className="orb orb1" />
              <div className="orb orb2" />

              <div className="codebox">
                <span>const</span> engineer = {"{"}
                <br />
                <b> focus:</b> <i>"mobile"</i>,
                <br />
                <b> stack:</b> <i>"React Native"</i>,
                <br />
                <b> platforms:</b> <i>["iOS", "Android"]</i>
                <br />
                {"}"};
              </div>

              <div className="stat">
                <strong>8+</strong>
                <span>Years listed experience</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="wrap">
            <div className="sectionHead">
              <span>01 / ABOUT</span>

              <h2>
                Engineering with a
                <br />
                product mindset.
              </h2>
            </div>

            <div className="aboutGrid">
              <p>
                Software Engineer with 8+ years of listed professional
                experience in cross-platform mobile development. I build and
                deliver Android and iOS applications with React Native,
                integrate REST APIs, third-party SDKs and payment gateways,
                implement native modules, optimize performance and solve
                complex bugs and crashes.
              </p>

              <div className="principles">
                <div>
                  <Icon type="code" />
                  <b>Architecture</b>
                  <span>Reusable, maintainable mobile foundations.</span>
                </div>

                <div>
                  <Icon type="zap" />
                  <b>Performance</b>
                  <span>Fast, stable experiences across devices.</span>
                </div>

                <div>
                  <Icon type="users" />
                  <b>Leadership</b>
                  <span>Coordination, reviews and delivery ownership.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section muted">
          <div className="wrap">
            <div className="sectionHead">
              <span>02 / TOOLKIT</span>
              <h2>What I work with.</h2>
            </div>

            <div className="skills">
              {skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="wrap">
            <div className="sectionHead row">
              <div>
                <span>03 / SELECTED WORK</span>

                <h2>
                  Projects that made it
                  <br />
                  to production.
                </h2>
              </div>

              <p>Six featured projects, ordered as requested.</p>
            </div>

            <div className="projects">
              {projects.map((p, i) => (
                <article
                  className={"project p" + i}
                  key={p.name}
                >
                  <div className="projectTop">
                    <span className="num">
                      0{i + 1}
                    </span>

                    <span>{p.tag}</span>
                  </div>

                  <h3>{p.name}</h3>

                  <p>{p.desc}</p>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Google Play{" "}
                    <Icon type="external" size={15} />
                  </a>
                </article>
              ))}
            </div>

            <div className="other">
              <h3>More work</h3>

              <div className="otherGrid">
                {otherProjects.map((p) => (
                  <div key={p.name}>
                    <b>{p.name}</b>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section dark">
          <div className="wrap">
            <div className="sectionHead">
              <span>04 / EXPERIENCE</span>

              <h2>
                A track record of
                <br />
                shipping and leading.
              </h2>
            </div>

            <div className="timeline">
              {experience.map((e) => (
                <div className="job" key={e[0]}>
                  <div className="jobYear">{e[2]}</div>

                  <div>
                    <h3>{e[0]}</h3>
                    <b>{e[1]}</b>
                    <p>{e[3]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="wrap contactBox">
            <span>05 / LET'S CONNECT</span>

            <h2>
              Have a mobile product
              <br />
              <em>worth building?</em>
            </h2>

            <p>
              Open to conversations about software engineering, React Native,
              mobile architecture and product development.
            </p>

            <div className="contactBtns">
              <a
                className="primary"
                href="mailto:narenderkang46@gmail.com"
              >
                Email me
                <Icon type="arrow" size={18} />
              </a>

              {/* Contact Number */}
              <a
                className="secondary"
                href="tel:+916350452016"
              >
                +91 63504 52016
              </a>

              <a
                className="secondary"
                href="https://www.linkedin.com/in/narender-kang-6663892b"
                target="_blank"
                rel="noreferrer"
              >
                <Icon type="linkedin" size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>
            © {new Date().getFullYear()} Narender Singh Kang
          </span>

          <span>MCA · 2014</span>

          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
