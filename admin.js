let bookings = JSON.parse(localStorage.getItem("cleanslate_bookings")) || [];

function loadAdmin() {
  let list = document.getElementById("admin-list");
  list.innerHTML = "";

  if (bookings.length === 0) {
    list.innerHTML = "<p>No bookings found</p>";
    return;
  }

  bookings.forEach((b, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <strong>${b.name}</strong> - ${b.service}<br/>
      ${b.date} | ${b.phone}<br/>
      📍 ${b.address}<br/>
      <button onclick="deleteBooking(${index})">Delete</button>
      <hr/>
    `;

    list.appendChild(li);
  });
}

function deleteBooking(index) {
  bookings.splice(index, 1);
  localStorage.setItem("cleanslate_bookings", JSON.stringify(bookings));
  loadAdmin();
}

window.onload = loadAdmin;
