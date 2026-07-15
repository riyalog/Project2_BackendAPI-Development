const express = require("express");

const app = express();

app.use(express.json());

let songs = [
    {
        id: 1,
        title: "Midnight Beats",
        artist: "Unknown Artist"
    },
    {
        id: 2,
        title: "Dream Waves",
        artist: "Unknown Artist"
    }
];

// GET all songs
app.get("/songs", (req, res) => {
    res.json(songs);
});

// POST new song
app.post("/songs", (req, res) => {

    const { title, artist } = req.body;

    if (!title || !artist) {
        return res.status(400).json({
            message: "Title and Artist are required"
        });
    }

    const newSong = {
        id: songs.length + 1,
        title,
        artist
    };

    songs.push(newSong);

    res.status(201).json(newSong);
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});