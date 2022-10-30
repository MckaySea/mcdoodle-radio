import React, { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import alKharSong from "./alkharid.mp3";
import rsAdventure from "./adventure.mp3";
import songEQTitle from "./eq2title.mp3";
import "./RadioLook.css";
import { Howl, Howler } from "howler";
import Button from "react-bootstrap/Button";
import ReactHowler from "react-howler";
import { MdPlayCircle, MdPause } from "react-icons/md";
import { RiRadioLine } from "react-icons/ri";
import { GiInkSwirl, GiCrossedSabres } from "react-icons/gi";
export default function RadioLook() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState([]);
  const [song, setSong] = useState("");
  const [games, setGames] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let games = [];
    const runescape = {};
    runescape.name = "Runescape";
    runescape.image = "./Romeo_&_Juliet.png";
    // runescape.songs = [alKharSong, rsAdventure];
    runescape.songs = ["alkharid.mp3", "adventure.mp3"];

    const everquest = {};
    everquest.name = "Everquest";
    everquest.image = "./eqpic.png";
    everquest.songs = ["eq2title.mp3", "qeynosEq.mp3"];

    const adventureQuest = {};
    adventureQuest.name = "AdventureQuest";
    adventureQuest.image = "./aqwPicture.png";
    adventureQuest.songs = ["aqwSand.mp3"];

    const finalFantasyTen = {};
    finalFantasyTen.name = "Final Fantasy X";
    finalFantasyTen.image = "./ffx.png";
    finalFantasyTen.songs = ["ffxToXan.mp3"];

    const worldOfWarcraftClassic = {};
    worldOfWarcraftClassic.name = "World Of Warcraft Classic";
    worldOfWarcraftClassic.image = "./wowScreen.png";
    worldOfWarcraftClassic.songs = ["elwynnForestWow.mp3"];

    const ultimaOnline = {};
    ultimaOnline.name = "Ultima Online";
    ultimaOnline.image = "./ultima.png";
    ultimaOnline.songs = ["TheWanderer.mp3"];
    games.push(runescape);
    games.push(everquest);
    games.push(adventureQuest);
    games.push(finalFantasyTen);
    games.push(worldOfWarcraftClassic);
    games.push(ultimaOnline);
    setGames(games);
    // let songs = [];
    // songs.push(alKharSong);
    // songs.push(rsAdventure);
    // songs.push(songEQTitle);
    // setSongs(songs);
    // console.log(songs.toString());
    // setSong(songs[0]);
  }, []);

  const formatSong = (name) => {
    const parts = name.split("/static/media/");
    let rightSide = parts[1];
    let songName = rightSide.split(".")[0];
    return songName;
  };
  const getResource = (path) => {
    const parts = path.split("/static/media/");
    let songName = parts[1];
    return songName;
  };

  const playRandomSong = (songs) => {
    const len = songs.length;
    const index = Math.floor(Math.random() * len);
    const song = songs[index];
    console.log(song);
    setSong(song);
  };
  function handleLoad() {
    setLoaded(true);
  }
  // async function handleSpecificSong(songs) {}
  async function handlePlay(songs) {
    playRandomSong(songs);
    setIsPlaying(true);
    setLoaded(false);
    // } else setIsPlaying(false);
  }
  const divStyle = (image) => ({
    backgroundImage: `url(${image})`,
  });
  function handlePause() {
    setIsPlaying(false);
  }
  return (
    <div className="all-games">
      {games.map((game, index) => (
        <div
          onClick={() => handlePlay(game.songs)}
          key={index}
          style={{ backgroundImage: "url(" + game.image + ")" }}
          className="game-two"
        >
          {/* {isPlaying && (
            <ReactHowler
              autoplay={false}
              src={song}
              volume={0.5}
              playing={isPlaying}
            />
          )} */}

          <h1 className="game-title">{game.name}</h1>

          {game.songs.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </div>
      ))}
      <div className="playnpause">
        {" "}
        {isPlaying ? (
          <div
            style={{
              backgroundImage: `url(${"./scroll2.jpg"})`,
              backgroundSize: 1500,
              backgroundPositionX: -19,
              backgroundPositionY: -110,
              transition: "all 1.0s",
              padding: 0,
            }}
            className="songbox"
          >
            {" "}
            <h3>
              {loaded ? (
                <GiCrossedSabres size={28} />
              ) : (
                <GiInkSwirl size={28} />
              )}
            </h3>
            {song}
          </div> //playing
        ) : (
          <div> </div> //paused
          // <MdPlayCircle style={{ color: "black" }} size={36} />
        )}
      </div>
      {isPlaying && (
        <ReactHowler
          autoplay={false}
          src={song}
          volume={0.5}
          playing={isPlaying}
          onLoad={handleLoad}
        />
      )}
    </div>
  );
}
