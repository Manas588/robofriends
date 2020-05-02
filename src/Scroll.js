import React from "react";

const Scroll = (props) => {
    return (
        <div style= {{overflow:'scroll', height: '800px', border:'1px solid rgba(20, 20, 50, 0.3)', margin:'5px 0px'}}>
            {props.children}
        </div>
    );

}

export default Scroll;