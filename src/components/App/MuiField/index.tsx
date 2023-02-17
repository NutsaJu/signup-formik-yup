import React from "react";
import { FormHelperText, TextField } from "@material-ui/core";
import { Field, ErrorMessage } from "formik";

interface MuiFieldProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean
}

const MuiField: React.FC<MuiFieldProps> = ({ name, label, type = "text", required="false" }) => {
  return (
    <div>
      <Field
        required={required}
        as={TextField}
        label={label}
        fullWidth
        autoComplete="off"
        name={name}
        type={type}
      />
      <FormHelperText className="Mui-error" ><ErrorMessage name={name}></ErrorMessage></FormHelperText>
    </div>
  );
};

export default MuiField;
