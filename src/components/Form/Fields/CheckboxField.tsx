import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { CheckboxField as Checkbox, FieldProps } from "./types";
import Error from "./Error";

const CheckboxField = ({ field }: FieldProps<Checkbox>) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={field.name}
      control={control}
      defaultValue={field.defaultValue || false}
      rules={field.validation}
      render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
        <div>
          <label htmlFor={field.name}>
            <input
              id={field.name}
              type="checkbox"
              onChange={(e) => onChange(e.target.checked)}
              {...rest}
            />
            {field.label}
          </label>
          {error && <Error error={error} />}
        </div>
      )}
    />
  );
};

export default CheckboxField;
