const ready = (elem, callback) => {
    let loaded = setInterval(() => {
        if ( document.querySelectorAll(elem).length ) {
            clearInterval(loaded);
            callback();
        }
    }, 100);
}

ready('.footer-widgets', () => {
    const $ = jQuery;

    const makePreviews = links => {
        $(links).each(function(){
            let that = $(this),
                link = that.attr('href');
    
            if ( link.includes('boomer') ) {
                that.addClass('da-previewer')
                    .parent().css('position', 'relative')
                    .end()
                    .after(`
                        <div class="da-preview">
                            <iframe src="${link}" width = "600px" height = "325px" />
                        </div> 
                `);
            }
        });
    }

    if ( $('.sidebar').length ) {
        makePreviews('.entry-content p > a:not(.yt-sub), .entry-content li > a:not(.yt-sub)');
    }
    
    // PAGES WITH NO SIDEBAR
    else {
        makePreviews('.inner-container p > a');
    }
});