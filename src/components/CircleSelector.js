import React from 'react'

function CircleSelector(props) {
    return (
        <div className="CircleSelector">
            <button className="button.selected" onclick ={ props.onClick(1) } >select circle 1</button>
            <button className="button.selected" onclick ={ props.onClick(2) } >select circle 2</button>
            <button className="button.selected" onclick ={ props.onClick(3) } >select circle 3</button>
            <button className="button.selected" onclick ={ props.onClick(4) } >select circle 4</button>
        </div>
    )
}

export default CircleSelector
