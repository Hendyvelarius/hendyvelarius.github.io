/**
 * List daftar penyakit
 */
const daftarPenyakit = {
  Influenza: {
    definisi: "Influenza yang lebih dikenal dengan sebutan flu, merupakan penyakit menular yang disebabkan oleh virus RNA dari famili Orthomyxoviridae (virus influenza), yang menyerang unggas dan mamalia. Biasanya, influenza ditularkan melalui udara lewat batuk atau bersin. Bisa pula menular melalui kontak dengan permukaan yang telah terkontaminasi.",
    gejala: ["Batuk", "Sakit kepala", "Nyeri otot", "Tenggorokan sakit", "Menggigil", "Bersin-bersin", "Badan lemas"],
    obat: [
      {
        nama: "DEMACOLIN",
        link: "https://www.tokopedia.com/kimiafarmaapotekjatengos/demacolin-strip-10-tablet-obat-flu-kimia-farma?extParam=ivf%3Dfalse%26whid%3D16727874&src=topads"
      },
      {
        nama: "ALPARA",
        link: "https://www.tokopedia.com/apotekanugrahmlawai/alpara-10-kaplet?extParam=ivf%3Dfalse&src=topads"
      },
      {
        nama: "FLUTAMOL",
        link: "https://www.tokopedia.com/halomedikatebet/flutamol-10-kaplet?extParam=ivf%3Dfalse&src=topads"
      }
    ]
  },
  Maag: {
    definisi: "Sakit maag adalah rasa tidak nyaman di perut, seperti perut terasa penuh, rasa panas di perut bagian atas, serta perut kembung. Kondisi ini merupakan gejala penyakit di lambung, seperti tukak lambung atau gastritis.",
    gejala: ["Sakit perut", "Perut kembung", "Sendawa", "Mulut asam", "Mual"],
    obat: [
      {
        nama: "PROMAG SUSPENSI",
        link: "https://www.tokopedia.com/b3st-shop/promag-suspensi-per-box-isi-6-sachet-7ml-botol-60ml-obat-sakit-maag-per-box-6-sach-53058?utm_source=google&utm_medium=organic&utm_campaign=pdp"
      },
      {
        nama: "MYLANTA CAIR",
        link: "https://www.tokopedia.com/mandjur/mylanta-cair-isi-150-ml-obat-pereda-sakit-maag-nyeri-ulu-hati?extParam=ivf%3Dfalse%26keyword%3Dmylanta+cair%26search_id%3D20241205095225D4E73DC5D774DE1DEP1A%26src%3Dsearch"
      },
      {
        nama: "LANPRACID KAPSUL",
        link: "https://www.tokopedia.com/century-online/lanpracid-30-mg-1-blister-isi-10-kapsul-lansoprazole-sakit-maag?extParam=ivf%3Dfalse%26keyword%3Dlanpracid+kapsul%26search_id%3D20241205095339567EAB23A4BBD225103N%26shop_tier%3D2%26src%3Dsearch%26whid%3D17729598"
      }
    ]
  },
  Demam: {
    definisi: "Demam adalah suatu keadaan saat suhu badan melebihi 37,5 Â°C yang disebabkan oleh penyakit atau peradangan. Demam juga merupakan pertanda bahwa sel darah putih sedang melawan suatu virus atau bakteri. Terdapat banyak cara yang dapat digunakan untuk menurunkan suhu tubuh saat demam. Salah satunya adalah minum air hangat, tempelkan handuk basah di bagian kepala atau dahi sebagai kompres, mandi air hangat serta beristirahat total ataupun mengonsumsi makanan bergizi.",
    gejala: ["Sakit kepala", "Keringat Dingin", "Menggigil", "Batuk", "Tenggorokan sakit", "Nyeri otot", "Badan lemas"],
    obat: [
      {
        nama: "PARACETAMOL",
        link: "https://www.tokopedia.com/mandjur/paracetamol-500-mg-strip-10-kaplet-pereda-nyeri-dan-demam?extParam=ivf%3Dfalse%26keyword%3Dparacetamol%26search_id%3D202412050924410C5612011D6B7B186BOL%26src%3Dsearch"
      },
      {
        nama: "IBUPROFEN",
        link: "https://www.tokopedia.com/mandjur/ibuprofen-200-mg-strip-10-tablet-pereda-nyeri-ringan-dan-sedang?extParam=ivf%3Dfalse&src=topads"
      },
      {nama: "VERMIN", link: "https://www.tokopedia.com/obatobatori/vermin-isi-12?extParam=ivf%3Dfalse&src=topads"}
    ]
  },
  Diare: {
    definisi: "Diare adalah sebuah kondisi ketika pengidapnya buang air besar (BAB) lebih sering dari biasanya. Kondisi ini bisa menyebabkan seseorang BAB sebanyak tiga kali atau lebih dalam satu hari. Selain itu, feses yang keluar juga lebih encer.",
    gejala: ["Sering BAB", "Sakit perut", "Mual", "Badan lemas", "Pusing", "Dehidrasi", "Mulut kering"],
    obat: [
      {
        nama: "NEW DIATABS",
        link: "https://www.tokopedia.com/halomedikabsd/new-diatabs-4-tablet?extParam=ivf%3Dfalse&src=topads"
      },
      {
        nama: "ENTROSTOP",
        link: "https://www.tokopedia.com/aptasysyifatbtgoa/entrostop-strip-12-tablet?extParam=ivf%3Dfalse&src=topads"
      },
      {
        nama: "ORALIT",
        link: "https://www.tokopedia.com/halomedikatebet/oralit-200-4-1-g-1-sachet-obat-diare-halodoc?extParam=ivf%3Dfalse%26keyword%3Doralit%26search_id%3D2024120509280977BAE7EB7CD5AC3C23JK%26src%3Dsearch"
      }
    ]
  },
  Anthrax: {
    definisi: "Antraks (anthrax) adalah infeksi bakteri serius yang disebabkan oleh bakteri Bacillus anthracis. Begitu memasuki tubuh binatang atau manusia, spora menjadi aktif. Kemudian, spora aktif tersebut mulai memperbanyak diri, menghasilkan racun, menyebarkannya ke seluruh tubuh, hingga menyebabkan penyakit infeksi yang berat. Penyakit antraks umumnya memengaruhi kulit dan paru-paru. Pada kasus yang langka, infeksi juga bisa menyerang saluran pencernaan. Seseorang bisa tertular bakteri penyebab antraks lewat kontak dengan binatang, wol, daging, atau kulit binatang yang terinfeksi.",
    gejala: ["Benjol perih", "Luka gatal", "Nyeri otot", "Badan lemas", "Mual", "Luka"],
    obat: [
      {
        nama: "SALEP PENICILIN ANTISEPTIK",
        link: "https://www.tokopedia.com/jlaris/salep-penicilin-antiseptik-salap-untuk-luka-infeksi-diabet?extParam=ivf%3Dfalse%26keyword%3Dpenicilin%26search_id%3D20241205084405D4E73DC5D774DE100S33%26src%3Dsearch&refined=true"
      },
      {
        nama: "CIPROFLOXACIN HEXPHARM",
        link: "https://www.tokopedia.com/apoteksumberrejekig/ciprofloxacin-hexpharm-500-mg-strip-10-tablet?extParam=ivf%3Dfalse%26keyword%3Dciprofloxacin+500+mg%26search_id%3D2024120508471053CE1724E268AC299KL6%26shop_tier%3D2%26src%3Dsearch"
      },
      {
        nama: "DOXYCYCLINE 100 MG",
        link: "https://www.tokopedia.com/apotekrafifarmasukarame/doxycycline-100-mg-1-strip-10-kapsul?extParam=ivf%3Dfalse&src=topads"
      }
    ]
  }
}

/**
 * List daftar gejala
 */
const daftarGejala = [
  "Batuk", "Sakit kepala", "Nyeri otot", "Tenggorokan sakit", "Menggigil", "Bersin-bersin", "Badan lemas",
  "Sakit perut", "Perut kembung", "Sendawa", "Mulut asam", "Mual", "Keringat dingin", "Sering BAB", "Pusing",
  "Dehidrasi", "Benjol perih", "Luka gatal", "Luka hitam", "Mulut kering"
]

const STATE = {
  selectedGejala: {
    gejala1: "",
    gejala2: "",
    gejala3: "",
    gejala4: "",
    gejala5: "",
    gejala6: ""
  },
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

function handleSubmit() {
  const listInputGejala = Object.values(STATE.selectedGejala);
  if (listInputGejala.filter(Boolean).length !== 6) {
    alert("Masukkan 6 gejala!");
    return;
  }
  document.querySelector("#penyakit-form").style.display = "none";
  document.querySelector(".penyakit-card").style.display = "block";

  const namaPenyakit = document.querySelector("#penyakit-name");
  const deskripsiPenyakit = document.querySelector("#penyakit-description");
  const rekomendasi1 = "#rekomendasi-obat-1";
  const rekomendasi2 = "#rekomendasi-obat-2";
  const rekomendasi3 = "#rekomendasi-obat-3";

  const obatTitle = ".obat-title"

  // main function
  const counterGejala = {};

  Object.keys(daftarPenyakit).forEach(function (penyakit) {
    counterGejala[penyakit] = 0;
  });

  listInputGejala.forEach(function (gejala) {
    Object.keys(daftarPenyakit).forEach(function (penyakit) {
      if (daftarPenyakit[penyakit].gejala.includes(gejala)) {
        counterGejala[penyakit]++;
      }
    })
  });

  const sortedGejala = Object.keys(counterGejala).map(function (gejala) {
    return [gejala, counterGejala[gejala]]
  }).sort(function(a, b) {
    return a[1] - b[1];
  });

  // assign value
  let isAmbigu = false;
  let penyakit = sortedGejala[0][0];
  let deskripsi = daftarPenyakit[penyakit].definisi;
  if (sortedGejala[0][1] === sortedGejala[1][1]) {
    penyakit = "Ambigu";
    deskripsi = "kemungkinan sedang kamu alami. Untuk itu, kami merekomendasikan untuk segera mengunjungi dokter dan di-diagnosa secara langsung.";
    isAmbigu = true;
  }

  namaPenyakit.innerText = penyakit;
  deskripsiPenyakit.innerText = deskripsi;
  if (isAmbigu) {
    document.querySelector("#obat-container").style.display = "none";
    return;
  }

  daftarPenyakit[penyakit].obat.forEach(function (obat, index) {
    // document.querySelector(`rekomendasi-obat-${index + 1} img`).src = obat.image;

    document.querySelector(`#rekomendasi-obat-${index + 1} .obat-title`).innerHTML = obat.nama;
    document.querySelector(`#rekomendasi-obat-${index + 1} a`).href = obat.link;
  })
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".gejala-input").forEach(function (selectBox) {
    daftarGejala.forEach(function (gejala) {
      const optionTag = document.createElement("option");
      optionTag.value = gejala;
      optionTag.innerText = gejala;
      selectBox.appendChild(optionTag);
    })
  })
})