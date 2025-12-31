import Hero from '../components/Hero'

const Contact = () => {
  return (
    <>
      <Hero title = "Contact" />
      <main id="main-content" className="main">
        <article className="main__article">
          <h2 className="main__h2">Contact</h2>
          <p className="main__p">
            Please get in touch using one of the options in the top right of the website header. 
            LinkedIn is preferred.
          </p>
        </article>
      </main>
    </>
  )
}

export default Contact