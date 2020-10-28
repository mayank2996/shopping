const{ Schema } = require( "mongoose" );
const Mongoose = require( "mongoose" )
Mongoose.Promise = global.Promise;
Mongoose.set( 'useCreateIndex', true )
const url = "mongodb://localhost:27017/Fa4Project";



const productSchema = Schema( {
    id: String,
    pName: String,
    pDescription: String,
    pRating: Number,
    pCategory: String,
    price: Number,
    color: String,
    image: String,
    specification: String,
    dateFirstAvailable: Date,
    dateLastAvailable: Date,
    pSeller: {
        sId: String,
        pDiscount: Number,
        pQuantity: Number,
        pShippingCharges: Number
    }
},{ collection: "product" } );

const userSchema = Schema( {
    userName: String,
    password: String,
    contact:Number,
    name:String,
    wishlist:{type:[productSchema],default:[]},
    purchase: { type: [{
        orderId: {type: Number},
        pId: String,
        orderDate: Date,
        price: String

    }],default: []}
    
}, { collection: "user" } );



let collection = {};

collection.getUserCollection = () => {
    return Mongoose.connect( url, { useNewUrlParser: true } ).then( ( database ) => {
        return database.model( 'user', userSchema )
    } ).catch( ( error ) => {
        error.message= "Could not connect to Database" ;
        error.status = 500;
        throw error;
    } )
}

collection.getProductCollection = () => {
    return Mongoose.connect( url, { useNewUrlParser: true } ).then( ( database ) => {
        return database.model( 'product', productSchema )
    } ).catch( ( err) => {
        err.message= "Could not connect to Database" ;
        err.status = 500;
        throw err;
    } )
}

module.exports = collection;