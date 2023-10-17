import { FastifyInstance } from "fastify";

import { Model } from "../Schema/schema";

export async function GetAllUser(fastify: FastifyInstance) {
    fastify.get('/user', async (request, reply) => {
        const user = await Model.find()

        return { user }
    })
}