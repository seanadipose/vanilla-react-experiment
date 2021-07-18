const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

/* must be capitalized for react to recognize */
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "dog",
      animal: "Dog",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Sudo",
      animal: "cat",
      breed: "Shorthair",
    }),
  ]);
};

/* render to the root ID */
ReactDOM.render(React.createElement(App), document.getElementById("root"));
