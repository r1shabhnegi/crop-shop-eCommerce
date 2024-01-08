import { z } from 'zod';

export const signInValidation = z.object({
  email: z.string().min(2, 'Minimum two character required'),
  password: z
    .string()
    .min(8, 'Minimum two character required')
    .max(20, 'Password should be least then 20 character'),
});

export const signUpValidation = z.object({
  username: z.string().min(2, 'Minimum two character required').max(50),
  name: z.string().min(2, 'Minimum two character required').max(50),
  email: z.string().min(2, 'Minimum two character required'),
  password: z
    .string()
    .min(8, 'Minimum two character required')
    .max(20, 'Password should be least then 20 character'),
});
