// const request = require('supertest');

// describe('GET /user', function() {
//   it('responds with json', function() {
//     request('https://reqres.in/api')
//       .get('/users?page=2')
//   });
// });

const request = require('supertest');

const baseUrl = 'https://reqres.in/api';

describe('Todos endpoint', () => {
	it('GET should return a 200 status code', async () => {
		const response = await request(baseUrl).get('/users?page=2');

    console.log(response.body)
		expect(response.statusCode).toBe(200);
	});

	it('POST should return a 201 status code', async () => {
		const response = await request(baseUrl).post('/users').send({
      "name": "morpheus",
      "job": "leader"
  });

    console.log(response.body)
		expect(response.statusCode).toBe(201);
	});

  it('PATCH should return a 200 status code', async () => {
		const response = await request(baseUrl).patch('/users').send({
      "name": "morpheus",
      "job": "zion resident"
  });

    console.log(response.body)
		expect(response.statusCode).toBe(200);
	});

  it('DELETE should return a 204 status code', async () => {
		const response = await request(baseUrl).delete('/users/2')

    console.log(response.body)
		expect(response.statusCode).toBe(204);
	});
});