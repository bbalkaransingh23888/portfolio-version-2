// if (typeof $ == undefined) {
//     console.log("not linked properly")
// }else{
//     console.log("linked properly")
// }

//Welcome section
const $h1 = $('<h1>').addClass('welcomeMessage').text("Welcome to my Portfolio Site!")
const $welcomeDiv = $('<div>').addClass('welcome')
const $profilePic = $('<img>').attr('src', 'urlToIhttps://res.cloudinary.com/lonewolf23/image/upload/v1619376681/IMG_3219_ohaedw.png" alt="my profile picmage').attr('alt', 'my profile pic')

$welcomeDiv.prepend("body")
$h1.append($welcomeDiv)
$profilePic.append($profilePic)



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
