// Mendapatkan tanggal hari ini dan memformatnya

const today = new Date();

const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const dayName = days[today.getDay()];

const formattedDate = `${dayName}, ${day}/${month}/${year}`;

// Menampilkan tanggal hari ini di elemen dengan id "tanggal-hari-ini"
document.getElementById("tanggal-hari-ini").textContent = formattedDate;

$(function () {
  let selectedDate = ""; // Variabel untuk menyimpan tanggal yang dipilih

  // Menginisialisasi datepicker
  $("#datepicker").datepicker({
    dateFormat: "dd/mm/yy", // Format tanggal yang diinginkan
    onSelect: function (dateText) {
      selectedDate = dateText; // Menyimpan tanggal yang dipilih
      $("#selected-date").text(`Tanggal yang dipilih: ${dateText}`);
    },
  });

  // Menampilkan datepicker saat elemen dengan kelas "kalender" diklik
  $(".kalender").on("click", function () {
    $("#datepicker").datepicker("show");
  });

  // Menampilkan pop-up dan memasukkan tanggal yang dipilih saat tombol "ADD" diklik
  $(".tombol").on("click", function () {
    const agenda = $(".input-agenda").val(); // Mengambil nilai dari input agenda

    if (selectedDate && agenda) {
      // Memasukkan data agenda dan tanggal yang dipilih ke dalam elemen popup
      $(".pop-up p, .pop-up select").remove();
      $(".pop-up").append(
        `<p id="agenda-input"> ${agenda}</p><p id="tanggal-input"> ${selectedDate} </p><select id="difficulty">
  <option value="low">Low</option>
  <option value="med">Medium</option>
  <option value="high">High</option>
</select>`
      );
      $(".pop-up").show(); // Menampilkan pop-up
    } else {
      alert("Silakan isi agenda dan pilih tanggal terlebih dahulu.");
    }
  });
});

function closePopup() {
  $(".pop-up").hide(); // Menutup pop-up
  console.log("closePopup called");
}

const todo = document.getElementById("container-user23");
// Inisialisasi variabel untuk melacak jumlah
let count = 0;
let agendaContent1 = ""; // Global variable untuk menampung agenda yang akan dipindahkan

function add() {
  let agendaText = document.getElementById("agenda-input").textContent;
  let tanggalText = document.getElementById("tanggal-input").textContent;
  console.log("add called");
  console.log(agendaText + " " + tanggalText);
  count++;

  console.log(count);

  // Pastikan input tidak kosong
  if (agendaText.trim() !== "") {
    // Buat elemen <tr> untuk baris baru
    let tr = document.createElement("tr");
    tr.id = `hapus-list${count}`;
    tr.classList.add("fungsi-hapus-semua");
    tr.setAttribute("data-tanggal", `${tanggalText}`);

    // Buat elemen <td> untuk agenda dan tanggal
    let tdAgendaTanggal = document.createElement("td");
    tdAgendaTanggal.innerHTML = `<div id="isi-agenda${count}">${agendaText}<br>${tanggalText}</div>`;
    //----------
    // Mengambil elemen select dan nilai yang dipilih
    const selectElement = document.getElementById("difficulty");
    const selectedValue = selectElement.value;
    console.log("Tingkat kesulitan yang dipilih:", selectedValue);

    // Tambahkan elemen <td> untuk agenda dan tanggal ke dalam elemen <tr>
    tr.appendChild(tdAgendaTanggal);

    // Buat elemen <td> untuk priority
    let tdPriority = document.createElement("td");
    if (selectedValue == "low") {
      tdPriority.innerHTML = '<div class="tombol-low">Low</div>';
    } else if (selectedValue == "med") {
      tdPriority.innerHTML = '<div class="tombol-med">Med</div>';
    } else if (selectedValue == "high") {
      tdPriority.innerHTML = '<div class="tombol-high">High</div>';
    }
    tr.appendChild(tdPriority);

    // Buat elemen <td> untuk checkbox dan trash icon
    let tdActions = document.createElement("td");
    tdActions.innerHTML = `
      <input type="checkbox" class="ceklis" id="ceklis-selesai${count}" />
      <img src="trash-alt-svgrepo-com 1.png" alt="" class="sampah" id="hapusAgenda${count}" />
    `;
    tr.appendChild(tdActions);

    // Tambahkan <tr> baru ke elemen <table> dengan ID "todo-list"
    let table = document.getElementById("todo-list").closest("table");
    table.appendChild(tr);

    // Kosongkan input setelah menambah item
    document.querySelector(".input-agenda").value = "";
    document.getElementById("tanggal-input").textContent = "";
    // Tambahkan event listener untuk tombol hapus
    for (let i = 1; i <= 10; i++) {
      const tombolHapus = document.getElementById(`hapusAgenda${i}`);

      if (tombolHapus) {
        tombolHapus.addEventListener("click", function () {
          hapusAgenda(i);
        });
      }
    }

    // Fungsi untuk menghapus agenda
    function hapusAgenda(agendaId) {
      console.log(`Agenda ${agendaId} dihapus`);

      // Penghapusan elemen agenda yang sesuai
      const agenda = document.getElementById(`hapus-list${agendaId}`);
      if (agenda) {
        agenda.remove();
      }
    }
    // Event listener untuk checkbox, hanya didaftarkan sekali
    // Cek apakah elemen dengan ID 'ceklis-selesai1' ada
    let ceklisSelesai1 = document.getElementById("ceklis-selesai1");

    if (ceklisSelesai1) {
      // Jika elemen ada, tambahkan event listener
      ceklisSelesai1.addEventListener("change", function () {
        if (this.checked) {
          // Tampilkan pop-up
          let fullContent = document.getElementById("isi-agenda1").innerHTML;
          agendaContent1 = fullContent.split("<br>")[0];
          document.getElementById("pop-up2").style.display = "block";
          const hapusList1 = document.getElementById("hapus-list1");
          if (hapusList1) {
            hapusList1.remove();
          }
        }
      });
    } else {
      console.log("Checkbox 'ceklis-selesai1' tidak ditemukan.");
    }
    let ceklisSelesai2 = document.getElementById("ceklis-selesai2");

    if (ceklisSelesai2) {
      // Jika elemen ada, tambahkan event listener
      ceklisSelesai2.addEventListener("change", function () {
        if (this.checked) {
          // Tampilkan pop-up
          let fullContent = document.getElementById("isi-agenda2").innerHTML;
          agendaContent1 = fullContent.split("<br>")[0];
          document.getElementById("pop-up2").style.display = "block";
          const hapusList2 = document.getElementById("hapus-list2");
          if (hapusList2) {
            hapusList2.remove();
          }
        }
      });
    } else {
      console.log("Checkbox 'ceklis-selesai2' tidak ditemukan.");
    }
    let ceklisSelesai3 = document.getElementById("ceklis-selesai3");

    if (ceklisSelesai3) {
      // Jika elemen ada, tambahkan event listener
      ceklisSelesai3.addEventListener("change", function () {
        if (this.checked) {
          // Tampilkan pop-up
          let fullContent = document.getElementById("isi-agenda3").innerHTML;
          agendaContent1 = fullContent.split("<br>")[0];
          document.getElementById("pop-up2").style.display = "block";
          const hapusList3 = document.getElementById("hapus-list3");
          if (hapusList3) {
            hapusList3.remove();
          }
        }
      });
    } else {
      console.log("Checkbox 'ceklis-selesai3' tidak ditemukan.");
    }
    let ceklisSelesai4 = document.getElementById("ceklis-selesai4");

    if (ceklisSelesai4) {
      // Jika elemen ada, tambahkan event listener
      ceklisSelesai4.addEventListener("change", function () {
        if (this.checked) {
          // Tampilkan pop-up
          let fullContent = document.getElementById("isi-agenda4").innerHTML;
          agendaContent4 = fullContent.split("<br>")[0];
          document.getElementById("pop-up2").style.display = "block";
          const hapusList4 = document.getElementById("hapus-list4");
          if (hapusList4) {
            hapusList4.remove();
          }
        }
      });
    } else {
      console.log("Checkbox 'ceklis-selesai4' tidak ditemukan.");
    }
    // Tambahkan event listener untuk tombol hapus
    // Tambahkan event listener untuk setiap tombol hapus
  } else {
    alert("Silakan masukkan agenda terlebih dahulu.");
  }
}

// Fungsi untuk memindahkan agenda ke tabel selesai
document
  .getElementById("tombol-pindahkan")
  .addEventListener("click", function () {
    console.log(`${agendaContent1}`);
    let currentDate = new Date().toLocaleDateString();

    let tabelSelesai = document
      .getElementById("agenda-selesaiid")
      .getElementsByTagName("tbody")[0];

    if (!tabelSelesai) {
      tabelSelesai = document.createElement("tbody");
      document.getElementById("agenda-selesaiid").appendChild(tabelSelesai);
    }

    let newRow = tabelSelesai.insertRow();
    let newCell1 = newRow.insertCell(0);
    newCell1.innerHTML = agendaContent1;

    let newCell2 = newRow.insertCell(1);
    newCell2.innerHTML = "";

    let newCell3 = newRow.insertCell(2);
    newCell3.innerHTML = currentDate;

    document.getElementById("pop-up2").style.display = "none";
  });

document.querySelector(".input-agenda").value = "";
// Pilih elemen dengan kelas item-user dan item-user1
// Pilih elemen dengan kelas item-user, item-user1, agenda-selesai, dan container-user2
const itemUser = document.querySelector(".item-user");
const itemUser1 = document.querySelector(".item-user1");
const agendaSelesai = document.querySelector(".agenda-selesai");
const containerUser2 = document.getElementById("container-user23");

// Fungsi untuk mengatur visibilitas berdasarkan elemen yang aktif
function toggleVisibility() {
  if (itemUser.classList.contains("active")) {
    agendaSelesai.classList.add("hidden");
    containerUser2.classList.remove("hidden");
  } else if (itemUser1.classList.contains("active")) {
    agendaSelesai.classList.remove("hidden");
    containerUser2.classList.add("hidden");
  }
}

// Secara default, set visibilitas sesuai dengan elemen yang aktif
toggleVisibility();

// Tambahkan event listener untuk kedua elemen
itemUser.addEventListener("click", function () {
  itemUser.classList.add("active");
  itemUser1.classList.remove("active");
  toggleVisibility();
});

itemUser1.addEventListener("click", function () {
  itemUser1.classList.add("active");
  itemUser.classList.remove("active");
  toggleVisibility();
});

console.log(formattedDate);
document
  .getElementById("tombol-hapus-semua")
  .addEventListener("click", function () {
    // Mendapatkan semua elemen dengan kelas 'fungsi-hapus-semua'
    let elements = document.querySelectorAll(".fungsi-hapus-semua");

    // Loop melalui semua elemen dan menghapusnya
    elements.forEach(function (element) {
      element.remove();
    });
  });
// Fungsi untuk menampilkan pop-up filter
const filterButton = document.getElementById("filter-button");
const filterPopup = document.getElementById("filter-popup");
const overlay = document.getElementById("overlay");
const closePopup1 = document.getElementById("close-popup1");
const applyFilter = document.getElementById("apply-filter");
const clearFilterButton = document.getElementById("clear-filter-button");

// Menampilkan pop-up ketika tombol filter ditekan
filterButton.addEventListener("click", function () {
  filterPopup.style.display = "block";
  overlay.style.display = "block";
});

// Menutup pop-up
closePopup1.addEventListener("click", function () {
  filterPopup.style.display = "none";
  overlay.style.display = "none";
});

// Menerapkan filter
applyFilter.addEventListener("click", function () {
  const selectedDate = document
    .getElementById("filter-date-input")
    .value.trim();

  if (selectedDate) {
    const rows = document.querySelectorAll(".fungsi-hapus-semua");
    rows.forEach(function (row) {
      const rowDate = row.getAttribute("data-tanggal").trim();

      if (rowDate === selectedDate) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });

    filterPopup.style.display = "none";
    overlay.style.display = "none";
  } else {
    alert("Masukkan tanggal yang valid!");
  }
});
clearFilterButton.addEventListener("click", function () {
  const rows = document.querySelectorAll(".fungsi-hapus-semua");

  rows.forEach(function (row) {
    row.style.display = "";
  });

  filterPopup.style.display = "none";
  overlay.style.display = "none";
});
