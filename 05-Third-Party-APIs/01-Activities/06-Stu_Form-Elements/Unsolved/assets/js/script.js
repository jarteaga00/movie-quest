var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

var itemList= []
// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
    event.preventDefault();

    var item = $('#shopping-input').val();
    var shoppingItem = shoppinginput.val();

    if(!shoppingItem) {
        console.log("No item input")
        return;
    }

    shoppingListEl.append('<li>' + '</li>');
    shoppingInput.val('')
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleFormSubmit);
