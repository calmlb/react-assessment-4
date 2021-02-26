import React from 'react'

function Circles(props) {
    return (
        <div className="Circles">
            <div className={ (props.circle1 === true) ? "selected" : ""}>1</div>
            <div className={ (props.circle2 === true) ? "selected" : ""}>2</div>
            <div className={ (props.circle3 === true) ? "selected" : ""}>3</div>
            <div className={ (props.circle4 === true) ? "selected" : ""}>4</div>
        </div>
    )
}

export default Circles
