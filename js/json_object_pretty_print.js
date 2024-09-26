/*
 * Original code: http://jsfiddle.net/unLSJ/
 */
/*
 * Pretty Print JSON Objects.
 * Inspired by http://jsfiddle.net/unLSJ/
 *
 * @return {string}    html string of the formatted JS object
 * @example:  var obj = {"foo":"bar"};  obj.prettyPrint();
 */
/*
 * Modified by Nelson Polanco
 * https://codepen.io/decodigo
 *
 * https://codepen.io/decodigo/pen/JjzWwr
 */
/*
 * Modified by JustDeveloper
 * https://justdev.is-a.dev/
 */


Object.prototype.prettyPrint = function(){
    var jsonLine = /^( *)("[\w.()/]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg; // JustDeveloper - added that key names can have "()", "/", and "." (, how it works: i am added "w.()/", this: "w.()" means that key names can have "()" and ".", and that: "w.()/" = can have "()" and "." and "/" )
    var replacer = function(match, pIndent, pKey, pVal, pEnd) {
        var key = '<span class="json-key" style="color: #5fb4ff">',
            val = '<span class="json-value" style="color: #5fff61">',
            str = '<span class="json-string" style="color: #5fffef">',
            r = pIndent || '';
        if (pKey)
            r = r + key + pKey.replace(/[: ]/g, '') + '</span>: ';
        if (pVal)
            r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
        return r + (pEnd || '');
    };

    return JSON.stringify(this, null, 3)
               .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
               .replace(/</g, '&lt;').replace(/>/g, '&gt;')
               .replace(jsonLine, replacer);
}

function rnd() {
    return Math.floor(Math.random() * 500) + 1;
};
const DATA_1 = [
    rnd(), rnd(), rnd(), rnd(), rnd(), rnd(), rnd(), rnd(), rnd()
];
const DATA_2 = DATA_1[0]+DATA_1[1]+DATA_1[2]+DATA_1[3]+DATA_1[4]+DATA_1[5]+DATA_1[6]+DATA_1[7]+DATA_1[8]+6;

var rc = {"Total":DATA_2,".thisRun":{"Code":{"200":DATA_2-DATA_1[8],"301":DATA_1[5]+DATA_1[6],"400":0,"403":6,"404":DATA_1[8],"405":0,"410":0,"429":0,"500":0,"501":0,"503":0}},"Endpoints":{"index":{"(index)":DATA_1[0],".thisRun":{"/v1/":DATA_1[1]}},"/v1/terms":DATA_1[2],"/v1/status":DATA_1[3],"/system/networkInterfaces":1,"/system/consoleSize":2,"/system/uid":3,"/v1/reqCount":DATA_1[4],"/docs":DATA_1[5],"/index.html":DATA_1[6],"/v1/account/welcomeText":DATA_1[7]}};
var s = {"code":200};

const reqCount = document.getElementById('reqCount')
reqCount.innerHTML = rc.prettyPrint();
const status = document.getElementById('status')
status.innerHTML = s.prettyPrint();

function update() {

    reqCount.parentNode.style.height = reqCount.offsetHeight+'px';
    status.parentNode.style.height = status.offsetHeight+'px';
    
};
setTimeout(() => {
    update();
}, 2000);
window.onload = function() {
  setInterval(update, 200);
};

