import { NextResponse } from "next/server";
import multer from "multer";
import { db } from "@/config/db";
import fs from "fs";
import path from "path";
export async function POST(request) {
    try {
      const formData = await request.formData();
    const name = formData.get("name");
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
   const contact =formData.get("contact");
    const email = formData.get("email");
    const file = formData.get("image"); // this is a Blob

    let imagePath = null;

    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const uploadDir = path.join(process.cwd(), "public/schoolImages");
      if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

      const fileName = `${Date.now()}-${file.name}`;
      imagePath = `/schoolImages/${fileName}`;
      fs.writeFileSync(path.join(uploadDir, fileName), buffer);
    }
         const query = `
      INSERT INTO schooldata (name, address, city, state, contact, email, image)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const result=await db.execute(query, [name, address, city, state, contact, email, imagePath]);
       return NextResponse.json({success:true,message:"school added successfully"});
    } catch (error) {
       return NextResponse.json({success:false,error:error.message});
    }
}