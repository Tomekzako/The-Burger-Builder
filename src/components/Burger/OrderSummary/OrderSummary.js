import React from 'react';
import Aux from '../../../hoc/Auxiliary';

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
            <p>Continue to Checkout?</p>
            
        </Aux>
    );
};

export default orderSummary;