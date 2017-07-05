/* ==========================================================================
   svg-pan-zoom.js
   ========================================================================== */

$(function() {
    var lastEventListener = null;
        var winW = window.innerWidth,
            embedW,
            embedH,
            margin;

    embedW = winW;
    embedH = embedW * 1.06875;

    if (document.all)
        window.attachEvent('onresize', function() { resize(); });
    else
        window.addEventListener('resize', function() { resize(); }, false);

    function resize() {
        resizeTimeout = setTimeout(function() {
            winW = window.innerWidth;
            embedW = winW;
            embedH = embedW * 1.06875;
            removeEmbed();
            lastEmbed = createNewEmbed(lastEmbedSrc);
        }, 500);
    }
            
    function createNewEmbed(src) {

        var embed = document.createElement('embed');
        embed.setAttribute('style', ' background:#fff; width:' + embedW + 'px; height:' + embedH + 'px;');
        embed.setAttribute('type', 'image/svg+xml');
        embed.setAttribute('src', src);

        document.getElementById('imap').appendChild(embed)

        lastEventListener = function() {
            svgPanZoom(embed, {
                zoomEnabled: true,
                controlIconsEnabled: false
            });
        }
        embed.addEventListener('load', lastEventListener)

        return embed
    }

    var lastEmbedSrc = './img/Residense_web_explications-00.svg',
        lastEmbed = createNewEmbed(lastEmbedSrc);

    function removeEmbed() {
        // Destroy svgpanzoom
        svgPanZoom(lastEmbed).destroy()
            // Remove event listener
        lastEmbed.removeEventListener('load', lastEventListener)
            // Null last event listener
        lastEventListener = null
            // Remove embed element
        document.getElementById('imap').removeChild(lastEmbed)
            // Null reference to embed
        lastEmbed = null
         $('.explicat aside a').removeClass('on')
    }

    $('#zoom-in').on('click', function(ev) {
        ev.preventDefault();
        svgPanZoom(lastEmbed).zoomIn();
    });
    $('#zoom-out').on('click', function(ev) {
        ev.preventDefault();
        svgPanZoom(lastEmbed).zoomOut();
    });
    $('#reset').on('click', function(ev) {
        ev.preventDefault();
        svgPanZoom(lastEmbed).resetZoom();
    });

});