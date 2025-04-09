<script setup>
/* Create a media tag with name attribute for viewport of the device and a content (gives a couple of rules to follow).*/
/* Content: Width equal to device width (this has to fix to the independent pixels that is on the specific device that is setting on) */
/* Have a initial scale as the zoom level when the user actually visits the website on their device. */
meta:[
  {name: "viewport", content: "width=device-width, initial-scale=1.0"}
]
</script>

<template>
  <!-- Title about the web app. -->
  <h1>To-DoList</h1>
  <br/>
  <!-- Links (URL without reloading the page) for users to direct to Personal List page, Homepage, Business List page. -->
  <div><RouterLink to="/personalList">Personal List</RouterLink> &nbsp |
  &nbsp
  <RouterLink to="/">Home</RouterLink> &nbsp |
  &nbsp
  <RouterLink to="/businessList">Business List</RouterLink></div>
  &nbsp
  <RouterView />
</template>

<style scoped>
/* Title styles. */
h1{
  /* Align the text to the center. */
  text-align: center;
  /* Set the visible outline to 2 pixel wide. */
  border: 2px;
  /* Set space between content and border for 5 pixel. */
  padding: 5px;
  /* Be positioned based on an absolute point on the page. */
  position: absolute;
  /* Set the width of an element to 630 pixel. */
  width: 630px;
  /* Set the top edge position in 2% of containinig element. */
  top: 2%;
  /* Set the left edge position in 30% of containing element. */
  left: 30%;
  /* Set background color to lightgreen. */
  background-color: lightgreen;
  /* Set text color to white. */
  color: white;
  /* Set font-family to "Times New Roman". */
  font-family: "Times New Roman";
  /* Set the space between characters in a text to 2 pixel. */
  letter-spacing: 2px;
}
/* The typography of the URLs: */
div{
  /* Align the text to the center. */
  text-align: center;
  /* Be positioned based on an absolute point on the page. */
  position: absolute;
  /* Set the width of an element to 400 pixel. */
  width: 400px;
  /* Set the top edge position in 11% of containinig element. */
  top: 11%;
  /* Set the left edge position in 37% of containing element. */
  left: 37%;
}


/* Styling major break points that swap between different devices: */

/* Create a media query for styling width 0 up until 320 pixels. For Landscape mode. */
@media only screen and (max-width: 320px) and (orientation: landscape) {
  /* Title styles. */
  h1{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 2 percent of containinig element. */
  top: 2%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
  /* The typography of the URLs: */
  div{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 9 percent of containinig element. */
  top: 9%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
}

/* Create a media query for styling width 0 up until 320 pixels. For Portrait mode. */
@media only screen and (max-width: 320px) and (orientation: portrait) {
  /* Title styles. */
  h1{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 2 percent of containinig element. */
  top: 2%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
  /* The typography of the URLs: */
  div{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 10 percent of containinig element. */
  top: 10%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
}

/* Create a media query for styling width 321 up until 600 pixels. For Landscape mode. */
@media only screen and (min-width: 321px) and (max-width: 600px) and (orientation: landscape) {
  /* Title styles. */
  h1{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 2 percent of containinig element. */
  top: 2%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
  /* The typography of the URLs: */
  div{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 9 percent of containinig element. */
  top: 9%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
}

/* Create a media query for styling width 321 up until 600 pixels. For Portrait mode. */
@media only screen and (min-width: 321px) and (max-width: 600px) and (orientation: portrait) {
  /* Title styles. */
  h1{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 2 percent of containinig element. */
  top: 2%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
  /* The typography of the URLs: */
  div{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 10 percent of containinig element. */
  top: 10%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
}

/* Create a media query for styling width 601 up until 768 pixels. For Landscape mode. */
@media only screen and (min-width: 601px) and (max-width: 768px) and (orientation: landscape) {
  /* Title styles. */
  h1{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 2 percent of containinig element. */
  top: 2%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
  /* The typography of the URLs: */
  div{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 17 percent of containinig element. */
  top: 17%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
}

/* Create a media query for styling width 601 up until 768 pixels. For Portrait mode. */
@media only screen and (min-width: 601px) and (max-width: 768px) and (orientation: portrait) {
  /* Title styles. */
  h1{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 2 percent of containinig element. */
  top: 2%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
  /* The typography of the URLs: */
  div{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 10 percent of containinig element. */
  top: 10%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
}

/* Create a media query for styling width 768 up until 992 pixels. For Landscape mode. */
@media only screen and (min-width: 768px) and (max-width: 992px) and (orientation: landscape) {
  /* Title styles. */
  h1{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 2 percent of containinig element. */
  top: 2%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
  /* The typography of the URLs: */
  div{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 17 percent of containinig element. */
  top: 17%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
}

/* Create a media query for styling width 768 up until 992 pixels. For Portrait mode. */
@media only screen and (min-width: 768px) and (max-width: 992px) and (orientation: portrait) {
  /* Title styles. */
  h1{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 2 percent of containinig element. */
  top: 2%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
  /* The typography of the URLs: */
  div{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 9 percent of containinig element. */
  top: 9%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
}

/* Create a media query for styling width 993 up until 1200 pixels. For Landscape mode. */
@media only screen and (min-width: 993px) and (max-width: 1200px) and (orientation: landscape) {
  /* Title styles. */
  h1{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 2 percent of containinig element. */
  top: 2%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
  /* The typography of the URLs: */
  div{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 10 percent of containinig element. */
  top: 10%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
}

/* Create a media query for styling width 993 up until 1200 pixels. For Portrait mode. */
@media only screen and (min-width: 993px) and (max-width: 1200px) and (orientation: portrait) {
  /* Title styles. */
  h1{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 2 percent of containinig element. */
  top: 2%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
  /* The typography of the URLs: */
  div{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 9 percent of containinig element. */
  top: 9%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
}

/* Create a media query for styling width 1201 or above pixels. For Landscape mode. */
@media only screen and (min-width: 1201px) and (orientation: landscape) {
  /* Title styles. */
  h1{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 2 percent of containinig element. */
  top: 2%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
  /* The typography of the URLs: */
  div{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 13 percent of containinig element. */
  top: 13%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
}

/* Create a media query for styling width 1201 or above pixels. For Portrait mode. */
@media only screen and (min-width: 1201px) and (orientation: portrait) {
  /* Title styles. */
  h1{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 2 percent of containinig element. */
  top: 2%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
  /* The typography of the URLs: */
  div{
  /* Set the width of an element to 80 percent. */
  width: 80%;
  /* Set the top edge position in 9 percent of containinig element. */
  top: 9%;
  /* Set the left edge position in 10 percent of containing element. */
  left: 10%;
  }
}
</style>
