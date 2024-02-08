const numbers = [1, 2, 3, 4, 5]
const langs = ['html', 'css', 'javascript', 'python', 'php' ]

const basket = [
  {
    id: 1,
    name: "js book",
    price: 900,
    quantity: 0,
  },
  {
    id: 2,
    name: "css book",
    price: 700,
    quantity: 2,
  },
  {
    id: 3,
    name: "php book",
    price: 1200,
    quantity: 3,
  },
];



// const result = numbers.forEach((num, index, arr) => arr[index] = num ** 2)

// const result = basket.map((el) => ({name: el.name, price: el.price}))

// const result = basket.filter(el => el.price > 800)

const result = basket.reduce((acc, item) => {
  if (item.quantity <= 0) 
  return acc;
  return acc + item.quantity * item.price;
}, 0);

console.log('result', result)
console.log(basket)