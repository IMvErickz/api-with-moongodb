import { FastifyInstance } from "fastify";
import { z } from "zod";
import { Model } from '../Schema/schema';

export async function RegisterUser(fastify: FastifyInstance) {
    fastify.post('/user', async (request, reply) => {
        const schema = z.object({
            Name: z.string(),
            email: z.string().email()
        })

        const { Name, email } = schema.parse(request.body)

        const newUser = new Model({
            Name,
            email
        })

        await newUser.save()

        return reply.status(201).send()
    })
}