import data from './dataspotify.js';
import './App.css';

function Spotify() {
    const song = data.name
    const artists = data.artists[0].name
    return (
      <div class="container">
        <img src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b" alt="" class="gambar"/>
        <p> Title: {song}</p>
        <p> Artist: {artists}</p>
        <button type="button" onclick="select1()">Select</button>
      </div>
    );
  }

  export default Spotify;