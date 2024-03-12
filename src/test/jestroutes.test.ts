import request from 'supertest';
import express from 'express';
import router from '../routes'; // Update the import path to correctly import the routes

const app = express();
app.use(express.json());
app.use('/', router);

describe('Routes', () => {
  it('should return status code 200 for GET /blogs', async () => {
    const response = await request(app).get('/blogs');
    expect(response.status).toBe(200);
  },10000);

  it('should return status code 200 for POST /blogs', async () => {
    const response = await request(app)
      .post('/blogs')
      .send({
        title: 'Test Blog',
        content: 'This is a test blog',
        author: 'Test Author',
        createdAt: new Date(),
      });
    expect(response.status).toBe(200);
  },10000);
});
