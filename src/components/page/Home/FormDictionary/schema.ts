import z from 'zod';

export const schema = z.object({
  searchWord: z
    .string()
    .nonempty('Please enter a word to search')
    .regex(/^(?![\d\s!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?`~])\S+$/, {
      message: 'Please only enter letters',
    }),
});

export type FormSearch = z.infer<typeof schema>;
