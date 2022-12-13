import classes from "./Home.module.scss";

import img from "../../media/3025.jpg";
import test from "../../media/wave.svg";

const Home = () => {
  return (
    <main className={classes.Home}>
      <div className={classes.wrap}>
        <div className={classes.box}>
          <p className={classes.welcome_text}>WELCOME TO THE SITE, READER</p>
        </div>

        <svg
          className={classes.wave}
          viewBox="0 0 1440 200"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="48.9974093%"
              y1="48.4925309%"
              x2="49.983635%"
              y2="51.1076%"
              id="linearGradient-1"
            >
              <stop
                stop-color="#175475"
                stop-opacity="0.227381993"
                offset="0%"
              ></stop>
              <stop
                stop-color="#175475"
                stop-opacity="0.347929414"
                offset="100%"
              ></stop>
            </linearGradient>
            <path
              d="M1440,33.8166721 C1315.33333,15.3944426 1201,15.3944426 1097,33.8166721 C941,61.4500163 797,151.121133 648.5,156.245197 C500,161.369261 520,141.056008 304,168.689352 C160,187.111581 59,197.298708 1,199.250733 L0,301 L1439.5,301 L1440,33.8166721 Z"
              id="path-2"
            ></path>
          </defs>
          <g
            id="Website-mockups"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Desktop-Copy-5"
              transform="translate(0.000000, -6010.000000)"
            >
              <g id="Group-6" transform="translate(0.000000, 6010.000000)">
                <path
                  d="M1440,28.2168356 C1315.33333,-9.40561187 1201,-9.40561187 1097,28.2168356 C941,84.6505068 797,117.912737 648.5,128.377259 C500,138.841781 520,97.3574262 304,153.791097 C160,191.413545 59,212.218011 1,216.204495 L0,301 L1439.5,301 L1440,28.2168356 Z"
                  id="Path-7"
                  fill="#7D2A48"
                ></path>
                <g
                  id="Path-7"
                  transform="translate(720.000000, 160.500000) scale(-1, 1) translate(-720.000000, -160.500000) "
                >
                  <use fill="url(#linearGradient-1)" href="#path-2"></use>
                  <use fill="#3E1229" href="#path-2"></use>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      {/* first section */}

      <div className={classes.section}>
        <div className={classes.section_text_div}>
          <div className={classes.section_text_title}>TOP BOOKS</div>
        </div>
        <div className={classes.sec_carousel_div}>
          <div className={classes.left_sec_div}>
            <svg
              className={classes.left_sec_svg}
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              href="http://www.w3.org/1999/xlink"
              width="512"
              height="512"
              x="0"
              y="0"
              viewBox="0 0 335.08 335.079"
            >
              <g>
                <g>
                  <path
                    d="M311.175,115.775c-1.355-10.186-1.546-27.73,7.915-33.621c0.169-0.108,0.295-0.264,0.443-0.398
                            c7.735-2.474,13.088-5.946,8.886-10.618l-114.102-34.38L29.56,62.445c0,0-21.157,3.024-19.267,35.894
                            c1.026,17.89,6.637,26.676,11.544,31l-15.161,4.569c-4.208,4.672,1.144,8.145,8.88,10.615c0.147,0.138,0.271,0.293,0.443,0.401
                            c9.455,5.896,9.273,23.438,7.913,33.626c-33.967,9.645-21.774,12.788-21.774,12.788l7.451,1.803
                            c-5.241,4.736-10.446,13.717-9.471,30.75c1.891,32.864,19.269,35.132,19.269,35.132l120.904,39.298l182.49-44.202
                            c0,0,12.197-3.148-21.779-12.794c-1.366-10.172-1.556-27.712,7.921-33.623c0.174-0.105,0.301-0.264,0.442-0.396
                            c7.736-2.474,13.084-5.943,8.881-10.615l-7.932-2.395c5.29-3.19,13.236-11.527,14.481-33.183
                            c0.859-14.896-3.027-23.62-7.525-28.756l15.678-3.794C332.949,128.569,345.146,125.421,311.175,115.775z M158.533,115.354
                            l30.688-6.307l103.708-21.312l15.451-3.178c-4.937,9.036-4.73,21.402-3.913,29.35c0.179,1.798,0.385,3.44,0.585,4.688
                            L288.14,122.8l-130.897,32.563L158.533,115.354z M26.71,147.337l15.449,3.178l99.597,20.474l8.701,1.782l0,0l0,0l26.093,5.363
                            l1.287,40.01L43.303,184.673l-13.263-3.296c0.195-1.25,0.401-2.89,0.588-4.693C31.44,168.742,31.651,156.373,26.71,147.337z
                             M20.708,96.757c-0.187-8.743,1.371-15.066,4.52-18.28c2.004-2.052,4.369-2.479,5.991-2.479c0.857,0,1.474,0.119,1.516,0.119
                            l79.607,25.953l39.717,12.949l-1.303,40.289L39.334,124.07l-5.88-1.647c-0.216-0.061-0.509-0.103-0.735-0.113
                            C32.26,122.277,21.244,121.263,20.708,96.757z M140.579,280.866L23.28,247.98c-0.217-0.063-0.507-0.105-0.733-0.116
                            c-0.467-0.031-11.488-1.044-12.021-25.544c-0.19-8.754,1.376-15.071,4.519-18.288c2.009-2.052,4.375-2.479,5.994-2.479
                            c0.859,0,1.474,0.115,1.519,0.115c0,0,0.005,0,0,0l119.316,38.908L140.579,280.866z M294.284,239.459
                            c0.185,1.804,0.391,3.443,0.591,4.693l-147.812,36.771l1.292-40.01l31.601-6.497l4.667,1.129l17.492-5.685l80.631-16.569
                            l15.457-3.18C293.261,219.146,293.466,231.517,294.284,239.459z M302.426,185.084c-0.269,0.006-0.538,0.042-0.791,0.122
                            l-11.148,3.121l-106.148,29.764l-1.298-40.289l34.826-11.359l84.327-27.501c0.011-0.005,4.436-0.988,7.684,2.315
                            c3.144,3.214,4.704,9.537,4.52,18.28C313.848,184.035,302.827,185.053,302.426,185.084z"
                    fill="#ffffff"
                    data-original="#000000"
                    className=""
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div className={classes.container}>
            <div id="carousel">
              <figure>
                <img
                  src="../../media/book.png"
                  className={classes.carousel_img}
                  alt="pict"
                />
                <h3>vcbb</h3>
                <p className={classes.carousel_p}>cv cvvc</p>
                <div className={classes.box2}>
                  <a className={classes.carousel_a} href="/more/{{i.id}}">
                    Read more
                  </a>
                </div>
              </figure>
            </div>
          </div>
          <div className={classes.left_sec_svg}>
            <pre>
              Мы не знаем кто вы и откуда вы так больше здесь ходить нельзя без
              причины без причины? что вы делали? у меня пробежка была пробежка
              была? ну да ну да ну да ну да ома кот
            </pre>
          </div>
        </div>
        <div className={classes.section2}>
          <svg
            className={classes.wave2}
            viewBox="0 0 1430 200"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            href="http://www.w3.org/1999/xlink"
          >
            <title>Group 6</title>
            <defs>
              <linearGradient
                x1="48.9974093%"
                y1="48.4925309%"
                x2="49.983635%"
                y2="51.1076%"
                id="linearGradient-1"
              >
                <stop
                  stop-color="#175475"
                  stop-opacity="0.227381993"
                  offset="0%"
                ></stop>
                <stop
                  stop-color="#175475"
                  stop-opacity="0.347929414"
                  offset="100%"
                ></stop>
              </linearGradient>
              <path
                d="M1440,33.8166721 C1315.33333,15.3944426 1201,15.3944426 1097,33.8166721 C941,61.4500163 797,151.121133 648.5,156.245197 C500,161.369261 520,141.056008 304,168.689352 C160,187.111581 59,197.298708 1,199.250733 L0,301 L1439.5,301 L1440,33.8166721 Z"
                id="path-2"
              ></path>
            </defs>
            <g
              id="Website-mockups"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Desktop-Copy-5"
                transform="translate(0.000000, -6010.000000)"
              >
                <g id="Group-6" transform="translate(0.000000, 6010.000000)">
                  <path
                    d="M1440,28.2168356 C1315.33333,-9.40561187 1201,-9.40561187 1097,28.2168356 C941,84.6505068 797,117.912737 648.5,128.377259 C500,138.841781 520,97.3574262 304,153.791097 C160,191.413545 59,212.218011 1,216.204495 L0,301 L1439.5,301 L1440,28.2168356 Z"
                    id="Path-7"
                    fill="#4C1326"
                  ></path>
                  <g
                    id="Path-7"
                    transform="translate(720.000000, 160.500000) scale(-1, 1) translate(-720.000000, -160.500000) "
                  >
                    <use fill="url(#linearGradient-1)" href="#path-2"></use>
                    <use fill="#3E1229" href="#path-2"></use>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      
    </main>
  );
};

export default Home;
