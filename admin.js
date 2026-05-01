let bookings = JSON.parse(localStorage.getItem("cleanslate_bookings")) || [];

function loadAdmin() {
  let list = document.getElementById("admin-list");
  list.innerHTML = "";

  if (bookings.length === 0) {
    list.innerHTML = "<p>No bookings found</p>";
    return;
  }

  bookings.forEach((b, index) => {
    let statusColor =
      b.status === "Approved" ? "limegreen" :
      b.status === "Rejected" ? "red" :
      "orange";

    let li = document.createElement("li");

    li.innerHTML = `
      <strong>${b.name}</strong> - ${b.service}<br/>
      ${b.date} | ${b.phone}<br/>
      📍 ${b.address}<br/>

      <p>Status: <span style="color:${statusColor}">${b.status}</span></p>

      <button onclick="approve(${index})">Approve</button>
      <button onclick="reject(${index})">Reject</button>
      <button onclick="deleteBooking(${index})">Delete</button>

      <hr/>
    `;

    list.appendChild(li);
  });
}

function approve(index) {
  bookings[index].status = "Approved";
  save();
  loadAdmin();
}

function reject(index) {
  bookings[index].status = "Rejected";
  save();
  loadAdmin();
}

function deleteBooking(index) {
  bookings.splice(index, 1);
  save();
  loadAdmin();
}

function save() {
  localStorage.setItem("cleanslate_bookings", JSON.stringify(bookings));
}

window.onload = loadAdmin;
