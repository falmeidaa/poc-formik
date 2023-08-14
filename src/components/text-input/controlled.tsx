import { Field, FieldProps } from "formik";
import { DumbTextInput, DumbTextInputProps } from "./dumb";

type TextInputProps = Omit<DumbTextInputProps, "onChange" | "value"> & {
  name: string;
};

export const TextInput = ({ name, ...props }: TextInputProps) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const error = meta.error;

        return (
          <DumbTextInput {...props} {...field} error={error} />
        );
      }}
    </Field>
  );
};
