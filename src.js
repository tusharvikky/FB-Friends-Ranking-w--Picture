/*!
 * Facebook Friends Ranking with Picture
 * https://github.com/tusharvikky/FB-Friends-Ranking-w--Picture#fb-friends-ranking-w--picture
 *
 * Released under the MIT license
 *
 * Author: tusharvikky <tusharvikky@gmail.com>
 * Date: 2013-12-20T18:45Z
 */
function creator(o, data, node) {
    var content = document.createElement(node);
    content.cellspacing = "3"
    var cell = document.createTextNode(data);
    content.appendChild(cell);
    o.appendChild(content);
}

function creator2(o, data, node) {
    var content = document.createElement(node);
    content.cellspacing = "1"
    var Image = data
    var cell = document.createElement('img');
    cell.src = data
    content.appendChild(cell);
    o.appendChild(content);
}

function creator3(o, name, uid, node) {
    var link = document.createElement('a');
    var content = document.createElement(node);
    link.cellspacing = "3"
    var cell = document.createTextNode(name);
    link.appendChild(cell);
    url = "https://www.facebook.com/" + uid;
    link.href = url;
    link.setAttribute('target', '_blank');
    content.appendChild(link);
    o.appendChild(content);
}

function displayData(arr) {
    var thead = document.createElement('thead');
    var table = document.createElement('table');
    table.appendChild(thead);
    var row = document.createElement('tr');
    creator(row, 'Photo', 'th');
    creator(row, 'Name', 'th');
    creator(row, 'Type', 'th');
    creator(row, 'Score', 'th');
    thead.appendChild(row);
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        var type = arr[i].type;
        var row = document.createElement('tr');
        creator2(row, arr[i]["photo"], 'td');
        creator3(row, arr[i]["text"], arr[i]["uid"], 'td');
        creator(row, Object.keys(arr[i]["grammar_costs"])[0].slice(0, -1)
            .substring(1), 'td');
        creator(row, arr[i]["grammar_costs"][Object.keys(arr[i]["grammar_costs"])[0]], 'td');
        tbody.appendChild(row);
    }
    document.body.innerHTML = "";
    document.body.appendChild(table);
}
id = requireDynamic("Env").user || requireDynamic("CurrentUserInitialData")["id"];
url = "//www.facebook.com/ajax/typeahead/search/facebar/bootstrap/?viewer=" + id + "&__a=1";
x = new XMLHttpRequest();
x.onreadystatechange = function () {
    if (x.readyState == 4 && x.status == 200) {
        srr = JSON.parse(x.responseText.substring(9))
            .payload.entries;
        displayData(srr);
    }
}
x.open("GET", url, true);
x.send();