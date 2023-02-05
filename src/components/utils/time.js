function songDuration(ms) {
  let timeObject = {};
  let h = parseInt(ms / 3600000);
  let m = parseInt((ms - h * 3600000) / 60000);
  let s = parseInt((ms - h * 3600000 - m * 60000) / 1000);
  // let msNew = ms - h * 3600000 - m * 60000 - s * 1000;
  if (String(s).length < 2) {
    s = "0" + s;
  }
  timeObject = {
    hours: h,
    minutes: m,
    seconds: s,
  };
  return timeObject;
}
export default songDuration;
