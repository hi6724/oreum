import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { getRandomItem } from "@/utils/list";
import { FLOWER } from "@/DB/flower";
import { OREM } from "@/DB/orem";
import { POSITIVE_ADJECTIVES } from "@/DB/adjective";

export const GET = async (req: NextRequest) => {
  const season = req.nextUrl.searchParams.get("season");
  const randomFlower = getRandomItem(FLOWER.filter((el) => el.floweringPeriod === season));
  const randomOrem = getRandomItem(OREM.filter((el) => el.season === season));
  const randomAdjective = getRandomItem(POSITIVE_ADJECTIVES);

  return NextResponse.json({
    data: {
      adjective: randomAdjective,
      oremName: randomOrem.name,
      plantResponse: randomFlower,
    },
  });
};
