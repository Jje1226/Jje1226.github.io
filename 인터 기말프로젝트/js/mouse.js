// console.log("ok");
//마우스 커서 움직이기
var $cursorDot = document.querySelector("#cursor-dot");
var $cursorBG = document.querySelector("#cursor-bg");
var $progress = document.querySelector("#progress");
var $list = document.querySelector("#list");
// var $listEl = $list.querySelectorAll("a");
//셀렉터 찾기(위)
window.addEventListener("mousemove", onMouseMoveWindow);
function onMouseMoveWindow(e){
    // console.log('move');
    var posX = e.pageX, posY = e.pageY;
    //현재 커서의 좌표값
    // console.log(posX, posY);
    // $cursorDot.style.top = posY + "px";
    // $cursorDot.style.left = posX+ "px";
    TweenMax.killTweensOf($cursorBG);
    TweenMax.killTweensOf($cursorDot);
    TweenMax.killTweensOf($progress);
    TweenMax.to($cursorDot, 0, {css: {top: posY, left: posX}, ease: Quad.easeInOut});
    TweenMax.to($cursorBG, 0.1, {css: {top: posY, left: posX}, ease: Quad.easeInOut});
    TweenMax.to($progress, 0.1, {css: {top: posY, left: posX}, ease: Quad.easeInOut});
}

for(var i = 0; i < $listEl.length; i++){
    $listEl[i].addEventListener('mouseenter',function(){
        // console.log('enter');

        if(!$cursorBG.classList.contains("active")){
        $cursorBG.classList.add("active");
        }
        if(!$progress.classList.contains("active")){
            $progress.classList.add("active");
            }
    })
    $listEl[i].addEventListener('mouseleave', function(){
        // console.log('leave');
        if(!$cursorBG.classList.contains("active")){
            $cursorBG.classList.remove("active");
            }
            if(!$progress.classList.contains("active")){
                $progress.classList.remove("active");
                }
    });
}