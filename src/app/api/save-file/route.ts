import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();

  const file = formData.get("file") as any;
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  try {
    await writeFile(path.join(process.cwd(), "public/uploads/" + filename), buffer);
    return NextResponse.json({ path: `/uploads/${filename}`, status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};
