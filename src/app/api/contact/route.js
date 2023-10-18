import { NextResponse } from "next/server";
import connect from "@/backend/config/db";
import Contact from "@/backend/models/Contact";

export const GET = async (request) => {

  try {
    await connect();

    const contacts = await Contact.find();

    return new NextResponse(JSON.stringify(contacts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
    const { nameValue, emailValue, msgValue } = await request.json();
  
    await connect();
  
    const newContact = new Contact({
        nameValue,
        emailValue,
        msgValue
    });
  
    try {
      await newContact.save();
      return new NextResponse("Msg sent", {
        status: 201,
      });
    } catch (err) {
      return new NextResponse(err.message, {
        status: 500,
      });
    }
  };