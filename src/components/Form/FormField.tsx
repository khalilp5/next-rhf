import React from "react";
import type { Field } from "./Fields/types";
import dynamic from "next/dynamic";

const TextField = dynamic(() => import("./Fields/TextField"));
const DropdownField = dynamic(() => import("./Fields/DropdownField"));
const RadioField = dynamic(() => import("./Fields/RadioField"));
const CheckboxField = dynamic(() => import("./Fields/CheckboxField"));

const FormField = ({ field }: { field: Field }) => {
  return (
    <>
      {(() => {
        switch (field.type) {
          case "text":
          case "email":
          case "tel":
          case "number":
            return <TextField field={field} />;
          case "select":
            return <DropdownField field={field} />;
          case "checkbox":
            return <CheckboxField field={field} />;
          case "radio":
            return <RadioField field={field} />;
          default:
            return null;
        }
      })()}
    </>
  );
};

export default FormField;
