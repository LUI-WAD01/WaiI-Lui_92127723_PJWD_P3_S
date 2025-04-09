<script setup>
import {ref} from 'vue';

/* Create reference for String variances. */
var item = ref('');
var newItemB = ref('');

/* Create reference for Array variances. */
var myItemsB = ref([]);

/* Create a non-blocking (it will send multiple requests to a server) function. */
/* This function is use to add new item to the business list (todoTB list) located in the database by user input and via the backend. */
async function addNewItemB() {
  /* If the new item value is null, return. */
  if (newItemB.value == "") { return; }
  /* Try Catch block. */
  try {
  /* Fetch the link from backend, with method POST, in json format, and return the result value in json format as well. */
  const data = await fetch("http://localhost:3000/addItem_b", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"itemsB": newItemB.value})
  });
  /* Set the value back to null. */
  newItemB.value = "";

  /* Set the result to json format. */
  const result = await data.json();
  /* If it response successfully, call function "fetchItemsB". */
  if(result["status"] == "success") {
    fetchItemsB();
  } 
  /* If it is not response successfully, print out the following statement to users. */
  else {
    alert("Adding a new item is not possible");
  }
  }
  /* Closing try block. */
  /* If there is an error, print out the following statement ot users. */
  catch(e) {
    alert("An unknown error has occured.")
  }
}

/* Create a non-blocking (it will send multiple requests to a server) function. */
/* This function is used to delete item from the business list (todoTB list) within the database. */
async function deleteItemB(itemName) {
  /* Print out a confirm statement to users, to confirm if they really want to delete the item. */
  var deleteConfirm = confirm("Do you really want to delete this task?");
  /* Fetch the link from backend, with method DELETE, in json format, and return the result value in json format as well. */
  const data = await fetch("http://localhost:3000/deleteItem_b", {
  method: "DELETE",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({"itemsB": itemName})
  });
  /* Call function "fetchItemsB". */
  fetchItemsB();
}

/* Create a non-blocking (it will send multiple requests to a server) function. */
/* This function is used to update the content of an item within the business list (todoTB list) in the database. */
async function updateItemB(itemName) {
  /* Print out a statement asking user to enter a new item name. */
  var newItemName = prompt("Enter new item name:");
  /* Fetch the link from backend, with method PUT, in json format, and return the result value in json format as well. */
  const data = await fetch("http://localhost:3000/updateItem_b", {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"oldItemName": itemName, "newItemName": newItemName})
  });
  /* Set the result to json format. */
  const result = await data.json();
  /* If it response successfully, call function "fetchItemsB". */
  if (result["status"] == "success") {
    fetchItemsB();
  }
}

/* Create a non-blocking (it will send multiple requests to a server) function. */
/* This function is used to get all the current items of the business list (todoTB list) inside the database. */
async function fetchItemsB() {
  /* Fetch the link from backend. */
  const data = await fetch("http://localhost:3000/getAllItems_b")
  /* Set the result to json format. */
  const result = await data.json();
  /* Set the result as an array. */
  myItemsB.value = result;
}
/* Call function "fetchItemsB". */
fetchItemsB();
</script>

<template>
<div class="listItems">
  <!-- Title for the list. -->
  <h3>My Business To-Do List:</h3>
  <!-- Create a text box for users to input new item to the list with two-way binding. -->
  <p class="addItemBox">Add a new item:
  <input type="text" v-model="newItemB" />
  <!-- When the button is clicked, it will call function "addNewItemB". -->
  <button @click="addNewItemB">Add new item</button>
  </p>

  <!-- Create an unorder list, looping all the items within the current business list (todoTB list) of the database -->
  <!-- and assigning index to each of the items. -->
  <ul v-for="(myItemB, index) in myItemsB" >
    <!-- List out the items, increasing the index number for each of the next item. -->
    <!-- At the back of each item, there will be following a button which will call the "deleteItemB" function for deleting this item, -->
    <!-- as well as a button which will call the "updateItemB" function for updating the content of this item. -->
    <li>
     {{ index+1 }}. &nbsp;&nbsp; <span class="businessText"> {{ myItemB["itemsB"] }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
     <button @click="deleteItemB(myItemB['itemsB'])">Delete</button> <button @click="updateItemB(myItemB['itemsB'])">Update</button> 
    </li>
  </ul>
  <!-- Insert a single line break. -->
  <br />
</div>
</template>

<style scoped>
  /* Styling the title for the list. */
  h3{
    /* Align the text to the center. */
    text-align: center;
    /* Set the font-family to "Times New Roman".*/
    font-family: "Times New Roman";
    /* Set the weight or boldness of the font to 600. */
    font-weight: 600;
    /* Set the font-size to 23 pixel. */
    font-size: 23px;
    /* Set the text color to darkblue. */
    color: darkblue;
    /* Underline the text. */
    text-decoration: underline;
  }

  /* Styling the whole list. */
  div.listItems{
    /* Set the element always stays in the same place even if the page is scrolled. */
    /* Set the left edge position to 150 pixel. */
    /* Set the top edge position to 25 percent. */
    position: fixed; left: 150px; top: 25%;
    /* Align the text to the left. */
    text-align: left;
    /* Set the height of a line box in horizontal writing modes to 2.5 (multiply the element's font size by 2.5 to compute the line height). */
    line-height: 2.5;
    /* Create a vertical scrollbar. */
    overflow-y: scroll;
    /* Set background color to lightblue. */
    background-color: lightblue;
    /* Set the height of the whole element to 70 percent. */
    height: 70%;
    /* Set the width of the whole element to 80 percent. */
    width: 80%;
  }

  /* Styling the input text box for user to input new items to the list. */
  p.addItemBox{
    /* Set the text color to purple. */
    color: purple;
    /* Set padding area to the left of an element to 20 percent. */
    padding-left: 20%;
    /* Set the weight or boldness of the font to bold. */
    font-weight: bold;
  }

  /* Styling the text (items) within the list. */
  .businessText {
    /* Set the text color to blue. */
    color: blue;
  }


/* Styling major break points that swap between different devices: */

/* Create a media query for styling width 0 up until 320 pixels. For Landscape mode. */
@media only screen and (max-width: 320px) and (orientation: landscape) {
  /* Styling the whole list. */
  div.listItems{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 25 percent. */
  position: fixed; left: 10%; top: 25%;
  /* Set the height of the whole element to 70 percent. */
  height: 70%;
  /* Set the width of the whole element to 80 percent. */
  width: 80%;
  }
  /* Styling the input text box for user to input new items to the list. */
  p.addItemBox{
  /* Set padding area to the left of an element to 20 percent. */
  padding-left: 20%;
  }
}

/* Create a media query for styling width 0 up until 320 pixels. For Portrait mode. */
@media only screen and (max-width: 320px) and (orientation: portrait) {
  /* Styling the whole list. */
  div.listItems{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 15 percent. */
  position: fixed; left: 10%; top: 15%;
  /* Set the height of a line box in horizontal writing modes to 2 (multiply the element's font size by 2 to compute the line height). */
  line-height: 2;
  /* Set the height of the whole element to 70 percent. */
  height: 70%;
  /* Set the width of the whole element to 80 percent. */
  width: 80%;
  }
  /* Styling the input text box for user to input new items to the list. */
  p.addItemBox{
  /* Set padding area to the left of an element to 20 percent. */
  padding-left: 20%;
  }
}

/* Create a media query for styling width 321 up until 600 pixels. For Landscape mode. */
@media only screen and (min-width: 321px) and (max-width: 600px) and (orientation: landscape) {
  /* Styling the whole list. */
  div.listItems{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 25 percent. */
  position: fixed; left: 10%; top: 25%;
  /* Set the height of the whole element to 70 percent. */
  height: 70%;
  /* Set the width of the whole element to 80 percent. */
  width: 80%;
  }
  /* Styling the input text box for user to input new items to the list. */
  p.addItemBox{
  /* Set padding area to the left of an element to 20 percent. */
  padding-left: 20%;
  }
}

/* Create a media query for styling width 321 up until 600 pixels. For Portrait mode. */
@media only screen and (min-width: 321px) and (max-width: 600px) and (orientation: portrait) {
  /* Styling the whole list. */
  div.listItems{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 14 percent. */
  position: fixed; left: 10%; top: 14%;
  /* Set the height of a line box in horizontal writing modes to 2 (multiply the element's font size by 2 to compute the line height). */
  line-height: 2;
  /* Set the height of the whole element to 70 percent. */
  height: 70%;
  /* Set the width of the whole element to 80 percent. */
  width: 80%;
  }
  /* Styling the input text box for user to input new items to the list. */
  p.addItemBox{
  /* Set padding area to the left of an element to 20 percent. */
  padding-left: 20%;
  }
}

/* Create a media query for styling width 601 up until 768 pixels. For Landscape mode. */
@media only screen and (min-width: 601px) and (max-width: 768px) and (orientation: landscape) {
  /* Styling the whole list. */
  div.listItems{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 25 percent. */
  position: fixed; left: 10%; top: 25%;
  /* Set the height of the whole element to 70 percent. */
  height: 70%;
  /* Set the width of the whole element to 80 percent. */
  width: 80%;
  }
  /* Styling the input text box for user to input new items to the list. */
  p.addItemBox{
  /* Set padding area to the left of an element to 20 percent. */
  padding-left: 20%;
  }
}

/* Create a media query for styling width 601 up until 768 pixels. For Portrait mode. */
@media only screen and (min-width: 601px) and (max-width: 768px) and (orientation: portrait) {
  /* Styling the whole list. */
  div.listItems{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 15 percent. */
  position: fixed; left: 10%; top: 15%;
  /* Set the height of a line box in horizontal writing modes to 2 (multiply the element's font size by 2 to compute the line height). */
  line-height: 2;
  /* Set the height of the whole element to 70 percent. */
  height: 70%;
  /* Set the width of the whole element to 80 percent. */
  width: 80%;
  }
  /* Styling the input text box for user to input new items to the list. */
  p.addItemBox{
  /* Set padding area to the left of an element to 20 percent. */
  padding-left: 20%;
  }
}

/* Create a media query for styling width 769 up until 992 pixels. For Landscape mode. */
@media only screen and (min-width: 769px) and (max-width: 992px) and (orientation: landscape) {
  /* Styling the whole list. */
  div.listItems{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 24 percent. */
  position: fixed; left: 10%; top: 24%;
  /* Set the height of the whole element to 70 percent. */
  height: 70%;
  /* Set the width of the whole element to 80 percent. */
  width: 80%;
  }
  /* Styling the input text box for user to input new items to the list. */
  p.addItemBox{
  /* Set padding area to the left of an element to 20 percent. */
  padding-left: 20%;
  }
}

/* Create a media query for styling width 769 up until 992 pixels. For Portrait mode. */
@media only screen and (min-width: 769px) and (max-width: 992px) and (orientation: portrait) {
  /* Styling the whole list. */
  div.listItems{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 13 percent. */
  position: fixed; left: 10%; top: 13%;
  /* Set the height of a line box in horizontal writing modes to 2 (multiply the element's font size by 2 to compute the line height). */
  line-height: 2;
  /* Set the height of the whole element to 70 percent. */
  height: 70%;
  /* Set the width of the whole element to 80 percent. */
  width: 80%;
  }
  /* Styling the input text box for user to input new items to the list. */
  p.addItemBox{
  /* Set padding area to the left of an element to 20 percent. */
  padding-left: 20%;
  }
}

/* Create a media query for styling width 993 up until 1200 pixels. For Landscape mode. */
@media only screen and (min-width: 993px) and (max-width: 1200px) and (orientation: landscape) {
  /* Styling the whole list. */
  div.listItems{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 14 percent. */
  position: fixed; left: 10%; top: 14%;
  /* Set the height of the whole element to 70 percent. */
  height: 70%;
  /* Set the width of the whole element to 80 percent. */
  width: 80%;
  }
  /* Styling the input text box for user to input new items to the list. */
  p.addItemBox{
  /* Set padding area to the left of an element to 20 percent. */
  padding-left: 20%;
  }
}

/* Create a media query for styling width 993 up until 1200 pixels. For Portrait mode. */
@media only screen and (min-width: 993px) and (max-width: 1200px) and (orientation: portrait) {
  /* Styling the whole list. */
  div.listItems{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 15 percent. */
  position: fixed; left: 10%; top: 15%;
  /* Set the height of a line box in horizontal writing modes to 2 (multiply the element's font size by 2 to compute the line height). */
  line-height: 2;
  /* Set the height of the whole element to 70 percent. */
  height: 70%;
  /* Set the width of the whole element to 80 percent. */
  width: 80%;
  }
  /* Styling the input text box for user to input new items to the list. */
  p.addItemBox{
  /* Set padding area to the left of an element to 20 percent. */
  padding-left: 20%;
  }
}

/* Create a media query for styling width 1201 or above pixels. For Landscape mode. */
@media only screen and (min-width: 1201px) and (orientation: landscape) {
  /* Styling the whole list. */
  div.listItems{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 19 percent. */
  position: fixed; left: 10%; top: 19%;
  /* Set the height of the whole element to 70 percent. */
  height: 70%;
  /* Set the width of the whole element to 80 percent. */
  width: 80%;
  }
  /* Styling the input text box for user to input new items to the list. */
  p.addItemBox{
  /* Set padding area to the left of an element to 20 percent. */
  padding-left: 20%;
  }
}

/* Create a media query for styling width 1201 or above pixels. For Portrait mode. */
@media only screen and (min-width: 1201px) and (orientation: portrait) {
  /* Styling the whole list. */
  div.listItems{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 15 percent. */
  position: fixed; left: 10%; top: 15%;
  /* Set the height of a line box in horizontal writing modes to 2 (multiply the element's font size by 2 to compute the line height). */
  line-height: 2;
  /* Set the height of the whole element to 70 percent. */
  height: 70%;
  /* Set the width of the whole element to 80 percent. */
  width: 80%;
  }
  /* Styling the input text box for user to input new items to the list. */
  p.addItemBox{
  /* Set padding area to the left of an element to 20 percent. */
  padding-left: 20%;
  }
}
</style>