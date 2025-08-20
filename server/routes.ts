import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "../shared/schema.js";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactSubmission(contactData);
      
      res.json({
        success: true,
        message: "Contact form submitted successfully",
        id: contact.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  // Get all contact submissions (for admin use)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContactSubmissions();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve contacts"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
