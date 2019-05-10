//input here
var allText = ["In symptomatic SND, pacemaker improves symptoms; not mortality",
                "In a patient with symptomatic sinus bradycardia from guideline-directed medication, pacemaker is indicated.",
                "In symptomatic SND, atrial-based pacing (not ventricular based or VVI) is recommended.",
                "Symptomatic high-grade AV block + stable dose of AV node blocker --> proceed with pacemaker without further observation."
            ];
var bg = ['MediumSpringGreen','MediumSpringGreen','MediumSpringGreen','LemonChiffon']

//functions
var tStart = 0;
//tStart is a global variable = where the wheel is.
function showTxtBlk(){
    var card = document.getElementById('card');
    card.innerHTML = allText[tStart]   
    card.style.backgroundColor = bg[tStart]
    var num = Math.floor(Math.random() * 10); 
    var mark = Math.floor(Math.random()*2);var deg;
    if (mark==1){deg=(num/3)*-1}
    else {deg=num/3}
    card.style.transform = 'rotate('+deg+'deg)'

    //show nav
    var nav = document.getElementById('bradyWheelCenter')
    var navNo = tStart + 1;
    nav.innerHTML = navNo + ' / ' + allText.length;
    //arrow
    var left = document.getElementById('bradyWheelLeft')
    var right = document.getElementById('bradyWheelRight')
    left.onclick = function(){rw()}
    right.onclick = function(){fwd()}
}

function fwd() {
    ++tStart;
    if (tStart>=allText.length){tStart=0}
    showTxtBlk();
      }
    
function rw() {
    --tStart;
    if (tStart<0){tStart=(allText.length)-1}
    showTxtBlk();
    }   

var init;
var fwdCount=0;
//fwdCount enables autorolling toggle.
function autoFwd(){
    if (fwdCount>0)
    { fwdCount=0;
      clearInterval(init)}
    else  {  
    ++fwdCount;
    init = setInterval(function(){
    ++tStart;
    if (tStart>=allText.length){tStart=0}
      showTxtBlk();
    } , 4400);}
    
}
    