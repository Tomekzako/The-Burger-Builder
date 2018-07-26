import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate () {
        console.log('[Order Summary] will update');
    }

    render() {
        
        const orderedList = Object.keys(this.props.ingredients).map( (el, index) => {
            return <li key={el + index}><span style={{textTransform: 'capitalize'}}>{el}:</span> {this.props.ingredients[el]}</li>
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {orderedList}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
} 

export default OrderSummary;