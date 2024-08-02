import { InferGetStaticPropsType, NextPage } from "next";
import { FormSchema } from "@/components/Form/Fields/types";
import Form from "@/components/Form";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  form,
}) => {
  return (
    <main className={`w-1/2 mx-auto border m-24 p-10 bg-white`}>
      <h1 className="font-bold text-2xl">React Hook Form</h1>
      <Form schema={form} />
    </main>
  );
};

export default Home;

export const getStaticProps = () => {
  return {
    props: {
      form: formSchema,
    },
  };
};

const formSchema: FormSchema = {
  fields: [
    {
      label: "Name",
      type: "text",
      name: "name",
      validation: {
        required: "This is required",
        minLength: { value: 5, message: "Name must be at least 5 characters" },
      },
      placeholder: "Enter your name",
    },
    {
      name: "age",
      type: "number",
      label: "Age",
      defaultValue: 18,
      validation: {
        required: "This is required",
        min: { value: 18, message: "Age must be 18 or older" },
      },
    },
    {
      label: "Favorite Color",
      type: "select",
      name: "favorite_color",
      validation: {
        required: "This is required",
      },
      options: [
        { value: "english", label: "English" },
        { value: "hindi", label: "Hindi" },
        { value: "spanish", label: "Spanish" },
      ],
    },
    {
      label: "Gender",
      type: "radio",
      name: "gender",
      validation: {
        required: "This is required",
      },
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
    },
    {
      label: "Accept Terms",
      type: "checkbox",
      name: "accept_terms",
      validation: {
        required: "You must accept the terms",
      },
    },
  ],
};
