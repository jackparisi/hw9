const inquire = require("inquirer");

inquire
.prompt([
    {
        type: "input",
        message: "What is the name of this project?",
        name: "Q1"
    },
    {
        type: "input",
        message: "What does this project do?",
        name: "Q2",
    },
    {
        type: "input",
        message: "How does this project work?",
        name: "Q3",
    },
    {
        type: "input",
        message: "What technology was used in this project",
        name: "Q4",
    },
    {
        type: "input",
        message: "What can people use this for?",
        name: "Q5"
    },
    {
        type: "input",
        message: "How can this project be improved?",
        name: "Q6"
    }
]).then(res=>{
    const output = `# READme Generator
        * ${res.Q1}
        * ${res.Q2}
        * ${res.Q3}
        * ${res.Q4}
        * ${res.Q5}
        * ${res.Q6}
    `
    writeFile("./READme.md", output, (err)=>{
        if(err){
            console.log(err)
        }
    })
})

// function to write README file


// function to initialize program
function init() {

}

// function call to initialize program
init();
