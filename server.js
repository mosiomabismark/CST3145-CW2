const express = require("express");

const app = express();

// get route for "/lessons" path that returns lessons JSON object
app.get("/lessons", (request, response, next)=>{
    const lessons = [
        {'topic': 'math', 'location': 'Hendon', 'price' : 100},
        {'topic': 'math', 'location': 'Colindale', 'price' : 80},
        {'topic': 'math', 'location': 'Brent Cross', 'price' : 90},
        {'topic': 'math', 'location': 'Golders Green', 'price' : 120},
    ];
    response.send(lessons);
});

app.listen(3000, ()=>{
    console.log("App started on 3000 ");
});