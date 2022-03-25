function logItem(item) {
    console.log(item);
}

function dowloadVideos() {
    document.querySelectorAll('ytmus-library-row').forEach(function(row, index) {
        logItem(index+1);
        var button = row.querySelector('#download');
        var time = (index + 1) * 700;
        setTimeout(function(){
            button.click();
        }, time);
    });    
}

dowloadVideos();
