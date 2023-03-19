const expres = require ('express')
const mongoose = require ('mongoose');

const app = expres ();

const port = 8000;
const DB_URL = 'mongodb+srv://twg:twg123@cluster0.k8wkald.mongodb.net/bocCrud?retryWrites=true&w=majority'

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT,() => {
    console.log(`App is running on${PORT}`);
});