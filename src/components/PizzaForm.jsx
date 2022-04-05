import React from "react";

function PizzaForm(props){
    const {values, change, submit, errors} = props;
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    const onChange = (event) => {
        const {name, value, checked, type} = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    }

    return (
        <div>
            <h1>Pizza Order Form</h1>
            <form id="pizza-form" onSubmit={onSubmit}>
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
                <label>
                    {" "}
                    Name:
                    <input
                        id="name-input"
                        name="name"
                        type="text"
                        onChange={onChange}
                        value={values.name}
                        placeholder="Name"
                    />
                </label>
                
                <label>
                    Pizza Size:
                    <select
                        id="size-dropdown"
                        value={values.size}
                        name="size"
                        onChange={onChange}
                    >
                        <option value="">Select a Size</option>
                        <option value="individual">Individual</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xl">Extra Large</option>
                    </select>
                </label>

                <label>
                    Cheese
                    <input
                        checked={values.cheese}
                        onChange={onChange}
                        name="cheese"
                        type="checkbox"
                        />
                </label>

                <label>
                    Pepperoni
                    <input
                        checked={values.pepperoni}
                        onChange={onChange}
                        name="pepperoni"
                        type="checkbox"
                    />
                </label>

                <label>
                    Mushrooms
                    <input
                        checked={values.mushroom}
                        onChange={onChange}
                        name="mushroom"
                        type="checkbox"
                    />
                </label>

                <label>
                {" "}
                Bellpeppers
                <input
                    checked={values.bellpepper}
                    onChange={onChange}
                    name="bellpepper"
                    type="checkbox"
                />
                </label>
                
                <label>
                Olives
                <input
                    checked={values.olives}
                    onChange={onChange}
                    name="olives"
                    type="checkbox"
                />
                </label>

                <label>
                <input
                    value={values.specials}
                    onChange={onChange}
                    name="specials"
                    type="text"
                    id="special-text"
                    placeholder="Special instructions here"
                />
                </label>
                <input type="submit" value="order-button" id="order-button" />
            </form>
        </div>
    )
    
}
export default PizzaForm;