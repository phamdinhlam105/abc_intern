"use server";
import fs from "node:fs/promises";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
    try {
        const formData = await req.formData();
        const filesString = formData.get("files") as string;
        const files = JSON.parse(filesString) as Array<{ fileName: string, filePath: string }>;

        for (let file of files) {
            try {
                await fs.unlink(file.filePath);
            } catch (err) {
                return NextResponse.json({ status: "fail", message: ` ${err}` });
            }
        }

        revalidatePath("/");

        return NextResponse.json({ status: "success" });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ status: "fail", message: e });
    }
}
