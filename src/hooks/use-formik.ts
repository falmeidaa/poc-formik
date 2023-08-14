import { FormikConfig, FormikErrors, FormikValues, useFormik as useFormikLib } from "formik"
import { Validation } from "../infra/validation"
import { useCallback, useMemo } from "react"

type Props<T extends FormikValues> = Omit<FormikConfig<T>, 'validate'  | 'validationSchema'> & {
  validation?: Validation

}

export const useFormik = <T extends FormikValues = FormikValues>({ validation, ...props }: Props<T>) => {
  const validateAdapter = useCallback((values: T): Promise<FormikErrors<T>> | undefined => {
    if (!validation) return

    const errors = validation.validate(values)
    if (!errors) return

    return Promise.resolve(errors as FormikErrors<T>)
  }, [validation])


  const methods = useFormikLib({
    ...props,
    validate: validateAdapter
  })


  return useMemo(() => methods, [methods])
}