import React, {useState} from "react";
import Output from "./Output";

const Greetings = ()=>{
    const [changeText1,setChangeText] = useState(false);
    const changeText = ()=>{
        setChangeText(true);
    }

    return(<div>
        <h2>Hello World</h2>
        {!changeText1 && <Output>The 5th</Output>}
        {changeText1 && <p>changed</p>}
        <button onClick={changeText}>Change Text</button>
    </div>);
}

export default Greetings;