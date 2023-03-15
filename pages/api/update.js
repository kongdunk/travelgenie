import { PrismaClient } from '@prisma/client'
import { authOptions } from './auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { method } = req
    const session = await getServerSession(req, res, authOptions)
    if(!session) {
        res.status(401).json({error: 'Unauthorized' })
        return
    }

    const prismaUser = await prisma.user.findUnique({
        where: { email: session.user.email },
    })

    if(!prismaUser){
        res.status(401).json({ error: 'Unauthorized' })
        return
    }



    console.log(session.user)

    switch (method) {
        case 'POST':
            const {id, title, content} = req.body
            const post = await prisma.note.update({
            where: {
                id: id
            },
            data: {
                title: title,
                content: content
            },
            })
            res.status(201).json(post)
            break
        default:    
            
    }
}