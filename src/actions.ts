'use server';

import { z } from "zod"
import { db } from "./modules/db";
import { redirect } from "next/navigation";

const NewRSVPSchema = z.object({
    fullName: z.string(),
    mobile: z.string(),
});

const NewInterestedPersonSchema = z.object({
    name: z.string(),
    email: z.string(),
    mobile: z.string(),
});

const NewContactSchema = z.object({
    name: z.string(),
    email: z.string(),
});

export const setNewRSVP = async (rawData: FormData) => {
    const data = NewRSVPSchema.parse({
        fullName: rawData.get('fullName'),
        mobile: rawData.get('mobile'),
    });

    await db.rsvp.create({ data });
    redirect('?y=true');
}

export const setNewInterestedPerson = async (rawData: FormData) => {

    const data = NewInterestedPersonSchema.parse({
        name: rawData.get('name'),
        email: rawData.get('email'),
        mobile: rawData.get('mobile'),
    });

    await db.interested_person.create({ data });
    redirect('?y=true');
}

export const setNewContact = async (rawData: FormData) => {

    const data = NewContactSchema.parse({
        name: rawData.get('name'),
        email: rawData.get('email'),
    });

    await db.contact_data.create({ data });
    redirect('?y=true');
}