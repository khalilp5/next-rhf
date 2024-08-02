import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { FieldProps, InputField } from "./types";
import Error from "./Error";

const TextField = ({ field }: FieldProps<InputField>) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={field.name}
      defaultValue={field.defaultValue || ""}
      control={control}
      rules={field.validation}
      render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
        <div>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            id={field.name}
            type={field.type}
            placeholder={field.placeholder}
            onChange={onChange}
            {...rest}
          />
          {error && <Error error={error} />}
        </div>
      )}
    />
  );
};

export default TextField;
