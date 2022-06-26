import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function renderDishes({ dish }) {
    return (
        <div className="col-12 col-sm-5">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
function renderComments({ comments }) {
    const comment = comments.map((item) => {
        return (
            <div>
                <p>{item.comment}</p>
                <p>-- {item.author} {item.date}</p>
            </div>
        );
    });
    return (
        <div className="col-12 col-sm-7">
            <h2>Comments</h2>
            {comment}
        </div>
    );
}
const DishDetail = (props) => {
    if (props.dish != null) {
        const comment = props.dish.comments.map((item) => {
            return (
                <div>
                    <p>{item.comment}</p>
                    <p>{item.author} {item.date}</p>
                </div>
            );
        });
        const dish = props.dish;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-5">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-7">
                        <h2>Comments</h2>
                        {comment}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;