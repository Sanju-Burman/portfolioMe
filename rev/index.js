const express = require("express");
const app = express();
const midd = (req, res, next) => {
    const { salary, number } = req.body;
    if(salary<0&& NaN(salary)) return res.json({msg:"give valid salary data"})
    if (number < 0 && NaN(number)) return res.json({ msg: "give valid number data" })
    next();
}
app.get('/', (req,res) => {
    res.send("api working.....");
})
app.get('/users', midd, (req, res) => {
    try {
        const { name, salary, number } = req.body;
        const user = [name, salary, number];
        res.json({msg:"api working.....",user});
        
    } catch (error) {
        res.json({ err: error });
        console.error("error is: ",error)
    }
})
app.listen(5000,() => console.log("api is running..."));



// user.salary()