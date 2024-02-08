import { BasketItem } from './BasketItem';

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Cart</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
            {...item}
          />
        ))
      ) : (
        <li className='collection-item active'>Cart is empty</li>
      )}
      <li className='collection-item active'>Total cost: {totalPrice} euro </li>
      <li className='collection-item active'>
        <button className='btn btn-small'>Checkout</button>
      </li>
      <i className='material-icons basket-close' onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export { BasketList };
