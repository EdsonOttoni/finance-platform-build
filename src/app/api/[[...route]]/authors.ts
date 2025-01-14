import {Hono} from 'hono'

const app = new Hono()

app.get('/', (c) => c.json('list authors'))
app.get('/', (c) => c.json('list authors', 201),)
app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))
