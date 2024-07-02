function showSkill(skill) {
    const body = document.body
    const parameter = skill
    const boxContent = document.querySelector('.skill-modal')

    let divContent
    let content

    
    if (boxContent.classList.contains('skill-modal-hidden')) {
        body.classList.add("dark-background")
        boxContent.classList.remove('skill-modal-hidden')
    }

    validateParameter()
    showContent()

    function validateParameter() {
        if (parameter == 'html') {
            content = 'HTML is a markup language used to create web pages. Which tags are used to structure the content.'
        }
        else if (parameter == 'css') {
            content = 'CSS is a language used to style the presentation of web pages by defining the design, layout, and visual appearance of HTML elements.'
        }
        else if (parameter == 'js') {
            content = 'JavaScript is a programming language, widely used to create interactivity on web pages, allowing dynamic manipulation of content and behavior of page elements.'
        }
        else if (parameter == 'tailwind') {
            content = 'Tailwind CSS is a utility CSS framework that allows you to build web interfaces efficiently using predefined classes for styling.'
        }
        else if (parameter == 'sass') {
            content = 'Sass is a styling language (CSS preprocessor) that extends the CSS syntax, allowing the use of functions and nesting to make it easier to write and organize CSS code.'
        }
        else if (parameter == 'photoshop') {
            content = 'Photoshop is an image editing software widely used for manipulating, retouching and creating graphics, photos and designs, with various editing tools.'
        }
        else if (parameter == 'figma') {
            content = 'Figma is a design tool that allows real-time creation and collaboration of user interface prototypes.'
        }
        else if (parameter == 'git') {
            content = 'Git is a version control system that records changes to files, making it easier to manage the history of a software project.'
        }
        else if (parameter == 'react') {
            content = 'React is a JavaScript library for building user interfaces. It is based on reusable components and uses a Virtual DOM to optimize UI updates, making it popular in dynamic web applications.'
        }
        else if (parameter == 'vue') {
            content = 'Vue.js is a JavaScript framework for building user interfaces. It is known for its simplicity and flexibility, allowing the creation of reactive components and being easy to integrate into existing projects.'
        }
    }

    function showContent() {
        divContent = `
            <img class="skill-modal-close" src="img/skills/fechar.svg" alt="Btn close modal">
            <p class="skill-modal-text">${content}</p>
        `

        boxContent.innerHTML = divContent

        closeSkill()
    }

    function closeSkill() {
        const btnClose = document.querySelector('.skill-modal-close')

        btnClose.addEventListener('click', hidden)

        function hidden() {
            boxContent.classList.add('skill-modal-hidden')
            body.classList.remove('dark-background')
        }
    }
}