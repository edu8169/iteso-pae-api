const Database = require('./database');
const { ObjectId } = require('mongodb');


class Model {

    collection;

    constructor(collectionName) {
        // Set collection
        this.collection = Database.collection(collectionName);
    }

    getAll() {
        return new Promise((accept, reject) => {
            this.collection.find().toArray((err, results) => {
             if (err) {
                 reject(err);
             } else {
                accept(results);
             }
            });
        });
    }

    getOne(id) {
        return this.collection.findOne({
            _id: ObjectId(id)
        });
    }

    create(info){
        return new Promise((accept,reject) => {
            this.collection.insertOne(info,(err,res) => {
                if(err) {
                    reject(err);
                } else {
                    accept(res);
                }
            })
        });
    }
}

module.exports = Model;