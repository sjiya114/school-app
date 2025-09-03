import { NextResponse } from "next/server";
import { db } from "@/config/db";
export async function GET(request) {
    try {
        const query =`SELECT * from schooldata`;
        const [res]=await db.query(query);
        return NextResponse.json({success:true,data:res});
    } catch (error) {
        return NextResponse.json({success:false,error:error.message});
    }
}