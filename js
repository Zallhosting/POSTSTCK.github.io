// Menu Toggle
function openMenu() {
    let menu = document.getElementById("menu-content");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Pengaturan Profil
function openSettings() {
    document.getElementById("settings").style.display = "block";
}

// Simpan Profil
function saveProfile() {
    const username = document.getElementById("username").value;
    const bio = document.getElementById("bio").value;
    const profilePicture = document.getElementById("profilePicture").files[0];

    // Simpan data pengguna di localStorage (sementara, nanti bisa terhubung ke database)
    localStorage.setItem("username", username);
    localStorage.setItem("bio", bio);

    alert("Profil berhasil disimpan!");
}

// Fitur Create Group
function createGroup() {
    const groupName = prompt("Masukkan nama grup:");
    if (groupName) {
        const groupList = document.getElementById("groupList");
        const groupDiv = document.createElement("div");
        groupDiv.className = "group-item";
        groupDiv.innerHTML = `<p>Grup: ${groupName}</p>`;
        groupList.appendChild(groupDiv);
    }
}

// Sambutan Pengguna
function displayWelcomeMessage() {
    const welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    displayWelcomeMessage();
});

// Fitur Follow
let following = false;

function followUser() {
    following = !following;
    const followButton = document.querySelector('button[onclick="followUser()"]');
    if (following) {
        followButton.textContent = "Unfollow";
        alert("Anda sekarang mengikuti pengguna ini.");
    } else {
        followButton.textContent = "Follow";
        alert("Anda berhenti mengikuti pengguna ini.");
    }
}

function viewProfile() {
    if (following) {
        alert("Menampilkan profil pengguna...");
    } else {
        alert("Anda harus follow pengguna ini terlebih dahulu.");
    }
}

// Fitur Galeri Profil
function previewProfilePicture() {
    const file = document.getElementById("profilePicture").files[0];
    const reader = new FileReader();
    
    reader.onload = function (e) {
        const imgElement = document.getElementById("profilePicPreview");
        imgElement.src = e.target.result;
        imgElement.style.display = "block";
    }
    
    reader.readAsDataURL(file);
}

// Validasi Nama Pengguna Unik
let existingUsernames = ["user123", "admin456"]; 

function checkUsername() {
    const username = document.getElementById("username").value;
    if (existingUsernames.includes(username)) {
        alert("Nama pengguna sudah ada, pilih nama lain.");
    } else {
        alert("Nama pengguna tersedia.");
    }
}
