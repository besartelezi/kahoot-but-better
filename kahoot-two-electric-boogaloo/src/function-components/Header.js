import React, {useEffect, useState} from 'react';

function Header(props) {

    const [title, setTitle] = useState("Kahoot Two");

    useEffect(() => {
        console.log("Title changed to: " +  title);
    }, [title]);

    return (
        <div className={"header"}>
            <h1>{title}</h1>
            <button onClick={() => setTitle("Kahoot Two: Electric Boogaloo")}>Click here for the real title</button>
        </div>
    );
}

export default Header;

//props.title