# Kanye Jokes

A simple app that displays Yeezy jokes using Bootstrap 5 and Animate.css. After clicking the "Get Joke" button, an GET request is sent to a Kanye jokes API using fetch. The response is converted to JSON then appended to a parent div using a template literal.

**Problem:** a note building this was figuring out how to add an animate.css class to each new incoming joke response. Initially I created an h1 element to display the joke text, and tried various ways of using classList to add the class onto the element. While it would work for the first iteration, the classList property would only add the class to the element once, or toggle it on and off with the result of working on only every second response. 

**Solution:** the fix was using a template literal to inject the API response into an h1 element and then append it to a parent div. This way the injected h1 has the animation class applied directly, each and every time the API call is made.