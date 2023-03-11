import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { method } = req

    switch (method) {
        case 'POST':
            const {id, like} = req.body
            const updateLike = await prisma.note.update({
            where: {
                id: id
            },
            data: {
                likes: like?{ decrement: 1}:{increment: 1},
            },
            })
            res.status(201).json(updateLike)
            break
        default:
            
    }
}