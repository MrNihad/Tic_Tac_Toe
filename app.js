var marker = "";
function mark(obj){
    marker = obj.value;
}
function game(evt){
    evt.innerHTML = marker;
    const array = [];
    for (let i = 0; i < row.length; i++) {
        array.push(row[i].innerHTML);
    }
    winCheck(array);
    console.log(typeof array[0])
}
const row = document.getElementsByTagName('td');

function winCheck(array){
    if(array.includes('X')||array.includes('O')){
        if(array[0]===array[1]&&array[2]===array[1]&&array[1]!==''){
            alert(`${array[0]} won`);
        }
        if(array[3]===array[4]&&array[5]===array[4]&&array[4]!==''){
            alert(`${array[4]} won`);
        }
        if(array[6]===array[7]&&array[8]===array[7]&&array[7]!==''){
            alert(`${array[7]} won`);
        }
        if(array[0]===array[4]&&array[8]===array[4]&&array[4]!==''){
            alert(`${array[0]} won`);
        }
        if(array[2]===array[4]&&array[6]===array[4]&&array[4]!==''){
            alert(`${array[4]} won`);
        }
        if(array[0]===array[3]&&array[6]===array[3]&&array[3]!==''){
            alert(`${array[3]} won`);
        }
        if(array[1]===array[4]&&array[7]===array[4]&&array[4]!==''){
            alert(`${array[4]} won`);
        }
        if(array[2]===array[5]&&array[8]===array[5]&&array[5]!==''){
            alert(`${array[5]} won`);
        }
        if(!array.includes('')){
            alert('Draw');
        }
    }
    
}
