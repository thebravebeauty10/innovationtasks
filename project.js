const products = [
  { id: 1, name: "Pen", price: 10, quantity: 2 },
  { id: 2, name: "Notebook", price: 50, quantity: 0 },
  { id: 3, name: "Pencil", price: 5, quantity: 5 }
];

const available = products.filter(p => p.quantity > 0);
const total = available.reduce((t, p) => t + p.price * p.quantity, 0);
const sliced = products.slice(0, 2);
const updated = [...sliced];
updated.splice(1, 1);
const cloned = [...updated];

const item = {
  id: 4,
  name: "Eraser",
  price: 3,
  quantity: 1,
  show() {
    return `${this.name} - Rs.${this.price} x ${this.quantity}`;
  }
};

const { name, price, quantity } = item;

console.log(available, total, sliced, updated, cloned);
console.log(item.show());
console.log(name, price, quantity);

