commandList = "<span class='red'>Command List:</span><br><span class='blue'>help</span>,<br><span class='grey tabspace'>--Show this command list.</span><br> <span class='blue'>about</span>,<br><span class='grey tabspace'>--Get to know me :) </span><br><span class='blue'>languages</span>,<br><span class='grey tabspace'>--See the languages i know.</span><br><span class='blue'>achivements</span>,<br><span class='grey tabspace'>--See what i acomplished so far.</span><br><span class='blue'>contact</span>,<br><span class='grey tabspace'>--Contact me</span><br>"
functionList = ["help","about","languages","achivements"]

about = "<br>Hi! My name is <span class='blue'>Yusuf Berkan Demirbag</span>. I'm a 18 year old <span class='red'>Self-Tought Developer, Musician and an Actor</span>.<br><br> I started coding when i was 11. I attempted to make my first <span class='red'>Video Game</span> with my friend group using <span class='green'>Unity, Blender and C#</span>. It was a 2D Zelda like adventure game. After 2 years i started to learn <span class='green'>Python</span> and i've been coding on and off with <span class='green'>Python</span> ever-since.I travel alot and i have allready been to <span class='green'>USA, Turkey, Italy, England, Netherlands, Luxemburg and France </span>.I am also a multi-instrumentalist.I can play <span class='green'>Piano, Guitar, Bass and Drums</span>,and i produce my own songs. <br><br> To see what i acomplished so far, type <span class='blue'>achivements</span>"

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
  achivements = `
<br>
<span class='green'>2005</span> <span>Born in Germany, Heppenheim</span><br>
<span class='green'>2007</span> <span>Moved to Turkey, Istanbul</span><br>
<span class='green'>2009</span> <span>Started acting in little roles</span><br>
<span class='green'>2010</span> <span>Played The Sehzade Mustafa on The Magnificent Century</span><br>
<span class='green'>2011</span> <span class='gold'>Won the 2nd place on Bakirkoy Istanbul Chess Tournament</span><br>
<span class='green'>2011</span> <span class='gold'>Won the 48. International Golden Orange Award</span><br>
<span class='green'>2012</span> <span>Played the Main Role on Can</span><br>
<span class='green'>2013</span> <span class='gold'>Won the Kurmaca Best Male Actor Award</span><br>
<span class='green'>2015</span> <span>Played the Mustafa on Eve Donus TV Show</span><br>
<span class='green'>2015</span> <span>Played a role on my School Theatre Club</span><br>
<span class='green'>2016</span> <span class='gold'>Started coding</span><br>
<span class='green'>2017</span> <span>Played a small role on Arif V 216</span><br>
<span class='green'>2023</span> <span>Moved back to Heppenheim, Germany</span><br>
<span class='green'>2023</span> <span>Gratuated Bakirkoy Anatolian High-School</span><br>
<br>
<span>To contact me, type </span><span class='blue'>contact</span><br><br>
`
contact = `
<br>
<span>Email = </span> <a href='mailto:ybdemirbag@gmail.com' target="_blank">ybdemirbag@gmail.com</a><br>
<span>Instagram = </span> <a href='https://www.instagram.com/yusufberkan/'target="_blank">@yusufberkan</a><br>
<span>Youtube = </span> <a href='https://www.youtube.com/@Zketra7'target="_blank">Zketra</a><br>
<span>LinkedIn = </span> <a href='https://www.linkedin.com/in/yusuf-berkan-demirbag-87b9ba231'target="_blank">Yusuf Berkan Demirbag</a><br><br>
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
      case "achivements":
        sapan.classList.add("blue");
        const achivementsLine = document.createElement('div');
        achivementsLine.innerHTML = achivements;
        achivementsLine.classList.add("white");
        commandDiv.appendChild(achivementsLine);
        break;
      case "contact":
        sapan.classList.add("blue");
        const contactLine = document.createElement('div');
        contactLine.innerHTML = contact;
        contactLine.classList.add("white");
        commandDiv.appendChild(contactLine);
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

