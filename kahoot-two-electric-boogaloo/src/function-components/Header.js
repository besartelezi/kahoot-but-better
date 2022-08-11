import React, {useState} from 'react';


function Header(props) {

    const [title, setTitle] = useState("Hello World!");

    return (
        <div className={"header"}>
            <h1>{title}</h1>
            <button onClick={() => setTitle("SomeText")}>Click me to change state!</button>
        </div>
    );
}

export default Header;

//props.title