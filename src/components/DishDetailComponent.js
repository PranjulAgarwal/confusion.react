import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from "reactstrap"

const DishDetailComponent = ({ dish }) => {
    return (
        <div className="container">
            <RenderDish dish={dish} />
        </div>
    );
}


function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <RenderComments comments={dish.comments} />
                </div>
            </div>
        );
    }
    else {
        return (<div></div>)
    }
}

function RenderComments({ comments }) {
    if (comments != null) {
        let options = { year: "numeric", month: "short", day: "numeric" };
        return comments.map(comment => (
            <ul key={comment.id} className="list-unstyled">
                <li className="mb-2">{comment.comment}</li>
                <li>
                    -- {comment.author}{" "}
                    {new Date(comment.date).toLocaleDateString("en-US", options)}
                </li>
            </ul>
        ));
    } else return <div />;
}


export default DishDetailComponent;