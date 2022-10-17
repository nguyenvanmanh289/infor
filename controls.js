//tao the p + noi dung va noi no vao the div main 
const p = document.createElement("p");
const textp = document.createTextNode("INFOR OF MANH");
p.appendChild(textp);
const x = document.getElementById("main");
x.appendChild(p);
//get the p va set attribute cho no
const getp = document.getElementsByTagName("p")[0];
const att = document.createAttribute("id");
att.value = "p1";
getp.setAttributeNode(att);


//TAO THE DIV1 VA NOI VAO BODY
const div1 = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(div1);
//GET div1 va set attribute cho no
const getDiv1 = document.getElementsByTagName("div")[1]
const div1_att = document.createAttribute("id");
div1_att.value = "div1";
getDiv1.setAttributeNode(div1_att);

//tao the video la con cua div1 va noi vao div1
function createElementVideo(nameTAG,index,Id,Width,Height,srcVideo){
   
    const video1 = document.createElement(nameTAG);
    getDiv1.appendChild(video1);
//setAttributeNode to video tag
    const Att =["id","width","height"];
    const ValAtt =[Id,Width,Height];

    const GetTagvideo = document.getElementsByTagName(nameTAG)[index];
    for(let i =0;i<Att.length;i++){
        const videoAtt = document.createAttribute(Att[i]);GetTagvideo.setAttributeNode(videoAtt);
        if(i<3){
        videoAtt.value = ValAtt[i];   console.log(videoAtt); 
        }  
    }

//tao the source cho the video
    const sourceVideo = document.createElement("source");
    GetTagvideo.appendChild(sourceVideo);
    
    const sourceAtt =document.createAttribute("src");
    sourceAtt.value =srcVideo;
    const GetTagSource = document.getElementsByTagName("source")[index];
    GetTagSource.setAttributeNode(sourceAtt);
}
 createElementVideo("video",0,"videomain","auto","600","w.mp4");
 alert("ẤN VÀO BẤT CỨ ĐÂU TRÊN MÀN HÌNH DỂ CHẠY VIDEO 👌💕");
let vid = document.getElementById("videomain");
  function playVid() { 
    vid.play(); 
  } 
 function pauseVid() { 
    vid.pause(); 
  } 
 


  // tele element =============================
  document.getElementById("videomain").style.position ="absolute";
  console.dir(document.getElementById("videomain"));

  let xw =371;
  console.log("gia tri x là ",xw);

  //check getElementById("videomain")
  if(document.getElementById("videomain")) console.log("lấy id thanh công");
  

function tele(){
     document.getElementById("videomain").style.left = (xw.toString()+"px");
     document.getElementById("videomain").style.bottom = (xw.toString()+"px");
     document.getElementById("videomain").style.width = ((200+xw).toString()+"px");
    
    console.log(xw);
    loop();
}

function loop(){
  if(xw>0){
    xw--;
    setTimeout(tele,1);
  }
  else{
    return false;
  }
}

function telez(){
    document.getElementById("videomain").style.left = (xw.toString()+"px");
    document.getElementById("videomain").style.bottom = ((xw-189).toString()+"px");
    document.getElementById("videomain").style.width = ((200+xw).toString()+"px");
   
   console.log(xw);
   loopz();
}

function loopz(){
 if(xw<391){
   xw++;
   setTimeout(telez,1);
 }
 else{
   return false;
 }
}


// tao ham tao ads và playpausevid
function makeadsin5s(){
    loop();
    document.getElementsByTagName("html")[0].removeAttribute("onclick");
    createElementVideo("video",1,"videoads1","1190","auto","galaxy.mp4");
    let vida = document.getElementById("videoads1");
    function playVidads() { 
        vida.play(); 
      } pauseVid();playVidads();
      
     function HIDE(){
        document.getElementById("videoads1").style.display = "none";
        const muteAtt =document.createAttribute("mute");
        document.getElementById("videoads1").setAttributeNode(muteAtt);
        loopz();
        playVid();
     }
    setTimeout(HIDE,37000);
}

function makeadsinend(){
    loop();
    createElementVideo("video",2,"videoads2","1190","auto","10.10.mp4");
    let vida = document.getElementById("videoads2");
    function playVidads() { 
        vida.play(); 
      } pauseVid();playVidads();

    function ale(){
        document.getElementById("videoads2").style.display = "none";
        const p2 = document.createElement("p");
        getDiv1.appendChild(p2);
       
       const u= document.getElementsByTagName("p")[1];
       u.style.fontSize ="60px"
       const c ="CẢM ƠN CÔ VÀ <br>CÁC BẠN ĐÃ XEM 😂😂👌";
       u.innerHTML = c;
         
        document.querySelector("html").style.backgroundColor ="#00FF00";
        document.getElementById("videomain").style.display = "none";
        document.getElementsByTagName("p")[0].style.backgroundColor="#FFFF33";

        createElementVideo("video",3,"videoads3","10","auto","download.mp4");
       const music = document.getElementById("videoads3");
       music.style.display = "none";
       music.play();
     }
    setTimeout(ale,30000);
          
}
function ads(){

    setTimeout( makeadsin5s,20000);
    setTimeout(function(){alert("Chương Trình Quảng Cáo")},20000);
    setTimeout(makeadsinend,130000);
    
}



