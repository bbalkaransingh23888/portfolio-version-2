// Check if jQuery was linked properly
// if (typeof $ == undefined) {
//     console.log("not linked properly")
// }else{
//     console.log("linked properly")
// }

//Welcome/Intro section
//Welcome/Intro Variables
const $h1 = $('<h1>').addClass('welcomeMessage').text("Welcome to my Portfolio Site!");
const $welcomeDiv = $('<div>').addClass('welcome');
const $profilePic = $('<img>').attr('src', 'https://res.cloudinary.com/lonewolf23/image/upload/v1619376681/IMG_3219_ohaedw.png').attr('alt', 'my profile pic');
const $introP = $('<p>').addClass('intro').text('Hi, my name is Brandon Balkaransingh. I am a Fullstack Software Engineer');

//Dark Mode Function (had to split into two different buttons)
const $darkMode = $('<button>').addClass('darkMode').text('Dark Mode').css('width','40%').css('margin-left','5%').css('margin-right','5%').css('background-color','black').css('color','#dc143c').css('border','2px solid gold').click(function() {
        $lightMode.css('cursor','disabled');
        $('body').css('background-color','black');
        $navMenu.css('background-color','#333333').css('color','black');
        $h1.css('background-color','#333333');
        $("p").css('color','#c0c0c0');
        $resume.css('background-color','#333333');
        $linkedIn.css('background-color','#333333');
        $gitHub.css('background-color','#333333');
        $darkMode.css('background-color','#333333');
        $lightMode.css('background-color','black');
        $("h2").css('background-color','#333333');
        $("li").css('color','#c0c0c0');
        $('.navItem').css('color','#c0c0c0');
        $a.css('color','white').css('transition','background-color .5s, color .5s').hover(function(){
            $(this).css('background-color','#dc143c').css('color','white');
        }, function(){$(this).css("background-color","#333333").css('color','white')});
        $a2.css('color','white').css('transition','background-color .5s, color .5s').hover(function(){
            $(this).css('background-color','#dc143c').css('color','white');
        }, function(){$(this).css("background-color","#333333").css('color','white')});
        $a3.css('color','white').css('transition','background-color .5s, color .5s').hover(function(){
            $(this).css('background-color','#dc143c').css('color','white');
        }, function(){$(this).css("background-color","#333333").css('color','white')});
        $a4.css('color','white').css('transition','background-color .5s, color .5s').hover(function(){
            $(this).css('background-color','#dc143c').css('color','white');
        }, function(){$(this).css("background-color","#333333").css('color','white')});
        $a5.css('color','white').css('transition','background-color .5s, color .5s').hover(function(){
            $(this).css('background-color','#dc143c').css('color','white');
        }, function(){$(this).css("background-color","#333333").css('color','white')});
        $languageMiniDiv.css('color','#c0c0c0');
        $frameworkAndDBsMiniDiv.css('color','#c0c0c0');
        $knowledgeMiniDiv.css('color','#c0c0c0');
        $("h4").css('background-color','#333333');
        $footer.css('background-color','#333333')
});
const $lightMode = $('<button>').addClass('lightMode').text('Light Mode').css('width','40%').css('margin-left','5%').css('margin-right','5%').css('background-color','#333333').css('color','#dc143c').css('border','2px solid gold').click(function() {
        $darkMode.css('cursor','disabled');
        $('body').css('background-color','#c0c0c0');
        $navMenu.css('background-color','black').css('color','#c0c0c0');
        $h1.css('background-color','black');
        $("p").css('color','black')
        $resume.css('background-color','black');
        $linkedIn.css('background-color','black');
        $gitHub.css('background-color','black');
        $darkMode.css('background-color','black');
        $lightMode.css('background-color','#333333');
        $("h2").css('background-color','#c0c0c0');
        $("li").css('color','black');
        $('.navItem').css('color','black');
        $a.css('color','#c0c0c0').css('transition','background-color .5s, color .5s').hover(function(){
            $(this).css('background-color','#dc143c').css('color','white');
        }, function(){$(this).css("background-color","black").css('color','#c0c0c0')});;
        $a2.css('color','#c0c0c0').css('transition','background-color .5s, color .5s').hover(function(){
            $(this).css('background-color','#dc143c').css('color','white');
        }, function(){$(this).css("background-color","black").css('color','#c0c0c0')});;
        $a3.css('color','#c0c0c0').css('transition','background-color .5s, color .5s').hover(function(){
            $(this).css('background-color','#dc143c').css('color','white');
        }, function(){$(this).css("background-color","black").css('color','#c0c0c0')});;
        $a4.css('color','#c0c0c0').css('transition','background-color .5s, color .5s').hover(function(){
            $(this).css('background-color','#dc143c').css('color','white');
        }, function(){$(this).css("background-color","black").css('color','#c0c0c0')});;
        $a5.css('color','#c0c0c0').css('transition','background-color .5s, color .5s').hover(function(){
            $(this).css('background-color','#dc143c').css('color','white');
        }, function(){$(this).css("background-color","black").css('color','#c0c0c0')});;
        $languageMiniDiv.css('color','black');
        $frameworkAndDBsMiniDiv.css('color','black');
        $knowledgeMiniDiv.css('color','black');
        $("h4").css('background-color','black');
        $footer.css('background-color','black');
});

//attaching jQuery created elements to Intro div
$('body').append($welcomeDiv);
$welcomeDiv.append($h1);
$welcomeDiv.append($profilePic);
$welcomeDiv.append($introP);
$welcomeDiv.append($darkMode);
$welcomeDiv.append($lightMode);



//Navigation menu - Hamburger for mobile
//Nav Variables
const $navMenu = $('<nav>').addClass('menu');

//appending elements to navigation div
$('body').append($navMenu);

//Creation of the Hamburger menu
let show = false;
const $hamburger = $('<div>').addClass('hamburger').text('☰').click(function() {
    if (show) {
        $('.navItem').css('display','none');
        show = false;
    } else {
        $('.navItem').css('display','flex');
        show = true;
    }
});
$navMenu.append($hamburger);

//create the list items that will make up the navigation menu
const $a = $('<a>').addClass('navItem').css('display','none').text('About me '); $navMenu.append($a); $a.click(function() {
    if(window.matchMedia('(min-width: 992px)').matches) {
        window.scrollBy(0,400)
    }else if(window.matchMedia('(max-width: 768px)').matches){
        window.scrollBy(0,320)
    }else{
        window.scrollBy(0,360)
    }
}); 
const $a2 = $('<a>').addClass('navItem').css('display','none').text(' Sites '); $navMenu.append($a2); $a2.click(function() {
    if(window.matchMedia('(min-width: 992px)').matches) {
        window.scrollBy(0,600)
    }else if(window.matchMedia('(max-width: 768px)').matches){
        window.scrollBy(0,900)
    }else{
        window.scrollBy(0,650)
    }
});
const $a3 = $('<a>').addClass('navItem').css('display','none').text(' Skills'); $navMenu.append($a3); $a3.click(function() {
    if(window.matchMedia('(min-width: 992px)').matches) {
        window.scrollBy(0,850)
    }else if(window.matchMedia('(max-width: 768px)').matches){
        window.scrollBy(0,1150)
    }else{
        window.scrollBy(0,900)
    }
});
const $a4 = $('<a>').addClass('navItem').css('display','none').text(' Projects '); $navMenu.append($a4); $a4.click(function() {
    if(window.matchMedia('(min-width: 992px)').matches) {
        window.scrollBy(0,1300)
    }else if(window.matchMedia('(max-width: 768px)').matches){
        window.scrollBy(0,2200)
    }else{
        window.scrollBy(0,1300)
    }
});
const $a5 = $('<a>').addClass('navItem').css('display','none').text(' Contact Me '); $navMenu.append($a5); $a5.click(function() {
    if(window.matchMedia('(min-width: 992px)').matches) {
        window.scrollBy(0,2300)
    }else if(window.matchMedia('(max-width: 768px)').matches){
        window.scrollBy(0,5750)
    }else{
        window.scrollBy(0,2500)
    }
});

//About Me Section
//About Me Variables
const $aboutMeDiv = $('<div>').addClass('aboutMe');
const $aboutMeHeading = $('<h2>').text('About Me');
const $aboutMeContent = $('<p>').text('I am a self-starting, fast-learning videogame nerd looking to jumpstart a software engineering career following stints in sales and finance. I am analytical yet creative and a versatile team-player. I am ambitious, hard-working, enjoy acquiring new skills, and possess strong problem solving skills. I strive to be the best version of myself, to be better than my previous self, and derive joy from the sense of accomplishment of completing a task. I am a health-nut who enjoys travelling; sports; nature; and my family, friends, and dog.').css('width','80%').css('margin-left','10%').css('margin-right','10%');
const $resume = $('<button>').text('Resume').click(function(){
    //window.alert('You clicked on my Resume!') // test function
    onclick=window.open('https://drive.google.com/file/d/1i3svmHkR1sZUG3Rcvz4M4eDe8_AtXm1z/view?usp=sharing', '_blank');
});

$aboutMeDiv.css('align-items','center');
$aboutMeHeading.css('font-size','50px').css('color','#dc143c').css('font-family',"'Secular One', sans-serif").css('text-align','center');
$aboutMeContent.css('text-align','center').css('font-size','24px');

//Append About Me elements to HTML file - Created using jQuery
$('body').append($aboutMeDiv);
$aboutMeDiv.append($aboutMeHeading);
$aboutMeDiv.append($aboutMeContent);
$aboutMeDiv.append($resume);

$resume.css('display','inline').css('margin','10%').css('width','80%');


//Sites Section
//Sites Variables
const $sitesDiv = $('<div>').addClass('sites');
const $sitesHeader = $('<h2>').text('Sites');
const $linkedIn = $('<button>').text('LinkedIn').click(function(){
    window.open('https://www.linkedin.com/in/brandon-balkaransingh23/', '_blank');
});
const $gitHub = $('<button>').text('GitHub').click(function(){
    window.open('https://github.com/bbalkaransingh23888', '_blank')
});

$sitesHeader.css('font-size','50px').css('color','#dc143c').css('font-family',"'Secular One', sans-serif").css('text-align','center');

$linkedIn.css('width','40%').css('margin-left','5%').css('margin-right','5%');
$gitHub.css('width','40%').css('margin-left','5%').css('margin-right','5%');

//Append the sites div elements to the site HTML
$('body').append($sitesDiv);
$sitesDiv.append($sitesHeader);
$sitesDiv.append($linkedIn);
$sitesDiv.append($gitHub);

//Skills Section
//Skills Variables
const $skillsDiv = $('<div>').addClass('skills');
const $skillDivContainer = $('<div>').addClass('skills-container');//.css('width','80%');
const $skillsDivHeader = $('<h2>').text('Skills').css('color','#dc143c').css('font-family',"'Secular One', sans-serif").css('text-align','center').css('font-size','50px');
const $languageHeader = $('<h4>').addClass('language-header').text('Languages').css('color','#dc143c').addClass('skillsTitle');
const $frameworkHeader = $('<h4>').addClass('framework-and-databases-header').text('Frameworks and Databases').css('color','#dc143c').addClass('skillsTitle');
const $knowledgeHeader = $('<h4>').addClass('knowledge-header').text('Knowledge').css('color','#dc143c').addClass('skillsTitle');
const $languageMiniDiv = $('<div>').addClass('languages');
const $frameworkAndDBsMiniDiv = $('<div>').addClass('frameworksAndDatabases').css('color','black');
const $knowledgeMiniDiv = $('<div>').addClass('knowledge').css('color','black');
const $languageList = $('<ul>').addClass('language-list').css('color','black');
const $htmlItem = $('<li>').text('HTML ');
const $cssItem = $('<li>').text('CSS ');
const $javaScriptItem = $('<li>').text('JavaScript ');
const $rubyItem = $('<li>').text('Ruby ');
const $pythonItem = $('<li>').text('Python ');
const $frameworkAndDBsList = $('<ul>').addClass('framework-and-database-list');
const $jQueryItem = $('<li>').text('jQuery ');
const $vueItem = $('<li>').text('Vue.js ');
const $nodeItem = $('<li>').text('Node.js ');
const $expressItem = $('<li>').text('Express.js ');
const $mongoDBItem = $('<li>').text('MongoDB ');
const $mongooseItem = $('<li>').text('Mongoose ');
const $mongoAtlasItem = $('<li>').text('Mongo Atlas ');
const $postgreSQLItem = $('<li>').text('PostgreSQL ');
const $rubyOnRailsItem = $('<li>').text('Ruby on Rails ');
const $mySQLItem = $('<li>').text('MySQL ');
const $djangoItem = $('<li>').text('Django ');
const $knowledgeList = $('<ul>').addClass('knowledge-list');
const $oopItem = $('<li>').text('Object Oriented Programming (OOP) ');
const $restAPIItem = $('<li>').text('Rest API Development (Ruby on Rails, Python w/ Django, and ME*N stack) ');
const $algosAndDSItem = $('<li>').text('Algorithms and Data Structures ');
const $gitItem = $('<li>').text('Git ');
const $gitHubItem = $('<li>').text('GitHub ');
const $terminalItem = $('<li>').text('Terminal ');
const $herokuItem = $('<li>').text('Heroku ');
const $frontendDeploymentItem = $('<li>').text('Frontend Deployment (Netlify, Vercel, and GitHub pages)');

//Append all jQuery Elements to the doc
$('body').append($skillsDiv);
$skillsDiv.append($skillDivContainer);
$skillsDiv.prepend($skillsDivHeader);
//Languages Mini Section
$skillDivContainer.append($languageMiniDiv)
$languageMiniDiv.css('display','flex').css('flex-direction','column').css('align-items','center').css('text-align','center').css('margin','0 auto');
$languageMiniDiv.append($languageHeader);
$languageMiniDiv.append($languageList);
$languageList.append($htmlItem);
$languageList.append($cssItem);
$languageList.append($javaScriptItem);
$languageList.append($rubyItem);
$languageList.append($pythonItem);
//Frameworks and Databases Mini Section
$skillDivContainer.append($frameworkAndDBsMiniDiv);
$frameworkAndDBsMiniDiv.css('display','flex').css('flex-direction','column').css('align-items','center').css('text-align','center').css('margin','0 auto');
$frameworkAndDBsMiniDiv.append($frameworkHeader);
$frameworkAndDBsMiniDiv.append($frameworkAndDBsList);
$frameworkAndDBsList.append($jQueryItem);
$frameworkAndDBsList.append($vueItem);
$frameworkAndDBsList.append($nodeItem);
$frameworkAndDBsList.append($expressItem);
$frameworkAndDBsList.append($mongoDBItem);
$frameworkAndDBsList.append($mongooseItem);
$frameworkAndDBsList.append($mongoAtlasItem);
$frameworkAndDBsList.append($postgreSQLItem);
$frameworkAndDBsList.append($rubyOnRailsItem);
$frameworkAndDBsList.append($mySQLItem);
$frameworkAndDBsList.append($djangoItem);
//Knowledge Mini Section
$skillDivContainer.append($knowledgeMiniDiv);
$knowledgeMiniDiv.append($knowledgeHeader);
$knowledgeMiniDiv.css('display','flex').css('flex-direction','column').css('align-items','center').css('text-align','center').css('margin','0 auto');
$knowledgeMiniDiv.append($knowledgeList);
$knowledgeList.append($oopItem);
$knowledgeList.append($restAPIItem);
$knowledgeList.append($algosAndDSItem);
$knowledgeList.append($gitItem);
$knowledgeList.append($gitHubItem);
$knowledgeList.append($terminalItem);
$knowledgeList.append($herokuItem);
$knowledgeList.append($frontendDeploymentItem);




//Project section
//projects variables
const $projectHeader = $('<h2>').text('Projects').css('color','#dc143c').css('font-family',"'Secular One', sans-serif").css('text-align','center');
const $projectSection = $('<div>').addClass('projects-section');
const $projects = $('<div>').addClass('projects');

$projectHeader.css('font-size','50px')

//Append project section to the body, then projects to project section
$('body').append($projectHeader);
$('body').append($projectSection);
$projectSection.append($projects);

const url = 'https://spreadsheets.google.com/feeds/list/1-YSo0tilzPyTV_wXSQqfx_MjTEpFxqZ6dzO3xqVfkAA/od6/public/values?alt=json'
//takes our url and get json data from it
fetch(url)
    // make sure our response is converted to a json format
  .then(response => response.json())
  // take that data and perform following things (lines 10-20ish) on it
  .then(data => {

    //tidying up the json formatted data that comes back
    //turning it into a simple array of objects
    //so when trying to access data of each of your projects,
    //you can simply use project.title, instead of project.gsx$title.$t
    const projects = data.feed.entry.map(entry => {
          // you spit out that data out as tidier array of objects
            return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                url: entry.gsx$url.$t,
                repo: entry.gsx$repo.$t, 
                description: entry.gsx$description.$t,
            }
    })
    //you use the tidied up projects array and pass it into the app function (html generator)
    app(projects);
    })
    // function that generates HTML elements for each of the rows on your google sheet (i.e., each of the elements in your projects array)
  const app = (data) => {
        const createProjectElement = (project) => {
            const $projectDiv2 = $('<div>').addClass('project-box');
            
            const $projectHeader2 = $('<h4>').attr('class', 'project-header').text(project.title).css('text-align','center').css('color','#dc143c').css('background-color','black').css('font-size','32px');
            let headerMedia = function(){
                if(window.matchMedia('(min-width: 992px)').matches){
                    $projectHeader2.css('width','200px').css('text-align','center').css('font-size','25px').css('background-color','#c0c0c0');
                } else if(window.matchMedia('(max-width: 768px)').matches){
                    $projectHeader2.css('text-align','center').css('color','#dc143c').css('background-color','black').css('font-size','32px').css('width','100%');
                }else{
                    $projectHeader2.css('width','192px').css('text-align','center').css('font-size','25px').css('background-color','black');
                }
            };
            headerMedia();
            window.addEventListener('resize',headerMedia,false);

            const $projectImage = $('<img>').attr('src', project.image).addClass('project-images').css('width','80%').css('display','flex').css('margin','5%');
            let imageMedia = function(){
                if(window.matchMedia('(min-width: 992px)').matches){
                    $projectImage.css('height','100px').css('width','250px').css('border','2px solid gold');
                } else if(window.matchMedia('(max-width: 768px)').matches){
                    $projectImage.css('width','80%').css('margin','10%');
                }else{
                    $projectImage.css('width','240px');
                }
            };
            imageMedia();
            window.addEventListener('resize',imageMedia,false);

            const $projectLink = $('<button>').on("click", function() {
                onclick=window.open(project.url, '_blank');
            }).text('Site').addClass('project-link').css('text-align','center').css('font-size','24px').css('color','#dc143c').css('background-color','black').css('border','2px solid gold');
            let siteMedia = function(){
                if(window.matchMedia('(min-width: 992px)').matches){
                    $projectLink.css('text-align','center').css('font-size','18px').css('width','130px').css('margin-left','5%').css('margin-right','5%');
                } else if(window.matchMedia('(max-width: 768px)').matches){
                    $projectLink.css('width','40%').css('text-align','center').css('font-size','24px').css('color','#dc143c').css('background-color','black').css('margin-left','5%').css('margin-right','5%').css('border','2px solid gold');
                }else{
                    $projectLink.css('width','40%').css('margin','10px 5%').css('text-align','center').css('font-size','21px');
                }
            }; 
            siteMedia();
            window.addEventListener('resize',siteMedia,false);

            const $projectRepo = $('<button>').on("click", function() {
                onclick=window.open(project.repo, '_blank');
            }).text('Repo').addClass('project-repo').css('text-align','center').css('font-size','24px').css('color','#dc143c').css('background-color','black').css('border','2px solig gold');
            let repoMedia = function(){
                if(window.matchMedia('(min-width: 992px)').matches){
                    $projectRepo.css('text-align','center').css('font-size','18px').css('width','130px').css('margin-left','5%').css('margin-right','5%');
                } else if(window.matchMedia('(max-width: 768px)').matches){
                    $projectRepo.css('width','40%').css('text-align','center').css('font-size','24px').css('color','#dc143c').css('background-color','black').css('margin-left','5%').css('margin-right','5%').css('border','2px solid gold');
                }else{
                    $projectRepo.css('width','40%').css('margin','10px 5%').css('text-align','center').css('font-size','21px');
                }
            };
            repoMedia();
            window.addEventListener('resize',repoMedia,false);

           const $projectDescription = $('<p>').text(project.description).addClass('project-description').css('font-size','13px').css('color','black');
            let descriptionMedia = function(){
                if(window.matchMedia('(min-width: 992px)').matches){
                    $projectDescription.css('width','250px').css('margin','5%').css('font-size','13px');
                }else if(window.matchMedia('(max-width: 768px)').matches){
                    $projectDescription.css('font-size','18px').css('color','black').css('width','80%').css('margin-left','10%').css('margin','right');
                }else{
                    $projectDescription.css('width','250px').css('margin','5%').css('font-size','16px');
                }
            };
            descriptionMedia();
            window.addEventListener('resize',descriptionMedia,false);
            
            $projectDiv2.append($projectHeader2);
            $projectDiv2.append($projectImage);
            $projectDiv2.append($projectLink);
            $projectDiv2.append($projectRepo);
            $projectDiv2.append($projectDescription);
            $projects.append($projectDiv2);
            
            return $projectDiv2

        }
        data.forEach( project => {
            const $projectDiv3 = createProjectElement(project)
            $('.projects-section').append($projectDiv3)
        })
    }


//Contact Section
const $contactForm = $('<form>').addClass('contactMe');
const $contactHeader = $('<h2>').text('Contact Me');
const $email = $('<p>').text('email: bbalkaransingh2223@gmail.com').css('text-align','center');
const $phone = $('<p>').text('phone: (646)265-4025').css('text-align','center');
const $iframe = $('<iframe>').attr('src', 'https://docs.google.com/forms/d/e/1FAIpQLSee9b-FvwXLN_jM3DMPBGWGj7EtE_ax6LHY5YQx1eAvsb_NAQ/viewform?embedded=true').css('frameboder','0').css('marginheight','0').css('marginwidth','0').text('Loading...');

$contactHeader.css('font-size','50px').css('color','#dc143c').css('font-family',"'Secular One', sans-serif").css('text-align','center');

//Append Contact Section Elements to the HTMl Site
$('body').append($contactForm);
$($contactForm).append($contactHeader);
$($contactForm).append($email);
$($contactForm).append($phone);
$($contactForm).append($iframe);


//Footer
const $footer = $('<footer>');
const $socialMediaP = $('<p>').addClass('footer');
const $linkedinFooterLink = $('<a>').attr('href', 'https://www.linkedin.com/in/brandon-balkaransingh23/').attr('target','_blank').text('LinkedIn');
const $gitHubPortfolioRepo = $('<a>').attr('href','https://github.com/bbalkaransingh23888/portfolio-version-2').attr('target','_blank').text('Repo for this site');
$('body').append($footer);
$footer.append($socialMediaP);
$socialMediaP.append($linkedinFooterLink); 
$socialMediaP.append($gitHubPortfolioRepo);


// CSS jQuery
$('body').css('background-color','#C0C0C0').css('color','black').css('font-family', "'Secular One', sans-serif").css('padding','0').css('margin','0').css('height','0').css('position','relative');
$h1.css('color', '#dc143c').css('font-size', '65px').css('background-color', 'black').css('border', '5px solid gold').css('text-align', 'center').css('font-family', "'Secular One', sans-serif");
$profilePic.css('height', '150px').css('width', '100px').css('display', 'block').css('margin', '0 auto').css('border', '3px solid gold');
$introP.css('text-align', 'center').css('font-size','24px');
$navMenu.css('color','#C0C0C0').css('display','flex').css('flex-direction','column').css('width','100%').css('min-width','320px').css('background-color','black').css('justify-content','space-between').css('margin','10px auto').css('border','2px solid gold');
$a.css('transition','background-color .5s, color .5s').hover(function(){
    $(this).css('background-color','#dc143c').css('color','white');
}, function(){$(this).css("background-color","black").css('color','#c0c0c0')});
$a2.css('transition','background-color .5s, color .5s').hover(function(){
    $(this).css('background-color','#dc143c').css('color','white');
}, function(){$(this).css("background-color","black").css('color','#c0c0c0')});
$a3.css('transition','background-color .5s, color .5s').hover(function(){
    $(this).css('background-color','#dc143c').css('color','white');
}, function(){$(this).css("background-color","black").css('color','#c0c0c0')});
$a4.css('transition','background-color .5s, color .5s').hover(function(){
    $(this).css('background-color','#dc143c').css('color','white');
}, function(){$(this).css("background-color","black").css('color','#c0c0c0')});
$a5.css('transition','background-color .5s, color .5s').hover(function(){
    $(this).css('background-color','#dc143c').css('color','white');
}, function(){$(this).css("background-color","black").css('color','#c0c0c0')});
$hamburger.css('color','gold').css('font-size','24px');

$aboutMeContent.css('color','black');

$resume.css('display', 'inline').css('margin','15px').css('background-color','black').css('border','2px solid gold').css('color','#dc143c').css('text-align','center').css('font-size','24px').css('text-decoration','underline').css('cursor','pointer');
$linkedIn.css('display', 'inline').css('margin','15px').css('background-color','black').css('border','2px solid gold').css('color', '#dc143c').css('font-size','24px').css('text-decoration','underline').css('cursor','pointer');
$gitHub.css('display', 'inline').css('margin','15px').css('background-color','black').css('border','2px solid gold').css('color','#dc143c').css('font-size','24px').css('text-decoration','underline').css('cursor','pointer');
$iframe.css('width','250px').css('height','400px').css('position','relative').css('margin','0 auto').css('display','inline-flex').css('top','200px').css('left','50%').css('-ms-transform','translate(-50%,-50%)').css('transform','translate(-50%,-50%)');
$projectSection.css('display','flex').css('flex-direction','column');

$footer.css('background-color','black').css('border','3px solid gold').css('height', '50px').css('position', 'relative').css('bottom', '0').css('left', '0').css('right','0');
$linkedinFooterLink.css('text-align', 'left').css('color','blue');

//Responsiveness function - Done in vanilla JavaScript for now, 
//but I will refactor this into jQuery at a later point.

let responsive = () => {
    if(window.matchMedia('(min-width: 992px)').matches){
        $('p').css('font-size','12px');
        $skillDivContainer.css('display','flex').css('flex-direction','row').css('justify-content','center');
        $languageMiniDiv.css('display','flex').css('flex-direction','column').css('align-items','center').css('text-align','center').css('margin','0 auto');
        $frameworkAndDBsMiniDiv.css('display','flex').css('flex-direction','column').css('align-items','center').css('text-align','center').css('margin','0 auto');
        $knowledgeMiniDiv.css('display','flex').css('flex-direction','column').css('align-items','center').css('text-align','center').css('margin','0 auto');
        $languageHeader.css('background-color','#c0c0c0');
        $frameworkHeader.css('background-color','#c0c0c0');
        $knowledgeHeader.css('background-color','#c0c0c0');
        $projectSection.css('margin','20px').css('display','flex').css('flex-direction','row').css('flex-wrap','wrap');
    } else if(window.matchMedia('(max-width: 768px)').matches){
        $('p').css('font-size','24px');
        $skillDivContainer.css('display','flex').css('flex-direction','column');
        $languageMiniDiv.css('display','flex').css('flex-direction','column').css('align-items','center').css('text-align','center').css('margin','0 auto');
        $frameworkAndDBsMiniDiv.css('display','flex').css('flex-direction','column').css('align-items','center').css('text-align','center').css('margin','0 auto');
        $knowledgeMiniDiv.css('display','flex').css('flex-direction','column').css('align-items','center').css('text-align','center').css('margin','0 auto');
        $languageHeader.css('background-color','black');
        $frameworkHeader.css('background-color','black');
        $knowledgeHeader.css('background-color','black');
        $projectSection.css('margin-top','5px').css('margin-bottom','5px').css('display','flex').css('flex-direction','column');
    }else{
        $('p').css('font-size','18px');
        $skillDivContainer.css('display','flex').css('flex-direction','row').css('justify-content','center');
        $languageMiniDiv.css('display','flex').css('flex-direction','column').css('align-items','center').css('text-align','center').css('margin','0 auto');
        $frameworkAndDBsMiniDiv.css('display','flex').css('flex-direction','column').css('align-items','center').css('text-align','center').css('margin','0 auto');
        $knowledgeMiniDiv.css('display','flex').css('flex-direction','column').css('align-items','center').css('text-align','center').css('margin','0 auto');
        $languageHeader.css('background-color','black');
        $frameworkHeader.css('background-color','black');
        $knowledgeHeader.css('background-color','black');
        $projectSection.css('margin','20px').css('display','flex').css('flex-direction','row').css('flex-wrap','wrap');
    }
};




responsive();

window.addEventListener('resize',responsive,false);



