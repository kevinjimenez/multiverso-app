import { FormikErrors } from 'formik';
import { z } from 'zod';

export const createFormValidator = <T extends z.ZodType>(schema: T) => {
  return (values: z.infer<T>): FormikErrors<z.infer<T>> => {
    const result = schema.safeParse(values);
    if (result.success) return {};

    const fieldErrors = result.error.flatten().fieldErrors;
    const errors: Record<string, string> = {};

    for (const key in fieldErrors) {
      const message = fieldErrors[key as keyof typeof fieldErrors]?.[0];
      if (message) errors[key] = message;
    }

    return errors as FormikErrors<z.infer<T>>;
  };
};
