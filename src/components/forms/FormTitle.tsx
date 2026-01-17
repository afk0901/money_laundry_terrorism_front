import React from "react";

interface FormTitleProps {
  title: string;
}

class FormTitle extends React.Component<FormTitleProps> {
  render() {
    // eslint-disable-next-line react/prop-types
    return <h5>{this.props.title}</h5>;
  }
}

export default FormTitle;
