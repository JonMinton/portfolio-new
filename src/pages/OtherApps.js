
import Hero from '../components/Hero'
import AppProfile from '../components/AppProfile'

import apps from '../local-json/apps.json'

const OtherApps = () => {

    const appItems = apps.map((app) => {
        return (
            <AppProfile
                key={app.id}
                title={app.title}
                mainText={app.description}
                image={app.image}
                url={app.url}
                github={app.github}
                status={app.status}
            />
        )
    })

    return (
        <>
            <Hero title = "Apps"/>
            <main id="main-content" className="main">
                <article className="main__article">
                    <h2 className="main__h2">
                        Apps
                    </h2>
                    <p className="main__p">
                        Here's a short list of apps I've completed or am working on.
                    </p>
                </article>
                {appItems}
            </main>
        </>
    )
}

export default OtherApps
