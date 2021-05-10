const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const port = 3000
const db = require('./database');



app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())

app.get("/", (req, res) => {
    res.send("hello")
})




app.post('/login', (req, res) => {
    const { username, password } = req.body

    const sql = `select * from users where username = '${username}'`
    db.query(sql, (error, result) => {
        console.log(error)
        console.log(result)
        if (error) return res.status(500).send({
            message: 'sorry, somrthing wrong!'
        })
        if (result.length === 0) {
            return res.status(403).send({
                message: 'ยังไม่มีการลงทะเบียนaccount'
            })
        }
        if (result.length === 0) {
            return res.status(403).send({
                message: 'รหัสผ่านไม่ถูกต้อง'
            })
        }
        return res.status(200).send({
            message: 'login sucess',
            user: result[0].username
        })
    })
})


app.listen(port, () => {
    console.log(`Server running at   http://localhos:t${port}/login.html`);
});