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
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl).get('/users?page=2');

    console.log(response.body)
		expect(response.statusCode).toBe(200);
	});
});