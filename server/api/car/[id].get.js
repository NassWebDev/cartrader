import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler((event) => {
    const {id} = event.context.params;

    const car = prisma.car.findUnique({
        where:{
            id: parseInt(id)
        }
    });

    if (!car) {
        throw createError({
          statusCode: error.value.statusCode,
          message: error.value.statusMessage,
        });
    }

    return car;
})