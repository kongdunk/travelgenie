import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { method } = req

    switch (method) {
        case 'POST':
            const {title, content, authorName} = req.body
            const post = await prisma.note.create({
                data: {
                    title, 
                    content,
                    authorName
                },
            })
            res.status(201).json(post)
            break
        default:
            
    }
}