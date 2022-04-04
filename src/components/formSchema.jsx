import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("name must be at least 2 characters")
    .min(2, "name must be at least 2 characters"),
  size: yup
    .string()
    .oneOf(["individual", "small", "medium", "large", "extra-large"]),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    mushroom: yup.boolean(),
    bellpepper: yup.boolean(),
    olives: yup.boolean(),
    specials: yup
    .string()
    .trim()
    .required("special instruction are required")
    .min(2, "special instructions must be at least three characters"),
});

export default formSchema;