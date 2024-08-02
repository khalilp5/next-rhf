import type { NextPage } from "next";
import Form from "@/components/Form";
import { fields } from "@/components/Form/data";

const Home: NextPage = () => {
  return (
    <main className={`w-1/2 mx-auto border m-24 p-10 bg-white`}>
      <h1 className="font-bold text-2xl">React Hook Form</h1>
      <Form schema={fields} />
    </main>
  );
};

export default Home;
