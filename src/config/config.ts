export default {
    PORT: process.env.PORT ||  6379,
    HOST: process.env.HOST || 'localhost',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/order',
}