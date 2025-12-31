import  Hero  from '../components/Hero'
import PublicationItem from '../components/PublicationItem'

import publications from '../local-json/publications.json'

const Outputs = () => {

    const publicationItems = publications.map((item) => {
        return (
            <PublicationItem
                year = {item.year}
                authors = {item.authors}
                title = {item.title}
                url = {item.url}
                journal = {item.journal}
                id = {item.id}
            />
        )
    })

  return (
    <> 
        <Hero title="Outputs" />
        <main id="main-content" className="main">
            <article className="main__article">
                <h2 className="main__h2">Outputs</h2>
                <p className="main__p">Here are some places where I've attempted to make dents in the world</p>
            </article>
            <article className="main__article">
                <h2 className="main__h2">Scientific Publications</h2>
                <p className="main__p">Here are some publications I have my name to:</p>
                <ul className="main__ul output__parent">
                {publicationItems}
                </ul>
            </article>
        </main>
    </>
  )
}

export default Outputs