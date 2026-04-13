import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Campaign from "@/models/Campaign";

export async function GET() {
  await connectDB();

  const campaigns = await Campaign.find();

  return Response.json(campaigns);
}

export async function POST(req:Request){

  await connectDB();

  const body = await req.json();

  const campaign = await Campaign.create({
    title: body.title,
    location: body.location,
    description: body.description,
    goal: body.goal,
    raised: 0
  });

  return Response.json(campaign);
}

export async function PUT(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const updated = await Campaign.findByIdAndUpdate(
      body._id,
      {
        title: body.title,
        location: body.location,
        description: body.description,
        goal: body.goal,
        raised: body.raised,
      },
      { new: true }
    );

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  await connectDB();

  const { id } = await req.json();

  await Campaign.findByIdAndDelete(id);

  return NextResponse.json({ success: true });
}