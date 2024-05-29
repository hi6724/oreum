import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { FLOWER } from "@/DB/flower";
import { getRandomItem } from "@/utils/list";
import { OREM } from "@/DB/orem";

export const GET = async (req: NextRequest) => {
  console.log("HE");
  const season = req.nextUrl.searchParams.get("season");
  const filteredList = OREM.filter((el) => el.season === season);

  return NextResponse.json({
    data: getRandomItem(filteredList),
  });
};
