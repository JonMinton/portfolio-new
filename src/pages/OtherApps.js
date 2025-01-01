
import Hero from '../components/Hero'
import AppProfile from '../components/AppProfile'

import NewWebsiteImage from '../img/newWebsiteSquare.png'
import OldWebsiteImage from '../img/oldWebsiteSquare.png'
import PythonHMDImage from '../img/pythonDashAppSquare.png'
import RHMDImage from '../img/rShinyAppMortalitySquare.png'
import BlogImage from '../img/jonBlog.png'
import StatsImage from '../img/jonStats.png'

const OtherApps = () => {

    return (
        <>
            <Hero title = "Apps"/>
            <main className="main">
                <article className="main__article">
                    <h2 className="main__h2">
                        Apps
                    </h2>
                    <p className="main__p">
                        Here's a short list of apps I've completed or am working on.
                    </p>
                </article>
                <AppProfile
                    title = "Jon Minton's Statistics Website"
                    mainText = {`
                        I've written a lot of material on statistical inference and application within my blog. To make this statistics material, which constitutes a fairly detailed and technical course based around likelihood theory and generalised linear modelling, I've moved most of this material into a website in its own right, also made using Quarto.
                    `}
                    image = {StatsImage}
                />
                <AppProfile
                    title = "Jon Minton's Blog"
                    mainText = {`
                        This is my blog, produced using Quarto, and hosted on Github pages. I update it more often than this site, and it's a good place to find out what I'm currently working on.
                    `}
                    image = {BlogImage}
                />
                <AppProfile
                    title = "Jon Minton's Website"
                    mainText = {`
                        Of course this website should probably mention itself. This is my attempt at creating a website with professional styling (or at least without outright contempt for CSS). I created this using React and React Router, and an ever expanding CSS file which I've tried to structure in BEM format. I've also tried to use semantic HTML tags where appropriate, rather than just divs. I have various plans for further features and improvements. If there's something you'd like to see, please get in touch!
                    `}
                    image = {NewWebsiteImage}
                />
                <AppProfile
                    title = "Jon Minton's Old Website"
                    mainText = {`
                        This was my previous effort. Also React, but a single page app without React Router. I somehow managed to make content sections collapsible, but was really flying blind at this point, without a solid grasp of CSS and broader design principles. I probably used too much beige too, and started going into too much detail about my cats. However, it's still available if someone wants to take a look!`}
                    image = {OldWebsiteImage}
                />
                <AppProfile
                    title = "Capstone Project: Population Structure Visualiser using Python and Dash"
                    mainText = {`
                        This was my Codeclan capstone project. I wanted to see if I could do in Python, one of the languages taught in the course, something I'd previously done in R. This was to produce a dashboard that allows mortality and population data, from the Human Mortality Database, to be visualised as Lexis surfces, 3D representations of the data, in which the age and period work like latitude and longitude and population size or mortality risk is represented as elevation. As before, I wanted these 3D maps to be interactive, such that clicking on part of the surface started a 'grand tour', showing the age, period and cohort slices through the same data. However, unlike the R Shiny app, I wanted to give slightly more consideration to design and style. (Though not a great deal). Whereas the first app was build in Shiny, this used the Dash framework (both ultimately route to Plotly, written in Javascript). I made somewhat more use of Bootstrap for styling the CSS, though wish I knew then what I knew now about good design practice. The app still hasn't been deployed, and some of the features from the Shiny app haven't been introduced to the Python version. However I hope to return to this project once I've learned and achieved enough with the Javascript econosystem/'Reactiverse' to feel that knowledge has become sufficiently embedded.
                    `}
                    image = {PythonHMDImage}
                />
                <AppProfile
                    title = "R-Shiny Mortality Structure Explorer"
                    mainText = {`
                        This is the app I made in R which I attempted to replicate using Python and Dash. It has more functionality, but the code's a mess I wrote in a two week fugue state before my current job, and the design is a lot more bare-bones. In less than two weeks I was able to demonstrate proof of principle for an approach to visualising complex demographic data which I'd spent the last few years in academic trying to get funding for, and so I was fairly happy with this. In fact in slightly over two weeks I produced two more apps using the same approach, one applied to fertility, and the other to housing data. Unfortunately this particular coding journey was halted by jury service, then the new job, and the code was written in such a disorganisational manner I wasn't able to get back to the headspace needed to further develop it. 
                    `}
                    image = {RHMDImage}
                />

            </main>
        </>
    )
}

export default OtherApps