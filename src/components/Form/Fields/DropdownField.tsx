import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { DropdownField as Dropdown, FieldProps } from "./types";
import Error from "./Error";

const DropdownField = ({ field }: FieldProps<Dropdown>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={field.name}
      control={control}
      defaultValue={field.defaultValue || ""}
      rules={field.validation}
      render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
        <div>
          <label htmlFor={field.name}>{field.label}</label>
          <select id={field.name} onChange={onChange} {...rest}>
            <option disabled value="">
              Select your option
            </option>
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {error && <Error error={error} />}
        </div>
      )}
    />
  );
};

export default DropdownField;
