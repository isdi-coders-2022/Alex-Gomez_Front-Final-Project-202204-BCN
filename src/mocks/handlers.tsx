import { rest } from "msw";

export const mockToken = "mockToken";
export const fakeUsername = "fakeUsername";

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_URL}user/register`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json({ user: fakeUsername }))
  ),
];
