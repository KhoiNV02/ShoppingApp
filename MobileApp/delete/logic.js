import { useState } from "react";
function Logic() {

    const handleCheck=()=>{
        setText(Math.random(1,10)*10)
          }
          const [text,setText]=useState(0);
    return {
        text,
        handleCheck,
    }
}

export default Logic;