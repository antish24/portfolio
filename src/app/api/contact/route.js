import { NextResponse } from "next/server";
import connect from "@/backend/config/db";
import Contact from "@/backend/models/Contact";

export const POST = async (request) => {
  const { nameValue,emailValue ,msgValue} = await request.json()

  try {
    await connect();

    const newContact = new Contact({
        name:nameValue,
        email:emailValue,
        message:msgValue
    });

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