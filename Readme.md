# Kanye Jokes

A simple [app](https://masonmedia.github.io/kanye_jokes/) displaying Yeezy jokes using [Kanye Rest](https://api.kanye.rest), [Bootstrap 5](https://v5.getbootstrap.com/docs/5.0/getting-started/introduction/), [Animate.css](https://animate.style/), and [svg backgrounds](https://www.svgbackgrounds.com/). After clicking the "Get Joke" button, a GET request is made to a Kanye jokes API using fetch. The response is converted to JSON then appended to a parent div using a template literal.

**Problem:** an issue building this was figuring out how to add an animate.css class to each new incoming joke response. Initially I created a hard coded h1 element to display the joke text, and tried various ways of using classList to add an animation class onto the element. While it would work for the first iteration using `classList.add`, or on every second iteration using toggle, it wouldn't work on each response.

**Solution:** the fix was using a template literal to inject the API response into an h1 element and then append the h1 to a parent div. This way the injected h1 has the animation class applied directly, each and every time the API call is made.