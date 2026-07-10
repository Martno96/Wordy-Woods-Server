import type { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma/client.js";
export class UserController {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  index(req: Request, res: Response) {
    res.json({ message: "all users" });
  }

  async show(req: Request, res: Response) {
    const id = parseInt(req.params.id as string);

    if (isNaN(id)) return res.status(400).json({ error: "Invalid user id" });

    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        username: true,
        display_name: true,
        created_at: true,
      },
    });

    if (!user) return res.status(404).json({ error: "User not found" });
    return res.status(200).json({ user });
  }
}
