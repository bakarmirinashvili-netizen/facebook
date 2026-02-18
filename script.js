// --- Dropdown Menu  ---
const profileBtn = document.querySelector(".profile");
const dropdownMenu = document.querySelector(".dropdown-menu");

if (profileBtn && dropdownMenu) {
  profileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  window.addEventListener("click", () => {
    dropdownMenu.style.display = "none";
  });
}

// --- See More  ---
const seeMoreBtn = document.getElementById("see-more-btn");
const moreItems = document.getElementById("more-items");
const btnText = document.getElementById("btn-text");

if (seeMoreBtn && moreItems) {
  moreItems.style.display = "none";

  seeMoreBtn.addEventListener("click", () => {
    if (moreItems.style.display === "none") {
      moreItems.style.display = "block";
      btnText.innerText = "See less";
    } else {
      moreItems.style.display = "none";
      btnText.innerText = "See more";
    }
  });
}

// --- Stories Slider  ---
const slider = document.getElementById("storySlider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (slider && nextBtn && prevBtn) {
  // თავიდან მარცხენა ისარი დამალულია
  prevBtn.style.display = "none";

  nextBtn.onclick = () => {
    slider.scrollLeft += 350;
  };

  prevBtn.onclick = () => {
    slider.scrollLeft -= 350;
  };

  slider.onscroll = () => {
    // მარცხენა ისრის გამოჩენა/დამალვა
    prevBtn.style.display = slider.scrollLeft <= 0 ? "none" : "flex";

    // მარჯვენა ისრის გამოჩენა/დამალვა
    let maxScroll = slider.scrollWidth - slider.clientWidth;
    nextBtn.style.display =
      slider.scrollLeft >= maxScroll - 5 ? "none" : "flex";
  };
}


const inputField = document.getElementById("postInput");
const saveBtn = document.getElementById("savePostBtn");
const displayDiv = document.getElementById("displayPost");

//  ფუნქცია, რომელიც ინახავს ტექსტს
saveBtn.addEventListener("click", function () {
  const textToSave = inputField.value; 

  if (textToSave.trim() !== "") {
    // ვინახავთ LocalStorage-ში "userPost" სახელით
    localStorage.setItem("userPost", textToSave);

    alert("პოსტი შენახულია!");
    showSavedPost(); 
  } else {
    alert("გთხოვთ, ჩაწეროთ რამე.");
  }
});

// ფუნქცია, რომელიც გვერდის ჩატვირთვისას ნახულობს შენახულ პოსტს
function showSavedPost() {
  const savedData = localStorage.getItem("userPost");

  if (savedData) {
    displayDiv.innerHTML = `<p>თქვენი ბოლო პოსტი: <strong>${savedData}</strong></p>`;
  }
}


showSavedPost();

/* registracia*/

// Log Out ფუნქციონალი
const logoutBtn = document.querySelector(".menu-item:last-child");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userName");
    window.location.href = "login.html";
  });
}
