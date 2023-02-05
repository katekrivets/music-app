// функция(itemsArray){
// return itemsArray с новым полем duration с результатом выполнения функции time
// }
import songDuration from "./time.js";

function populateSongsWithTime(itemsArray, ms) {
  itemsArray["duration"] = songDuration(ms);
  return itemsArray;
}
export default populateSongsWithTime;
