import Fastify from 'fastify'
import Cors from '@fastify/cors'
import { RegisterUser } from './routes/RegisterUser'
import { GetAllUser } from './routes/GetAllUser'
import { db } from './Schema/connection'
import { UpdateUser } from './routes/UpdateUser'
import { DeleteUser } from './routes/DeleteUser'

async function Main() {
    const fastify = Fastify({
        logger: true
    })

    fastify.register(Cors, {
        origin: true
    })

    db()

    fastify.register(RegisterUser)
    fastify.register(GetAllUser)
    fastify.register(UpdateUser)
    fastify.register(DeleteUser)

    fastify.listen({
        port: 3333
    })
}

Main()