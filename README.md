# Welcome to PierRandomColor2

## How to use

Install ```npm install pierrandomcolor2```

Example:

```
const randomColor = require('pierrandomcolor2')

randomColor((err, resp) => {
  if (err) {
    console.log(err)
  }
  console.log(resp)
  document.querySelector('body').style.backgroundColor = resp
})
```
