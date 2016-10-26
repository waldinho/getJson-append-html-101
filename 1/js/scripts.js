$.getJSON('http://files.feed.xyz/London/feeds/test.json', function(json) {
    $.each(json, function(i, value) {
        $('#stage-10326').append('<div class="item-10326"><p class="red-10326">' + value.name + '</p><p><img src="' + value.picture + '"/></p><p class="red-10326">' + value.balance + '</p><p class="small-10326">' + value.about + '</p></div>');
    });
});
