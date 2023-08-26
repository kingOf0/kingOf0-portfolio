import React from "react";

export function ReferenceCard({logo, title, description, sign}) {
    return <div className="reference">
        <div className="m-auto slogo">
            <img className="p-3" height="150rem" src={logo}></img>
        </div>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{sign}</p>
        </div>
    </div>
}