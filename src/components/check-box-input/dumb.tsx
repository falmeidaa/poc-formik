import { Fragment } from "react";

export type DumbCheckboxInputProps = Omit<
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
export const DumbCheckboxInput = ({
  options,
  label,
  error,
  ...props
}: DumbCheckboxInputProps) => {
  return (
    <>
      {label && <label>{label}</label>}
      {options.map((option) => (
        <Fragment key={option.value}>
          <input {...props} type="checkbox" value={option.value} />
          <label>{option.label}</label>
        </Fragment>
      ))}
      {error && <span>{error}</span>}
    </>
  );
};
