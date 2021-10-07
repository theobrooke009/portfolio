import { useEffect, useState } from 'react'
import { HiChevronDoubleDown } from 'react-icons/hi'
import { DiJsBadge, DiCss3, DiHtml5, DiReact, DiNodejsSmall, DiPython, DiMongodb, DiSass, DiPostgresql, DiGithubBadge, DiGit } from 'react-icons/di'
import { SiExpress, SiDjango, SiInsomnia, SiNpm, SiGmail, SiLinkedin } from 'react-icons/si'
import { BsLink45Deg } from 'react-icons/bs'
import { GiRunningShoe, GiGuitarBassHead } from 'react-icons/gi'
import { IoBookSharp } from 'react-icons/io5'
import {  IoLogoGameControllerB, IoLogoPlaystation } from 'react-icons/io'
import {  MdMovie } from 'react-icons/md'
import psn from './images/psn.png'
import netflix from './images/netflix.png'
import doom from './images/doom.png'
import cards from './images/cards.png'
MdMovie



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
          <h1 className="section-header">about me</h1>
          <div id="about" className="columns about">
            <div id="profile" className="profile column is-one-third profile">

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
              </p>  
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
        <section className="projects-section">
          <div >
            <h1 className="section-header">projects</h1>
          </div>
          <div className="project-columns">
            <div className="wrapper-projects">
              <div className="project">
                <img src={psn}/>
                <div className="p-title">
                  <IoLogoPlaystation className="p-icon"/>
                  <h4>Playstation Store Clone</h4>
                  
                </div>
                <p>Group Project | 9 Days</p>
                <div>
                  <DiReact className="dev-project"/>
                  <DiPython className="dev-project"/>
                  <SiDjango className="dev-project"/>
                  <DiHtml5 className="dev-project"/>
                </div>
                <p className="description">
                My final GA project and a faithful recreation of the React app I've (probably) used the most, and allows users to create, purchase and review games. 
                  <br/>
                  <br/>
                Built with Django and Python for the back-end alongside React for the front, this project was absout consolidating everything I'd learned up to that point.
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
                <div className="p-title">
                  <IoLogoGameControllerB className="p-icon"/> 
                  <h4>Choose Your Hero</h4>
                </div>
                <p>Pair Coded Project | 2 Days</p>
                <div>
                  <DiReact className="dev-project"/>
                  <DiHtml5 className="dev-project"/>
                  <DiCss3 className="dev-project"/>
                </div>
                <p className="description">
              A Magic The Gathering style card game, designed to settle the classic schoolyard argument of who would win in a fight between Iron Man and The Hulk
                  <br/>
                  <br/>
              This app consumes an external API of superheros, before pulling out two random ones and asking the player to guess who is stronger/faster/smarter etc. 
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
                <div className="p-title">
                  <MdMovie className="p-icon"/> 
                  <h4>Movie Marathon Generator</h4>
                </div>
                <p>Group Project | 9 Days</p>
                <div>
                  <DiReact className="dev-project"/>
                  <DiNodejsSmall className="dev-project"/>
                  <DiMongodb className="dev-project"/>
                  <SiExpress className="dev-project"/>
                  <DiHtml5 className="dev-project"/>
                  <DiCss3 className="dev-project"/>
                </div>
                <p className="description">

                  A Netflix style app which helps you to decide what to watch based on how much time you have available, as well as helping you plan your movie nights with friends.
                  <br/>
                  <br/>
                  My role in this project was using Express to create all back end functionality as well as working on the recommended and top ten side bars using a React frontend.
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
                <div className="p-title">
                  <h4>
                    <IoLogoGameControllerB className="p-icon"/> Doom Demastered
                  </h4>
                </div>
                <p>Solo Project | 7 Days</p>
                <div>
                  <DiJsBadge className="dev-project"/>
                  <DiHtml5 className="dev-project"/>
                  <DiCss3 className="dev-project"/>
                </div>
                <p className="description">
              A Space Invaders clone themed around iconic 90S FPS Doom. To win, you shoot at the advancing army of Cacodemons whilst dodging their fireballs.
                  <br/>
                  <br/> 
              There are 2 difficulty modes and a score counter alongside authentic Doom spites, animations and sound effects. This was my first ever project built in JavaScript.
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
          <h1 className="section-header">interests</h1>
          <p className="blurb">When I'm not working i love to do the following:</p>
          <div className="interests columns">
            <div className="column interest-div is-one-third">
              <GiRunningShoe className="hobby-icon"/>
            </div>
            <div className="column is-two-thirds">
              <h3 className="int-title" >Running</h3>
              <p className="int-desc">I love marathon/distance running and have been doing it for 5 years. I believe that running is the best base from which to understand struggle, challenge and resilience. It’s as much psychological as it is physical, and is a series of 26 shifting challenges wrapped up in a seemingly insurmountable one. The next big race I want to do is the Midnight Sun Marathon, which takes place in Norway at a time of year where the sun never goes below the horizon.</p>  
            </div>
          </div>

          <div className="interests columns">
            <div className="column is-two-thirds">
              <h3 className="bio-two int-title">Reading</h3>
              <p className="bio-two">I’ve been a big reader since childhood (I come from a family of big readers) and even now as a busy adult, I have a longstanding goal to read 15 books a year. I love sci fi (my decision to become a programmer was semi inspired by reading William Gibson novels) and my favourite novel falls somewhere between Frankenstein, Neuromancer and Moby Dick. I’m also pretty sure I’ve read every Terry Pratchett novel at least twice.</p>
              <div className="columns">
                <div className="column is-half">
                  <div>

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
          <div className="interests columns">
            <div className="column interest-div is-one-third">
              <GiGuitarBassHead  className="hobby-icon"/>
            </div>
            <div className="column is-two-thirds">
              <h3 className="int-title">Music</h3>
              <p className="int-desc">I play bass <a src={'https://reprisal.bandcamp.com/'}>here</a> and have since 2013. Music was the first thing I took seriously as a teenager and I still love playing to this day. After countless shows and tours, I'm an expert in service station sandwiches, sleeping in strange, uncomfortable places and permanent bilateral tinnitus, but I wouldn't change any of it. It also gave me the <a>single greatest photo of me ever,</a> which is pretty cool.</p>  
            </div>
          </div>
  
        </section>
        <hr />
        <section className="contact-section">
          <div className="contact">
            <h1>contact</h1>
            <div className="p-title">
              <SiGmail className="p-icon"/> 
              <h4>theobrooke009@gmail.com</h4>
            </div>
            <div>
              <SiLinkedin className="p-icon"/> 
              <a href="https://www.linkedin.com/in/theo-brooke-408183157/">linkedin/in/theo-brooke</a>
            </div>
            <div>
              <DiGithubBadge className="p-icon"/> 
              <a href="https://github.com/theobrooke009/">github.com/theobrooke009</a>
            </div>

            
            

          </div>
        </section>
      </main>
    </body>
  )
}

export default App
