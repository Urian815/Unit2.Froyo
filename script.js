window.onload = function () {
  const userInput = prompt(" Enter a list of comma-seperated froyo flavors:");
  const flavorsArray = userInput.split(",");
  const flavorCounts = {};

  flavorsArray.forEach(flavor => {
    flavor = flavor.trim();
    if (flavorCounts[flavor]) {
        flavorCounts[flavor]++;
    } else {
        flavorCounts[flavor] = 1;
    }
  });
  console.table(flavorCounts);
};
