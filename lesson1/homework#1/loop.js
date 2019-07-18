const loop = (times = 0, callback = null) => {
  if (!callback) console.log("Sorry, no callback - no iteration!");
  for (let i = 0; i < times; i++) {
    callback(i);
  }
};

loop(10, number => {
  console.log(`callback invoked ${number + 1} times!`);
});

loop(5);
