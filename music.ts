interface Audio_Details {
    name: String,
    url: String,
    genre: String,
    rating: Number
    // song_image:
}
interface song_array {
    [index: number]: String;
}
interface Playlist_Details {
    name: String,
    genre: String,
    songs: song_array;
}
class Audios {
    AudioList;

    constructor(AudioList: Audio_Details[]) {
        this.AudioList = AudioList;

    }

    search_audio = (name) => {
        for (let i = 0; i < this.AudioList.length; i++) {
            if (this.AudioList[i].name == name) {
                console.log(name);
                this.play_song(name);
            }
        }
    }
    select_audio_after_search = (AudioList_select: Audio_Details) => {
        console.log(AudioList_select);
        return AudioList_select;
    }

    display_songs_list = () => {
        var check = document.getElementById("display");
        console.log(check);
        while (check.firstChild) {
            check.removeChild(check.lastChild);
        }

        console.log(check);
        for (let i = 0; i < this.AudioList.length; i++) {
            let x = <HTMLElement>document.createElement("li");
            x.innerHTML = this.AudioList[i].name;
            console.log(this.AudioList[i].name);
            let rt=<HTMLButtonElement>document.createElement("button");
            // rt.style.height="50px";
            // rt.style.width="50px";
            // rt.name=this.AudioList[i];
            // rt.style.marginLeft="30px;"
            rt.style.height= "50px";
            rt.style.width= "100px";
            rt.style.margin= "10px";
            rt.style.borderRadius= "5px";
            rt.style.color="white";
            rt.style.backgroundColor= "blue";
            rt.innerHTML= this.AudioList[i].name;
            rt.addEventListener("click", (e: Event) => this.play_song(this.AudioList[i].name));
            document.getElementById("display").appendChild(rt);
            
        }
    }
    display_songs_list_genre = (genre_name) => {
        for (let i = 0; i < this.AudioList.length; i++) {
            if (genre_name == this.AudioList[i].genre)
                console.log(this.AudioList[i].name + " " + this.AudioList[i].genre);
        }
    }
    play_song = (song_name) => {

        for (let i = 0; i < this.AudioList.length; i++) {
            if (this.AudioList[i].name == song_name) {
                let audio_button = <HTMLAudioElement>document.getElementById("audio");
                audio_button.src=this.AudioList[i].url;
                audio_button.autoplay = true;
                audio_button.controls = true;
            }
        }

    }
}
class play_list extends Audios {
    Playlist;
    constructor(AudioList: Audio_Details[], Playlist: Playlist_Details[]) {
        super(AudioList);
        this.Playlist = Playlist;
        console.log(this.AudioList);
        console.log(this.Playlist);

    }
    search_playlist = (name) => {
        let x=true;
        for (let i = 0; i < this.Playlist.length; i++) {
            if (this.Playlist[i].name == name) {
                x=false;
            }
        }
        if(x)
        {
            alert("Playlist not found")

        }
        else{
            this.show_playlist();
        }
    }

    create_playlist = (name,genre) => {
        let x=true;
        for (let i = 0; i < this.Playlist.length; i++) {
            if (this.Playlist[i].name == name && this.Playlist[i].genre == genre) {
                x = false;
                alert("This Playlist name has already been taken");
            }
        }
        if(x)
        {
        this.Playlist.push({ name: name, genre: genre, songs: [] });
        alert("PlayList is successfully created!");
        }
    }
    show_playlist = () => {
        console.log(this.Playlist);
        var div = <HTMLElement>document.getElementById("playlist");
        while (div.firstChild) {
            div.removeChild(div.lastChild);
          }
        for (let i = 0; i < this.Playlist.length; i++) {
            let y = <HTMLButtonElement>document.createElement("button");
            y.style.height= "50px";
            y.style.width= "100px";
            y.style.margin= "10px";
            y.style.borderRadius= "5px";
            y.style.color="white";
            y.style.backgroundColor= "blue";
            y.innerHTML = this.Playlist[i].name;
            var dd=<HTMLElement>document.getElementById("playlist")
            dd.appendChild(y);
            y.addEventListener("click", (e: Event) => this.add_song_playlist(this.Playlist[i].name));
        }
    }
    add_song_playlist = (playlist_name) => {
        this.Playlist.forEach(element => {
            if(element.name==playlist_name)
            {
                if(element.songs.length==0)
                {
                alert("No Song in PlayList");
                this.add_audio(playlist_name);
                }
                else{
                    for(var i=0;i<this.Playlist.length;i++)
                    {
                        if(this.Playlist[i].name==playlist_name)
                        {
                            for(var j=0;j<this.Playlist.songs.length;j++)
                            {
                            let y=<HTMLButtonElement>document.createElement("button");
                            y.innerHTML=this.Playlist.songs[j];
                            var dd=<HTMLElement>document.getElementById("songlist");
                            dd.appendChild(y);
                            y.addEventListener("click", (e: Event) => this.play_song(this.Playlist.songs[j]));
                            }
                        }
                    }
                }
            }
        });
    }

    add_audio = (name_playlist) => {
        var wq=document.getElementById("addsongs");
        wq.innerHTML="Click on Songs to Add";
            for(var i=0;i<this.Playlist.length;i++)
            {
                if(this.Playlist[i].name==name_playlist)
                {
                    let genre=this.Playlist[i].genre;
                    for(var j=0;j<this.AudioList.length;j++)
                    {
                        if(this.AudioList[j].genre==genre)
                        {
                            let y=<HTMLButtonElement>document.createElement("button");
                            y.style.height= "50px";
                            y.style.width= "100px";
                            y.style.margin= "10px";
                            y.style.borderRadius= "5px";
                            y.style.color="white";
                            y.style.backgroundColor= "blue";
                            y.innerHTML=this.AudioList[j].name;
                            var dd=<HTMLElement>document.getElementById("options");
                            dd.appendChild(y);
                            y.addEventListener("click", (e: Event) => function(){alert("Song Added Successfully");this.PlayList[i].songs.push(this.AudioList[j].name);
                            });
                        }
                    }
                }
            }
        
    }


    // get_name_playlist = () => {
    //     var person = prompt("Please enter PlayListName");
    //     if (person != null) {
    //     return alert("No Name is Provided");
    //     }
    //     return person;
    // }
    // add_genre_playlist = () => {
        
    // }

}


let user2 = new play_list([
    { name: "romance1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", genre: "Romantic", rating: 4.5 },
    { name: "party1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", genre: "Party", rating: 3.0 },
    { name: "hiphop1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", genre: "HipHop", rating: 5.0 },
    { name: "bhakti1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", genre: "Bhakti", rating: 3.5 },
    { name: "party2", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3", genre: "Party", rating: 3.8 }
], []);

// var search = <HTMLInputElement>document.getElementById("search");
// search.addEventListener('change',()=>{
//     var x = search.value
//     user2.search_audio(x);
// })

function passData(){
    var x= <HTMLInputElement>document.getElementById("name");
    var y= <HTMLSelectElement>document.getElementById("genre");
    user2.create_playlist(x.value,y.value);
}
function playlist(){

    user2.show_playlist();
}

function songData(){
    var x=<HTMLInputElement>document.getElementById("search");
    while (x.firstChild) {
        x.removeChild(x.lastChild);
    }
    user2.play_song(x.value);
}

function search_playlist()
{
    var x=<HTMLInputElement>document.getElementById("playlists");
    user2.search_playlist(x.value);
}
