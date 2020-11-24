// import orm object object relational mapping
var orm = require('../config/orm.js');

const burger = {
    // the callback parameter renders the results to the index.handlebars template
    //when we call burger.all it will fetch all data from DB
    all: (callback) => {
        orm.all("burgers", (response) => {
            callback(response);
        })
    },
    // when we call burger.create it will create a new burger in DB
    create:(burger_name, callback) => {
        orm.create(burger_name, (response) => {
            // forward the callback from burgers_controller.js
            // contatining response.json({id: result.insertId})
            callback(response)
        })
    },
    // update the status of the burger
    update:(selectedID, callback) => {
        orm.update(selectedID, (response) => {
            // forward the callback from burgers_controller.js
            // contatining response.json({id: result.insertId})
            callback(response)
        })
    },
}

// export burger
module.exports = burger;