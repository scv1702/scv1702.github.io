function fetchPage(name) {
    fetch(name).then(function(response) {
        response.text().then(function(text) {
            document.querySelector('article').innerHTML = text;
        })
    })
}

function toUpperStr(str) {
    var _str = '';
    _str = str.charAt(0).toUpperCase() + str.slice(1);
    return _str;
}

fetch('list').then(function(response) {
    response.text().then(function(text) {
    var items = text.split(',');
    var i = 0;
    var tags = '';
    while(i < items.length) {
        var item = items[i]
        item = item.trim() // 개행문자 제거
        var tag = '<li><a href="#!' + item + '" onclick="fetchPage(\'' + item + '\')">' + toUpperStr(item) + '</a></li>'
        tags = tags + tag;
        i = i + 1;
    }
    document.querySelector('#list').innerHTML = tags;
    })
});

if (location.hash) {
    fetchPage(location.hash.substr(2));
} else if (location.hash) {
    fetchPage('welcome');
}