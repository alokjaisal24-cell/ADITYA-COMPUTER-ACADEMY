```javascript

/* ==========================================
   MOBILE MENU
========================================== */

function toggleMenu(){

    const menu =
        document.getElementById("mobileMenu");

    if(menu.style.display === "block"){

        menu.style.display = "none";

    }else{

        menu.style.display = "block";

    }

}


/* ==========================================
   HINDI THOUGHT SLIDER
========================================== */

const thoughts = [

    "आज की सीख, कल की सफलता बनती है।",

    "मेहनत का कोई shortcut नहीं होता।",

    "Computer सीखिए और अपने future को digital बनाइए।",

    "छोटे कदम ही बड़ी सफलता की शुरुआत होते हैं।",

    "ज्ञान जितना बाँटेंगे, उतना ही बढ़ेगा।",

    "सीखना कभी बंद मत कीजिए।",

    "Skill ही आज के समय की सबसे बड़ी ताकत है।",

    "आपका आज का प्रयास आपका कल बदल सकता है।"

];


let thoughtIndex = 0;


function changeThought(){

    const element =
        document.getElementById("thoughtText");

    element.style.opacity = "0";


    setTimeout(function(){

        element.innerText =
            "“" + thoughts[thoughtIndex] + "”";

        element.style.opacity = "1";

        thoughtIndex++;

        if(thoughtIndex >= thoughts.length){

            thoughtIndex = 0;

        }

    },300);

}


setInterval(changeThought,3000);


/* ==========================================
   COURSE DATA
========================================== */

const courses = {

    adca:{

        title:
        "ADCA – Advanced Diploma in Computer Applications",

        overview:
        "Complete computer application course जिसमें basic computer से लेकर AI और Web Designing तक practical learning शामिल है।",

        duration:
        "12 Months",

        eligibility:
        "10th Pass",

        subjects:[

            {
                title:"Computer Fundamentals",

                topics:
`Computer Basics
Hardware & Software
Input / Output Devices
CPU
Memory
Windows
File & Folder Management`
            },

            {
                title:"Notepad & WordPad",

                topics:
`Notepad
WordPad
Text Editing
File Saving
Printing`
            },

            {
                title:"MS Paint",

                topics:
`Drawing Tools
Shapes
Colors
Text Tool
Image Saving`
            },

            {
                title:"MS Word",

                topics:
`Document Creation
Text Formatting
Tables
Page Setup
Header & Footer
Mail Merge
Printing`
            },

            {
                title:"MS Excel",

                topics:
`Workbook
Worksheet
Rows & Columns
Formulas
Functions
Charts
Sorting
Filtering
Pivot Table Basics`
            },

            {
                title:"MS PowerPoint",

                topics:
`Slides
Themes
Animations
Transitions
Images
Audio
Presentation`
            },

            {
                title:"Internet & Email",

                topics:
`Internet Basics
Web Browser
Google Search
Email
Attachments
Cyber Safety`
            },

            {
                title:"Hindi & English Typing",

                topics:
`Keyboard Practice
English Typing
Hindi Typing
Accuracy
Typing Speed`
            },

            {
                title:"Tally Prime",

                topics:
`Company Creation
Ledger
Groups
Journal
Payment
Receipt
Purchase
Sales
Reports`
            },

            {
                title:"GST",

                topics:
`GST Basics
CGST
SGST
IGST
GST Ledgers
Purchase GST
Sales GST
GST Reports`
            },

            {
                title:"Inventory",

                topics:
`Stock Group
Stock Category
Stock Item
Godown
Purchase Order
Sales Order
Stock Journal`
            },

            {
                title:"Web Designing",

                topics:
`Website Basics
HTML
CSS
Responsive Design
Web Page Structure`
            },

            {
                title:"Basic JavaScript",

                topics:
`Variables
Data Types
Functions
Events
Conditions
Loops
DOM Basics`
            },

            {
                title:"AI Tools",

                topics:
`AI Basics
Prompt Writing
AI Productivity Tools
Image Generation
Content Creation
Responsible AI`
            }

        ]

    },


    dca:{

        title:
        "DCA – Diploma in Computer Applications",

        overview:
        "Computer applications का practical diploma course.",

        duration:
        "6 Months",

        eligibility:
        "10th Pass",

        subjects:[

            {
                title:"Computer Fundamentals",

                topics:
`Hardware
Software
Operating System
Windows
Files & Folders`
            },

            {
                title:"MS Office",

                topics:
`MS Word
MS Excel
MS PowerPoint`
            },

            {
                title:"Internet",

                topics:
`Internet
Browser
Email
Online Services
Cyber Safety`
            },

            {
                title:"Typing",

                topics:
`English Typing
Hindi Typing
Speed Practice`
            }

        ]

    },


    ccc:{

        title:
        "CCC – Course on Computer Concepts",

        overview:
        "Computer और digital literacy का basic course.",

        duration:
        "3 Months",

        eligibility:
        "8th Pass",

        subjects:[

            {
                title:"Computer Basics",

                topics:
`Computer
Hardware
Software
Operating System`
            },

            {
                title:"Internet",

                topics:
`Internet
Browser
Email
Digital Services`
            },

            {
                title:"Office Basics",

                topics:
`Word
Excel
PowerPoint`
            }

        ]

    },


    tally:{

        title:
        "Tally Prime + GST",

        overview:
        "Accounting, GST, inventory और payroll की practical training.",

        duration:
        "4 Months",

        eligibility:
        "10th Pass",

        subjects:[

            {
                title:"Tally Prime",

                topics:
`Company Creation
Groups
Ledgers
Payment
Receipt
Purchase
Sales
Journal
Reports`
            },

            {
                title:"GST",

                topics:
`GST Setup
CGST
SGST
IGST
Purchase
Sales
GST Reports`
            },

            {
                title:"Inventory",

                topics:
`Stock Group
Stock Item
Godown
Purchase Order
Sales Order
Stock Journal`
            },

            {
                title:"Payroll",

                topics:
`Employee Master
Attendance
Salary Details
Payroll Reports`
            }

        ]

    },


    office:{

        title:
        "MS Office",

        overview:
        "MS Word, Excel और PowerPoint का complete practical course.",

        duration:
        "3 Months",

        eligibility:
        "8th Pass",

        subjects:[

            {
                title:"MS Word",

                topics:
`Formatting
Tables
Page Setup
Mail Merge
Printing`
            },

            {
                title:"MS Excel",

                topics:
`Formulas
Functions
Charts
Sorting
Filtering`
            },

            {
                title:"MS PowerPoint",

                topics:
`Slides
Themes
Animations
Transitions
Presentation`
            }

        ]

    },


    typing:{

        title:
        "Hindi & English Typing",

        overview:
        "Hindi और English typing speed तथा accuracy बढ़ाने का course.",

        duration:
        "3 Months",

        eligibility:
        "8th Pass",

        subjects:[

            {
                title:"English Typing",

                topics:
`Keyboard
Home Row
Typing Practice
Accuracy
Speed`
            },

            {
                title:"Hindi Typing",

                topics:
`Hindi Keyboard
Typing Practice
Accuracy
Speed`
            }

        ]

    },


    ai:{

        title:
        "AI + Web Designing",

        overview:
        "Modern web development और useful AI tools का practical course.",

        duration:
        "6 Months",

        eligibility:
        "10th Pass",

        subjects:[

            {
                title:"HTML",

                topics:
`HTML Structure
Headings
Paragraph
Images
Links
Tables
Forms`
            },

            {
                title:"CSS",

                topics:
`Selectors
Colors
Fonts
Box Model
Flexbox
Responsive Design`
            },

            {
                title:"JavaScript",

                topics:
`Variables
Functions
Conditions
Loops
Events
DOM`
            },

            {
                title:"AI Tools",

                topics:
`AI Basics
Prompt Engineering
AI Content Tools
AI Image Tools
Productivity`
            }

        ]

    }

};


/* ==========================================
   OPEN COURSE
========================================== */

function openCourse(courseName){

    const course =
        courses[courseName];

    if(!course){

        return;

    }


    document.getElementById("courseTitle")
        .innerText = course.title;


    document.getElementById("courseOverview")
        .innerText = course.overview;


    document.getElementById("courseDuration")
        .innerText = course.duration;


    document.getElementById("courseEligibility")
        .innerText = course.eligibility;


    const syllabus =
        document.getElementById("syllabus");


    syllabus.innerHTML = "";


    course.subjects.forEach(function(subject,index){

        const item =
            document.createElement("div");

        item.className =
            "syllabus-item";


        item.innerHTML = `

            <div
                class="syllabus-title"
                onclick="toggleSyllabus(${index})">

                ${index + 1}. ${subject.title}

                <span style="float:right">
                    +
                </span>

            </div>

            <div
                id="syllabus-${index}"
                class="syllabus-content">

                ${subject.topics}

            </div>

        `;


        syllabus.appendChild(item);

    });


    document.getElementById("courseModal")
        .style.display = "block";


    document.body.style.overflow =
        "hidden";

}


/* ==========================================
   CLOSE COURSE
========================================== */

function closeCourse(){

    document.getElementById("courseModal")
        .style.display = "none";


    document.body.style.overflow =
        "auto";

}


/* ==========================================
   SYLLABUS EXPAND / COLLAPSE
========================================== */

function toggleSyllabus(index){

    const element =
        document.getElementById(
            "syllabus-" + index
        );


    element.classList.toggle("active");

}


/* ==========================================
   CLOSE MODAL OUTSIDE
========================================== */

window.onclick = function(event){

    const modal =
        document.getElementById("courseModal");


    if(event.target === modal){

        closeCourse();

    }

};


/* ==========================================
   STUDENT REVIEWS
========================================== */

const reviews = [

    {
        name:"Rahul Kumar",

        course:"ADCA",

        rating:5,

        photo:"",

        text:
        "ADCA course बहुत अच्छा है। सभी topics को practical तरीके से समझाया जाता है।"
    },


    {
        name:"Pooja Singh",

        course:"Tally Prime + GST",

        rating:5,

        photo:"",

        text:
        "Tally और GST को बहुत आसान तरीके से समझाया गया। Practical work बहुत helpful है।"
    },


    {
        name:"Aman Yadav",

        course:"MS Office",

        rating:4,

        photo:"",

        text:
        "Excel और Word की practice मेरे लिए बहुत useful रही।"
    },


    {
        name:"Neha",

        course:"AI + Web Designing",

        rating:5,

        photo:"",

        text:
        "HTML, CSS और AI tools सीखने में काफी मदद मिली।"
    }

];


let reviewIndex = 0;


function showReview(){

    const review =
        reviews[reviewIndex];


    let stars = "";


    for(let i=1;i<=5;i++){

        stars +=
            i <= review.rating
            ? "★"
            : "☆";

    }


    const photo =
        review.photo
        ?
        `<img src="${review.photo}"
              class="review-photo">`
        :
        `<div class="review-photo">
            👨‍🎓
        </div>`;


    document.getElementById("reviewBox")
        .innerHTML = `

        ${photo}

        <div>

            <div class="stars">
                ${stars}
            </div>

            <h3>
                ${review.name}
            </h3>

            <strong>
                ${review.course}
            </strong>

            <p>
                “${review.text}”
            </p>

        </div>

    `;

}


function nextReview(){

    reviewIndex++;

    if(reviewIndex >= reviews.length){

        reviewIndex = 0;

    }

    showReview();

}


function previousReview(){

    reviewIndex--;

    if(reviewIndex < 0){

        reviewIndex =
            reviews.length - 1;

    }

    showReview();

}


showReview();


/* AUTO REVIEW SLIDER */

setInterval(function(){

    nextReview();

},4000);


/* ==========================================
   ADMISSION
========================================== */

function submitAdmission(event){

    event.preventDefault();


    const name =
        document.getElementById(
            "studentName"
        ).value;


    alert(
        "धन्यवाद " +
        name +
        "! आपका admission form submit हो गया है।"
    );


    event.target.reset();

}


/* ==========================================
   SERVICE BUTTON
========================================== */

function showMessage(message){

    alert(
        message +
        " module जल्द ही open होगा।"
    );

}
```
