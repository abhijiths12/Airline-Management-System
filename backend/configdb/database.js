const mongoose = require('mongoose')
function mongoosedb() {
    mongoose.connect('mongodb://localhost:27017/airline').then(() => {
        console.log('databasecreated')
    })
    .catch(err=>console.error(err))

}

module.exports=mongoosedb