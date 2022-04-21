import React, { useCallback ,useEffect, useState} from "react";
import PropTypes from "prop-types";

const LogOutButton =({onLogOut})=>{
    useEffect(()=>{
        console.log("render button");
    })
    return <button className = "btn" onClick = {onLogOut}>
        LogOut
    </button>
}
LogOutButton.propTypes={
    onLogOut:PropTypes.func
}
const MemoBtnComponent = React.memo(LogOutButton);
const Memo = (props) => {
    const [data,setData] = useState(false);
    const handleLogOut = useCallback(() => {
      console.log("handle Function");
      localStorage.removeItem("auth");
    },[]);
    console.log('Mmeo');
    return <>
    <button
        onClick = {()=>setData(!data)}
    >
        Make Render
    </button>
    <MemoBtnComponent onLogOut={handleLogOut}/>
    </>
}
export default Memo;