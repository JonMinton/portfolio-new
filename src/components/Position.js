import '../css/Position.css';


const Position = () => {
  return (
    <body>
    <div className="outer-container">
        <div className="inner-container">
            <div className="box absolute">
                <p>Absolute</p>
            </div>
            <div className="box relative">
                <p>Relative</p>
            </div>
            <div className="box fixed">
                <p>Fixed</p>
            </div>
            <div className="box sticky">
                <p>Sticky</p>
            </div>
        </div>
    </div>
    </body>
  )
}

export default Position