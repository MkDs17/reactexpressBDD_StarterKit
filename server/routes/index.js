const companyController = require('../controllers').company;
const employeeController = require('../controllers').employee;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the API dude!',
    }));


    app.get('/api/company', companyController.findAll);
    /** Start - Compony Create routes for creating new record */
    app.post('/api/company', companyController.create);
    /** End - Compony create routes for creating new record */

    app.get('/api/employee', employeeController.findAll);
    /** Start - Compony Create routes for creating new record */
    app.post('/api/employee', employeeController.create);
    /** End - Compony create routes for creating new record */
}