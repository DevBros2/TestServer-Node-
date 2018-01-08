const express = require('express');
const app = new express();
var port = process.emv.PORT || 3000;
app.get('/',(req,res) => res.send("Hello world"));
app.listen(port,() => console.log("Server is running on port" +port));