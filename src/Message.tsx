import React from "react";

function Message (){
    const name = '';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1> not found</h1>

}

export default Message;