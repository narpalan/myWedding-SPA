'use server';

import { z } from "zod"
import { db } from "./modules/db";

const NewRSVPSchema = z.object({
    fullName: z.string(),
    mobile: z.string(),
});

const getRSVP = async (fullName: string) => {
    const user = await db.rsvp.findFirst({
        where: {
            fullName: fullName,
        },
    });

    return user;        
};

export const setNewRSVP = async (rawData: FormData) => {
    const data = NewRSVPSchema.parse({
        fullName: rawData.get('fullName'),
        mobile: rawData.get('mobile'),
    });

    if(data.fullName === '' || data.mobile === '') {
        throw new Error('em branco');        
    }

    if (await getRSVP(data.fullName)) {
        throw new Error('Convidado/Acompanhante já cadastrado');
    }

    await db.rsvp.create({ data });    
}
