/**
 * ══════════════════════════════════════════════════════
 *  AUTO-POPULATE SITE DATA
 *  This script reads from site-data.js and fills in
 *  contact info, links, and personal data across all pages.
 * ══════════════════════════════════════════════════════
 */

(function() {
    'use strict';

    // Wait for DOM and SiteData to be ready
    if (typeof SiteData === 'undefined') {
        console.error('SiteData not found. Make sure site-data.js is loaded first.');
        return;
    }

    document.addEventListener('DOMContentLoaded', function() {
        const data = SiteData.personal;

        // ═══════════════════════════════════════════════
        // 1. UPDATE ALL EMAIL LINKS
        // ═══════════════════════════════════════════════
        document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
            // Update href
            link.href = `mailto:${data.email}`;

            // Update text content if it's displaying an email
            if (link.textContent.includes('@') || link.classList.contains('number')) {
                link.textContent = data.email;
            }
        });

        // ═══════════════════════════════════════════════
        // 2. UPDATE ALL LINKEDIN LINKS
        // ═══════════════════════════════════════════════
        document.querySelectorAll('a[href*="linkedin.com"]').forEach(link => {
            link.href = data.linkedin;
        });

        // ═══════════════════════════════════════════════
        // 3. UPDATE PHONE LINKS (if phone exists)
        // ═══════════════════════════════════════════════
        if (data.phone) {
            document.querySelectorAll('a[href^="tel:"]').forEach(link => {
                link.href = `tel:${data.phone}`;
                if (link.classList.contains('number')) {
                    link.textContent = data.phone;
                }
            });
        }

        // ═══════════════════════════════════════════════
        // 4. UPDATE NAME DISPLAYS
        // ═══════════════════════════════════════════════
        // Header/Sidebar/Mobile menu name displays
        document.querySelectorAll('.tmp-sidebar-area .top-area > span, .tmp-popup-mobile-menu .header-top > span').forEach(el => {
            if (el.textContent.trim() === 'Sanjay Sharma' || el.textContent.includes('Sharma')) {
                el.textContent = data.name;
            }
        });

        // ═══════════════════════════════════════════════
        // 5. UPDATE LOGO/INITIALS
        // ═══════════════════════════════════════════════
        document.querySelectorAll('.logo span').forEach(el => {
            if (el.textContent.trim() === 'SS' || el.textContent.trim().length <= 3) {
                el.textContent = data.initials;
            }
        });

        // ═══════════════════════════════════════════════
        // 6. UPDATE TAGLINE/TITLE
        // ═══════════════════════════════════════════════
        document.querySelectorAll('.tmp-sidebar-area .title, h5.title').forEach(el => {
            if (el.textContent.includes('Senior Manager') || el.textContent.includes('Investment Banking')) {
                el.textContent = data.tagline;
            }
        });

        // ═══════════════════════════════════════════════
        // 7. UPDATE LOCATION/ADDRESS
        // ═══════════════════════════════════════════════
        // Find location spans in sidebar
        document.querySelectorAll('.single-contact').forEach(contact => {
            const icon = contact.querySelector('i');
            if (icon && icon.classList.contains('fa-location-crosshairs')) {
                const addressSpan = contact.querySelector('.number');
                if (addressSpan) {
                    addressSpan.textContent = data.address;
                }
            }
        });

        // ═══════════════════════════════════════════════
        // 8. UPDATE CONTACT PAGE SPECIFIC ELEMENTS
        // ═══════════════════════════════════════════════
        // Update contact info blocks
        document.querySelectorAll('.contact-info-block').forEach(block => {
            const text = block.textContent.toLowerCase();

            // Email block
            if (text.includes('email')) {
                const link = block.querySelector('a[href^="mailto:"]');
                if (link) {
                    link.href = `mailto:${data.email}`;
                    link.textContent = data.email;
                }
            }

            // Location block
            if (text.includes('location') || text.includes('address')) {
                const para = block.querySelector('p');
                if (para && !para.querySelector('a')) {
                    para.textContent = data.address;
                }
            }

            // Phone block (if exists)
            if (text.includes('phone') && data.phone) {
                const link = block.querySelector('a[href^="tel:"]');
                if (link) {
                    link.href = `tel:${data.phone}`;
                    link.textContent = data.phone;
                }
            }
        });

        // ═══════════════════════════════════════════════
        // 9. UPDATE PERSONAL INFO TABLE (About Page)
        // ═══════════════════════════════════════════════
        document.querySelectorAll('.personal-info-table tr').forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length >= 2) {
                const label = cells[0].textContent.trim().toLowerCase();
                const valueCell = cells[1];

                switch(true) {
                    case label.includes('email'):
                        const emailLink = valueCell.querySelector('a') || valueCell;
                        if (emailLink.tagName === 'A') {
                            emailLink.href = `mailto:${data.email}`;
                            emailLink.textContent = data.email;
                        } else {
                            emailLink.textContent = data.email;
                        }
                        break;
                    case label.includes('phone') && data.phone:
                        valueCell.textContent = data.phone;
                        break;
                    case label.includes('address') || label.includes('location'):
                        valueCell.textContent = data.address;
                        break;
                    case label.includes('linkedin'):
                        const linkedinLink = valueCell.querySelector('a') || valueCell;
                        if (linkedinLink.tagName === 'A') {
                            linkedinLink.href = data.linkedin;
                            linkedinLink.textContent = data.linkedin.replace('https://www.', '');
                        }
                        break;
                    case label.includes('dob') || label.includes('birth'):
                        valueCell.textContent = data.dob;
                        break;
                    case label.includes('gender'):
                        valueCell.textContent = data.gender;
                        break;
                    case label.includes('marital'):
                        valueCell.textContent = data.maritalStatus;
                        break;
                    case label.includes('language'):
                        valueCell.textContent = data.languages;
                        break;
                    case label.includes('passport'):
                        valueCell.textContent = data.passport;
                        break;
                }
            }
        });

        // ═══════════════════════════════════════════════
        // 10. UPDATE RESUME DOWNLOAD LINKS
        // ═══════════════════════════════════════════════
        document.querySelectorAll('.download-resume-btn, a[href*="resume"], a[href*="Resume"], a[download]').forEach(link => {
            if (link.href && (link.href.includes('.pdf') || link.hasAttribute('download'))) {
                const basePath = link.href.includes('assets/') ? 'assets/resume/' : '';
                link.href = `${basePath}${data.resumeFile}`;
                link.download = data.resumeFile;
            }
        });

        // ═══════════════════════════════════════════════
        // 11. UPDATE META TAGS
        // ═══════════════════════════════════════════════
        // Update page title if it contains the name
        const titleTag = document.querySelector('title');
        if (titleTag && titleTag.textContent.includes('Sanjay Sharma')) {
            titleTag.textContent = titleTag.textContent.replace('Sanjay Sharma', data.name);
        }

        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && metaDesc.content.includes('Sanjay Sharma')) {
            metaDesc.content = metaDesc.content.replace('Sanjay Sharma', data.name);
        }

        // ═══════════════════════════════════════════════
        // 12. UPDATE AVAILABILITY BADGE (if exists)
        // ═══════════════════════════════════════════════
        if (!data.availableForOpportunities) {
            document.querySelectorAll('.availability-badge').forEach(badge => {
                badge.style.display = 'none';
            });
        }

        console.log('✓ Site data populated successfully from site-data.js');
    });

})();
