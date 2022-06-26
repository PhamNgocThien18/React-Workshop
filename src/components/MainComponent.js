import React, { Component } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Home from "./HomeComponent";
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Redirect, Route, Switch } from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comment: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId })
    // }

    render() {
        const HomePage = () => {
            return (
                console.log(this.state.dishes.filter((dish) => dish.featured === true)),
                <Home
                    dish={this.state.dishes.find((dish) => dish.featured === true)}
                    promotion={this.state.promotions.find((promo) => promo.featured === true)}
                    leader={this.state.leaders.find((leader) => leader.featured === true)}
                />
            )
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route exact path='/contactus' component={Contact} />
                    {/* <Redirect to='/home' /> */}
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;