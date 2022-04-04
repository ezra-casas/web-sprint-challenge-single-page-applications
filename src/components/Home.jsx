import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();
    const routeToOrder = () => {
        history.push("/pizza");
    };
    return (
        <div>
            <button onClick={routeToOrder} className="shop-button" id="order-pizza">
                MAKE IT HAPPEN!
            </button>
        </div>
    )
}
export default Home;