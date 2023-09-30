import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return ( 
        <div>
            <h3>Home Page</h3>
            <button onClick={()=> navigate("contact")}>Navigate to contact page</button>
        </div>
     );
}
 
export default Home;