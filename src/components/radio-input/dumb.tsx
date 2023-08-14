import { Fragment } from "react";

export type DumbRadioInputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "name"
> & {
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  label?: string;
  error?: string;
};
export const DumbRadioInput = ({
  options,
  label,
  error,
  ...props
}: DumbRadioInputProps) => {
  return (
    <>
      {label && <label>{label}</label>}
      {options.map((option) => (
        <Fragment key={option.value}>
          <input {...props} type="radio" value={option.value} />
          <label>{option.label}</label>
        </Fragment>
      ))}
      {error && <span>{error}</span>}
    </>
  );
};
