import React, {useState} from "react";

const Greetings = ()=>{
    const [changeText1,setChangeText] = useState(false);
    const changeText = ()=>{
        setChangeText(true);
    }

    return(<div>
        <h2>Hello World</h2>
        {!changeText1 && <p>The 5th</p>}
        {changeText1 && <p>changed</p>}
        <button onClick={changeText}>Change Text</button>
    </div>);
}

export default Greetings;