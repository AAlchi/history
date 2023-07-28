import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../prismaClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    res.status(500).end();
  }

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  try {
    if (
      username == "" ||
      email == "" ||
      password == "" ||
      username == null ||
      email == null ||
      password == null
    ) {
      res.status(404).end();
    }

    const fetchedUser = await prisma.user.findUnique({
      where: { username },
    });

    const fetchedUserTwo = await prisma.user.findUnique({
      where: { email },
    });

    if (fetchedUser || fetchedUserTwo) {
      res.status(404).end();
    }

    const add = await prisma.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        isSubscribed: false,
      },
    });

    res.status(200).json(add);
  } catch (err) {
    res.status(500).end();
  }
}
