import express  from "express";
import ViteExpress from 'vite-express'
import morgan from "morgan";
import handlerFuntions from "./controller.js";
//Express Instance

const app = express()

// Middleware

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(express.json())

//Global Vars

let SONG_DATA = [
    {id:0, songname:'First Date',Band:"Blink-182", upvote:undefined},
    {id:1, songname:'Jorja Interlude',Band:"Drake", upvote:undefined},
    {id:2, songname:'Fading',Band:"Dog Bless", upvote:undefined},
    {id:3, songname:'CampAdventure',Band:"Delta Sleep", upvote:undefined},
    {id:4, songname:'Idaho',Band:"Josh Ritter", upvote:undefined},
]

//Routes go here
app.get('/song', handlerFuntions.getSongInfo)
app.post('/addSong', handlerFuntions.addSong)
app.delete('/deleteInvoice/:id', handlerFuntions.deleteSong)
app.put('/editSong/:id',handlerFuntions.editSong)


//Open a Door to Server
ViteExpress.listen(app, 5555,()=> console.log('Click ON Me HERE = http://localhost:5555'))