import { NextResponse } from "next/server";
import connect from "@/backend/config/db";
import Partners from "@/backend/models/Partners";

export const GET = async (request) => {

  try {
    await connect();

    const partners = await Partners.find();

    return new NextResponse(JSON.stringify(partners), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
    const body = await request.json();
  
    const newPartners = new Partners(body);
  
    try {
      await connect();
  
      await newPartners.save();
  
      return new NextResponse("Partners added", { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };