function bookService() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let service = document.getElementById("service").value;
  let date = document.getElementById("date").value;

  if (!name || !phone || !address || !date) {
    alert("Please fill all fields");
    return;
  }

  let booking = `${name} - ${service} on ${date}`;

  let li = document.createElement("li");
  li.textContent = booking;

  document.getElementById("bookings").appendChild(li);

  // clear fields
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("date").value = "";
    }
