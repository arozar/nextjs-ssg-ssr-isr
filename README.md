# Coming soon!


## Setup Prisma
    npm install prisma --save-dev
    npx prisma init

    // schema.prisma
    datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
    }

    generator client {
    provider = "prisma-client-js"
    }

    model Post {
    id        Int     @default(autoincrement()) @id
    title     String
    content   String?
    published Boolean @default(false)
    author    User?   @relation(fields: [authorId], references: [id])
    authorId  Int?
    }

    npx prisma studio


    npm install @prisma/client
    npx prisma generate
    mkdir lib && touch lib/prisma.ts

    import { PrismaClient } from '@prisma/client'

    let prisma: PrismaClient

    if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
    } else {
    if (!global.prisma) {
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma
    }

    export default prisma

https://vercel.com/guides/nextjs-prisma-postgres