import { FastifyInstance } from "fastify";
import { Model } from "../Schema/schema";
import { z } from "zod";

export async function UpdateUser(fastify: FastifyInstance) {
    fastify.put('/user/:id', async (request, reply) => {

        const userId = z.object({
            id: z.string()
        })

        const userInfo = z.object({
            Name: z.string(),
            email: z.string().email()
        })

        const { id } = userId.parse(request.params)

        const { Name, email } = userInfo.parse(request.body)

        const userUpdate = await Model.findOneAndUpdate({ _id: id }, { Name, email })

        return reply.status(204).send()

    })
}