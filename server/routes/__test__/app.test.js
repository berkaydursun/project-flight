var request =require('supertest');
var app = require('../../app');
describe('Flight ticket system back end tests', () => {
    it('returns 202 if tc and password is passed', async () => {
      const res = await request(app).post('/api/v1/login').send({ tc: 'q',password:"q" });
  
      expect(res.statusCode).toEqual(202);
    });
    
    it('returns 404 if tc and password is missing', async () => {
      const res = await request(app).post('/api/v1/login').send({ tc: 'qsad',password:"qsad" });
  
      expect(res.statusCode).toEqual(404);
    });
  
    it("if users found succesfully returns 200", async () => {
      const res = await request(app).get('/api/v1/user');
      expect(res.statusCode).toEqual(200);
    });
    
    it('returns 200 single user founded', async () => {
      const res = await request(app).get('/api/v1/user/d025b9be-5ba2-447f-b744-98facffeb02f');
  
      expect(res.statusCode).toEqual(200);
    });

    it('returns 201 if user created succesfully', async () => {
      const res = await request(app).post('/api/v1/user').send({
     
        tc: "tester",
        firstname: "Kaan",
        lastname: "Kenan",
        email: "kaan@hotmail.com",
        password: "123456"
        
    });
  
      expect(res.statusCode).toEqual(201);
    });
    
    it('returns 204 if user deleted succesfully', async () => {
      const res = await request(app).delete('/api/v1/user/0ddd4950-e127-4b43-b990-d32bb60c63aa');
  
      expect(res.statusCode).toEqual(204);
    });
    
    
  },6000);

