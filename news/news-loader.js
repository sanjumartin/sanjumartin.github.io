/**
 * NEWS LOADER
 * Reads news/manifest.js (already on page as NewsManifest),
 * fetches each .md file, parses frontmatter, then calls back
 * with sorted array of news items.
 *
 * Usage:
 *   loadNews(function(items) { ... });  // items sorted newest first
 *   loadNews(function(items) { ... }, 5);  // limit to 5
 */

var TAG_COLORS = {
    'Certification': '#3EB489',
    'Conference':    '#4A90D9',
    'Achievement':   '#E67E22',
    'Update':        '#9B59B6',
};

var TAG_CLASSES = {
    'Certification': 'tag-certification',
    'Conference':    'tag-conference',
    'Achievement':   'tag-achievement',
    'Update':        'tag-update',
};

function parseNewsMd(text, slug) {
    var match = text.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n([\s\S]*)/);
    if (!match) return null;
    var item = { slug: slug, description: match[2].trim() };
    match[1].split('\n').forEach(function (line) {
        var kv = line.match(/^(\w+):\s*(.+)/);
        if (kv) item[kv[1].trim()] = kv[2].trim();
    });
    return (item.date && item.title) ? item : null;
}

function loadNews(callback, limit) {
    if (typeof NewsManifest === 'undefined' || !NewsManifest.length) {
        callback([]);
        return;
    }
    var basePath = 'news/';
    Promise.all(
        NewsManifest.map(function (slug) {
            return fetch(basePath + slug + '.md')
                .then(function (r) { return r.ok ? r.text() : null; })
                .then(function (text) { return text ? parseNewsMd(text, slug) : null; })
                .catch(function () { return null; });
        })
    ).then(function (items) {
        items = items.filter(Boolean);
        items.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
        if (limit) items = items.slice(0, limit);
        callback(items);
    });
}

var MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var MONTHS_LONG  = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function splitDate(isoDate) {
    var p = isoDate.split('-');
    return { year: p[0], month: parseInt(p[1], 10), day: parseInt(p[2], 10) };
}

function pad2(n) { return n < 10 ? '0' + n : '' + n; }

function formatNewsDate(isoDate) {
    var d = splitDate(isoDate);
    return d.day + ' ' + MONTHS_SHORT[d.month - 1] + ' ' + d.year;
}

function newsDay(isoDate) {
    return pad2(splitDate(isoDate).day);
}

function newsMonthYear(isoDate) {
    var d = splitDate(isoDate);
    return MONTHS_SHORT[d.month - 1] + ' ' + d.year;
}
