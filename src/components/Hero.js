import background from '../img/pexels-pixabay-268533.jpg'

const Hero = (
    { title }
    // { title, sideText, bgImage, images }
) => {

  let imageStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
    
  return (
    <section 
      className="hero"
      style = {imageStyle}
    >
        <div className="hero__top hero__h2">
            {title}
        </div>
        <div className="hero__bottom"></div>
    </section>
  )
}

export default Hero