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
        var key = '<span class="json-key" style="color: brown">',
            val = '<span class="json-value" style="color: navy">',
            str = '<span class="json-string" style="color: olive">',
            r = pIndent || '';
        if (pKey)
            r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
        if (pVal)
            r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
        return r + (pEnd || '');
    };

    return JSON.stringify(this, null, 3)
               .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
               .replace(/</g, '&lt;').replace(/>/g, '&gt;')
               .replace(jsonLine, replacer);
}

var rc = {"Total":148,".thisRun":{"Code":{"200":2,"301":0,"400":0,"403":0,"404":0,"405":0,"410":0,"500":0,"501":0,"503":0}},"Endpoints":{"index":{"(index)":13,".thisRun":{"/v1/":0}},"/v1/terms":18,"/v1/status":12,"/system/networkInterfaces":0,"/system/consoleSize":0,"/system/uid":4,"/v1/reqCount":91,"/docs":8,"/index.html":1,"/v1/account/welcomeText":1}};
var s = [{ name: 'Earth', order: 3, stats: { life: true, mass: 5.9736 * Math.pow(10, 24) } }, { name: 'Saturn', order: 6, stats: { life: null, mass: 568.46 * Math.pow(10, 24) } }];

document.getElementById('reqCount').innerHTML = rc.prettyPrint();
document.getElementById('status').innerHTML = s.prettyPrint();

