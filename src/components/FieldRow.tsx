import React from "react";

interface FieldRowProps {
  label: string;
  value: string | boolean;
}

const FieldRow: React.FC<FieldRowProps> = ({ label, value }) => (
  <div className="row mb-3">
    <div className="col-md-4">
      <strong className="text-muted">{label}</strong>
    </div>
    <div className="col-md-8">
      <span className="text-dark">{value}</span>
    </div>
  </div>
);

export default FieldRow;
