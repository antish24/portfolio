import { NextResponse } from "next/server";
import connect from "@/backend/config/db";
import Tool from "@/backend/models/Tool";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const tool = await Tool.findById(id);

    return new NextResponse(JSON.stringify(tool), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};