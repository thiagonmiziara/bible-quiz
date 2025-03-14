import { NextResponse } from "next/server";
import {
  setUser,
  addAnswerToUser,
  updateUserPoints,
  getUser,
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
    const body = await request.json().catch(() => null); // Tenta pegar o corpo da requisição
    let userId = body?.userId; // Tenta pegar userId do corpo, se existir

    if (!userId) {
      // Tenta pegar userId da URL (caso venha como query param)
      const { searchParams } = new URL(request.url);
      userId = searchParams.get("userId");
    }

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const user = await getUser(userId);
    return NextResponse.json(user);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Failed to get user" }, { status: 500 });
  }
}
