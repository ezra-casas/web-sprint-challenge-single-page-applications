import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import * as yup from "yup";
import schema from "./components/formSchema";
import axios from "axios";

const initialFormValues = {
  name: "",
  size: "",
  cheese: false,
  pepperoni: false,
  mushroom: false,
  bellpepper: false,
  olives: false,
  specials: "",
};

const initialFormErrors = {
  name: "",
  size: "",
};

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const [pizza, setPizza] = useState([]);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    axios
      .post("https://reqres.in/api/orders", formValues)
      .then((res) => {
        console.log(res);
        setPizza([res.data], ...pizza);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  return (
    <div className="App">
      <nav>
        <h1 className="header">Bloomtech&apos; Pizzeria</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <PizzaForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            errors={formErrors}
          />
        </Route>
      </Switch>
    </div>
  );
};
export default App;