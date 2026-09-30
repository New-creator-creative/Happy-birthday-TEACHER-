const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const flowers = document.getElementById("flowers");
const confetti = document.getElementById("confetti");

openBtn.addEventListener("click", () => {
  letter.classList.remove("hidden");
  
  openBtn.textContent = "💖 Tabrik ochildi!";
  
  createFlowers();
  createConfetti();
  
  setTimeout(() => {
    letter.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 300);
});


function createFlowers() {
  const flowerList = ["🌸", "🌷", "🌺", "🌼", "💮", "🌹"];
  
  for (let i = 0; i < 28; i++) {
    const flower = document.createElement("div");
    
    flower.className = "flower";
    flower.textContent =
      flowerList[Math.floor(Math.random() * flowerList.length)];
    
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration =
      4 + Math.random() * 5 + "s";
    
    flower.style.animationDelay =
      Math.random() * 2 + "s";
    
    flower.style.fontSize =
      18 + Math.random() * 18 + "px";
    
    flowers.appendChild(flower);
    
    setTimeout(() => {
      flower.remove();
    }, 10000);
  }
}


function createConfetti() {
  for (let i = 0; i < 70; i++) {
    const piece = document.createElement("div");
    
    piece.className = "confetti-piece";
    
    piece.style.left = Math.random() * 100 + "vw";
    
    piece.style.background =
      `hsl(${Math.random() * 360}, 80%, 65%)`;
    
    piece.style.animationDelay =
      Math.random() * 1.5 + "s";
    
    piece.style.animationDuration =
      2 + Math.random() * 2 + "s";
    
    confetti.appendChild(piece);
    
    setTimeout(() => {
      piece.remove();
    }, 5000);
  }
}