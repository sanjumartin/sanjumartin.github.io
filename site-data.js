/**
 * ══════════════════════════════════════════════════════
 *  SANJAY SHARMA — WEBSITE CONTENT FILE
 *  Edit this file to update ANY content on the website.
 *  No HTML knowledge needed. Just edit the text below.
 * ══════════════════════════════════════════════════════
 *
 *  HOW TO ADD A NEW EXPERIENCE ENTRY:
 *  Copy one { ... } block inside SiteData.experience,
 *  paste it at the top (most recent first), and fill in.
 *
 *  HOW TO ADD A NEW AWARD:
 *  Copy one { ... } block inside SiteData.awards and fill in.
 *
 *  Save the file — the website updates automatically.
 * ══════════════════════════════════════════════════════
 */

const SiteData = {

    /* ─── PERSONAL INFO ───────────────────────────────── */
    personal: {
        name:           "Sanjay Sharma",
        initials:       "SS",
        tagline:        "Senior Manager – Investment Banking & Asset Management",
        summary:        "Highly accomplished and results-driven Senior Process Manager with 14+ years of experience in the Investment Banking Service Industry, specialising in Asset Management, Performance Measurement, GIPS Compliance, and Operations Leadership.",
        phone:          "",
        email:          "sanjumartin2014@gmail.com",
        linkedin:       "https://www.linkedin.com/in/sanjay-sharma-5072b68a/",
        address:        "T4-608, RPS Savana, Faridabad-88, Haryana, India",
        dob:            "14 May 1988",
        gender:         "Male",
        maritalStatus:  "Married",
        languages:      "English, Hindi, Maithili, Marwari, Nepali",
        passport:       "Yes",
        resumeFile:     "Sanjay_Sharma_Resume.pdf",
        availableForOpportunities: true,
    },

    /* ─── STATS (numbers on homepage) ────────────────── */
    stats: [
        { number: 14,  suffix: "+", label: "Years of Experience" },
        { number: 4,   suffix: "",  label: "Global Companies"    },
        { number: 6,   suffix: "",  label: "Industry Awards"     },
        { number: 11,  suffix: "+", label: "Team Members Led"    },
    ],

    /* ─── HERO BADGE PILLS ────────────────────────────── */
    heroBadges: [
        "GIPS Compliant",
        "Lean Six Sigma Trained",
        "Team Leadership",
        "Risk Reporting",
    ],

    /* ─── ANIMATED TITLES (hero typing effect) ───────── */
    heroTitles: [
        "Senior Manager",
        "GIPS Specialist",
        "Performance Expert",
        "Operations Leader",
    ],

    /* ─── WORK EXPERIENCE ───────────────────────────────
       To add a new job: copy one block and paste at TOP.
       Fields: period, title, company, location, brief (optional), bullets[]
    ────────────────────────────────────────────────────── */
    experience: [
        {
            period:   "Jan 2023 – Present",
            title:    "Senior Manager – GSD Wealth Investments",
            company:  "Mercer Consulting India Pvt Ltd",
            location: "India",
            brief:    "Extended team of Canada WAS handling Defined Benefits, Defined Contributions & Voluntary Contribution pension funds.",
            bullets: [
                "Analyse performance of investment options and retirement pension plans",
                "Produce quarterly manager commentary for fund/investment strategies",
                "Client communications, reviews, managing ramp-ups & ongoing transitions",
                "Periodical SLA monitoring and discussion with stakeholders",
                "Mentoring and leading a team of analysts across different processes",
                "Lead and manage end-to-end operations ensuring seamless delivery of reports",
            ],
        },
        {
            period:   "July 2015 – Jan 2023",
            title:    "Assistant Manager – Performance, Client Reporting & GIPS",
            company:  "AXA Investment Managers",
            location: "Pune, India",
            brief:    "Led a team performing Performance Calculation, Client Reporting & GIPS process for AXA IM Paris (France).",
            bullets: [
                "Managed a team of 11 members including 5 team leaders",
                "Successfully migrated GIPS & QO activities from AXAIM Paris in 2015 & 2019",
                "Led Lean Project & Green Belt quality & productivity initiatives",
                "Assisted onshore team with PWC annual GIPS audit & internal audit",
                "Accountable on all Service Delivery parameters and performance metrics",
                "Performance Analytics, MIS, Reporting, capacity model and Pulse calls",
            ],
        },
        {
            period:   "Jan 2015 – June 2015",
            title:    "Senior Specialist – Performance Measurement & Attribution",
            company:  "BNP Paribas – IRP",
            location: "Chennai, India",
            brief:    "",
            bullets: [
                "Coordination within Portfolio Management Group to ensure client requests handled efficiently",
                "Calculating net of fees performance and risk statistics quarterly",
                "Evaluating process via SIPOC review every 3 months; capturing loopholes and adding controls",
                "Conducting error analysis meetings — root cause, corrective action & preventive measures",
            ],
        },
        {
            period:   "July 2011 – Dec 2014",
            title:    "Sr. Operation Executive – Global Risk Solutions",
            company:  "BNY Mellon",
            location: "Pune, India",
            brief:    "",
            bullets: [
                "Performance calculation, measurement and attribution (GIPS standard rules)",
                "Responsible for Performance process & training for back office processes from UK (Leeds)",
                "Working on affiliates/portfolios — adding accounts, benchmarks, weights and AUM calculations",
                "Preparing reflex reports and updating commentary accordingly",
                "Working on customised reports per client instructions; maintaining task query logs",
            ],
        },
    ],

    /* ─── EDUCATION ───────────────────────────────────── */
    education: [
        {
            period:      "2008 – 2011",
            degree:      "BBA – Finance (Distinction)",
            institution: "Brihan Maharashtra College of Commerce",
            note:        "Pune University | Distinction Holder with ICCR Scholarship",
        },
    ],

    /* ─── PROFESSIONAL TRAINING ───────────────────────── */
    training: [
        "Lean Six Sigma Blue-Belt Program",
        "Leadership Dimensions Program",
        "Lean Awareness Training",
        "FMEA Analysis",
    ],

    /* ─── TOOLS & PLATFORMS ───────────────────────────── */
    tools: [
        "Stat-Pro Global",
        "Morningstar",
        "Bloomberg",
        "Fact-Set",
        "RFP Tools",
        "Citrix",
    ],

    /* ─── DOMAIN SKILLS (progress bars) ────────────────
       percent: 0–100
    ────────────────────────────────────────────────────── */
    domainSkills: [
        { name: "GIPS Compliance & Quality Office",       percent: 95 },
        { name: "Performance Measurement & Attribution",  percent: 95 },
        { name: "Risk Measurement & Reporting",           percent: 88 },
        { name: "Asset Management & Servicing",           percent: 90 },
        { name: "Client Reporting & SLA Management",      percent: 92 },
    ],

    /* ─── MANAGEMENT SKILLS (progress bars) ──────────── */
    managementSkills: [
        { name: "Team Leadership & People Management",    percent: 93 },
        { name: "Stakeholder Management",                 percent: 90 },
        { name: "Process Improvement (Lean Six Sigma)",   percent: 85 },
        { name: "Project Planning & Execution",           percent: 88 },
        { name: "Business Analytics & MIS",               percent: 87 },
    ],

    /* ─── CORE EXPERTISE TAGS ─────────────────────────── */
    expertiseTags: [
        "GIPS Compliance",
        "Performance Measurement",
        "Attribution Analysis",
        "Risk Reporting",
        "SLA Management",
        "Stakeholder Management",
        "Client Reporting",
        "Lean Six Sigma",
        "UAT & Implementation",
        "Pension Funds",
    ],

    /* ─── AWARDS & RECOGNITION ──────────────────────────
       To add a new award: copy one block and paste at top.
       Fields: year, title, org (organisation / extra note)
    ────────────────────────────────────────────────────── */
    awards: [
        {
            year:  "2013",
            title: "Kaizen Wave Idea Award",
            org:   "Saved 0.75 FTE through process improvement idea",
        },
        {
            year:  "Q2 2016",
            title: "Best Process Lead of the Quarter",
            org:   "AXA Investment Managers",
        },
        {
            year:  "Q3 2017",
            title: "Special Client Recognition Award",
            org:   "AXA Investment Managers",
        },
        {
            year:  "Q2 2018",
            title: "Superstar Award",
            org:   "AXA Investment Managers | One-time Recognition Envelope (Nov 2018)",
        },
        {
            year:  "Q1 2019",
            title: "Superstar Award",
            org:   "AXA Investment Managers | GIPS VDI migration saved 1 FTE",
        },
        {
            year:  "2021",
            title: "Best Associate Manager",
            org:   "AXA Investment Managers",
        },
    ],

};
