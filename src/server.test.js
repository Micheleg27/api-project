const createApp = require('./server.js');

const app = createApp();

const request = supertest(app);

test('GET /', async () => {
    const response = await request.get('/')
    .expect(200)
    .expect('Content type', 'application/json')
})
