const mongoose = require("mongoose");
const { Schema } = mongoose; // ObjectId is a special data type we have to import

const bootcampSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    img: String,
    stateId: {type: Schema.Types.ObjectId, ref: "State"}
},
{
    timestamps: true
})
//  Bootcamp points to "bootcamps" collection
const Bootcamp = mongoose.model('Bootcamp', bootcampSchema)
module.exports= Bootcamp;

