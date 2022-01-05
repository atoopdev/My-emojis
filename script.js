const myEmojis = ["🏃", "📔", "🍳"];
let emojiContainerEL = document.getElementById("emojicontainer-el");
const emojiInput = document.getElementById("emoji-input");
const addtoEndBtn = document.getElementById("push-btn");
const addtoBeginningBtn = document.getElementById("unshift-btn");
const removefromEndBtn = document.getElementById("pop-btn");
const removefromBeginningBtn = document.getElementById("shift-btn");

// holds emojis and html
let listItems = "";

Render();

// ------------------------- Add to End ----------------------------------------
addtoEndBtn.addEventListener("click", function(){
    console.log("Add to End button clicked");
    console.log(emojiInput.value);

    // make sure have input
    if(emojiInput.value){
    // add new emoji to array
    myEmojis.push(emojiInput.value);

    // verify added
    console.log(myEmojis);
    Render();
    } else{
        console.log("emojiInput.value not truthy");
    }
    // clear input field
    emojiInput.value = "";
    
})

// -------------------------Add to beginning -------------------------------------
addtoBeginningBtn.addEventListener("click", function(){
    console.log("Add to Beginning button clicked");
    console.log(emojiInput.value);

    // make sure have input
    if(emojiInput.value){
    // add new emoji to array
    myEmojis.unshift(emojiInput.value);

    // verify added
    console.log(myEmojis);
    Render();
    } else{
        console.log("emojiInput.value not truthy");
    }
    // clear input field
    emojiInput.value = "";
})

// ------------------------------Remove from End ------------------------------
removefromEndBtn.addEventListener("click", function(){
    console.log("Remove from End button clicked");
    
    // remove from end
    myEmojis.pop();

    
    Render();
    
})

// -------------------------------Remove from Beginning ------------------------
removefromBeginningBtn.addEventListener("click", function(){
    console.log("Remove from Beginning button clicked");
    
    // remove from end
    myEmojis.shift();

    
    Render();
})

// ------------------------------Render --------------------------------------

function Render(){
    // clear previous versions of render
    listItems="";
for(let i=0;i<myEmojis.length; i++){
    console.log(myEmojis[i]);
    listItems += `<span>${myEmojis[i]}</span>`;
}
emojiContainerEL.innerHTML = listItems;
}