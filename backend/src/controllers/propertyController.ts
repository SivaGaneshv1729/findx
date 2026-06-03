import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getProperties = async (req: Request, res: Response) => {
  try {
    const properties = await prisma.property.findMany({
      include: {
        project: {
          select: { name: true }
        },
        assignedAgent: {
          select: { name: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
};

export const createProperty = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const property = await prisma.property.create({
      data: {
        ...data,
        // Ensure decimal values are handled correctly if sent as numbers
      }
    });
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create property' });
  }
};

export const getPublicProperties = async (req: Request, res: Response) => {
  try {
    const properties = await prisma.property.findMany({
      where: {
        status: { in: ['AVAILABLE', 'BOOKED'] }
      },
      select: {
        id: true,
        propertyCode: true,
        title: true,
        status: true,
        areaSqyd: true,
        totalPrice: true,
        latitude: true,
        longitude: true,
        facing: true,
        project: {
          select: { name: true }
        }
      }
    });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch public plots' });
  }
};
