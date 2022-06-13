import { rest } from "msw";

export const mockToken = "mockToken";
export const fakeUsername = "Luis";
export const mockMessage = [
  {
    id: "9382384824242309432f",
    text: "First message posted in the BD",
    image: "https://www.fake.org",
    imageBackup: "https://www.fake.org",
    category: "Locations",
    author: "Writer1",
  },
  {
    id: "wrerwweawegqgqrqggr",
    text: "Second message posted in the BD",
    image: "https:/www.fake.com",
    imageBackup: "https://www.fake.org",
    category: "Locations",
    author: "Writer2",
  },
];

export const oneMockMessage = {
  id: "wrerwweawegqgqrqggr",
  text: "Second message posted in the BD",
  image: "https:/www.fake.com",
  imageBackup: "https://www.fake.org",
  category: "Locations",
  author: "Writer2",
};

export const mockCreateData = {
  id: "12345tgh",
  author: "Luis",
  category: "Locations",
  text: "Happy location",
  image: "A file",
  imageBackup: "https://www.fake.org",
};

export const mockMessageUserData = {
  id: "987665",
  username: "Marta",
  category: "Gastronomy",
  text: "Delicious dish",
  image: "file",
  imageBackup: "https://www.fakeweb.org",
};

export const mockId = "123456789";

const mockDeleteResponse = {
  message: "Item deleted successfully",
};

const mockCreateResponse = {
  message: "Item created correctly",
};

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

  rest.delete(
    `${process.env.REACT_APP_API_URL}messages/${mockId}`,
    (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ messages: mockDeleteResponse }))
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}messages/one/${mockId}`,
    (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ messages: oneMockMessage }))
  ),

  rest.post(
    `${process.env.REACT_APP_API_URL}messages/mine/create`,
    (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ messages: mockCreateResponse }))
  ),

  rest.put(
    `${process.env.REACT_APP_API_URL}messages/update/${mockMessageUserData.id}`,
    (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ messages: mockCreateResponse }))
  ),
];
