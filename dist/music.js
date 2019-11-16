const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "River Flows in You",
        artist: 'Yiruma',
        url: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBcG9sYzVHU3djUDhpem9fUk9VVVFaRDVQQmlYP2U9enZ0UmRq.flac',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003zD6X70C6Ti6_1.jpg?max_age=2592000',
      },
      {
        name: "Apologize",
        artist: 'Martin Ermen',
        url: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBcG9sYzVHU3djUDhpem5BNldPcDY3MlBqV24yP2U9NElvUHd0.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003SC3sk2zNagW.jpg?max_age=2592000',
      },
	{
        name: "canon in d",
        artist: 'Brian Crain',
        url: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBcG9sYzVHU3djUDhpenZKcHFtYlNvZlM0OGs5P2U9NjVZYml3.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000032l6CH3avQDY_1.jpg?max_age=2592000',
  }
    ]
});