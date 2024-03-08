

export function addImage(input) {
    const buttons = document.getElementsByClassName("suggestion_button")

    for(const button of buttons) {
        console.log("button")
        button.addEventListener("mousedown", (event) => {
            console.log("clicked")
            console.log(event.target)
            const image = event.target.querySelector(".agent_icon").src
            input.value = '';
            placeImage(image);
        })
    }
}

function placeImage(image) {
    const store = document.getElementsByClassName("image_store_figure")

    store[0].innerHTML += `<img class="agent_store_icon" src="${image}" alt="agent"/>`
}