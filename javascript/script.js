//토글 변수
let toggle = document.querySelector('.toggle');
let gnb = document.querySelector('.gnb');
let toggleState=0;

// 이동 버튼 변수
let topBtn = document.querySelector('.logo');
let headerTop = document.querySelector('header').getBoundingClientRect().top;
let headerHeight = document.querySelector('header').getBoundingClientRect().bottom;
let scrollTop;
let toBtns = gnb.querySelectorAll('li');
let sections = document.getElementsByTagName('section');

// 인트로 줌 변수
let zoom = document.querySelector('.zoom');
let target = document.querySelector('.target');
let zoomHalf = zoom.clientWidth / 2;
// console.log(target);


// 스크롤 애니 변수
let projects = document.querySelectorAll('.portfolio li');

// let spider = document.querySelector('.spider');
// let spiderTop = spider.getBoundingClientRect().top;
// let num = -460;
// $('.spider').css({
//   'top' : '5000px'
// },300);

window.addEventListener('scroll',()=>{
  console.log(window.scrollY);
  if(window.scrollY >= 1600 && window.scrollY <= 3270){
    $('.spider').css({
      'position' : 'fixed',
      'top': '-570px'
    });
    $('.spider').addClass('on');
  }else if(window.scrollY > 3255){
    $('.spider').removeClass('on');
    $('.spider').css({
      'position' : 'absolute',
      'top': '1400px',
      // 'bottom':'0px'
    });
  }else{
    $('.spider').removeClass('on');
    $('.spider').css({
      'position' : 'absolute',
      'top': '-460px'
    });
  }
});
// 메뉴버튼 이벤트
toggle.addEventListener('click',(e)=>{
  if(!toggleState){
    gnb.style.display = 'block';
    toggle.classList.add('on');
    toggleState=1;

  }else{
    gnb.style.display = 'none';
    toggle.classList.remove('on');
    toggleState=0;
  }
});

// 탑버튼 이벤트
topBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  $('html, body').animate({
    scrollTop : 0
  })
})

// 섹션 이동 이벤트
toBtns.forEach((toBtn)=>{
  toBtn.addEventListener('click',function(e){
    e.preventDefault();
    let pageNum = $(this).index();

    $('html, body').animate({
      scrollTop : $('section').eq(pageNum+1).offset().top - headerHeight/2
    });

    toggle.classList.remove('on');
    gnb.style.display = 'none';
    toggleState=0;
  }); 
});


//인트로 줌 이벤트
sections[0].addEventListener('mousemove',(e)=>{
  zoom.style.left = e.pageX - zoomHalf + 'px';
  zoom.style.top = e.pageY - zoomHalf + 'px';
});

let textwrap = document.querySelector('.portfolio .text_wrap')
console.log(textwrap.getBoundingClientRect().right);
textRight = textwrap.getBoundingClientRect().right;
textBottom = textwrap.getBoundingClientRect().bottom;

// console.log(clientX);
// 포트폴리오 썸네일 마우스오버
projects.forEach((project)=>{
  
  project.addEventListener('mousemove',(e)=>
  {
    
    projects.forEach((project)=>{
      
      const thumnail = project.querySelector('.project_thum');
      const text = project.querySelector('p');
        
        thumnail.style.left=(e.clientX+20)+"px";
        thumnail.style.top=(e.clientY-(thumnail.clientHeight)*0.1)+"px";
      // console.log(text);
      if(e.clientX < textRight && e.clientY < textBottom ){
        thumnail.classList.add('absol');
        // thumnail.style.left = 590+"px";
        // thumnail.style.top = 50+"%";
        // thumnail.style.transform = 'translateY(-50%)';
      }else{
        thumnail.classList.remove('absol');
        thumnail.style.left=(e.clientX+20)+"px";
        thumnail.style.top=(e.clientY-(thumnail.clientHeight)*0.1)+"px";
      }
    });
  });
});

//타이핑거미 스프라이트 애니
let spiderImg = document.querySelector('.profile_ani img');
let idx = 1;
let imgLength = 6;
function seqInit(){
  let seqPlay = true;
  let imgLoad = 0;
  
  for(idx=1; idx <= imgLength; idx++){
    let imgTmp = new Image();
    imgTmp.src = `img/typing${idx}.png`;
    imgTmp.onload = function(){
      ++imgLoad;
      if(imgLoad == imgLength){
        rolling();
      }//if가정문
    }//function
  }//for문
  idx = 0;
  function rolling(){
    setTimeout(function(){
      if(seqPlay) idx++;
      spiderImg.setAttribute('src',`img/typing${idx}.png`);
      if(idx == imgLength){
        seqPlay = 0;
        idx = 0;
      }
      if(!seqPlay){if(idx == 0) seqPlay = true}
      rolling();
    },140);//setTimeout
  }
}
seqInit();