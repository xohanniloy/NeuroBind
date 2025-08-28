import { NextResponse } from "next/server";
import { storage } from "../../../server/storage";

export async function GET() {
  try {
    const contacts = await storage.getContactSubmissions();
    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Failed to retrieve contacts:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to retrieve contacts"
    }, { status: 500 });
  }
}