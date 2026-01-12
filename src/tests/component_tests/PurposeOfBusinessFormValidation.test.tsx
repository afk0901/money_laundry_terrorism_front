import PurposeOfBusiness from "../../components/forms/PurposeOfBusiness";
import { textInputValidationTests } from "../helpers/textInputValidationTests";

const validationErrorText = /Tilgangur og eðli viðskipta má ekki vera tómt/i;

textInputValidationTests(
  'Purpose of business input',
  PurposeOfBusiness,
  'description',
  'onDescriptionChange',
  validationErrorText,
  'Real estate trading'
);