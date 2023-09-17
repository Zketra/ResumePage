commandList = "<span class='red'>Command List:</span><br><span class='blue'>help</span>,<br><span class='grey tabspace'>--Show this command list.</span><br> <span class='blue'>about</span>,<br><span class='grey tabspace'>--Get to know me :) </span><br><span class='blue'>languages</span>,<br><span class='grey tabspace'>--See the languages i know.</span>"
functionList = ["help","about","languages","achivements"]

about = "<br>Hi! My name is <span class='blue'>Yusuf Berkan Demirbag</span>. I'm a 18 year old <span class='red'>Self-Tought Developer, Musician and a Actor</span>.<br><br> I started coding when i was 11. I attempted to make my first <span class='red'>Video Game</span> with my friend group using <span class='green'>Unity, Blender and C#</span>. It was a 2D Zelda like adventure game. After 2 years i started to learn <span class='green'>Python</span> and i've been coding on and off with <span class='green'>Python</span> ever-since. <br><br> To know better about me type <span class='blue'>achivements</span>"

languages =`
  <th class='red'>Languages:</th>
      <tr>
        <td>English </td>
        <td>[###################]</td>
      </tr>
      <tr>
        <td>Turkish </td>
        <td>[###################]</td>
      </tr>
      <tr>
        <td>German </td>
        <td>[#############------]</td>
      </tr>
      <th class='red'>Programing Languages:</th>
      <tr>
        <td>Python </td>
        <td>[#################--]</td>
      </tr>
      <tr>
        <td>HTML,CSS </td>
        <td>[###############----]</td>
      </tr>
      <tr>
        <td>Javascript </td>
        <td>[############-------]</td>
      </tr>
      <tr>
        <td>C# </td>
        <td>[#######------------]</td>
      </tr>
      <th class='red'>More:</th>
      <tr>
        <td>Linux </td>
        <td>[##################--]</td>
      </tr>
      <tr>
        <td>Vim </td>
        <td>[###############-----]</td>
      </tr>
`
function createTextspace() {
  
  var terminal = document.getElementById('terminal')           
  commandDiv = document.createElement("div");
    //adds them in the main div
  terminal.appendChild(commandDiv);
    
}
// //find a way to make this work
function inputColor(inp) {
  if (functionList.includes(inp.value)){
    inp.className = '';
    inp.classList.add("blue");
  } else {
    inp.className = '';
    inp.classList.add("red");
  }
}
//  

function execute(ele) {

  if (event.key === 'Enter') {
    userCommand = ele.value;
    ele.value = '';

    // idk what this does
    event.preventDefault();
    // creates a new div for the old command and space
    createTextspace();
    // creates and adds the old command
    const nameGuest = document.createElement("span")
    const commandOutputLine = document.createElement("label");
    nameGuest.classList.add("green")
    commandOutputLine.classList.add("white");
    const sapan = document.createElement('span');
    nameGuest.innerText = "guest"
    commandOutputLine.innerText = "@demirbags.com:~$ ";
    
    sapan.innerText = userCommand;
    // addes the commands in the div
    commandDiv.appendChild(nameGuest);
    commandDiv.appendChild(commandOutputLine);
    commandDiv.appendChild(sapan);
    
    // cleares the input  
    createTextspace();

    switch (userCommand) {
      case "help":
        sapan.classList.add("blue");
        const helpLine = document.createElement('div');
        helpLine.innerHTML = commandList;
        helpLine.classList.add("white")
        commandDiv.appendChild(helpLine)
        break;
      case "about":
        // write an about description
        sapan.classList.add("blue");
        const aboutLine = document.createElement('span');
        aboutLine.innerHTML = about;
        aboutLine.classList.add("white")
        commandDiv.appendChild(aboutLine);
        break;
      case "languages":
        sapan.classList.add("blue");
        const languageLine = document.createElement('table');
        languageLine.innerHTML = languages;
        languageLine.classList.add("white")
        commandDiv.appendChild(languageLine);
        break;
      default:
        sapan.classList.add("red")
        const noCommand = document.createElement('span');
        noCommand.innerText = "No command has found. Please try 'help'.";
        noCommand.classList.add("white")
        commandDiv.appendChild(noCommand);
        break;
      
    }
  }
  window.scrollTo(0, document.body.scrollHeight);
}

