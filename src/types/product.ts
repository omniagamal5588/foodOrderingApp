import { Prisma, PrismaClient } from "@prisma/client";
export type ProductWithRelations = Prisma.ProductGetPayload<{
    include:{
        sizes: true,
        extras:true
    }
}>