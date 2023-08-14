export type DumbTextInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  error?: string;
};

export const DumbTextInput = ({
  label,
  error,
  ...props
}: DumbTextInputProps) => {
  return (
    <>
      {label && <label>{label}</label>}
      <input {...props} />
      {error && <span>{error}</span>}
    </>
  );
};
