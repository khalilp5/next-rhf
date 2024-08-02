import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { FieldProps, RadioField as Radio } from "./types";
import Error from "./Error";

const RadioField = ({ field }: FieldProps<Radio>) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={field.name}
      control={control}
      defaultValue={field.defaultValue || ""}
      rules={field.validation}
      render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
        <div className="field">
          <label className="font-bold">{field.label}</label>
          {field.options.map((option) => (
            <div key={option.value}>
              <input
                id={option.value}
                type="radio"
                onChange={() => {
                  onChange(option.value);
                }}
                {...rest}
              />
              <label htmlFor={option.value} className="ml-2">
                {option.label}
              </label>
            </div>
          ))}
          {error && <Error error={error} />}
        </div>
      )}
    />
  );
};

export default RadioField;
