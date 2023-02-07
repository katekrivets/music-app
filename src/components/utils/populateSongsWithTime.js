// функция(itemsArray){
// return itemsArray с новым полем duration с результатом выполнения функции time
// }
import songDuration from "./time.js";

function populateSongsWithTime(itemsArray) {
  return itemsArray.map((item) => {
    let durationOfSong = songDuration(item.duration_ms);
    return { ...item, duration: durationOfSong };
  });
}

export default populateSongsWithTime;
