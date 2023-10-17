import { FastifyInstance } from "fastify";
import { z } from "zod";
import { Model } from "../Schema/schema";

export async function DeleteUser(fastify: FastifyInstance) {
    fastify.delete('/user/:id', async (request, reply) => {
        const userId = z.object({
            id: z.string()
        })

        const { id } = userId.parse(request.params)

        const deleteUser = await Model.deleteOne({ _id: id })

        return reply.status(204).send()
    })
}