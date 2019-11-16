const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "River Flows in You",
        artist: 'Yiruma',
        url: 'http://music.163.com/song/media/outer/url?id=22829932.mp3',
        cover: 'http://p1.music.126.net/8ZRSyI0ZN_4ah8uzsNd1mA==/2324367581169008.jpg?param=130y130',
      },
      {
        name: "Apologize",
        artist: 'Martin Ermen',
        url: 'http://music.163.com/song/media/outer/url?id=1784227.mp3',
        cover: 'http://p1.music.126.net/-_6mcI4VV5IKaiwhUAytbg==/1791104441647901.jpg?param=130y130',
      },
	{
        name: "canon in d",
        artist: 'Brian Crain',
        url: 'http://music.163.com/song/media/outer/url?id=1091088.mp3',
        cover: 'http://p1.music.126.net/QGb9Vtyw7qHS00uEvPfM6g==/843325418547559.jpg?param=130y130',
  }
    ]
});