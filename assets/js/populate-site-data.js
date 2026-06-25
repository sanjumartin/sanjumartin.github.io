/**
 * ══════════════════════════════════════════════════════
 *  AUTO-POPULATE SITE DATA
 *  Reads from site-data.js and fills in content across
 *  all pages. Loaded at end of <body> so DOM is ready —
 *  runs synchronously so odometer picks up correct values.
 * ══════════════════════════════════════════════════════
 */

(function () {
    'use strict';

    if (typeof SiteData === 'undefined') {
        console.error('SiteData not found. Make sure site-data.js is loaded before this script.');
        return;
    }

    const data = SiteData.personal;

    // ═══════════════════════════════════════════════
    // 1. STATS / ODOMETER COUNTERS  (index.html only)
    //    Edit SiteData.stats in site-data.js to change
    //    the numbers and labels on the homepage.
    // ═══════════════════════════════════════════════
    var statsRow = document.getElementById('stats-row');
    if (statsRow && SiteData.stats) {
        statsRow.innerHTML = SiteData.stats.map(function (stat, i) {
            return '<div class="col-lg-3 col-md-6 col-6">' +
                '<div class="stat-box tmp-scroll-trigger tmp-fade-in animation-order-' + (i + 1) + '">' +
                '<div class="stat-num"><span class="odometer" data-count="' + stat.number + '">00</span>' + (stat.suffix || '') + '</div>' +
                '<div class="stat-label">' + stat.label + '</div>' +
                '</div></div>';
        }).join('');
    }

    // ═══════════════════════════════════════════════
    // 2. HERO BADGES  (index.html only)
    //    Edit SiteData.heroBadges in site-data.js.
    // ═══════════════════════════════════════════════
    var heroBadgesEl = document.querySelector('.hero-badges');
    if (heroBadgesEl && SiteData.heroBadges) {
        heroBadgesEl.innerHTML = SiteData.heroBadges.map(function (b) {
            return '<span class="hero-badge">' + b + '</span>';
        }).join('');
    }

    // ═══════════════════════════════════════════════
    // 3. HERO TYPING TITLES  (index.html only)
    //    Edit SiteData.heroTitles in site-data.js.
    // ═══════════════════════════════════════════════
    var wordsWrapper = document.querySelector('.cd-words-wrapper');
    if (wordsWrapper && SiteData.heroTitles) {
        wordsWrapper.innerHTML = SiteData.heroTitles.map(function (t, i) {
            return '<b class="' + (i === 0 ? 'is-visible' : 'is-hidden') + ' theme-gradient">' + t + '</b>';
        }).join('');
    }

    // ═══════════════════════════════════════════════
    // 4. HERO SUMMARY PARAGRAPH  (index.html only)
    //    Edit SiteData.personal.summary in site-data.js.
    // ═══════════════════════════════════════════════
    var heroBanner = document.querySelector('.rpp-banner-two-area');
    if (heroBanner && data.summary) {
        var heroDisc = heroBanner.querySelector('.disc');
        if (heroDisc) heroDisc.innerHTML = data.summary;
    }

    // ═══════════════════════════════════════════════
    // 5. SIDEBAR SHORT BIO  (all pages)
    //    Edit SiteData.personal.shortBio in site-data.js.
    // ═══════════════════════════════════════════════
    if (data.shortBio) {
        document.querySelectorAll('.tmp_side_bar .disc').forEach(function (el) {
            el.textContent = data.shortBio;
        });
    }

    // ═══════════════════════════════════════════════
    // 6. SIDEBAR TAGLINE / TITLE  (all pages)
    //    Edit SiteData.personal.tagline in site-data.js.
    // ═══════════════════════════════════════════════
    document.querySelectorAll('.tmp_side_bar .title, .tmp_side_bar h5.title').forEach(function (el) {
        el.textContent = data.tagline;
    });

    // ═══════════════════════════════════════════════
    // 7. NAME DISPLAYS — sidebar & mobile menu header
    // ═══════════════════════════════════════════════
    document.querySelectorAll(
        '.tmp-sidebar-area .top-area > span, .tmp-popup-mobile-menu .header-top > span'
    ).forEach(function (el) {
        el.textContent = data.name;
    });

    // ═══════════════════════════════════════════════
    // 8. LOGO / INITIALS
    // ═══════════════════════════════════════════════
    document.querySelectorAll('.logo span').forEach(function (el) {
        if (el.textContent.trim().length <= 3 || el.textContent.includes('SS')) {
            el.textContent = data.initials;
        }
    });

    // ═══════════════════════════════════════════════
    // 9. ALL EMAIL LINKS  (all pages)
    // ═══════════════════════════════════════════════
    document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
        link.href = 'mailto:' + data.email;
        if (link.textContent.includes('@') || link.classList.contains('number')) {
            link.textContent = data.email;
        }
    });

    // ═══════════════════════════════════════════════
    // 10. ALL LINKEDIN LINKS  (all pages)
    // ═══════════════════════════════════════════════
    document.querySelectorAll('a[href*="linkedin.com"]').forEach(function (link) {
        link.href = data.linkedin;
    });

    // ═══════════════════════════════════════════════
    // 11. PHONE LINKS  (all pages, only if phone set)
    // ═══════════════════════════════════════════════
    if (data.phone) {
        document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
            link.href = 'tel:' + data.phone;
            if (link.classList.contains('number')) {
                link.textContent = data.phone;
            }
        });
    }

    // ═══════════════════════════════════════════════
    // 12. LOCATION / ADDRESS  (all pages)
    // ═══════════════════════════════════════════════
    document.querySelectorAll('.single-contact').forEach(function (contact) {
        var icon = contact.querySelector('i');
        if (icon && icon.classList.contains('fa-location-crosshairs')) {
            var addressSpan = contact.querySelector('.number');
            if (addressSpan) addressSpan.textContent = data.address;
        }
    });

    // ═══════════════════════════════════════════════
    // 13. CONTACT PAGE INFO BLOCKS  (contact.html)
    // ═══════════════════════════════════════════════
    document.querySelectorAll('.contact-info-block').forEach(function (block) {
        var text = block.textContent.toLowerCase();
        if (text.includes('email')) {
            var link = block.querySelector('a[href^="mailto:"]');
            if (link) { link.href = 'mailto:' + data.email; link.textContent = data.email; }
        }
        if (text.includes('location') || text.includes('address')) {
            var para = block.querySelector('p');
            if (para && !para.querySelector('a')) para.textContent = data.address;
        }
        if (text.includes('phone') && data.phone) {
            var tel = block.querySelector('a[href^="tel:"]');
            if (tel) { tel.href = 'tel:' + data.phone; tel.textContent = data.phone; }
        }
    });

    // ═══════════════════════════════════════════════
    // 14. PERSONAL INFO TABLE  (about.html)
    // ═══════════════════════════════════════════════
    document.querySelectorAll('.personal-info-table tr').forEach(function (row) {
        var cells = row.querySelectorAll('td');
        if (cells.length < 2) return;
        var label = cells[0].textContent.trim().toLowerCase();
        var valueCell = cells[1];

        if (label.includes('email')) {
            var el = valueCell.querySelector('a') || valueCell;
            if (el.tagName === 'A') { el.href = 'mailto:' + data.email; el.textContent = data.email; }
            else el.textContent = data.email;
        } else if (label.includes('phone') && data.phone) {
            valueCell.textContent = data.phone;
        } else if (label.includes('address') || label.includes('location')) {
            valueCell.textContent = data.address;
        } else if (label.includes('linkedin')) {
            var el2 = valueCell.querySelector('a') || valueCell;
            if (el2.tagName === 'A') { el2.href = data.linkedin; el2.textContent = data.linkedin.replace('https://www.', ''); }
        } else if (label.includes('dob') || label.includes('birth')) {
            valueCell.textContent = data.dob;
        } else if (label.includes('gender')) {
            valueCell.textContent = data.gender;
        } else if (label.includes('marital')) {
            valueCell.textContent = data.maritalStatus;
        } else if (label.includes('language')) {
            valueCell.textContent = data.languages;
        } else if (label.includes('passport')) {
            valueCell.textContent = data.passport;
        }
    });

    // ═══════════════════════════════════════════════
    // 15. RESUME DOWNLOAD LINKS  (all pages)
    // ═══════════════════════════════════════════════
    document.querySelectorAll('a[download], a[href*="Resume"], a[href*="resume"]').forEach(function (link) {
        if (link.href && link.href.endsWith('.pdf')) {
            link.href = data.resumeFile;
            link.setAttribute('download', data.resumeFile);
        }
    });

    // ═══════════════════════════════════════════════
    // 16. PAGE TITLE  (all pages)
    // ═══════════════════════════════════════════════
    var titleTag = document.querySelector('title');
    if (titleTag && titleTag.textContent.includes('Sanjay Sharma')) {
        titleTag.textContent = titleTag.textContent.replace(/Sanjay Sharma/g, data.name);
    }

    // ═══════════════════════════════════════════════
    // 17. AVAILABILITY BADGE
    // ═══════════════════════════════════════════════
    if (!data.availableForOpportunities) {
        document.querySelectorAll('.availability-badge').forEach(function (badge) {
            badge.style.display = 'none';
        });
    }

    console.log('✓ Site data populated from site-data.js');

})();
