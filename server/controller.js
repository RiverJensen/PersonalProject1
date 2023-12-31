

let SONG_DATA = [
    {id:0, songname:'First Date',band:"Blink-182", upvote:undefined, url:"https://upload.wikimedia.org/wikipedia/en/d/de/Blink-182_-_Take_Off_Your_Pants_and_Jacket_cover.jpg"},
    {id:1, songname:'Jorja Interlude',band:"Drake", upvote:undefined, url:"https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Drake_-_More_Life_cover.jpg/220px-Drake_-_More_Life_cover.jpg"},
    {id:2, songname:'Reborn',band:"Kid See Ghost", upvote:undefined, url:"https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Kids_See_Ghosts_Cover.png/220px-Kids_See_Ghosts_Cover.png"},
    {id:3, songname:'Mr Brightside',band:"Killers", upvote:undefined, url:"https://upload.wikimedia.org/wikipedia/en/thumb/1/17/The_Killers_-_Hot_Fuss.png/220px-The_Killers_-_Hot_Fuss.png"},
    {id:4, songname:'Alive',band:'PearlJam', upvote:undefined, url:'https://en.wikipedia.org/wiki/Ten_(Pearl_Jam_album)#/media/File:PearlJam-Ten2.jpg'},
]
    let globalId = 4

    const handlerFuntions = {
        getSongInfo: (req,res) =>{
            res.send(SONG_DATA)
        },

        addSong: (req, res)=>{
            const description = req.body.description
            const newObj = {
                id: globalId,
                description: description,
                songname: 'put new song name here',
                band: 'put new band name here'
            }
            SONG_DATA.push(newObj)
            globalId++
            res.send(newObj)

        },

        deleteSong: (req,res)=>{
            const id = req.params.id

            SONG_DATA = SONG_DATA.filter((song)=> inboice.id !== +id)

            res.send("song deleted")
        },

        editSong: (req,res) => {
            const {id} = req.params
            const {songname, band, url} = req.body

            const index = SONG_DATA.findIndex(song => song.id == id)
            const songItem = SONG_DATA[index]

            songItem.songname = songname
            songItem.band = band
            songItem.url = url
        },

        
        

    }

    export default handlerFuntions