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
    addTo("push");
    } else{
        console.log("emojiInput.value not truthy");
    }
    
    
})

// ------------------------------------Add To -------------------------------------

function addTo(operator){

    
        if(operator == "push"){
            console.log("Pushing value");
            myEmojis.push(emojiInput.value);
        } else if(operator == "unshift"){
            console.log("unshifting value");
            myEmojis.unshift(emojiInput.value);
        }else{
            console.log("Unrecognized operator: ", operator);
        }

        console.log(myEmojis);
        Render();

        // clear input field
        emojiInput.value = "";

    }

    // ------------------------------------ Remove From ----------------------------------

    function removeFrom(operator){
        if(operator == "pop"){
            myEmojis.pop();
        }
        else if(operator == "shift"){
            myEmojis.shift();
        }
        else{
            console.log("Unrecognized operator: ", operator);
        }
        Render();
    }

// -------------------------Add to beginning -------------------------------------
addtoBeginningBtn.addEventListener("click", function(){
    console.log("Add to Beginning button clicked");
    console.log(emojiInput.value);

    // make sure have input
    if(emojiInput.value){
        // add new emoji to array
        addTo("unshift");
        } else{
            console.log("emojiInput.value not truthy");
        }
})

// ------------------------------Remove from End ------------------------------
removefromEndBtn.addEventListener("click", function(){
    console.log("Remove from End button clicked");
    
    // remove from end
    removeFrom("pop");

    
})

// -------------------------------Remove from Beginning ------------------------
removefromBeginningBtn.addEventListener("click", function(){
    console.log("Remove from Beginning button clicked");
    
    // remove from end
    removeFrom("shift");
    
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