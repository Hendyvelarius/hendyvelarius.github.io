/**
 * List daftar penyakit
 */
const daftarPenyakit = {}

/**
 * List daftar obat
 */
const daftarObat = [];

const STATE = {
  selectedGejala: {
    gejala1: "",
    gejala2: "",
    gejala3: "",
    gejala4: "",
    gejala5: "",
    gejala6: ""
  }
};

const ALL_GEJALA_INPUT = document.querySelectorAll(".gejala-input");

function handleGejalaChange(e) {
  const id = e.name;
  STATE.selectedGejala[id] = e.value;

  ALL_GEJALA_INPUT.forEach(function (gejalaInput) {
    Array.from(gejalaInput.children).forEach(function (option) {
      if (option.value !== "default") {
        option.disabled = Object.values(STATE.selectedGejala).includes(option.value);
      }
    })
  })
}