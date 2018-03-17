//문자를 가져오고
var entireText = document.getElementsByTagName('body')[0].innerText;
//문자를 구분하고 
var splitedText = entireText.split(' ');
//등장횟수를 계산
var countedWord = {};
for(var i = 0; i < splitedText.length; i++){
    var word = splitedText[i].toLowerCase();
    if(countedWord[word] == undefined){
        countedWord[word] = 1;
    } else {
        countedWord[word] = countedWord[word] + 1;
    }
}
var countedWordarr = new Array;
for(var name in countedWord){
    countedWordarr.push([name, countedWord[name]])
}
countedWordarr.sort(function(a,b){
    return a[1] - b[1];
})
for(var i=0; i< countedWordarr.length; i++){
    console.log(countedWordarr[i][0], countedWordarr[i][1]);
}