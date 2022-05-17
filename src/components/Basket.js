import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-11">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row1">
            <div className="col-21">{item.name}</div>
            <div className="col-21">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-21 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row1">
              <div className="col-21">Items Price</div>
              <div className="col-11 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row1">
              <div className="col-21">Tax Price</div>
              <div className="col-11 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row1">
              <div className="col-21">Shipping Price</div>
              <div className="col-11 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row1">
              <div className="col-21">
                <strong>Total Price</strong>
              </div>
              <div className="col-11 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row1">
              <button onClick={() => alert('order placed!')}>
                place order
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

