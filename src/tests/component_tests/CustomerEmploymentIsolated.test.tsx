import CustomerEmployment from "../../components/forms/CustomerEmployment";
import { textInputValidationTests } from "../helpers/textInputValidationTests";

const validationErrorText = /Atvinna viðskiptavinar má ekki vera tómt/i;

textInputValidationTests(
  'Customer employment input',
  CustomerEmployment,
  'customerEmployment',
  'onCustomerEmploymentChange',
  validationErrorText,
  'Software Engineer'
);