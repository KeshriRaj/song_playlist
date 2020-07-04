var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Audios = /** @class */ (function () {
    function Audios(AudioList) {
        var _this = this;
        this.search_audio = function (name) {
            for (var i = 0; i < _this.AudioList.length; i++) {
                if (_this.AudioList[i].name == name) {
                    console.log(name);
                    _this.play_song(name);
                }
            }
        };
        this.select_audio_after_search = function (AudioList_select) {
            console.log(AudioList_select);
            return AudioList_select;
        };
        this.display_songs_list = function () {
            var check = document.getElementById("display");
            console.log(check);
            while (check.firstChild) {
                check.removeChild(check.lastChild);
            }
            console.log(check);
            var _loop_1 = function (i) {
                var x = document.createElement("li");
                x.innerHTML = _this.AudioList[i].name;
                console.log(_this.AudioList[i].name);
                var rt = document.createElement("button");
                // rt.style.height="50px";
                // rt.style.width="50px";
                // rt.name=this.AudioList[i];
                // rt.style.marginLeft="30px;"
                rt.style.height = "50px";
                rt.style.width = "100px";
                rt.style.margin = "10px";
                rt.style.borderRadius = "5px";
                rt.style.color = "white";
                rt.style.backgroundColor = "blue";
                rt.innerHTML = _this.AudioList[i].name;
                rt.addEventListener("click", function (e) { return _this.play_song(_this.AudioList[i].name); });
                document.getElementById("display").appendChild(rt);
            };
            for (var i = 0; i < _this.AudioList.length; i++) {
                _loop_1(i);
            }
        };
        this.display_songs_list_genre = function (genre_name) {
            for (var i = 0; i < _this.AudioList.length; i++) {
                if (genre_name == _this.AudioList[i].genre)
                    console.log(_this.AudioList[i].name + " " + _this.AudioList[i].genre);
            }
        };
        this.play_song = function (song_name) {
            for (var i = 0; i < _this.AudioList.length; i++) {
                if (_this.AudioList[i].name == song_name) {
                    var audio_button = document.getElementById("audio");
                    audio_button.src = _this.AudioList[i].url;
                    audio_button.autoplay = true;
                    audio_button.controls = true;
                }
            }
        };
        this.AudioList = AudioList;
    }
    return Audios;
}());
var play_list = /** @class */ (function (_super) {
    __extends(play_list, _super);
    function play_list(AudioList, Playlist) {
        var _this = _super.call(this, AudioList) || this;
        _this.search_playlist = function (name) {
            var x = true;
            for (var i = 0; i < _this.Playlist.length; i++) {
                if (_this.Playlist[i].name == name) {
                    x = false;
                }
            }
            if (x) {
                alert("Playlist not found");
            }
            else {
                _this.show_playlist();
            }
        };
        _this.create_playlist = function (name, genre) {
            var x = true;
            for (var i = 0; i < _this.Playlist.length; i++) {
                if (_this.Playlist[i].name == name && _this.Playlist[i].genre == genre) {
                    x = false;
                    alert("This Playlist name has already been taken");
                }
            }
            if (x) {
                _this.Playlist.push({ name: name, genre: genre, songs: [] });
                alert("PlayList is successfully created!");
            }
        };
        _this.show_playlist = function () {
            console.log(_this.Playlist);
            var div = document.getElementById("playlist");
            while (div.firstChild) {
                div.removeChild(div.lastChild);
            }
            var _loop_2 = function (i) {
                var y = document.createElement("button");
                y.style.height = "50px";
                y.style.width = "100px";
                y.style.margin = "10px";
                y.style.borderRadius = "5px";
                y.style.color = "white";
                y.style.backgroundColor = "blue";
                y.innerHTML = _this.Playlist[i].name;
                dd = document.getElementById("playlist");
                dd.appendChild(y);
                y.addEventListener("click", function (e) { return _this.add_song_playlist(_this.Playlist[i].name); });
            };
            var dd;
            for (var i = 0; i < _this.Playlist.length; i++) {
                _loop_2(i);
            }
        };
        _this.add_song_playlist = function (playlist_name) {
            _this.Playlist.forEach(function (element) {
                if (element.name == playlist_name) {
                    if (element.songs.length == 0) {
                        alert("No Song in PlayList");
                        _this.add_audio(playlist_name);
                    }
                    else {
                        for (var i = 0; i < _this.Playlist.length; i++) {
                            if (_this.Playlist[i].name == playlist_name) {
                                for (var j = 0; j < _this.Playlist.songs.length; j++) {
                                    var y = document.createElement("button");
                                    y.innerHTML = _this.Playlist.songs[j];
                                    var dd = document.getElementById("songlist");
                                    dd.appendChild(y);
                                    y.addEventListener("click", function (e) { return _this.play_song(_this.Playlist.songs[j]); });
                                }
                            }
                        }
                    }
                }
            });
        };
        _this.add_audio = function (name_playlist) {
            var wq = document.getElementById("addsongs");
            wq.innerHTML = "Click on Songs to Add";
            for (var i = 0; i < _this.Playlist.length; i++) {
                if (_this.Playlist[i].name == name_playlist) {
                    var genre = _this.Playlist[i].genre;
                    for (var j = 0; j < _this.AudioList.length; j++) {
                        if (_this.AudioList[j].genre == genre) {
                            var y = document.createElement("button");
                            y.style.height = "50px";
                            y.style.width = "100px";
                            y.style.margin = "10px";
                            y.style.borderRadius = "5px";
                            y.style.color = "white";
                            y.style.backgroundColor = "blue";
                            y.innerHTML = _this.AudioList[j].name;
                            var dd = document.getElementById("options");
                            dd.appendChild(y);
                            y.addEventListener("click", function (e) { return function () {
                                alert("Song Added Successfully");
                                this.PlayList[i].songs.push(this.AudioList[j].name);
                            }; });
                        }
                    }
                }
            }
        };
        _this.Playlist = Playlist;
        console.log(_this.AudioList);
        console.log(_this.Playlist);
        return _this;
    }
    return play_list;
}(Audios));
var user2 = new play_list([
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
function passData() {
    var x = document.getElementById("name");
    var y = document.getElementById("genre");
    user2.create_playlist(x.value, y.value);
}
function playlist() {
    user2.show_playlist();
}
function songData() {
    var x = document.getElementById("search");
    while (x.firstChild) {
        x.removeChild(x.lastChild);
    }
    user2.play_song(x.value);
}
function search_playlist() {
    var x = document.getElementById("playlists");
    user2.search_playlist(x.value);
}
