export type DumbSelectInputProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  options: Array<{
    value: string;
    label: string;
  }>;
  label?: string;
  error?: string;
};

export const DumbSelectInput = ({
  options,
  label,
  error,
  ...props
}: DumbSelectInputProps) => {
  return (
    <>
      {label && <label>{label}</label>}
      <select {...props}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      {error && <span>error</span>}
    </>
  );
};
