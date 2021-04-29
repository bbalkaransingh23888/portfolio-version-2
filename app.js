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

//attaching jQuery created elements to Intro div
$('body').append($welcomeDiv);
$($welcomeDiv).append($h1);
$($welcomeDiv).append($profilePic);
$($welcomeDiv).append($introP);


//Navigation menu - Hamburger for mobile
//Nav Variables
const $navDiv = $('<div>').addClass('menu');
const $ul = $('<ul>');
// const $hamburger = $('<div>').addClass('hamburger');

//appending elements to navigation div
$('body').append($navDiv);
$($navDiv).append($ul);

//create the list items that will make up the navigation menu
const $li = $('<li>'); $li.text('About me '); $ul.append($li); $li.click(function() {
    window.scrollBy(0,480)
}); 
const $li2 = $('<li>'); $li2.text(' Sites '); $ul.append($li2); $li2.click(function() {
    window.scrollBy(0,1111)
});
const $li3 = $('<li>'); $li3.text(' Skills'); $ul.append($li3); $li3.click(function() {
    window.scrollBy(0,1888)
});
const $li4 = $('<li>'); $li4.text(' Projects '); $ul.append($li4); $li4.click(function() {
    window.scrollBy(0,2388)
});
const $li5 = $('<li>'); $li5.text(' Contact Me '); $ul.append($li5); $li5.click(function() {
    window.scrollBy(0,5100)
});

//Creation of the Hamburger menu
// $('.hamburger')
// let show = false;
// const showMenu = (event) => {
//     if (show) {
//         $('li').each(function(index) {
//             $(this).css('display', 'none')
//         })
//         show = false
//     } else {
//         $('li').each(function(index) {
//             $(this).css('display', 'flex')
//         })
//         show = true;
//     }
// }
// $hamburger.on('click', showMenu)

//About Me Section
//About Me Variables
const $aboutMeDiv = $('<div>').addClass('aboutMe');
const $aboutMeHeading = $('<h2>').text('About Me');
const $aboutMeContent = $('<p>').text('I am a self-starting, fast-learning videogame nerd looking to jumpstart a software engineering career following stints in sales and finance. I am analytical yet creative and a versatile team-player. I am ambitious, hard-working, enjoy acquiring new skills, and possess strong problem solving skills. I strive to be the best version of myself, to be better than my previous self, and derive joy from the sense of accomplishment of completing a task. I am a health-nut who enjoys travelling; sports; nature; and my family, friends, and dog.');
const $resume = $('<button>').text('Resume').click(function(){
    window.alert('You clicked on my Resume!')
    onclick=window.open('https://drive.google.com/file/d/1vWg65iWrUhfqduGKU9OnHacWUcYKBj-A/view?usp=sharing', '_blank');
});

$aboutMeHeading.css('font-size','50px').css('color','#dc143c').css('font-family',"'Secular One', sans-serif").css('text-align','center');
$aboutMeContent.css('text-align','center').css('font-size','24px');

//Append About Me elements to HTML file - Created using jQuery
$('body').append($aboutMeDiv);
$aboutMeDiv.append($aboutMeHeading);
$aboutMeDiv.append($aboutMeContent);
$aboutMeDiv.append($resume);


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

//Append the sites div elements to the site HTML
$('body').append($sitesDiv);
$sitesDiv.append($sitesHeader);
$sitesDiv.append($linkedIn);
$sitesDiv.append($gitHub);

//Skills Section
//Skills Variables
const $skillsDiv = $('<div>').addClass('skills');
const $languageHeader = $('<h4>').addClass('language-header').text('Languages');



//Project section
//projects variables
const $projectHeader = $('<h2>').text('Projects').css('color','#dc143c').css('font-family',"'Secular One', sans-serif").css('text-align','center');
const $projectSection = $('<div>').addClass('projects-section');
const $projects = $('<div>').addClass('projects');

$projectHeader.css('font-size','50px')

//Append project section to the body, then projects to project section
$('body').append($projectSection);
$projectSection.append($projectHeader);
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
          // you spit ouit that data out as tidier array of objects
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
            const $projectDiv2 = $('<div>');
            const $projectHeader2 = $('<h4>').attr('class', 'project-header').text(project.title).css('text-align','center').css('color','#dc143c').css('background-color','black').css('font-size','32px');
            const $projectImage = $('<img>').attr('src', project.image).addClass('project-images').css('width','80%').css('display','flex').css('margin','5%');
            const $projectLink = $('<button>').on("click", function() {
                onclick=window.open(project.url, '_blank');
            }).text('Site').addClass('project-link').css('text-align','center').css('font-size','24px').css('color','#dc143c').css('margin-left','20px').css('margin-right','20px'); 
            const $projectRepo = $('<button>').on("click", function() {
                onclick=window.open(project.repo, '_blank');
            }).text('Repo').addClass('project-repo').css('text-align','center').css('font-size','24px').css('color','#dc143c').css('margin-left','20px').css('margin-right','20px');
            const $projectDescription = $('<p>').text(project.description).addClass('project-description').css('font-size','13px').css('color','black');
            
            $projectDiv2.append($projectHeader2);
            $projectDiv2.append($projectImage);
            $projectDiv2.append($projectLink);
            $projectDiv2.append($projectRepo);
            $projectDiv2.append($projectDescription);
            
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
const $email = $('<p>').text('email: bbalkaransingh2223@gmail.com');
const $phone = $('<p>').text('phone: (646)265-4025');
const $iframe = $('<iframe>').attr('src', 'https://docs.google.com/forms/d/e/1FAIpQLSee9b-FvwXLN_jM3DMPBGWGj7EtE_ax6LHY5YQx1eAvsb_NAQ/viewform?embedded=true').css('frameboder','0').css('marginheight','0').css('marginwidth','0').text('Loading...');

$contactHeader.css('font-size','50px').css('color','#dc143c').css('font-family',"'Secular One', sans-serif").css('text-align','center');

//Append Contact Section Elements to the HTMl Site
$('body').append($contactForm);
$($contactForm).append($contactHeader);
$($contactForm).append($email);
$($contactForm).append($phone);
$($contactForm).append($iframe);


//Footer
const $footer = $('<footer>').addClass('footer');
const $socialMediaP = $('<p>');
const $linkedinFooterLink = $('<a>').attr('href', 'https://www.linkedin.com/in/brandon-balkaransingh23/').attr('target','_blank');
//const $linkedinFooterSymbol = $('<i>').addClass('fab fa-linkedin');
$('body').append($footer);
$footer.append($socialMediaP);
$socialMediaP.append($linkedinFooterLink); //.append($linkedinFooterSymbol);



// CSS Variables
$('body').css('background-color','#C0C0C0').css('color','black').css('font-family', "'Secular One', sans-serif").css('padding','0').css('margin','0').css('height','0').css('position','relative');
$h1.css('color', '#dc143c').css('font-size', '65px').css('background-color', 'black').css('border', '5px solid gold').css('text-align', 'center').css('font-family', "'Secular One', sans-serif");
$profilePic.css('height', '150px').css('width', '100px').css('display', 'block').css('margin', '0 auto').css('border', '3px solid gold');
$introP.css('text-align', 'center');
$navDiv.css('text-align','right').css('color','#C0C0C0').css('display','flex').css('width','100%').css('min-width','320px').css('background-color','black').css('justify-content','space-between').css('margin','10px auto').css('border','2px solid gold');
$ul.css('font-size','smaller').css('align-content','center').css('margin','10px');
$li.css('transition','background-color .5s, color .5s').hover(function(){
    $(this).css('background-color','#dc143c').css('color','white');
});
$li2.css('transition','background-color .5s, color .5s').hover(function(){
    $(this).css('background-color','#dc143c').css('color','white');
});
$li3.css('transition','background-color .5s, color .5s').hover(function(){
    $(this).css('background-color','#dc143c').css('color','white');
});
$li4.css('transition','background-color .5s, color .5s').hover(function(){
    $(this).css('background-color','#dc143c').css('color','white');
});
$li5.css('transition','background-color .5s, color .5s').hover(function(){
    $(this).css('background-color','#dc143c').css('color','white');
});
$resume.css('display', 'inline').css('margin','15px').css('background-color','black').css('border','2px solid gold').css('color','#dc143c').css('text-align','center');
$linkedIn.css('display', 'inline').css('margin','15px').css('background-color','black').css('border','2px solid gold').css('color', '#dc143c');
$gitHub.css('display', 'inline').css('margin','15px').css('background-color','black').css('border','2px solid gold').css('color','#dc143c');
$iframe.css('width','250px').css('height','400px').css('position','relative').css('margin','0 auto').css('display','inline-flex').css('top','200px').css('left','50%').css('-ms-transform','translate(-50%,-50%)').css('transform','translate(-50%,-50%)');
$projectSection.css('display','flex').css('flex-direction','column');

$footer.css('background-color','black').css('border','3px solid gold').css('height', '50px').css('position', 'relative').css('bottom', '0').css('left', '0').css('right','0');
$linkedinFooterLink.css('text-align', 'left').css('color','blue');

//CSS Dark Mode Function