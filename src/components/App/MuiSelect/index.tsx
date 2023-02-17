import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Field, ErrorMessage } from "formik";
import { FieldInputProps } from "formik";

export interface MuiSelectItems {
  label: string;
  value: string;
}

interface MuiSelectProps {
  label: string;
  items: MuiSelectItems[];
  name: string;
  required?: boolean;
}

interface MuiSelectFieldProps extends FieldInputProps<string> {
  label: string;
  children: React.ReactNode;
  errorString?: string;
  required: boolean;
}

const MuiSelectField: React.FC<MuiSelectFieldProps> = ({
  label,
  children,
  errorString,
  value,
  name,
  onChange,
  onBlur,
  required,
}) => {
  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel required={required}>{label}</InputLabel>
      <Select name={name} onChange={onChange} onBlur={onBlur} value={value}>
        {children}
      </Select>
      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  );
};

const MuiSelect: React.FC<MuiSelectProps> = ({
  label,
  items,
  name,
  required = false,
}) => {
  return (
    <div>
      <Field
        required={required}
        name={name}
        as={MuiSelectField}
        label={label}
        errorString={<ErrorMessage name={name} />}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Field>
    </div>
  );
};

export default MuiSelect;
