import { rest } from 'msw';

const mockResponse = [
  {
    meanings: [
      {
        definitions: [
          {
            definition:
              'A mammal, Canis familiaris or Canis lupus familiaris, that has been domesticated for thousands of years, of highly variable appearance due to human breeding.',
          },
        ],
      },
    ],
  },
];

export const handlers = [
  rest.get(
    'https://api.dictionaryapi.dev/api/v2/entries/en/dog',
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockResponse));
    },
  ),
];
