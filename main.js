const socialMediaIcons=document.getElementById("socialMediaIcons");
const aboutCard=document.querySelector(".aboutCard");
const workCard=document.querySelector(".workCard");
const contactCard=document.querySelector(".contactCard");
const bigCircleBg=document.querySelector(".bigCircle");
const smallCircleBg=document.querySelector(".smallCircle");
const profilePic=document.querySelector(".profilePic");
const intro=document.querySelector(".into");
const frontEndDeveloper=document.querySelector(".frontEndDev");
const bodyBg=document.querySelector("body");
const container=document.querySelector(".container");
const aboutText=document.querySelector(".aboutText");
const homeIcon=document.querySelector(".homeIcon");

aboutCard.addEventListener('click',aboutPage);
homeIcon.addEventListener('click',homePage);

function homePage() {
    aboutCard.classList.remove("aboutCardAfterClick");
    workCard.classList.remove("workCardAfterClick");
    contactCard.classList.remove("contactCardAfterClick");
    go();
}

function aboutPage() {
    clearCanvas();
    arrangingCards();
    
    

}

function arrangingCards() {
    var cardsTimelineAfterClick = new TimelineMax();
    cardsTimelineAfterClick
                          .set(aboutCard,{autoAlpha:1})
                          .set(workCard,{autoAlpha:1})
                          .set(contactCard,{autoAlpha:1})
                          .set(aboutText,{autoAlpha:1})
                          .set(homeIcon,{autoAlpha:1})
                          ;
    aboutCard.classList.add("aboutCardAfterClick");
    workCard.classList.add("workCardAfterClick");
    contactCard.classList.add("contactCardAfterClick");
    
}

function clearCanvas() {
    var clearTimeline= new TimelineMax();

    clearTimeline
                .set(socialMediaIcons,{x:-20,autoAlpha:0})
                .set(aboutCard,{autoAlpha:0})
                .set(workCard,{autoAlpha:0})
                .set(contactCard,{autoAlpha:0})
                .set(profilePic,{x:'+=200',autoAlpha:0})
                .set(intro,{autoAlpha:0})
                .set(frontEndDeveloper,{autoAlpha:0})
                .set(aboutText,{autoAlpha:0})
                .set(homeIcon,{autoAlpha:0})
                ;
        return clearTimeline;
    
}

function clearCanvasAll() {
    var clearTimeline= new TimelineMax();
         
           clearCanvas();

    clearTimeline
               
                .set(bigCircleBg,{autoAlpha:0})
                .set(smallCircleBg,{autoAlpha:0})
                .set(frontEndDeveloper,{autoAlpha:0,onComplete:showCanvas})
                .set(aboutText,{autoAlpha:0})
                
                ;
            
               function showCanvas() {
                container.style.display="block";
            }
            

    return clearTimeline;
}



function animationCards() {
    var cardsTimeline = new TimelineMax();

    cardsTimeline
                .fromTo(bigCircleBg,1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1})
                .fromTo(smallCircleBg,1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1})
                .to(profilePic,1,{x:0,autoAlpha:1,ease:Back.easeInOut})
                .fromTo(aboutCard,1,{x:-432,y:-316,autoAlpha:0},{x:0,y:0,autoAlpha:1})
                .fromTo(workCard,1,{x:752,y:-344,autoAlpha:0},{x:0,y:0,autoAlpha:1},'-=1')
                .fromTo(contactCard,1,{x:1079,y:297,autoAlpha:0},{x:0,y:0,autoAlpha:1},'-=1')
                .fromTo(intro,1,{y:100,autoAlpha:0},{y:0,autoAlpha:1,ease: Elastic.easeOut})
                .to(frontEndDeveloper,1,{autoAlpha:1})
                .to(socialMediaIcons,1,{x:0,autoAlpha:1,ease: Elastic.easeOut, onComplete:infiniteLoop ,circularMotion })
                ;
                
    return cardsTimeline;
}
function circularMotion(){
    var circularTimeline = new TimelineMax({repeat:-1});
        circularTimeline
                    .fromTo(bigCircleBg,30,{rotate:0},{rotate:720},'+=0.5')
                    .fromTo(smallCircleBg,30,{rotate:0},{rotate:-720},'-=30');
                   

}
function infiniteLoop() {
    var colors = ['#efe7ce', '#f7e6b1','#efe7ce'];
    var infiniteTimeline = new TimelineMax({repeat:-1,repeatDelay:1});
        infiniteTimeline
                    .to(bodyBg, 1, {backgroundColor: colors[0]})
				    .to(bodyBg, 1, {backgroundColor: colors[1]}, '+=1')
				    .to(bodyBg, 1, {backgroundColor: colors[2]}, '+=1')
                    .to(bodyBg, 1, {backgroundColor: colors[3]}, '+=1')
                
                    ;
    return infiniteTimeline;
}
function go() {
    var masterTimeline = new TimelineMax();
    masterTimeline
                 .add(clearCanvasAll())
                 .add(animationCards())
                 ;
}
go();