const myEmojis = ["🏃", "📔", "🍳"];
const emojiContainerEL = document.getElementById("emojicontainer-el");

// holds emojis and html
let listItems = "";

for(let i=0;i<myEmojis.length; i++){
    console.log(myEmojis[i]);
    listItems += `<span>${myEmojis[i]}</span>`;
}
emojiContainerEL.innerHTML = listItems;