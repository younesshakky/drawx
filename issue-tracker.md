# bugs to fix later

### 01: url's input value dose not change until a change event has accured.

code producing it :

```js
var url = inputURL.value
inputURL.oninput = function () {
  url = inputURL.value
}
```
---

### 02: cannot return when clicking on "Your last images"
---

# technical features
#01: url validation