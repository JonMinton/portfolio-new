import Hero from '../components/Hero'

const About = () => {
  return (
    <>
      <Hero title="About" />
      <main id="main-content" className="main">
        <article className="main__article">
          <h2 className="main__h2">About This Website</h2>
          <p className="main__p">
            This website was created primarily to sharpen and apply software development skills
            developed during my CodeClan E63 course. It serves as both a portfolio and a practical
            exercise in modern web development with React.
          </p>
          <p className="main__p">
            The site has been periodically updated as I've learned new techniques and best practices.
            In 2025, I began collaborating with Claude (an AI assistant) to help maintain and improve
            the codebase, including cleaning up unused components, adding accessibility features,
            and keeping content up to date.
          </p>
          <p className="main__p">
            The source code is available on GitHub for anyone interested in how it's built.
          </p>
        </article>
      </main>
    </>
  )
}

export default About