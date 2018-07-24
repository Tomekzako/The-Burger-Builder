import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const orderedList = Object.keys(props.ingredients).map( (el, index) => {
        return <li key={el + index}><span style={{textTransform: 'capitalize'}}>{el}:</span> {props.ingredients[el]}</li>
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {orderedList}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;