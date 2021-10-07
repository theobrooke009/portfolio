import { useEffect, useState } from 'react'
import { HiChevronDoubleDown } from 'react-icons/hi'
import { DiJsBadge, DiCss3, DiHtml5, DiReact, DiNodejsSmall, DiPython, DiMongodb, DiSass, DiPostgresql, DiGithubBadge, DiGit } from 'react-icons/di'
import { SiExpress, SiDjango, SiInsomnia, SiNpm, SiPowerbi } from 'react-icons/si'
import { BsLink45Deg } from 'react-icons/bs'
import { GiAbstract050, GiRunningShoe } from 'react-icons/gi'
import { IoBookSharp } from 'react-icons/io5'
import psn from './images/psn.png'
import netflix from './images/netflix.png'
import doom from './images/doom.png'
import cards from './images/cards.png'



function App() {

  const [scroll, setScroll] = useState(0)
  // const [open, setOpen] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })

  // const OnClick = (e) => {
  //   if (e.target.textContent.includes('More About Me')){
  //     setOpen(true)
  //     e.target.textContent = 'Less About Me'
  //   } else if (e.target.textContent.includes('Less About Me')
  //   ){
  //     setOpen(false)
  //     e.target.textContent = 'More About Me'
  //   }
  // }
  


  return (
    <body>
      <header id="home">
        {scroll < 300 &&
          <div className="title">
            <h1>Theo Brooke</h1>
            <div className="subtitle">
              <h2>DEVELOPER</h2>
            
            </div>
            <div className="chevron">
              <a href="#big-nav">
                <HiChevronDoubleDown />
              </a>
            </div>
          </div>
        }
      </header>
      <nav id="big-nav" className="big-nav">
        <ul>
          <li>About Me</li>
          <li>Projects</li>
          <li>Interests</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main>
        <section id="profile-section" className="profile-section">
          <div id="about" className="columns about">
            <div id="profile" className="profile column is-one-third profile">
              <h3>About Me</h3>
              <p className="bio">Former business analyst with a background in reporting and
analytics. For the past ten years I have contributed to audit
and regulatory reports in the professional services industry. I
became interested in programming after learning how simple
SQL queries could take a lot of the headache out of data
extraction.
              <br/>
              <br/>
I became interested in process automation and creating
things beyond spreadsheets and databases. I began by taking
some Udemy courses in SQL, before moving on to some basic
JavaScript and C++, which really opened my eyes to the
potential and possibilities of programming. I became so
immersed in it that I decided it was something I wanted to do
for a career, which led me to enroll at GA.
              <br/>
              <br/>
In my next role, I want to continue developing my knowledge
of languages and frameworks (I want to revisit C++ and begin
Ruby on Rails) as well as working through my ever-growing
list of projects.</p>  
            </div>
            <div className="skills column is-two-thirds">
              <h3>Skills</h3>
              <div className="tech-grid wrapper"> 
                <div className="technologies">
                  <div className="tech-details">
                    <DiJsBadge className="dev-icon"/>
                    <p className="dev-text">Javascript</p>
                  </div>
                </div>
                <div className="technologies">
                  <div className="tech-details">
                    <DiReact className="dev-icon"/>
                    <p className="dev-text">React</p>
                  </div>
                </div>
                <div className="technologies">
                  <div className="tech-details">
                    <DiPython className="dev-icon"/>
                    <p className="dev-text">Python</p>
                  </div>
                </div>
                <div className="technologies">
                  <div className="tech-details">
                    <DiNodejsSmall className="dev-icon"/>
                    <p className="dev-text">Node.js</p>
                  </div>
                </div>
                <div className="technologies">
                  <div className="tech-details">
                    <DiMongodb className="dev-icon"/>
                    <p className="dev-text">Mongo</p>
                  </div>
                </div>
                <div className="technologies">
                  <div className="tech-details">
                    <SiExpress className="dev-icon"/>
                    <p className="dev-text">Express</p>
                  </div>
                </div>
                <div className="technologies">
                  <div className="tech-details">
                    <SiDjango className="dev-icon"/>
                    <p className="dev-text">Django</p>
                  </div>
                </div>
                <div className="technologies">
                  <div className="tech-details">
                    <DiPostgresql className="dev-icon"/>
                    <p className="dev-text">PostgreSQL</p>
                  </div>
                </div>
                <div className="technologies">
                  <div className="tech-details">
                    <SiInsomnia className="dev-icon"/>
                    <p className="dev-text">Insomnia</p>
                  </div>
                </div>
                <div className="technologies">
                  <div className="tech-details">
                    <DiHtml5 className="dev-icon"/>
                    <p className="dev-text">HTML</p>
                  </div>
                </div>
                <div className="technologies">
                  <div className="tech-details">
                    <DiCss3 className="dev-icon"/>
                    <p className="dev-text">CSS</p>
                  </div>
                </div>
                <div className="technologies">
                  <div className="tech-details">
                    <DiSass className="dev-icon"/>
                    <p className="dev-text">Sass</p>
                  </div>
                </div>
                <div className="technologies">
                  <div className="tech-details">
                    <DiGit className="dev-icon"/>
                    <p className="dev-text">Git</p>
                  </div>
                </div>
                <div className="technologies">
                  <div className="tech-details">
                    <DiGithubBadge className="dev-icon"/>
                    <p className="dev-text">GitHub</p>
                  </div>
                </div>
                <div className="technologies">
                  <div className="tech-details">
                    <SiNpm className="dev-icon"/>
                    <p className="dev-text">Npm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div className="profile">
            <h3>Projects</h3>
          </div>
          <div className="project-columns">
            <div className="wrapper-projects">
              <div className="project">
                <img src={psn}/>
                <h4>
                  <GiAbstract050 className="p-icon"/>Playstation Store Clone
                </h4>
                <div>
                  <DiReact className="dev-project"/>
                  <DiPython className="dev-project"/>
                  <SiDjango className="dev-project"/>
                  <DiHtml5 className="dev-project"/>
              
                </div>
                <p className="description">
              This was a solo project built over 7 days. A full stack
RESTful app with CRUD functionality and built using
React.js and Django. As this was my final project, I
decided to consolidate everything I’d learned up to
that point into something familiar. I built a clone of
the PlayStation Store, which allowed users to both
‘purchase’ (essentially like) and add their own games
as well as leave reviews.
                </p>
                <div className="links">
                  <DiGithubBadge className="dev-project"/>
                  <BsLink45Deg className="dev-project"/>
                </div>

              
              </div>
              <div className="project">
                <div>
                  <img src={cards}/>
                </div>
                <h4>
                  <GiAbstract050 className="p-icon"/> Choose Your Hero
                </h4>
                <div>
                  <DiReact className="dev-project"/>
                  <DiHtml5 className="dev-project"/>
                  <DiCss3 className="dev-project"/>
                </div>
                <p className="description">
              This was a pair programming project built over 2
days, using React.js, CSS and consuming a public API.
We built a Magic style card game which selects 2
random superheroes from the API and asks the player
which stat (strength, speed etc.) they think is higher.
This was a great exercise in not only React.js but also
in communication and working to a tight deadline.
                </p>
                <div className="links">
                  <DiGithubBadge className="dev-project"/>
                  <BsLink45Deg className="dev-project"/>
                </div>
              </div> 
            </div>
            <div className="wrapper-projects">
              <div className="project">
                <div>
                  <img src={netflix}/>
                </div>
                <h4>
                  <GiAbstract050 className="p-icon"/> Movie Marathon Generator
                </h4>
                <div>
                  <DiReact className="dev-project"/>
                  <DiNodejsSmall className="dev-project"/>
                  <DiMongodb className="dev-project"/>
                  <SiExpress className="dev-project"/>
                  <DiHtml5 className="dev-project"/>
                  <DiCss3 className="dev-project"/>
                </div>
                <p className="description">
              This was a group project built over 9 days with 2 other people. A full stack RESTful app with CRUD functionality and built using React.js, MongoDB and Express. We built an app which would allow users to plan movie nights, by creating and saving movie marathons. This was an exercise in full stack development as well as teamwork and delegation. Responsibilities included building the complete back end in MongoDB as well as the index page and some styling in the front end.
                </p>
                <div className="links">
                  <DiGithubBadge className="dev-project"/>
                  <BsLink45Deg className="dev-project"/>
                </div>
              </div>
              
              <div className="project">
                <div>
                  <img src={doom}/>
                </div>
                <h4>
                  <GiAbstract050 className="p-icon"/> Doom Demastered
                </h4>
                <div>
                  <DiJsBadge className="dev-project"/>
                  <DiHtml5 className="dev-project"/>
                  <DiCss3 className="dev-project"/>
                </div>
                <p className="description">
              This was a solo project built over 7 days using
JavaScript, CSS and HTML. This was the first real test
and consolidation of what I had learned up to this
point. It greatly solidified my knowledge of JavaScript
as well as how to solve problems. I themed my project
around classic FPS game Doom, as I used to make
levels for it in the early 2000’s.
                </p>
                <div className="links">
                  <DiGithubBadge className="dev-project"/>
                  <BsLink45Deg className="dev-project"/>
                </div> 
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section id="interests-section" className="interests-section">
          <div className="interests columns">
            <div className="column interest-div is-one-third">
              <GiRunningShoe className="hobby-icon"/>
            </div>
            <div className="column is-two-thirds">
              <h3>Running</h3>
              <p className="bio">I love marathon/distance running and have been doing it for 5 years. I believe that running is the best base from which to understand struggle, challenge and resilience. It’s as much psychological as it is physical, and is a series of 26 shifting challenges wrapped up in a seemingly insurmountable one. The next big race I want to do is the Midnight Sun Marathon, which takes place in Norway at a time of year where the sun never goes below the horizon.</p>  
            </div>
          </div>

          <div className="interests columns">
            <div className="column is-two-thirds">
              <h3 className="bio-two">Reading</h3>
              <p className="bio-two">I’ve been a big reader since childhood (I come from a family of big readers) and even now as a busy adult, I have a longstanding goal to read 15 books a year. I love sci fi (my decision to become a programmer was semi inspired by reading William Gibson novels) and my favourite novel falls somewhere between Frankenstein, Neuromancer and Moby Dick. I’m also pretty sure I’ve read every Terry Pratchett novel at least twice.</p>
              <div className="columns">
                <div className="column is-half">
                  <div>
                    <h3 className="bio-two book-info">My 2021 read list so far:</h3>
                    <p className="bio-two book-info"><span className="book-title">No One Writes Back</span> - Eun-Jin Jang, <span className="book-title">Cat's Cradle</span> - Kurt Vonnegut, <span className="book-title">The Question Mark</span> - Muriel Jaeger, <span className="book-title">Tentacles Longer Than Night</span> - Eugene Thacker, <span className="book-title">The City and the Stars</span> - Arthur C. Clarke, <span className="book-title">Redemption Ark</span> - Alastair Reynolds, <span className="book-title">Can The Market Speak?</span> - Campbell Jones, <span className="book-title">The Three-Body Problem</span> - Liu Cixin </p>
                  </div>
                </div>
                <div className="column is-half currently-reading">
                  <div>
                    <h3 className="bio-two book-info">Currently reading:</h3>
                    <p className="bio-two book-info"><span className="book-title">The Long Way to a Small, Angry Planet</span> - Becky Chambers </p>
                  </div>

                </div>
              </div>  
            </div>
            <div className="column interest-two-div is-one-third">
              <IoBookSharp  className="hobby-icon"/>
            </div>
          </div>
  
        </section>
        <hr />
      </main>
    </body>
  )
}

export default App
