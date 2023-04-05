// функция(itemsArray){
// return itemsArray с новым полем duration с результатом выполнения функции time
// }
import songDuration from "./time.js";
import { TrackForSearch } from "../../types/Track.js";

function populateSongsWithTime(
  itemsArray: Array<TrackForSearch>
): Array<TrackForSearch & { duration: any }> {
  return itemsArray.map((item) => {
    let durationOfSong = songDuration(item.length);
    return { ...item, duration: durationOfSong };
  });
}

export default populateSongsWithTime;
