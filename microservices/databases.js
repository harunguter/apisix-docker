const databases = {
  orders: [
    {
      id: 10001,
      userId: 40001,
      productIds: [20003],
      isCompleted: false,
    },
    {
      id: 10002,
      userId: 40002,
      productIds: [20001, 20002, 20003],
      isCompleted: true,
    },
    {
      id: 10003,
      userId: 40001,
      productIds: [20002],
      isCompleted: false,
    },
  ],
  products: [
    {
      id: 20001,
      name: 'Computer',
      categoryId: 50001,
      currency: 'TRY',
      price: 49750.75,
    },
    {
      id: 20002,
      name: 'Mouse',
      category: 50001,
      currency: 'USD',
      price: 1250.55,
    },
    {
      id: 20003,
      name: 'Keyboard',
      category: 50001,
      currency: 'TRY',
      price: 5500.25,
    },
  ],
  shippings: [
    {
      id: 30001,
      orderId: 10001,
      isCompleted: false,
    },
    {
      id: 30002,
      orderId: 10002,
      isCompleted: true,
    },
    {
      id: 30003,
      orderId: 10003,
      isCompleted: false,
    },
  ],
  users: [
    {
      id: 40001,
      name: 'John Doe',
      email: 'john.doe@mail.com',
      currency: 'USD',
      wallet: 75234.89,
    },
    {
      id: 40002,
      name: 'Jane Doe',
      email: 'jane.doe@mail.com',
      currency: 'TRY',
      wallet: 1456.42,
    },
  ],
};
