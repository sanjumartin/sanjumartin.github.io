# 📧 How to Update Contact Information

All contact information, email addresses, LinkedIn profiles, phone numbers, and personal details are **centralized in one file**: `site-data.js`

## ✨ Quick Update Guide

### To Change Your Email, Phone, or Address:

1. Open the file: **`site-data.js`**
2. Find the `personal:` section (near the top)
3. Edit the values you want to change:

```javascript
personal: {
    name:           "Your Name",
    email:          "youremail@example.com",
    phone:          "+1234567890",
    linkedin:       "https://www.linkedin.com/in/your-profile/",
    address:        "Your City, State, Country",
    // ... other fields
}
```

4. **Save the file** — That's it! ✅

## 🎯 What Gets Auto-Updated

The script automatically updates these across **ALL pages**:

- ✅ All email links (`mailto:` links)
- ✅ All LinkedIn profile links
- ✅ Phone numbers (if provided)
- ✅ Location/Address displays
- ✅ Name displays in headers, sidebars, mobile menus
- ✅ Logo initials
- ✅ Tagline/Job title
- ✅ Personal info table (About page)
- ✅ Contact info blocks (Contact page)
- ✅ Resume download links

## 🔧 Technical Details

### Files Involved:

1. **`site-data.js`** — The master data file (edit this one!)
2. **`assets/js/populate-site-data.js`** — The automation script (no need to edit)

### How It Works:

- When any page loads, the `populate-site-data.js` script reads from `site-data.js`
- It automatically finds and replaces all contact information across the page
- You **never need to manually update HTML files** for contact info changes

### Pages That Use This System:

- ✅ index.html (Home)
- ✅ about.html
- ✅ experience.html
- ✅ skills.html
- ✅ awards.html
- ✅ contact.html

## 🚀 Examples of What You Can Update

### Change Email:
```javascript
email: "newemail@example.com",
```

### Add/Change Phone:
```javascript
phone: "+91 9876543210",
```

### Update LinkedIn:
```javascript
linkedin: "https://www.linkedin.com/in/new-profile/",
```

### Update Address:
```javascript
address: "Mumbai, Maharashtra, India",
```

### Change Name:
```javascript
name: "John Doe",
initials: "JD",
```

### Update Job Title:
```javascript
tagline: "Chief Technology Officer",
```

## ⚠️ Important Notes

- **Only edit `site-data.js`** — Don't edit HTML files for contact info
- Email is case-sensitive (use the exact capitalization you want)
- Changes take effect immediately when you reload the page
- No need to clear cache or do anything special

## 🐛 Troubleshooting

**Changes not showing?**
1. Make sure you saved `site-data.js`
2. Hard refresh the browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Check browser console for any JavaScript errors

**Want to add more data?**
- Add new fields to the `personal:` section in `site-data.js`
- Modify `populate-site-data.js` if you need custom automation

---

**Need Help?** The centralized system makes updates simple — just edit `site-data.js` and you're done! 🎉
