import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

export const createAgent = async (req: Request, res: Response) => {
  const { name, email, phone, organizationId, password } = req.body;

  try {
    // In a real app, hash the password!
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        organizationId,
        passwordHash: password, // TODO: bcrypt hash
        role: 'AGENT',
        status: 'ACTIVE',
      },
    });
    res.status(201).json(newUser);
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Failed to create agent' });
  }
};
