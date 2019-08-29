let getId = id => document.getElementById(id);
let getClass = sel => document.getElementsByClassName(sel);

let check = true;
getId('bold').onclick = function(){
    if(check){
        getId('content').style.fontWeight = 'bold';
        check = false;
    }
    else{
        getId('content').style.fontWeight = 'normal';
        check = true;
    }  
}
let check2 = true;
getId('italic').onclick = function(){
    if(check2){
        getId('content').style.fontStyle = 'italic';
        check2 = false;
    }
    else{
        getId('content').style.fontStyle = 'normal';
        check2 = true;
    }  
}
let check3 = true;
getId('underline').onclick = function(){
    if(check3){
        getId('content').style.textDecoration = 'underline';
        check3 = false;
    }
    else{
        getId('content').style.textDecoration = 'none';
        check3 = true;
    }  
}
let check4 = true;
getId('del').onclick = function(){
    if(check4){
        getId('content').style.textDecoration = 'line-through';
        check4 = false;
    }
    else{
        getId('content').style.textDecoration = 'none';
        check4 = true;
    }  
}
let check5 = true;
getId('left').onclick = function(){
    if(check5){
        getId('content').style.textAlign = 'left';
        check5 = false;
    }
    else{
        getId('content').style.textDecoration = ' ';
        check5 = true;
    }  
}
let check6 = true;
getId('center').onclick = function(){
    if(check6){
        getId('content').style.textAlign = 'center';
        check6 = false;
    }
    else{
        getId('content').style.textDecoration = ' ';
        check6 = true;
    }  
}
let check7 = true;
getId('right').onclick = function(){
    if(check7){
        getId('content').style.textAlign = 'right';
        check7 = false;
    }
    else{
        getId('content').style.textDecoration = ' ';
        check7 = true;
    }  
}
//Для модального вікна, зміна кольору тексту
getId('colors').onclick = function(){
    getId('modalColors').style.display = 'block';
    document.body.style.backgroundColor = 'rgba(95, 90, 90, 0.6)';
}
window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target.id != 'colorsImage' && e.target.id != 'modalColors' && e.target.className != 'boxColor' && e.target.className != 'color' 
    && e.target.id != 'modalBackground' && e.target.id != 'home-tab' && e.target.id != 'profile-tab' && e.target.id != 'contact-tab' && e.target.id != 'myTabContent' && e.target.className != 'color2' && e.target.className != 'boxColor2'
    && e.target.id != 'colorImageFiles' && e.target.id != 'inputGroupFile01'
    && e.target.id != 'lock' && e.target.id != 'sign'  && e.target.id != 'ff' && e.target.id != 'formGroupExampleInput' && e.target.id != 'formGroupExampleInput2' 
    && e.target.id !== 'fileImg' && e.target.id != 'createTable'){
        getId('modalColors').style.display = 'none'; 
        getId('modalBackground').style.display = 'none';
        getId('sign').style.display = 'none';
        document.body.style.backgroundColor = 'unset';
    }    
});
let color = document.getElementsByClassName('color');
for(let i=0; i<color.length; i++){
    color[i].onclick = function(){
        let value = color[i].innerText;
        console.log(value)
        getId('content').style.color = value;      
    }
}
//Для модального вікна, зміна фону контенту
getId('colorImageFiles').onclick = function(){
    getId('modalBackground').style.display = 'block';
    document.body.style.backgroundColor = 'rgba(95, 90, 90, 0.6)';
}
let color2 = document.getElementsByClassName('color2');
let images = document.getElementsByClassName('images');
let fontFamily = document.getElementsByClassName('font-family');

for(let i=0; i<color2.length; i++){
    color2[i].onclick = function(){
        let value = color2[i].innerText;
        getId('cont').style.backgroundColor = value;     
    }
}
for(let i=0; i<images.length; i++){
    images[i].onclick = function(){
        let value = images[i].innerText;
        getId('cont').style.backgroundImage = value;
        getId('cont').style.backgroundSize = '100% 100%';
       
    }
}
getId('inputGroupFile01').addEventListener('change',function(e){
    console.log(e);
    let image = e.target.files[0];
    let url = URL.createObjectURL(image);
    getId('cont').style.backgroundImage = `url(${url})`;
    getId('cont').style.backgroundSize = '100% 100%';
    })
//Модалка для реєстрації
getId('lock').onclick = function(){
    getId('sign').style.display = 'block';
    document.body.style.backgroundColor = 'rgba(95, 90, 90, 0.6)';
}
getId('signInButton').onclick = function(){
    getId('sign').style.display = 'none';
    let login = getId('formGroupExampleInput').value;
    let pass = getId('formGroupExampleInput2').value;
    console.log(login,pass)
}
for(let i=0; i<fontFamily.length; i++){
    fontFamily[i].onclick = function(){
        let value = fontFamily[i].innerText;
        getId('cont').style.fontFamily = value;
    }
}
let fontSize = document.getElementsByClassName('font-size');
for(let i=0; i<fontSize.length; i++){
    fontSize[i].onclick = function(){
        let value = fontSize[i].innerText;
        getId('cont').style.fontSize = value;
    }
}
getId('fileImg').onclick = function(){
    getId('createTable').style.display = 'block';
    document.body.style.backgroundColor = 'rgba(95, 90, 90, 0.6)';
    getId('contentArea').style.zIndex = -1;
}
//Створення таблиці
getId('creatT').onclick = function(){
    let countTr = getId('countTR').value;
    let countTd = getId('countTD').value;
    let widthOfBorder = getId('widthOfBorder').value;
    let table = document.createElement('table');
    for(let r=0; r<countTr; r++){
    let tr = document.createElement('tr');
    table.appendChild(tr);
                for(let d=0; d<countTd; d++){
                    let td = document.createElement('td');
                    td.innerText = 'TD'
                    tr.appendChild(td);
                    //стилі для td 
                    let widthOfTD = getId('widthOfTD').value;
                    let heightOfTD = getId('heightTD').value;
                    let colorOfBorder = getId('colorOfBorder').value;
                    td.style.width = widthOfTD + 'px';
                    td.style.height = heightOfTD + 'px';
                    td.style.borderCollapse = 'collapse';
                    td.style.borderWidth = widthOfBorder + 'px';
                    td.style.borderStyle =getId('styleOfBorder').value;
                    td.style.borderColor = colorOfBorder;
                }
    }
    let n = getId('contentArea').appendChild(table)
    getId('contentArea').value += n.outerHTML;
    getId('createTable').style.display = 'none';
}
//Ordered list
getId('ol_list').onclick = function(){
    getId('orderedList').style.display = 'block';
}
getId('creatO').onclick = function(){
let countLi = getId('countLiOrdered').value
let ol = document.createElement('ol') //створюю список
for(let i=1; i<=countLi; i++){
    let li = document.createElement('li');
    li.innerText = `item ${i}`;
    ol.appendChild(li);
}
ol.setAttribute("type", getId('typeOfOrd').value); //тип для списків
    let n = getId('contentArea').appendChild(ol)
    getId('contentArea').value += n.outerHTML; 
    getId('orderedList').style.display = 'none';
}
//Unordered list
getId('ul_list').onclick = function(){
    getId('unorderedList').style.display = 'block';
}
getId('createU').onclick = function(){
let countLi = getId('countLiUnordered').value
let ul = document.createElement('ul') //створюю список
for(let i=1; i<=countLi; i++){
    let li = document.createElement('li');
    li.innerText = `item ${i}`;
    ul.appendChild(li);
}
ul.setAttribute("type", getId('typeOfUnord').value); //тип для списків
    let n = getId('contentArea').appendChild(ul)
    getId('contentArea').value += n.outerHTML; 
    getId('unorderedList').style.display = 'none';
}
let menuLi = document.querySelectorAll('.menu li');
let menuSecondLi = document.querySelectorAll('#menuSecond li');
let menu = document.querySelectorAll('ul.menu');
getId('firstLi').onclick = function(){
    for(let i=0; i<menuLi.length; i++){
        menuLi[i].style.display = 'none';
    }
    for(let i=0; i<menuSecondLi.length; i++){
        menuSecondLi[i].style.display = 'inline-block';
    }
    for(let i=0; i<menu.length; i++){
        menu[i].style.display = 'none';
    }
    getId('contentArea').style.display = 'block';
    getId('content').style.display = 'none';

}

getId('save').onclick = function(){
    let value = getId('contentArea').value
    getId('content').innerHTML = value;
    getId('contentArea').style.display = 'none';
    getId('content').style.display = 'block';
     getId('menuSecond').style.display = 'none';
    for(let i=0; i<menuLi.length; i++){
        menuLi[i].style.display = 'inline-block';
    }
    for(let i=0; i<menu.length; i++){
        menu[i].style.display = 'inline-block';
    }
    
}