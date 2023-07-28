import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../prismaClient";
import bcrypt from "bcrypt";
import jwt from "json-web-token";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    res.status(500).end();
  }

  const username = req.body.username;
  const password = req.body.password;

  try {
    if (
      username == "" ||
      password == "" ||
      username == null ||
      password == null
    ) {
      res.status(404).end();
    }

    const fetchedUser = await prisma.user.findUnique({
      where: { username },
    });

    if (fetchedUser) {
      const compare = await bcrypt.compareSync(password, fetchedUser.password);

      if (compare) {
        const tokenGen = jwt.sign({
          userId: fetchedUser.id,
          username: fetchedUser.username,
          email: fetchedUser.email,
          dateCreated: fetchedUser.dateCreated,
          dateUpdated: fetchedUser.dateUpdated,
        });
        res.status(200).json(tokenGen);
      }
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).end();
  }
}
