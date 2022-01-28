var v=[];
function getKey(e)
{
    if (e.keyCode == 80) {
        v.push('P');
    } else if( v[0]=='P' && e.keyCode == '82'){
        v.push('r');
    } else if ( v[0]=='P' && v[1]=='r' && e.keyCode == 79) {
        v.push('o');
    } else if ( v[0]=='P' && v[1]=='r' && v[2]=='o'  && e.keyCode == 86) {
        v.push('v');
    } else if ( v[0]=='P' && v[1]=='r' && v[2]=='o' && v[3]=='v' && e.keyCode == 69) {
        v.push('e');
    } else if ( v[0]=='P' && v[1]=='r' && v[2]=='o' && v[3]=='v' && v[4]=='e' && e.keyCode == 73) {
        v.push('i');
    } else if ( v[0]=='P' && v[1]=='r' && v[2]=='o' && v[3]=='v' && v[4]=='e' && v[5]=='i' && e.keyCode == 84) {
        v.push('t');
    } else{
        v = [];
    }
    if(v[6] == 't'){
        var string = v[0] + v[1] + v[2] + v[3] + v[4] + v[5] + v[6];
        window.location.href = "C:/Users/barca/OneDrive/Desktop/html/cevceva/cevaceva.html";
    }
}

document.onkeyup = getKey;