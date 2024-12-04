import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,20}$/;
  return passwordRegex.test(password);
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        savedCrypto: true,
        savedStocks: true,
      },
    });

    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        email: true,
        savedCrypto: true,
        savedStocks: true,
      },
    });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!validateEmail(email)) {
      return res
        .status(400)
        .json({ message: 'Invalid email format. Please provide a valid email.' });
    }

    if (!validatePassword(password)) {
      return res.status(400).json({
        message:
          'Password must be 8-20 characters long, include at least one uppercase letter, one number, and one special character.',
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
      select: {
        id: true,
        email: true,
        savedCrypto: true,
        savedStocks: true,
      },
    });

    res.status(201).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email, password, savedStocks, savedCrypto } = req.body;

    // Validate user existence
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const updateData: any = {};

    // Validate and update email if provided
    if (email) {
      if (!validateEmail(email)) {
        return res
          .status(400)
          .json({ message: 'Invalid email format. Please provide a valid email.' });
      }
      updateData.email = email;
    }

    // Validate and update password if provided
    if (password) {
      if (!validatePassword(password)) {
        return res.status(400).json({
          message:
            'Password must be 8-20 characters long, include at least one uppercase letter, one number, and one special character.',
        });
      }
      const saltRounds = 10;
      updateData.password = await bcrypt.hash(password, saltRounds);
    }

    // Update saved stocks and crypto if provided
    if (savedStocks) updateData.savedStocks = savedStocks;
    if (savedCrypto) updateData.savedCrypto = savedCrypto;

    // Perform the update
    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        email: true,
        savedCrypto: true,
        savedStocks: true,
      },
    });

    res.status(200).json(updatedUser);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (user) {
      await prisma.user.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
