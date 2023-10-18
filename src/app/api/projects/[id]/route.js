import { NextResponse } from "next/server";
import connect from "@/backend/config/db";
import Project from "@/backend/models/Project";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const project = await Project.findById(id).populate("tools");

    if (!project) {
      return new NextResponse("Project not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(project), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};