import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Card from "../components/Card";
import CheckBox from "../components/forms/additinal_forms/CheckBox";
import FormWizard from "../components/FormWizard/FormWizard";
import EmailForm from "../components/forms/EmailForm";
import CustomerEmployment from "../components/forms/CustomerEmployment";
import PurposeOfBusiness from "../components/forms/PurposeOfBusiness";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Card">
                <Card/>
            </ComponentPreview>
            <ComponentPreview path="/CheckBox">
                <CheckBox/>
            </ComponentPreview>

            <ComponentPreview path="/FormWizard">
                <FormWizard steps={[
                    <EmailForm isValid={() => { return true; }} />,
                    <CustomerEmployment isValid={() => { return false; }} />,
                    <PurposeOfBusiness isValid={() => { return true; }} />
                ]}/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;