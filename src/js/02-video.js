import vimeo from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new vimeo(iframe);
    
const setTime = function (data) {
  localStorage.setItem("videoplayer-current-time", data.seconds);
};

player.on('timeupdate', throttle(setTime, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
