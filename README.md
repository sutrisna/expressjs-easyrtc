# expressjs-easyrtc
Integrasi EasyRTC di ExpressJS dengan study kasus pembuatan Video Call

# Install ExpressJS
- Clone this project:
```bash
$ git clone https://github.com/sutrisna/expressjs-easyrtc.git
$ cd elasticsearch-expressjs
```
- Install NPM dependencies:
```bash
$ npm install
$ npm install -g bower
$ bower install
```
- Running aplikasi:
```bash
$ node bin/www
```

### Client Side
- Angular Material
- Angular Timer

### Server Side
- EasyRTC

# Authentication EasyRTC Server
Kalian bisa ubah authentifikasi dari `appName` , `username` , `credential` agar client mana saja yang dapat terkoneksi ke server
```bash
var onAuthenticate = function(socket, easyrtcid, appName, username, credential, easyrtcAuthMessage, next){
   if (appName != "app1453" && username != "trisna1453" && 
   credential.password != "1453" && credential.apikey != "r4wrwf46346thfhath5632eryyhg"){
        next(new easyrtc.util.ConnectionError("Failed our private auth."));
      }
      else {
        next(null);
      }   
};
    
    easyrtc.events.on("authenticate", onAuthenticate);
```
# Authentication EasyRTC Client Side
Sesuaikan dengan setting auth pada server
```bash
easyrtc.setUsername("trisna1453");
    easyrtc.setCredential({
      "password":"1453",
      "apikey":"r4wrwf46346thfhath5632eryyhg"
    });
```

### Sutrisna 1453
Jika tidak bisa sedekah dengan uang, maka bersedekahlah dengan ilmu pengetahuan
