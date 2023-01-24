
import songs from './songs';
const itemsArray = Object.keys(songs.tracks.items);
const msArray = itemsArray.map(item => (songs.tracks.items[item].duration_ms))

const durationArray=[];
let ms, h, m, s, msNew;
function SongDuration(hours, minutes, seconds, miliseconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.miliseconds = miliseconds;
};
const songDurationObjects= msArray.map((element)=>{
        ms = element;
        h = parseInt(ms / 3600000);
        m = parseInt((ms - h * 3600000) / 60000);
        s = parseInt((ms - h * 3600000 - m * 60000) / 1000);
        msNew = ms - h * 3600000 - m * 60000 - s * 1000;
      
        if(String(s).length<2){
            s='0'+s
        };
        return (
            new SongDuration(h, m, s, msNew)
           
        )
    }
    )
    durationArray.push(songDurationObjects);
    console.log(durationArray);
    export default durationArray;