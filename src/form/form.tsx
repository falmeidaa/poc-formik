import { FormikProvider } from "formik";
import { useCallback } from "react";
import { TextInput } from "../components/text-input/controlled";
import { zodFormValidation } from "./zod-validation";
import { useFormik } from "../hooks/use-formik";
import { SelectInput } from "../components/select-input/controlled";
import { RadioInput } from "../components/radio-input/controlled";
import { CheckBox } from "../components/check-box-input/controlled";

const SELECT_OPTIONS = Array.from({ length: 10 }).map((_, index) => ({
  value: index.toString(),
  label: index.toString(),
}));

const GENDER_OPTIONS = [
  {
    value: "male",
    label: "Masculino",
  },
  {
    value: "female",
    label: "Feminino",
  },
];

const CHECKBOX_OPTIONS = [
  {
    value: "terms_use",
    label: "Aceito os termos de uso",
  },
  {
    value: "terms_privacy",
    label: "Aceito os termos de privacidade",
  },
];

type FormProps = {
  name: string;
  age: string;
};

export const Form = () => {
  const onSubmit = useCallback((values: FormProps) => {
    console.log(values);
  }, []);

  const formik = useFormik<FormProps>({
    initialValues: {
      name: "teste",
      age: "1",
    },
    onSubmit,
    validation: zodFormValidation,
  });

  // const formik = useFormik<FormProps>({
  //   initialValues: {
  //     name: "teste",
  //   },
  //   onSubmit,
  // });

  return (
    <FormikProvider value={formik}>
      <TextInput name="name" label="Nome" />
      <SelectInput name="age" options={SELECT_OPTIONS} />
      <RadioInput name="gender" options={GENDER_OPTIONS} />
      <CheckBox name="terms" options={CHECKBOX_OPTIONS} />
      <button type="submit" onClick={() => formik.handleSubmit()}>
        Enviar
      </button>
    </FormikProvider>
  );
};
