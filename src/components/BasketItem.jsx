function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype,
  } = props;
  return (
    <li className='collection-item active'>
      {name}{' '}
      <i
        className='material-icons basket-quantity'
        onClick={() => decQuantity(id)}
      >
        remove
      </i>
      <i
        className='material-icons basket-quantity'
        onClick={() => incQuantity(id)}
      >
        add
      </i>
      x {quantity} = {price * quantity} euro
      <span className='secondary-content' onClick={() => removeFromBasket(id)}>
        <i className='material-icons basket-delete'>close</i>
      </span>
    </li>
  );
}

export { BasketItem };
