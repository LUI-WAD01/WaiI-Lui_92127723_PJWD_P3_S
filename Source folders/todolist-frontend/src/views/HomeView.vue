<script setup>
import {ref} from 'vue';

/* Create reference for String variances. */
var list = ref('');
var resultList = ref('');
var resultTable = ref('');

/* This function is use for testing. */
/*async function testCase() {*/
  /* Print out this message to users when clicking on the testing button. */
  /*alert("This is a test.")*/
/*}*/

/* Create a non-blocking (it will send multiple requests to a server) function. */
/* This function is used to check if the user input match any of the items in any of the lists within the database or not. */
/* If so, output the name of the list. */
async function showList() {
  /* "await" keyword means to pause its execution and wait for a Promise to resolve before continuing. */
  /* Fetch the link from the backend with the list value adding to the end. */
  const data = await fetch("http://localhost:3000/list/" + list.value);
  /* Set the result to json format. */
  const result = await data.json();
  /* Set the value of a reference variable equals to the result of field "whichlist". */
  resultTable.value = result["whichlist"];
  /* If the result value equals to the value within "todoT List" in the database, then the result value becomes String "Personal List". */
  if(resultTable.value == "todoT List"){
    resultList.value = "Personal List";
  }
  /* If the result value equals to the value within "todoTB List" in the database, then the result value becomes String "Business List". */
  else if(resultTable.value == "todoTB List"){
    resultList.value = "Business List";
  }
  /* If the result value equals to the value within both the "todoT List" and "todoTB List" in the database, */
  /* then the result value becomes String "Both Personal List and Business List". */
  else if(resultTable.value == "todoT List and todoTB List"){
    resultList.value = "Both Personal List and Business List";
  }
  /* If the result value equals to none of the above cases, then the result value becomes String "Not in List". */
  else{
    resultList.value = "Not in List";
  }
}
</script>

<template>
<!-- Statement describing and guiding users to use the function below. -->
<h2>Enter the item you are looking for:</h2>
<div>
  <!-- v-model can be used on a component to implement a two-way binding. -->
  <!-- Create a user input text box with two-way binding. -->
  <input type="text" v-model="list">
  <!-- non-breaking space. -->
  &nbsp;
  <!-- Create a"Which List data" button for users to click, when clicked on it, it will call function "showList". -->
  <button @click="showList">Which List data</button>
  <!-- Insert a single line break. -->
  <br />
  <!-- Return the result (Name of the list(s) or "Not in list") to users for their requests. -->
  It is in List: &nbsp;&nbsp; <span>{{resultList}}</span> 
</div>
</template>

<style scoped>
/* Guiding statement style. */
h2{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 460 pixel. */
  /* Set the top edge position to 130 pixel. */
  position: fixed; left: 460px; top: 130px;
  /* Set font-family to "Tahoma". */
  font-family: Tahoma, sans-serif;
  /* Set text color to white. */
  color: white;
  /* Set font-size to 16 pixel. */
  font-size: 16px;
  /* Underline the text. */
  text-decoration: underline;
  /* Set background color. */
  background-color: #FFA53F;
  /* Set padding area to the left of an element to 10 pixel. */
  padding-left: 10px;
  /* Set padding area on the top of an element to 3 pixel. */
  padding-top: 3px;
  /* Set padding area on the bottom of an element to 3 pixel. */
  padding-bottom: 3px;
  /* Set the width of an element to 41.5%. */
  width: 41.5%;
}

/* Styling the area containing the text box, button and result. */
div{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 460 pixel. */
  /* Set the top edge position to 160 pixel. */
  position: fixed; left: 460px; top: 160px;
  /* Set the height of a line box in horizontal writing modes to 2.5 (multiply the element's font size by 2.5 to compute the line height). */
  line-height: 2.5;
  /* Set the font-size to 20 pixel. */
  font-size: 20px;
  /* Set the background color to lightyellow. */
  background-color: lightyellow;
  /* Set the width of an element to 41.5%. */
  width: 41.5%;
  /* Set padding area on the bottom of an element to 30 pixel. */
  padding-bottom: 30px;
  /* Set padding area to the left of an element to 10 pixel. */
  padding-left: 10px;
}

/* Styling the return result (Name of the list(s) or "Not in list"). */
span{
  /* Setting the color of the text. */
  color: #9400D3;
}


/* Styling major break points that swap between different devices: */

/* Create a media query for styling width 0 up until 320 pixels. For Landscape mode. */
@media only screen and (max-width: 320px) and (orientation: landscape) {
  /* Guiding statement style. */
  h2{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 15 percent. */
  position: fixed; left: 10%; top: 15%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
  /* Styling the area containing the text box, button and result. */
  div{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 16 percent. */
  position: fixed; left: 10%; top: 16%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
}

/* Create a media query for styling width 0 up until 320 pixels. For Portrait mode. */
@media only screen and (max-width: 320px) and (orientation: portrait) {
  /* Guiding statement style. */
  h2{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 15 percent. */
  position: fixed; left: 10%; top: 15%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
  /* Styling the area containing the text box, button and result. */
  div{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 16 percent. */
  position: fixed; left: 10%; top: 16%;
  /* Set the width of an element to 80%. */
  width: 80%;
  /* Set the font-size to 18 pixel. */
  font-size: 18px;
  /* Set the height of a line box in horizontal writing modes to 2 (multiply the element's font size by 2 to compute the line height). */
  line-height: 2;
  }
}

/* Create a media query for styling width 321 up until 600 pixels. For Landscape mode. */
@media only screen and (min-width: 321px) and (max-width: 600px) and (orientation: landscape) {
  /* Guiding statement style. */
  h2{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 15 percent. */
  position: fixed; left: 10%; top: 15%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
  /* Styling the area containing the text box, button and result. */
  div{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 16 percent. */
  position: fixed; left: 10%; top: 16%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
}

/* Create a media query for styling width 321 up until 600 pixels. For Portrait mode. */
@media only screen and (min-width: 321px) and (max-width: 600px) and (orientation: portrait) {
  /* Guiding statement style. */
  h2{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 15 percent. */
  position: fixed; left: 10%; top: 15%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
  /* Styling the area containing the text box, button and result. */
  div{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 19 percent. */
  position: fixed; left: 10%; top: 19%;
  /* Set the width of an element to 80%. */
  width: 80%;
  /* Set the font-size to 18 pixel. */
  font-size: 18px;
  /* Set the height of a line box in horizontal writing modes to 2 (multiply the element's font size by 2 to compute the line height). */
  line-height: 2;
  }
}

/* Create a media query for styling width 601 up until 768 pixels. For Landscape mode. */
@media only screen and (min-width: 601px) and (max-width: 768px) and (orientation: landscape) {
  /* Guiding statement style. */
  h2{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 23 percent. */
  position: fixed; left: 10%; top: 23%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
  /* Styling the area containing the text box, button and result. */
  div{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 31 percent. */
  position: fixed; left: 10%; top: 31%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
}

/* Create a media query for styling width 601 up until 768 pixels. For Portrait mode. */
@media only screen and (min-width: 601px) and (max-width: 768px) and (orientation: portrait) {
  /* Guiding statement style. */
  h2{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 15 percent. */
  position: fixed; left: 10%; top: 15%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
  /* Styling the area containing the text box, button and result. */
  div{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 19 percent. */
  position: fixed; left: 10%; top: 19%;
  /* Set the width of an element to 80%. */
  width: 80%;
  /* Set the font-size to 18 pixel. */
  font-size: 18px;
  /* Set the height of a line box in horizontal writing modes to 2 (multiply the element's font size by 2 to compute the line height). */
  line-height: 2;
  }
}

/* Create a media query for styling width 769 up until 992 pixels. For Landscape mode. */
@media only screen and (min-width: 769px) and (max-width: 992px) and (orientation: landscape) {
  /* Guiding statement style. */
  h2{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 23 percent. */
  position: fixed; left: 10%; top: 23%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
  /* Styling the area containing the text box, button and result. */
  div{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 31 percent. */
  position: fixed; left: 10%; top: 31%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
}

/* Create a media query for styling width 769 up until 992 pixels. For Portrait mode. */
@media only screen and (min-width: 769px) and (max-width: 992px) and (orientation: portrait) {
  /* Guiding statement style. */
  h2{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 13 percent. */
  position: fixed; left: 10%; top: 13%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
  /* Styling the area containing the text box, button and result. */
  div{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 16 percent. */
  position: fixed; left: 10%; top: 16%;
  /* Set the width of an element to 80%. */
  width: 80%;
  /* Set the font-size to 18 pixel. */
  font-size: 18px;
  /* Set the height of a line box in horizontal writing modes to 2 (multiply the element's font size by 2 to compute the line height). */
  line-height: 2;
  }
}

/* Create a media query for styling width 993 up until 1200 pixels. For Landscape mode. */
@media only screen and (min-width: 993px) and (max-width: 1200px) and (orientation: landscape) {
  /* Guiding statement style. */
  h2{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 15 percent. */
  position: fixed; left: 10%; top: 15%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
  /* Styling the area containing the text box, button and result. */
  div{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 19 percent. */
  position: fixed; left: 10%; top: 19%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
}

/* Create a media query for styling width 993 up until 1200 pixels. For Portrait mode. */
@media only screen and (min-width: 993px) and (max-width: 1200px) and (orientation: portrait) {
  /* Guiding statement style. */
  h2{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 15 percent. */
  position: fixed; left: 10%; top: 15%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
  /* Styling the area containing the text box, button and result. */
  div{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 16 percent. */
  position: fixed; left: 10%; top: 16%;
  /* Set the width of an element to 80%. */
  width: 80%;
  /* Set the font-size to 18 pixel. */
  font-size: 18px;
  /* Set the height of a line box in horizontal writing modes to 2 (multiply the element's font size by 2 to compute the line height). */
  line-height: 2;
  }
}

/* Create a media query for styling width 1201 or above pixels. For Landscape mode. */
@media only screen and (min-width: 1201px) and (orientation: landscape) {
  /* Guiding statement style. */
  h2{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 17 percent. */
  position: fixed; left: 10%; top: 17%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
  /* Styling the area containing the text box, button and result. */
  div{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 21 percent. */
  position: fixed; left: 10%; top: 21%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
}

/* Create a media query for styling width 1201 or above pixels. For Portrait mode. */
@media only screen and (min-width: 1201px) and (orientation: portrait) {
  /* Guiding statement style. */
  h2{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 15 percent. */
  position: fixed; left: 10%; top: 15%;
  /* Set the width of an element to 80%. */
  width: 80%;
  }
  /* Styling the area containing the text box, button and result. */
  div{
  /* Set the element always stays in the same place even if the page is scrolled. */
  /* Set the left edge position to 10 percent. */
  /* Set the top edge position to 16 percent. */
  position: fixed; left: 10%; top: 16%;
  /* Set the width of an element to 80%. */
  width: 80;
  /* Set the font-size to 18 pixel. */
  font-size: 18px;
  /* Set the height of a line box in horizontal writing modes to 2 (multiply the element's font size by 2 to compute the line height). */
  line-height: 2;
  }
}
</style>