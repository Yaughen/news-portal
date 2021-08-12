import React, {useState} from "react";
import Header from "../../components/Header";

const OneNews:React.FC = ()=>{
    const [state, setState]=useState<number>(0);

    return(<div>
        <Header/>
        {state}
        <button onClick={()=>setState(prev=>prev+1   )}/>
    </div>);
}

export default OneNews;