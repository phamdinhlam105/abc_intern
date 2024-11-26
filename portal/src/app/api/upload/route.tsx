"use server";
import fs from "node:fs/promises";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    let fileName
    if (file.name.includes(' ')) {
      fileName = file.name.replaceAll(' ', '_');
    }
    else
      fileName = file.name;
    await fs.writeFile(`./public/uploads/${fileName}`, buffer);

    revalidatePath("/");

    return NextResponse.json({ status: "success" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}