let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect();
chai.should();

// Configure chai to plugin
chai.use(chaiHttp);

// Import backend app
let app = require('../backend/index');

// Fake contact for testing
let model = {
    name: "Jojo",
    gender: "Female",
    email: "jojo@gmail.com",
    phone: "12345678"
}

// Fake contact info to update
let updateModel = {
    name: "wowowo",
    email: "wowowo@gmail.com",
    gender: "Male",
    phone: "99991111"
}

describe("Contact API testing", () => {
    let contacts = {};

    // POST method calls
    describe("POST api/contacts", () => {
        it("should POST a new contact", (done) => {
            chai.request(app)
                .post('/api/contacts')
                .send(model)
                .end((err, res) => {
                    if (err) {
                        throw err;
                    }
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message').eql('New contact created!')
                    res.body.should.have.property('data');
                    res.body.data.should.have.property('name').eql(model.name);
                    res.body.data.should.have.property('email').eql(model.email);
                    res.body.data.should.have.property('gender').eql(model.gender);
                    res.body.data.should.have.property('phone').eql(model.phone);
                    contacts = res.body.data;
                    done();
                });
        });
    });

    // GET method calls
    describe("GET api/contacts", () => {
        it("should get all contacts", (done) => {
            chai.request(app)
                .get('/api/contacts')
                .end((err, res) => {
                    if (err) {
                        throw err;
                    }

                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('data');
                    res.body.data.length.should.have.at.least(1);
                    done();
                });
        });

        it('GET api/contacts/:id', (done) => {
            const id = contacts._id;
            chai.request(app)
                .get('/api/contacts/' + id)
                .end((err, res) => {
                    res.should.have.a.status(200);
                    res.body.should.be.an('object');
                    res.body.should.have.a.property('data');
                    res.body.data.should.have.property('_id').eql(id);
                    res.body.data.should.have.property('name').eql(model.name);
                    res.body.data.should.have.property('email').eql(model.email);
                    res.body.data.should.have.property('gender').eql(model.gender);
                    res.body.data.should.have.property('phone').eql(model.phone);
                    done();
                });
        });
    });

    // PUT method calls
    describe("UPDATE api/contacts/:id", () => {
        it('should update a specific contact with matching id', (done) => {
            const id = contacts._id;
            chai.request(app)
                .put('/api/contacts/' + id)
                .send(updateModel)
                .end((err, res) => {
                    res.should.have.a.status(200);
                    res.body.should.be.an('object');
                    res.body.should.have.a.property('data');
                    res.body.data.should.have.property('_id').eql(id);
                    res.body.data.should.have.property('name').eql(updateModel.name);
                    res.body.data.should.have.property('email').eql(updateModel.email);
                    res.body.data.should.have.property('gender').eql(updateModel.gender);
                    res.body.data.should.have.property('phone').eql(updateModel.phone);
                    done();
                });
        });
    });

    // DELETE methods calls
    describe("DELETE api/contacts/:id", () => {
        it('should delete a existing contact with matching id', (done) => {
            const id = contacts._id;
            chai.request(app)
                .delete('/api/contacts/' + id)
                .end((err, res) => {
                    res.should.have.a.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status').eql('success');
                    res.body.should.have.property('message').eql('Contact deleted');
                    done();
                });
        });
    });
})

