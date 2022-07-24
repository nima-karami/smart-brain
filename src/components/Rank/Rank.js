import React from "react";

const Rank = ({user}) => {
    return (
        <div>
            <h3>{user.name}, your number of entries is {user.entries}</h3>
            
        </div>
        
    )
}

export default Rank;