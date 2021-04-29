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
const $hamburger = $('<div>').addClass('hamburger');

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
$('.hamburger').text('☰').append($ul)
let show = false;
const showMenu = (event) => {
    if (show) {
        $('li').each(function(index) {
            $(this).css('display', 'none')
        })
        show = false
    } else {
        $('li').each(function(index) {
            $(this).css('display', 'flex')
        })
        show = true;
    }
}
$hamburger.on('click', showMenu)


//Project section
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
           const $div11 = $('<div>')
            $div11.append($('<h4>').attr('class', 'project-header').text(project.title))
            $div11.append($('<img>').attr('src', project.image).addClass('project-images'))
            $div11.append($('<button>').on("click", function() {
                onclick=window.open(project.url, '_blank');
            }).text('Site').addClass('project-link'))
            $div11.append($('<button>').on("click", function() {
                onclick=window.open(project.repo, '_blank');
            }).text('Repo').addClass('project-repo'))
            $div11.append($('<p>').text(project.description)).addClass('project-description')
            return $div11
        }
        data.forEach( project => {
            const $projectDiv = createProjectElement(project)
            $('.projects-section').append($projectDiv)
        })
    }


// CSS Variables
$('body').css('background-color','#C0C0C0').css('color','black').css('font-family', "'Secular One', sans-serif");
$h1.css('color', '#dc143c').css('font-size', '65px').css('background-color', 'black').css('border', '5px solid gold').css('text-align', 'center').css('font-family', "'Secular One', sans-serif");
$profilePic.css('height', '150px').css('width', '100px').css('display', 'block').css('margin', '0 auto').css('border', '3px solid gold');
$introP.css('text-align', 'center');


//CSS Dark Mode Function