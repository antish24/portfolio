import { NextResponse } from "next/server";
import connect from "@/backend/config/db";
import Project from "@/backend/models/Project";

export const GET = async (request) => {

  try {
    await connect();

    const projects = await Project.find();

    return new NextResponse(JSON.stringify(projects), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
