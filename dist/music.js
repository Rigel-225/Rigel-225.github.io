const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "River Flows in You",
        artist: 'Yiruma',
        url: '/Yiruma - River Flows in You.flac',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003zD6X70C6Ti6_1.jpg?max_age=2592000',
      },
      {
        name: "Apologize",
        artist: 'Martin Ermen',
        url: '/Martin Ermen - Apologize.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003SC3sk2zNagW.jpg?max_age=2592000',
      },
	{
        name: "canon in d",
        artist: 'Brian Crain',
        url: '/Brian Crain - canon in d.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000032l6CH3avQDY_1.jpg?max_age=2592000',
  }
    ]
});