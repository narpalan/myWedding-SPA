'use server';

import { z } from "zod"
import { db } from "./modules/db";
import { redirect } from "next/navigation";

const NewRSVPSchema = z.object({
    fullName: z.string(),
    mobile: z.string(),
});

export const setNewRSVP = async (rawData: FormData) => {
    const data = NewRSVPSchema.parse({
        fullName: rawData.get('fullName'),
        mobile: rawData.get('mobile'),
    });

    await db.rsvp.create({ data });    
}
