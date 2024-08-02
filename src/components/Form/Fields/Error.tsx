import React from "react";
import type { FieldError } from "react-hook-form";

const Error = ({ error }: { error: FieldError }) => {
  return <span className="text-red-500 text-xs block">{error.message}</span>;
};

export default Error;
