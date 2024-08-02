import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormSchema } from "./Fields/types";
import FormField from "./FormField";

type Props = {
  schema: FormSchema;
};

const Form = ({ schema }: Props) => {
  const methods = useForm();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = (data: any) => {
    // Add your logic to process the data
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...methods}>
        {schema.fields.map((field, index) => {
          return <FormField key={index} field={field} />;
        })}
      </FormProvider>
      <button type="submit" disabled={isSubmitting} className="button w-full">
        Submit
      </button>
    </form>
  );
};

export default Form;
