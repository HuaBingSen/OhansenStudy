// try {
//   process.nextTick(function () {
//     throw new Error("error");
//   });
// } catch (err) {
//   //can not catch it
//   console.log(err);
// }

// try {
//   setTimeout(function(){
//     throw new Error("error");
//   },1)
// } catch (err) {
//   //can not catch it
//   console.log(err);
// }
function async(cb, err) {
  setTimeout(function() {
    try {
      if (true)
        throw new Error("woops!");
      else
        cb("done");
    } catch(e) {
      err(e);
    }
  }, 2000)
}

async(function(res) {
  console.log("received:", res);
}, function(err) {
  console.log("Error: async threw an exception:", err);
});