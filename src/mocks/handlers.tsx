import { rest } from "msw";

export const mockToken = "mockToken";
export const fakeUsername = "Luis";

export const mockMessage = [
  {
    id: "9382384824242309432f",
    text: "First message posted in the BD",
    image: "https://www.fake.org",
    category: "Locations",
    author: "Writer1",
  },
  {
    id: "wrerwweawegqgqrqggr",
    text: "Second message posted in the BD",
    image: "https:/www.fake.com",
    category: "Locations",
    author: "Writer2",
  },
];

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_URL}user/register`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json({ user: fakeUsername }))
  ),

  rest.post(`${process.env.REACT_APP_API_URL}user/login`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ user: fakeUsername }))
  ),
  rest.get(`${process.env.REACT_APP_API_URL}messages/list`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ messages: mockMessage }))
  ),
];
