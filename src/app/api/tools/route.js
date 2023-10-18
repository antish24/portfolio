import { NextResponse } from "next/server";
import connect from "@/backend/config/db";
import Tool from "@/backend/models/Tool";

export const GET = async () => {

  try {
    await connect();

    const tool = await Tool.find();

    return new NextResponse(JSON.stringify(tool), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
