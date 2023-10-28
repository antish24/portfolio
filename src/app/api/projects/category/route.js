import { NextResponse } from "next/server";
import connect from "@/backend/config/db";
import Project from "@/backend/models/Project";

export const POST = async (request) => {
    const {category}=await request.json()
    try {
      await connect();
  
      const projects = await Project.find({category:category});
  
      return new NextResponse(JSON.stringify(projects), { status: 200 });
    } catch (err) {
      return new NextResponse(JSON.stringify({error:"Database Error"}), { status: 500 });
    }
  };