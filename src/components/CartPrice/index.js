import React from 'react';
import './style.css';
import { connect } from 'react-redux';

const CartPrice = props => {

    return (
        <div className="PriceWrapper">
            {/* show price */}
            <div className="CardTitle">
                <h3>PRICE DETAILS</h3>
            </div>
            <div className="CardBody">
                <div className="FinalBilling">
                    <div className="Row">
                        <p>Price ({props.cart.cartCount})</p>
                        <p>Rs{props.cart.totalAmount}</p>
                    </div>
                    <div className="Row">
                        <p>Delivery</p>
                        <p>Rs0</p>
                    </div>
                    <hr />
                    <div className="Row">
                        <h4>Total Payable</h4>
                        <h4>RS{props.cart.totalAmount}</h4>
                    </div>
                </div>
                
            </div>
        </div>
    );


}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartPrice);