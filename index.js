const app = require("./server")

app.listen(3002, (err) => {
  if (err) {
      console.log("there was an error", err)
      return;
  };
  console.log("now listening on port 3002");
});