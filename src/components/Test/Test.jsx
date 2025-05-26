import React, { useState } from "react";

function Test(){
    const [subscribed,setSubscribed]=useState(false);

    let content;
    function HandleUnsubscribed(){
        setSubscribed(false)
    }

    function HandleSubscribed(){
        setSubscribed(true)
    }

    if(subscribed){
        content=(
            <div>
                <h2>Thanks for subscribing</h2>
                <button onClick={HandleUnsubscribed}>Unsubsribe</button>
            </div>
        );
    }

    else{
        content=(
            <div>
                <button onClick={HandleSubscribed}>Subscribe</button>
            </div>
        );
    }



    return (
        <div>
            <h2>Welcome, User</h2>
            {content}
        </div>
    );
}

export default Test;