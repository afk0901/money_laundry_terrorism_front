import React from "react";
import InformationProcessingNotice from "./InformationProcessingNotice";
import MultiStep from "react-multistep";
import EmailForm from "./forms/EmailForm";
import DescriptionForm from "./forms/additinal_forms/DescriptionForm";
import PurposeOfBusiness from "./forms/PurposeOfBusiness";
import OriginOfFunds from "./forms/OriginOfFunds";
import RealOwner from "./forms/RealOwner";
import PoliticalConnections from "./forms/PoliticalConnections";
import AnotherRisk from "./forms/AnotherRisk";


class Card extends React.Component<any, any>{

    render() {
        return <>
                <div className={"card mx-3 my-3"}>
                    <div className={"card-body"}>
                        <div className={"card-title"}>
                            <h2>Áræðanleikakönnun</h2>
                        </div>
                        <InformationProcessingNotice />
                        <div className={'my-3'}>
                        <MultiStep activeStep={0}>
                            <EmailForm email={"email@dod.com"}/>
                            <PurposeOfBusiness />
                            <OriginOfFunds />
                            <RealOwner />
                            <PoliticalConnections />
                            <AnotherRisk />
                        </MultiStep>
                            </div>
                    </div>
                </div>
            </>
    }
}

export default Card