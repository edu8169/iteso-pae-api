const res = require('express/lib/response');
const Model = require('../../core/model');

class User extends Model {
    constructor() {
        super('users');
    }
    getbyEmail(email) {
        return new Promise((resolve, reject) => {
            Model.collection.findOne({ email: email }, (err, result) => {
                if(err) {
                    reject(err);
                }
                if(result){
                    resolve(result);
                }
            })
        })
    }

}

module.exports = User;