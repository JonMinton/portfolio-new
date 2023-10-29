
import BigHero from "../components/BigHero"
import { Link } from "react-router-dom"


const Home = ( { firstView }) => {

  return (
    <>
        <BigHero firstView={firstView} />
        <main className="main">
        <article className="main__article">
        <h2 className="main__h2">Welcome</h2>
        <p className="main__p">
          Hello, I'm Jon Minton. I am a highly experienced <span className="data-science">data scientist</span>; a well-published and highly collaborative researcher specialising in <span className="demography">epidemiology, risk and demographic structure</span>; and more recently a quick-learning full-stack <span className="software">software developer</span>.
        </p>
        <p className="main__p">
          If this combination of skills and background sounds of interest, please explore this website further and <Link className="main__link" to='/contact'>get in touch</Link>.
        </p>

        </article>
        <article className="main__article" id="demography-and-risk">
          <h2 
            className="main__h2" 
          >
            Demography and Risk
          </h2>
          <p className="main__p" >
            While completing a PhD in social policy, focused on working age economic inactivity, I became interested in broader questions of population structure. I was interested in the ways that the risk of becoming economically inactive changed by age, but also over time. I was also interested in how official retirement ages accidentally became 'generous', an increasing share of people's lifespan, due to long-term trends in increased life expectancy. 
          </p>
          <p className="main__p">
          This interest in long-term trends in event risk over age and time led me to accidentally rediscover the Lexis surface, a way of representing quantities that vary over both age and year as if they were geographic surface. These surfaces allow thousands of data points to be shown in a single image. Much as maps of physical space show the shape of a physical landscape, so the Lexis surface reveals the hidden population structures. 
          </p>
          <p className="main__p">
            I am highly collaborative in my research, and have applied Lexis surfaces to a wide range of fields beyond all-cause mortality. This includes cause-specific mortality - including the so-called Deaths of Despair: suicide, drugs-related deaths and alcohol-related deaths - but also changing patterns of fertility, to housing tenure, and to access to a car as opposed to reliance on public transport.
          </p>
          <p className="main__p">
          After having worked at universities since the late 2000s, I have been doing more applied research since 2018 within NHS Health Scotland (NHS HS), which in April 2020 became part of Public Health Scotland (PHS). Much of my focus over this period has been on understanding the extent and causes of slowing rates of improvement in longevity, and in more deprived communities absolute declines in since around 2012.
          </p>
        </article>
        <article className="main__article" id="data-science">
          <h2 className="main__h2">Data Science</h2>
          <p className="main__p">I've worked with the statistical programming language R for around twenty years. (Originally I wanted to learn R because I did my PhD in a sociology department, and realised economists don't think much of sociologists' technical prowess. So, after hearing about R from some mathematical ecologists, I decided to learn R because it was too technical for most of the economists!) </p>
        <p className="main__p">
          Despite starting with R when it was a proudly unfriendly environment, with a terse and prickly dev community, I've embraced the Tidyverse, which makes R a much more approachable language than it used to be. I run a weekly TidyTuesday event for my company (called TardyTuesday as it's on Wednesdays!) and find it great to see beginners and experienced users alike tackle each weekly challenge.
        </p>
        <p className="main__p">
          I've developed a number of apps in R Shiny, including those which make use of Lexis surfaces with linked displays, and make sure to share as much code and data as legally permissable on Github when I produce analyses for papers and reports. 
        </p>
        </article>
        <article className="main__article" id='software-development'>
          <h2 className="main__h2">
            Software Development
          </h2>
          <p className="main__p">
            I took a career break from PHS between March and June 2023 to complete CodeClan's full-time, 16 week Professional Software Development course. This intensive course provides a comprehensive and working introduction to full-stack software development, covering database principles and practice with both SQL (with Postgres and Spring) and No-SQL (MongoDB); HTML and CSS, Python and Flask, Java, and JavaScript and React.
          </p>
          <p className="main__p">
            The CodeClan course is highly practical, with a focus on learning by doing. This is supported by a number of individual, including a two week group project, in which I used React to build a simulated fruit machine, and a two week capstone project. For my capstone project I learned Python's Dash framework (not taught on the course) to make a data visualisation dashboard to explore data from the Human Mortality Database as both 2D and 3D interactive visualisations
          </p>
          <p className="main__p">
            The CodeClan course also provided a good introduction to the principles of Agile software development, the use of Git and Github for version control and collaborative development, and unit testing and test-driven development (TDD). Examples of testing frameworks I have used include Jest and Cypress for JavaScript/React, Pytest for Python, and JUnit for Java.
          </p>
          <p className="main__p">
            My Capstone project within CodeClan used Python's Dash framework to build a data visualisation dashboard to explore data from the Human Mortality Database as both 2D and 3D interactive visualisations. This was a good introduction to the use of Python for data science, and to the use of Dash for building interactive data visualisation dashboards. This dashboard developed from previous projects produced using R's Shiny framework, and which also made use of Plotly for interactive visualisations. The capstone project also involved learning how to link Python to R, as the main package for accessing the required data programmatically is R's HMDHFDplus package, which is not available in Python.
          </p>

        </article>





    </main>
    </>
  )
}

export default Home