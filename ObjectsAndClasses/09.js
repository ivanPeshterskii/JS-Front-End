function solve(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let n = Number(input[0]);
    let songs = [];

    for (let i = 1; i <= n; i++) {
        let [typeList, name, time] = input[i].split("_");
        let song = new Song(typeList, name, time);
        songs.push(song);
    }

    let command = input[input.length - 1];

    for (let song of songs) {
        if (command === "all" || song.typeList === command) {
            console.log(song.name);
        }
    }
}
solve( 
[
    4,
    'favourite_DownTown_3:14',

    'listenLater_Andalouse_3:24',

    'favourite_In To The Night_3:58',

    'favourite_Live It Up_3:48',

    'listenLater'
]
);