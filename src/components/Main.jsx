import React from "react";
import Card from './Card'

const Main = ({cards}) => {
    return (
        <div className="main">
            <Card cards={cards}/>
        </div>
    )
}

export default Main