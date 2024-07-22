let users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    address: "123 Main St",
    tag: ["green", "red"],
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    address: "456 Maple St",
    tag: ["green"],
  },
  {
    id: 3,
    firstName: "Jim",
    lastName: "Smith",
    address: "789 Oak St",
    tag: ["red"],
  },
  {
    id: 4,
    firstName: "Julia",
    lastName: "Roberts",
    address: "321 Elm St",
    tag: ["blue"],
  },
  {
    id: 5,
    firstName: "Jack",
    lastName: "Johnson",
    address: "654 Pine St",
    tag: ["yellow"],
  },
];

const filterUser = users.filter((user) => {
  return user.tag.some((tag) => tag === "green");
  //   let found = false;
  //   user.tag.forEach((tag) => {
  //     if (tag === "green") {
  //       found = true;
  //     }
  //   });
  //   return found;
});

const findUser = users.find((user) => {
  return user.tag.find((tag) => tag === "green");
});

console.log(findUser);
