import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { getRandomItem } from "@/utils/list";
import { FLOWER } from "@/DB/flower";
import { OREM } from "@/DB/orem";
import { POSITIVE_ADJECTIVES } from "@/DB/adjective";

export const GET = async (req: NextRequest) => {
  const oremId = req.nextUrl.searchParams.get("id");
  const oramData = OREM.find((el) => el.id === +(oremId ?? 0));

  return NextResponse.json({
    data: oramData,
  });
};
