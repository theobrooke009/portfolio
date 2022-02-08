import React, { useEffect, useState } from 'react'
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
import pfp from './images/profile.png'
import cards from './images/cards.png'
import { useSpring, animated, useTrail, a } from 'react-spring'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'


const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 120 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={'trailsText'} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}




function App() {

  const [scroll, setScroll] = useState(0)
  const [flip, set] = useState(false)
  const [profile, setProfile] = useState(true)
  const [projects, setProjects] = useState(false)
  const [interests, setInterests] = useState(false)
  const [hero, setHero] = useState(true)
  const [contact, setContact] = useState(false)


  const [state, toggle] = useState(true)
  console.log(toggle)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 500 },
    
  })
  console.log(x)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })

  // ----hhere

  

  //here

  const props = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    delay: 300, 
  })

  const flashing = useSpring({
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 600,
    onRest: () => set(!flip),
  })

  const OnClick = (e) => {
    console.log(e.target.alt)
    console.log(profile)
    if (e.target.textContent.includes('about me') && !profile){
      setProfile(true)
      setHero(false)
      setProjects(false)
      setInterests(false)
      setContact(false)
    } else if (e.target.textContent.includes('about me') && profile) {
      setProfile(false)
      setHero(true)
    } else if (e.target.textContent.includes('projects') && !projects){
      setProjects(true)
      setProfile(false)
      setHero(false)
      setInterests(false)
      setContact(false)
    } else if (e.target.textContent.includes('projects') && projects){
      setProjects(false)
      setHero(true)
    } else if (e.target.textContent.includes('interests') && !interests){
      setInterests(true)
      setProfile(false)
      setHero(false)
      setProjects(false)
      setContact(false)
    } else if (e.target.textContent.includes('interests') && interests){
      setInterests(false)
      setHero(true)
    } else if (e.target.textContent.includes('contact') && !contact){
      setContact(true)
      setProfile(false)
      setHero(false)
      setProjects(false)
      setInterests(false)
    } else if (e.target.textContent.includes('contact') && contact){
      setContact(false)
      setHero(true)
    } else if 
    (e.target.textContent.includes('back home') && !hero){
      setHero(true)
      setProfile(true)
      setProjects(false)
      setInterests(false)
      setContact(false)
    } else if (e.target.textContent.includes('next') || e.target.tagName.includes('path') && profile){
      setProfile(false)
      setProjects(true)
    } else if (e.target.textContent.includes('next') && projects || e.target.tagName.includes('path') && projects){
      setProjects(false)
      setInterests(true)
    } else if (e.target.textContent.includes('previous') && projects || e.target.tagName.includes('path') && projects){
      setProfile(true)
      setProjects(false)
      setInterests(false)
    } else {
      console.log(e.target.tagName)
    }
  }

  const ProjectsClick = (e) => {
    if (e.target.textContent.includes('next') && projects || e.target.tagName.includes('path') && projects){
      setProjects(false)
      setInterests(true)
    } else if (e.target.textContent.includes('previous') && projects){
      setProfile(true)
      setProjects(false)
      setInterests(false)
    }
  }

  const InterestsClick = (e) => {
    if (e.target.textContent.includes('next') && interests){
      setInterests(false)
      setContact(true)
    } else if (e.target.textContent.includes('previous') && interests){
      
      setProjects(true)
      setInterests(false)
    }
  }
  



  return (
    <body>
    
      <>
      
        { hero &&
        
          <header id="home">
            {scroll < 300 &&
          <div className="title">
            <animated.img className="profile-pic" src={pfp}/>
            <Trail open={open}>

              
              <div className="my-name"><animated.h1 style={props}>Theo Brooke</animated.h1></div>
              <div alt="chev" className="subtitle">
                <animated.h2 style={props}>JUNIOR DEVELOPER</animated.h2>
            
              </div>
              <div className="chevron">
                <animated.a onClick={OnClick} alt="chev" style={flashing}href="#big-nav">
                  <HiChevronDoubleDown />
                </animated.a>
                
              </div>
              
            </Trail>
          </div>  
            }
            
          </header>
        
        }
            
      </>
  
      <nav id="big-nav" className="big-nav">
        
        <ul>

          <li onClick={OnClick}><a className="nav-heads">about me</a></li>
          <li onClick={OnClick}><a className="nav-heads"> projects</a></li>
          <li onClick={OnClick}><a className="nav-heads">interests</a></li>
          { !hero && 
          <li onClick={OnClick}>
            <a className="nav-heads">back home</a>
          </li>
          }   
    
        </ul>
      </nav>
      <main>
        
          
        { profile &&
            <Trail open={open}>
              <section id="profile-section" className="profile-section">
                <div>
                  <div className="title-head">
                    <h1 className="section-header" onClick={OnClick}>about me</h1>
                    <div className="prev-buttons is-full">
                      <div className="prev-buttons"><h2 className="navigation" onClick={OnClick}><a >next</a></h2></div>
                    </div>
                  </div>
                  <div className=" bar width-is-full"></div>
                  <div id="about" className="columns about">
                    <div id="profile" className="profile column is-one-third profile">

                      <h3 className="profile-header">Personal Profile</h3>

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
                            <p className="dev-text">JavaScript</p>
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
                            <p className="dev-text">mongoDB</p>
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
                </div>
                <div className="contact big-nav">
                  <h1>contact</h1>
                  <div className="p-title">
                    <SiGmail className="p-icon"/> 
                    <h4>theobrooke009@gmail.com</h4>
                  </div>
                  <div>
                    <SiLinkedin className="p-icon"/> 
                    <a href="https://www.linkedin.com/in/theo-brooke-408183157/" className="nav">linkedin/in/theo-brooke</a>
                  </div>
                  <div>
                    <DiGithubBadge className="p-icon"/> 
                    <a href="https://github.com/theobrooke009/">github.com/theobrooke009</a>
                  </div>
                </div>
              </section>
            </Trail>
        }
          
        
      
        { projects &&
        <Trail open={open}>
          <section className="projects-section">
    
            <div>
              <div className="project-head" >
                <h1 className="section-header">projects</h1>
                <div className="prev-buttons is-full">
                  <div className="prev-buttons"><h2 className="navigation" onClick={ProjectsClick}><a >previous </a></h2><h2 className="navigation" onClick={ProjectsClick}><a>next</a></h2></div>
                </div>
              </div>
  
              <div className="project-columns">
                <div className='scroll-arrows'><BsFillArrowLeftCircleFill className='arrow-icon'/></div>
                <div className="wrapper-projects">
                  <div className="project">
                    <div>
                      <img src='https://res.cloudinary.com/dvio5jxzq/image/upload/v1644336666/Screenshot_2022-02-08_at_16.10.36_dbk4r1.png'/>
                    </div>
                    <div className="p-title">
                      <MdMovie className="p-icon"/> 
                      <h4>Call Of Duty Class Builder</h4>
                    </div>
                    <p>Solo Project | 3 Weeks</p>
                    <div>
                      <DiReact className="dev-project"/>
                      <DiNodejsSmall className="dev-project"/>
                      <DiMongodb className="dev-project"/>
                      <SiExpress className="dev-project"/>
                      <DiHtml5 className="dev-project"/>
                      <DiCss3 className="dev-project"/>
                    </div>
                    <p className="description">

                  An app which allows users to create, compare and save weapon builds for the Call Of Duty: Warzone Battle Royale.
                      <br/>
                      <br/>
                  Built using a Mongo DB and express back end and a React front end, this was an ambitious project designed to test and stretch my existing knowledge of React.
                    </p>
                    <div className="links">
                      <a href="https://github.com/theobrooke009/cod-stats-frontend/blob/main/README.md"><DiGithubBadge className="dev-project"/></a>
                      <a href="https://cod-stats-jan-2022.netlify.app/">
                        <BsLink45Deg className="dev-project"/></a>
                    </div>
                  </div>
                  <div className="project">
                    <img src={psn}/>
                    <div className="p-title">
                      <IoLogoPlaystation className="p-icon"/>
                      <h4>Playstation Store Clone</h4>
                  
                    </div>
                    <p>Solo Project | 7 Days</p>
                    <div>
                      <DiReact className="dev-project"/>
                      <DiPython className="dev-project"/>
                      <SiDjango className="dev-project"/>
                      <DiCss3 className="dev-project"/>
                      <DiHtml5 className="dev-project"/>
                      
                    </div>
                    <p className="description">
                My final GA project and a faithful recreation of the React app I&apos;ve (probably) used the most, and allows users to create, purchase and review games. 
                      <br/>
                      <br/>
                Built with Django and Python for the back-end alongside React for the front, this project was about consolidating everything I had learned up to that point.
                    </p>
                    <div className="links">
                      <a href="https://github.com/theobrooke009/project-four-remaster-frontend/blob/main/README.md"><DiGithubBadge className="dev-project"/></a>
                      <a href="https://adoring-engelbart-bf000c.netlify.app"><BsLink45Deg className="dev-project"/></a>
                    </div>


              
                  </div>
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
                      <a href="https://github.com/theobrooke009/project-three-backend/blob/main/README.md"><DiGithubBadge className="dev-project"/></a>
                      <a href="https://61559cf0303ddff3979c8c19--project-three-tjb009.netlify.app/"><BsLink45Deg className="dev-project"/></a>
                    </div>
                  </div>
                  <div className="project">
                    <div>
                      <img src='https://res.cloudinary.com/dvio5jxzq/image/upload/v1644356887/Screenshot_2022-02-08_at_20.37.00_uzm412.png'/>
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
              A Magic The Gathering style card game, designed to settle the classic schoolyard argument of who would win in a fight between Iron Man and The Hulk.
                      <br/>
                      <br/>
              This app consumes an external API of superheros, before pulling out two random ones and asking the player to guess who is stronger/faster/smarter etc. 
                    </p>
                    <div className="links">
                      <a href="https://github.com/theobrooke009/sei-project-two/blob/main/README.md"><DiGithubBadge className="dev-project"/></a>
                      <a href=" https://chooseyourhero009.netlify.app"><BsLink45Deg className="dev-project"/></a>
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
              There are 2 difficulty modes and a score counter alongside authentic Doom sprites, animations and sound effects. This was my first ever project built in JavaScript.
                    </p>
                    <div className="links">
                      <a href="https://github.com/theobrooke009/sei-project-one/blob/main/README.md"><DiGithubBadge className="dev-project"/></a>
                      <a href="https://theobrooke009.github.io/sei-project-one/"><BsLink45Deg className="dev-project"/></a>
                    </div> 
                  </div>
                  {/* here */}
                </div>
                <div className='scroll-arrows'><BsFillArrowRightCircleFill className='arrow-icon'/></div>
                {/* <div className="wrapper-projects">

            
                </div> */}
              </div>
            </div>
          
          </section>
        </Trail>
        }

        { interests && 
        <Trail open={open}>
          <section id="interests-section" className="interests-section">
            <div className="project-head">
              <h1 className="section-header">interests</h1>
              <div className="prev-buttons is-full">
                <div className="prev-buttons"><h2 className="navigation" onClick={InterestsClick}><a >previous </a></h2></div>
              </div>
              
            </div>
            <div className=" bar width-is-full"></div>
          
            <div>
              <p className="blurb">When I&apos;m not working I love to do the following:</p>
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
                  <p className="int-desc">I play bass <b><a href='https://reprisal.bandcamp.com/'>here</a></b> and have since 2013. Music was the first thing I took seriously as a teenager and I still love playing to this day. After countless shows and tours, I am an expert in service station sandwiches, sleeping in strange, uncomfortable places and permanent bilateral tinnitus, but I wouldnt change any of it. It also gave me the <b><a href='https://www.instagram.com/p/BnLcmU1hk9a'> single greatest photo of me ever,</a></b> which is pretty cool.</p>  
          
                </div>
              </div>
            </div>
            
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
        </Trail>
        }
      
        
      </main>
      { contact && 
      <footer className="contact-section">
        <div className="white-space"></div>
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
     
      </footer>
      }
    </body>
  )
}

export default App
