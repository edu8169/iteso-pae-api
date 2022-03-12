const res = require('express/lib/response');
const Model = require('../../core/model');

class User extends Model {
    constructor() {
        super('users');
    }

}

module.exports = User;