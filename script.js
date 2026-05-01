let bookings = JSON.parse(localStorage.getItem("cleanslate_bookings")) || [];

window.onload = function () {
  displayBookings();
};

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

  let booking = {
    id: Date.now(),
    name,
    phone,
    address,
    service,
    date
  };

  bookings.push(booking);

  localStorage.setItem("cleanslate_bookings", JSON.stringify(bookings));

  displayBookings();

  // clear inputs
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("date").value = "";
}

function displayBookings() {
  let list = document.getElementById("bookings");
  list.innerHTML = "";

  if (bookings.length === 0) {
    list.innerHTML = "<p>No bookings yet</p>";
    return;
  }

  bookings.forEach((b) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <strong>${b.name}</strong><br/>
      ${b.service} - ${b.date}<br/>
      📍 ${b.address} | 📞 ${b.phone}
      <hr/>
    `;
    list.appendChild(li);
  });
    }
