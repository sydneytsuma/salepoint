import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"; 


// Get store info and  store products

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const username = searchParams.get("username");

        if(!username){
            return NextResponse.json({error: "missing username"},{status:400})
        }

        // Get store info and instock products with ratings 
        const store = await prisma.store.findUnique({
            where: { username, isActive : true},
            include: {Product : {include: {ratings: true}}}
        })

        if(!store){
            return NextResponse.json({error: "store not found"},{status:404})
        }

        return NextResponse.json({store})

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.code || error.message },
        { status: 400 });
    }
    
}