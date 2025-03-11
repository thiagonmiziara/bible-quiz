import { NextResponse } from "next/server";
import {
  getUser,
  setUser,
  addAnswerToUser,
  updateUserPoints,
} from "@/services/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, user } = body;

    await setUser(userId, user);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { userId, points, answerId } = body;

    await updateUserPoints(userId, points);
    await addAnswerToUser(userId, answerId);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to update user points" },
      { status: 500 }
    );
  }
}
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "userId is required" },
        { status: 400 }
      );
    }

    const user = await getUser(userId);
    return NextResponse.json(user);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
