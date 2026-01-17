import OriginOfFunds from "../../components/forms/OriginOfFunds";
import { textInputValidationTests } from "../helpers/textInputValidationTests";

const validationErrorText = /Uppruni fjármagns má ekki vera tómt/i;

textInputValidationTests(
  "Origin of funds input",
  OriginOfFunds,
  "description",
  "onDescriptionChange",
  validationErrorText,
  "Salary",
);
