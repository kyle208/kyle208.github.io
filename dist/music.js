const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "开启新征程",
        artist: '阿鲲',
        url: 'http://www.ytmp3.cn/down/58738.mp3',
        cover: 'http://imge.kugou.com/stdmusic/240/20190201/20190201161642944399.jpg',
      },
      {
        name: '光年之外',
        artist: "邓紫棋",
        url: "http://www.ytmp3.cn/down/55362.mp3",
        cover: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2263725527,2286386301&fm=58&bpow=882&bpoh=890",
      },
	  {
        name: 'smile',
        artist: "艾薇儿",
        url: "http://www.ytmp3.cn/down/51089.mp3",
        cover: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4244291543,4144447772&fm=58&bpow=1280&bpoh=1280",
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});