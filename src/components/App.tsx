import React, { useState } from "react";
import Card from "./Card";
import DisplayPDF from "./DisplayPDF";
import KYCPDF from "./KYCPDF";
import { pdftoBlob } from "./pdfToBlob";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [customer_employment, setCustomerEmployment] = useState<string>("");
  const [origin_of_funds, setOriginOfFunds] = useState<string>("");
  const [purpose_of_business, setPurposeOfBusiness] = useState<string>("");
  const [political_connection_description, setPoliticalConnectionDescription] =
    useState<string>("");
  const [is_real_owner, setIsRealOwner] = useState<boolean>(false);
  const [has_political_connections, setHasPoliticalConnections] =
    useState<boolean>(false);
  const [shouldProduceDocument, setShouldProduceDocument] = useState(false);
  const [submitted_at, setSubmittedAt] = useState<Date>(new Date());
  const [pdfKYCBlob, setKYCPdfBlob] = useState<Blob>(
    new Blob([], { type: "application/pdf" }),
  );

  /**
   * Decides if the PDF document should be produced or not. Sets the should_produce state/hook
   * depending on that.
   *
   * @param should_produce - Sets the ShouldProduce state/hook to the should_produce value
   *
   */
  const produce_document = async (should_produce: boolean = true) => {
    setSubmittedAt(new Date());
    should_produce
      ? setShouldProduceDocument(true)
      : setShouldProduceDocument(false);

    const KYCPDFdoc: React.ReactElement<object> = (
      <KYCPDF
        {...{
          email,
          customer_employment,
          origin_of_funds,
          purpose_of_business,
          political_connection_description,
          is_real_owner,
          has_political_connections,
          submitted_at,
        }}
      ></KYCPDF>
    );
    const KYCPDFBlob = await pdftoBlob(KYCPDFdoc);

    setKYCPdfBlob(KYCPDFBlob);
  };

  const handleBackToForm = () => {
    setShouldProduceDocument(false);
  };

  const handleChange = (stateKey: string) => (newValue: any) => {
    switch (stateKey) {
      case "email":
        setEmail(newValue);
        break;
      case "customer_employment":
        setCustomerEmployment(newValue);
        break;
      case "origin_of_funds":
        setOriginOfFunds(newValue);
        break;
      case "purpose_of_business":
        setPurposeOfBusiness(newValue);
        break;
      case "political_connection_description":
        setPoliticalConnectionDescription(newValue);
        break;
      case "is_real_owner":
        setIsRealOwner(newValue);
        break;
      case "has_political_connections":
        setHasPoliticalConnections(newValue);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {!shouldProduceDocument && (
        <Card
          produce_document={produce_document}
          handleChange={handleChange}
          email={email}
          customer_employment={customer_employment}
          origin_of_funds={origin_of_funds}
          purpose_of_business={purpose_of_business}
          political_connection_description={political_connection_description}
          is_real_owner={is_real_owner}
          has_political_connections={has_political_connections}
        />
      )}
      {shouldProduceDocument && (
        <DisplayPDF pdf={pdfKYCBlob} onBackToForm={handleBackToForm} />
      )}
    </>
  );
};

export default App;
