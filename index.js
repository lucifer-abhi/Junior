const userdata = [
  { id: 1, designation: "PRINCIPAL", audio: "1.ogg", name: "Dr. Nimesh Singh", img: "1.png" },
  { id: 2, designation: "H.O.D OF BCA", audio: "2.mp3", name: "Ms. Manisha Srivastava", img: "2.png" },
  { id: 3, designation: "Faculty", audio: "3.mp3", name: "Ms. Namarata Kumari", img: "3.png" },
  { id: 4, designation: "Faculty", audio: "4.mp3", name: "Mr. Sharad Nigam", img: "4.png" },
  { id: 5, designation: "Faculty", audio: "5.mp3", name: "Mr. Rohit Dixit", img: "5.png" },
];

let currentAudio = null;

const createEmojiBitmap = (data) => {
  let element = "";
  for (let i = 0; i < data.length; i++) {
    element += `
    <div class="card">
    <img src="./image/${data[i].img}" alt="Developer Image" />
    <h2 class="card-title">${data[i].name}</h2>
      <p style="font-size: 20px;">
        <br><br>
       (${data[i].designation})
       <br>
      </p>
    <div class="div1"></div>
    <audio id="myAudio${data[i].id}">
      <source src="./image/${data[i].audio}" />
    </audio>
    <div>
    <button id="playButton${data[i].id}" onclick="playAudio(${data[i].id})">Play</button>
    <button id="pauseButton${data[i].id}" onclick="pauseAudio(${data[i].id})">Pause</button>
    </div>
   
  </div>
    `;
  }

  document.getElementById("container").innerHTML = element;
};

createEmojiBitmap(userdata);

function playAudio(id) {
  const newEmoji = document.getElementById(`myAudio${id}`);
  const ele = document.getElementById(`playButton${id}`);

  if (currentAudio && currentAudio != id) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    const prevIndex = currentAudio.id.replace("myAudio", "");
    document.getElementById(`playButton${prevIndex}`).innerHTML = "Play";
  }

  ele.innerHTML = "Playing...";
  newEmoji.play();
  currentAudio = newEmoji;
}

function pauseAudio(id) {
  const audio = document.getElementById(`myAudio${id}`);
  const ele = document.getElementById(`pauseButton${id}`);
  ele.innerHTML = "Paused";
  audio.pause();
}
