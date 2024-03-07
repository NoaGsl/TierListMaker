import { GetAgents } from "./api/api.js";

const agentsArray = await GetAgents();

const searchbars = document.getElementsByClassName("searchbar_input")
const suggestion = document.getElementsByClassName("agent_suggestion")

const searchbar = searchbars[0];

searchbar.addEventListener("input", (event) => {
    searchAgent(event.target.value);
  });

async function searchAgent(input) {
    if(input.length === 0) {
        suggestion[0].innerHTML = '';
        return;
    }
    const filteredAgents = agentsArray.filter(agent => agent.key.toLowerCase().includes(input.toLowerCase()));
    console.log(filteredAgents.map(agent => agent.key));

    suggestion[0].innerHTML = filteredAgents.map(agent => 
        `<div class="agent_list"> \
            <img class="agent_icon" src="${agent.value}" /> \ 
            <p>${agent.key}</p>
        </div>`).join('');
    
}
