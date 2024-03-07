export async function GetAgents() {
    const response = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
    const agents = await response.json();

    var dict = [];

    for (var i = 0; i < agents.data.length; i++) {
        dict.push({
            key : agents.data[i].displayName,
            value : agents.data[i].displayIconSmall
        });
    }

    return dict;
}
