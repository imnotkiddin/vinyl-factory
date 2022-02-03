const Items = [
  {
    id: 1,
    name: "Item 1",
    description: "Item 1 description",
    price: 10.0,
    image: "https://picsum.photos/200/300/?random",
    quantity: 1,
  },
  {
    id: 2,
    name: "Item 2",
    description: "Item 2 description",
    price: 20.0,
    image: "https://picsum.photos/200/300/?random",
    quantity: 1,
  },
  {
    id: 3,
    name: "Item 3",
    description: "Item 3 description",
    price: 30.0,
    image: "https://picsum.photos/200/300/?random",
    quantity: 1,
  },
];

function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Items);
    }, 1000);
  });
}
export { getItems };
