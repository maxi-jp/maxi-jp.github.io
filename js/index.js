
// Publications section display animation after hover in the section
var publications = document.getElementById("publications");
publications.addEventListener("mouseenter", function () {
    this.style.maxHeight = this.scrollHeight + "px";
});
publications.addEventListener("mouseleave", function () {
    this.style.maxHeight = null;
});

// Education -> Other section display animation after hover in the section
var educationOther = document.querySelector("#educationOther > ul");
educationOther.addEventListener("mouseenter", function () {
    if (window.innerWidth < 769 || window.innerWidth > 1024)
    this.style.maxHeight = this.scrollHeight + "px";
});
educationOther.addEventListener("mouseleave", function () {
    this.style.maxHeight = null;
});

// righ column (Education section) toggle in small screen responsive sections
var rightColumn = document.getElementsByClassName("rightColumn")[0];
document.getElementById("rightColumnButtom").addEventListener("click", function () {
    rightColumn.classList.toggle("active");
});

// mobile menu events
var mobileMenuOptions = {};
mobileMenuOptions.menuExperience = document.getElementById("menuExperience");
mobileMenuOptions.menuSkills = document.getElementById("menuSkills");
mobileMenuOptions.menuEducation = document.getElementById("menuEducation");

var experienceSubMenu = document.getElementById("experienceMenu");
experienceSubMenu.options = {};
experienceSubMenu.options.expSubMenuNow = document.getElementById("expSubMenuNow");
experienceSubMenu.options.expSubMenuPast = document.getElementById("expSubMenuPast");
experienceSubMenu.options.expSubMenuOthers = document.getElementById("expSubMenuOthers");

// page mobile sections
var loader = document.getElementById("loader");
var skillsAndTools = document.getElementsByClassName("column3")[0];
var education = document.getElementsByClassName("rightColumn")[0];
var experience = document.getElementById("experience");
var expNow = [];
expNow.push(document.getElementById("sngular"));
expNow.push(document.getElementById("esne"));
var expPast = [];
expPast.push(document.getElementById("wildbit"));
expPast.push(document.getElementById("digital_jokers"));
var expOthers = document.getElementById("others");

// main menu click events
for (var menuOption in mobileMenuOptions) {
    if (mobileMenuOptions.hasOwnProperty(menuOption)) {
        mobileMenuOptions[menuOption].addEventListener("click", function () {
            // 'deactivate' all the options
            for (var menuOption2 in mobileMenuOptions) {
                if (mobileMenuOptions.hasOwnProperty(menuOption2)) {
                    mobileMenuOptions[menuOption2].classList.remove("active");
                }
            }
            // 'activate' the option selected
            this.classList.add("active");

            switch (this.id) {
                case "menuExperience":
                    experienceSubMenu.classList.add("active");

                    // hide skills&tools & education
                    skillsAndTools.classList.remove("active");
                    education.classList.remove("active");

                    // show experience
                    experience.classList.add("active");
                    break;

                case "menuSkills":
                    experienceSubMenu.classList.remove("active");

                    // hide experience & education
                    education.classList.remove("active");
                    experience.classList.remove("active");

                    // show skills&tools
                    skillsAndTools.classList.add("active");
                    break;

                case "menuEducation":
                    experienceSubMenu.classList.remove("active");

                    // hide experience & skills&tools
                    experience.classList.remove("active");
                    skillsAndTools.classList.remove("active");

                    // show education
                    education.classList.add("active");
                    break;
            }

            // allways hide the loader
            loader.style.display = "none";
        });
    }
}

// experience submenu click events
for (var menuOption in experienceSubMenu.options) {
    if (experienceSubMenu.options.hasOwnProperty(menuOption)) {
        experienceSubMenu.options[menuOption].addEventListener("click", function () {
            // 'deactivate' all the options
            for (var menuOption2 in experienceSubMenu.options) {
                if (experienceSubMenu.options.hasOwnProperty(menuOption2)) {
                    experienceSubMenu.options[menuOption2].classList.remove("active");
                }
            }
            // 'activate' the option selected
            this.classList.add("active");

            // 'activate' the experience block
            experience.classList.add("active");

            switch (this.id) {
                case "expSubMenuNow":
                    // hide 'other' experience
                    expOthers.classList.remove("active");
                    // little fixed in the style
                    expOthers.parentElement.style.marginTop = '12px';

                    // hide 'past' experience
                    expPast.forEach(function (item) {
                        item.classList.remove("active");
                    });

                    // show 'now' experience
                    expNow.forEach(function (item) {
                        item.classList.add("active");
                    });

                    break;

                case "expSubMenuPast":
                    // hide 'other' experience
                    expOthers.classList.remove("active");
                    // little fixed in the style
                    expOthers.parentElement.style.marginTop = '12px';

                    // hide 'now' experience
                    expNow.forEach(function (item) {
                        item.classList.remove("active");
                    });

                    // show 'past' experience
                    expPast.forEach(function (item) {
                        item.classList.add("active");
                    });
                    break;

                case "expSubMenuOthers":
                    // hide 'now' and 'past' experience
                    expNow.forEach(function (item) {
                        item.classList.remove("active");
                    });
                    expPast.forEach(function (item) {
                        item.classList.remove("active");
                    });

                    // show 'other' experience
                    expOthers.classList.add("active");
                    // little fixed in the style
                    expOthers.parentElement.style.marginTop = 0;
                    break;
            }
        });
    }
}

// mobile contact options
var contactButtons = document.querySelectorAll('#contact > p');
for (var i = 0; i < contactButtons.length; i++) {
    contactButtons[i].addEventListener("click", function () {
        this.classList.toggle("active");
    });
}
document.getElementById('languages').addEventListener("click", function () {
    this.classList.toggle("active");
});

var textEmojis = [
    "ლ(ಠ_ಠ ლ)",
    "ಠ_ಠ",
    "¯\\_(ツ)_/¯",
    "(╯°□°)╯︵ ┻━┻ ",
    "ಠ╭╮ಠ",
    "◔_◔",
    "◕ ◡ ◕",
    "◔̯◔",
    "(ﾟヮﾟ)",
    "(｡･_･｡)",
    "ヘ(◕。◕ヘ)",
    "◉_◉",
    "\\(• ◡ •)/",
    "(/◔ ◡ ◔)/",
    "٩(̾●̮̮̃̾•̃̾)۶",
    "( ͡° ͜ʖ ͡°)",
    "ʕ•ᴥ•ʔ",
    "(ง ͠° ͟ل͜ ͡°)ง",
    "༼ つ ◕_◕ ༽つ",
    "﴾͡๏̯͡๏﴿",
    "ლ(ಠ益ಠლ)",
    "(ᵔᴥᵔ)",
    "(/) (°,,°) (/)"
];

document.getElementById("textEmoji").innerText = textEmojis[Math.floor(Math.random() * textEmojis.length)];
