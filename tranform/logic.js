
let arr =['A0','A1','A2','A3','A4','A5','A6','A7','Ab1','Ab2','Ab3','Ab4','Ab5','Ab6','Ab7','B0','B1','B2','B3','B4','B5','B6','B7','Bb0'
          ,'Bb1','Bb2','Bb3','Bb4','Bb5','Bb6','Bb7','c1','c2','c3','c4','c5','c6','c7','c8','D1','D2','D3','D4','D5','D6','D7','Db1'
          ,'Db2','Db3','Db4','Db5','Db6','Db7','Db8','E1','E2','E3','E4','E5','E6','E7','Eb1','Eb2','Eb3','Eb4','Eb5','Eb6','Eb7','F1'
          ,'F2','F3','F4','F5','F6','F7','G1','G2','G3','G4','G5','G6','G7','Gb1','Gb2','Gb3','Gb4','Gb5','Gb6','Gb7'];



console.log(arr.length)        


function play1(e){

  let ran = Math.round(Math.random()*88);
  let play ='./keys/'+arr[ran]+'.mp3'
  var audio = new Audio(play);
  audio.play();
}