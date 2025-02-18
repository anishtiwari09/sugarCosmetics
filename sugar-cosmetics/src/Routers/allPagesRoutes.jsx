import { Route, Switch } from "react-router-dom";
import Home from "../pages/landingPage";
import { ProductDetails } from "../pages/productPage";
import Cart from "../Pages/Cart"

export function AllRoutes(){
return <>
<Switch>
    <Route exact path="/">
        <Home />
    </Route>
    <Route exact path="/products/:url">
        <ProductDetails />
    </Route>
    
</Switch>
</>
}