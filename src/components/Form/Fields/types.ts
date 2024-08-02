import { RegisterOptions } from "react-hook-form";

export interface FormSchema {
  fields: Field[];
}

export type Field = InputField | DropdownField | CheckboxField | RadioField;

interface FieldBase {
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string | number;
  validation?: RegisterOptions;
}

export interface InputField extends FieldBase {
  type: "text" | "email" | "tel" | "number";
}

export type Option = { label: string; value: string };

export interface DropdownField extends FieldBase {
  type: "select";
  options: Option[];
}

export interface CheckboxField extends FieldBase {
  type: "checkbox";
}

export interface RadioField extends FieldBase {
  type: "radio";
  options: Option[];
}

export type FieldProps<Field> = {
  field: Field;
};
