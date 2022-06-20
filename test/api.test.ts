import {
    jest,
    expect,
    test,
    describe,
  } from '@jest/globals';

  import * as superTest from 'supertest';
import {app} from '../src/app';

describe('API E2E Test Suite',()=>{

    // test('POST /  - should save an item and return ok', async () => {
    //     const response = await superTest(app)
    //       .post('/api/users')
    //       .send({
    //         userName: 'wendel',
    //         password:'silva',
    //         email:'silva@gmail.com',
    //         isAdmin: true
    //       })
    //     const expectedResponse = { ok:  200}
    //     expect(JSON.parse(response.text)).toStrictEqual(expectedResponse)
    //   })

    test('GET / - should return an array',async()=>{
        const response = await superTest(app)
        .get('/api/users')

        const data = JSON.parse(response.text);
        expect(data).toBeInstanceOf(Array)
        expect(data.length).toEqual(0)
    })
    
})