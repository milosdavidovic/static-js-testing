const greeter = (firstName: string, lastName: string): void => {
  // eslint-disable-next-line no-console
  console.log(`Hello ${firstName} ${lastName}`);
};

const firstName = "John";
const lastName = "Smith";

greeter(firstName, lastName);
