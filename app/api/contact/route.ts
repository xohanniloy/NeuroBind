import { NextRequest, NextResponse } from "next/server";
import { storage } from "../../../server/storage";
import { insertContactSchema } from "../../../shared/schema";
import { z } from "zod";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const contactData = insertContactSchema.parse(body);
    const contact = await storage.createContactSubmission(contactData);
    
    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      id: contact.id
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: "Invalid form data",
        errors: error.errors
      }, { status: 400 });
    } else {
      console.error("Contact submission error:", error);
      return NextResponse.json({
        success: false,
        message: "Internal server error"
      }, { status: 500 });
    }
  }
}