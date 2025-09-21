// music.js

//这段代码只定义了对象，里面的 init 方法只是一个函数，并没有自动执行
//必须显式调用 bgMusic.init() 来初始化音乐播放器
//可以在 init 方法中传入音乐文件路径和音量，默认路径为 "../audio/music.mp3"，默认音量为 0.5

const bgMusic = (function () {
  let audio = null; // 音乐文件路径
  let isPlaying = false;

  return {
      init: function(src = "../audio/music.mp3", volume = 0.1) {
          if (!audio) {
              audio = new Audio(src);
              audio.loop = true;
              audio.volume = volume;
              console.log("背景音乐已初始化:", src);
              // 尝试自动播放
              const playPromise = audio.play();
              if (playPromise !== undefined) {
                  playPromise
                      .then(() => { isPlaying = true; })
                      .catch(err => { console.log("自动播放被阻止:", err); });
              }
          }
      },

      play: function() {
          if (audio && !isPlaying) {
              audio.play();
              isPlaying = true;
          }
      },

      pause: function() {
          if (audio && isPlaying) {
              audio.pause();
              isPlaying = false;
          }
      },

      toggle: function() {
          if (isPlaying) this.pause();
          else this.play();
      },

      setVolume: function(vol) {
          if (audio) audio.volume = vol;
      },

      getAudio: function() {
          return audio;
      }
  };
})();

document.querySelector('.music').addEventListener('click', () => {
  bgMusic.init(); // 初始化并播放
});

