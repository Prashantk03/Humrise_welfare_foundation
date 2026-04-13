import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Campaign from "@/models/Campaign";

export async function GET() {
  await connectDB();

  const campaigns = await Campaign.find();

  const totalCampaigns = campaigns.length;

  const totalRaised = campaigns.reduce(
    (sum, c) => sum + (c.raised || 0),
    0
  );

  return NextResponse.json({
    totalCampaigns,
    totalRaised,
  });
}