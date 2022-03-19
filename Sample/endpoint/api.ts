import UserInfo from "../Controller.ts/UserInfo";
import { initTypeIdentity, signIn, signOut } from "../Services/main";


const cors = require('cors');//this required
var cookieParser = require('cookie-parser')//this required
const express = require('express')//this required
const app = express()  //this required
app.use(cookieParser()) //this required
app.use(cors()) //this required



initTypeIdentity()




app.get('/signIn', async (req, res) => {
    console.log('start')
    await signIn(req, res)
})

app.get('/signOut', async (req, res) => {
    signOut(req, res)
})


/**
 * this endpoint allow for admin if you try to go as guest you will get 401 
 */

app.get('/adminPermisstin', async (req, res) => {
    new UserInfo().admin(req, res)
})




/**
 * this endpoint allow for quest 
 */

app.get('/quest', async (req, res) => {
    new UserInfo().quest(req, res)
})


/**
 * any one have write Policy
 */

app.get('/quest', async (req, res) => {
    new UserInfo().write(req, res)
})


const port = 3334
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })