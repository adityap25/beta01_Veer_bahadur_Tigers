import Donation from "./donation/Donation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Donate() {

    // const navigate = useNavigate();
    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     if(token == null)
    //         navigate('/login')
            
    // }, []);

    return (
        <div>
            <Donation />
        </div>
    );

}
 