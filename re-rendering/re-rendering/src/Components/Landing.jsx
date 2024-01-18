import { useNavigate } from "react-router-dom"

export default function Landing(){
    const navigate = useNavigate();

    function handleClick(){
        navigate('/')

    };

    return <div>
        landing 
        <button onClick={handleClick}>Click to navigate</button>

    </div>
}