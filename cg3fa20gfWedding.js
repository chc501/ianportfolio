function myFunction() {
  var name = window.prompt("How many guests do you have?");
  var guest = name.replace(/\D/g, '');
  var name = window.prompt("How many tables do you have?");
  var table = name.replace(/\D/g, '');
  var number = Math.floor(guest / table);
  var rem = guest % table;
  if (rem == 0) {
    alert("Your " + guest + " guests will be seated as follows: " + table + " tables of " + number + " guests.")
  } else if (table == 2) {
    alert("Your " + guest + " guests will be seated as follows: " + rem + " table of " + (number + 1) +
    " guests and " + (table - rem) + " table of " + number + " guests.")
  } else if (rem == 1) {
    alert("Your " + guest + " guests will be seated as follows: " + rem + " table of " + (number + 1) +
    " guests and " + (table - rem) + " tables of " + number + " guests.")
  } else if ((table - rem) == 1) {
    alert("Your " + guest + " guests will be seated as follows: " + rem + " tables of " + (number + 1) +
    " guests and " + (table - rem) + " table of " + number + " guests.")
  } else {
    alert("Your " + guest + " guests will be seated as follows: " + rem + " tables of " + (number + 1) +
    " guests and " + (table - rem) + " tables of " + number + " guests.")
  };
}
