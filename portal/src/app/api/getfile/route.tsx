"use server";
import fs from "node:fs/promises";
import { NextResponse } from "next/server";
import path from "node:path";
export async function GET() {
    try {
        const uploadDir = path.join(process.cwd(), 'public/uploads');
        const files = await fs.readdir(uploadDir);
        const validFileExtensions = ['.jpg', '.jpeg', '.png', '.pdf', '.doc', '.docx'];
        const validFiles = await Promise.all(
            files
                .filter((file) => validFileExtensions.some((ext) => file.endsWith(ext)))
                .map(async (file) => {
                    const filePath = path.join(uploadDir, file);
                    const stats = await fs.stat(filePath);

                    return {
                        fileName: file,
                        filePath: `public/uploads/${file}`,
                        size: stats.size,
                    };
                })
        );
        return NextResponse.json({ status: "success", files: validFiles });
    }
    catch (e) {
        return NextResponse.json({ status: "fail", error: e });
    }
}