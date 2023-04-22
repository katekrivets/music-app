// функция(itemsArray){
// return itemsArray с новым полем duration с результатом выполнения функции time
// }
import songDuration from "./time.js";
import { BaseType } from "../../types/Base.js";

function populateSongsWithTime<T extends BaseType>(
  itemsArray: Array<T>
): Array<T & { duration: any }> {
  return itemsArray.map((item) => {
    let durationOfSong = songDuration(item.length);
    return { ...item, duration: durationOfSong };
  });
}

export default populateSongsWithTime;
