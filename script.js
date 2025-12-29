const jogosFamilia = [];

const jogosEinstein = [
  { id: 1, name: "Jogo 1", numbers: [5, 10, 20, 33, 34, 58] },
  { id: 2, name: "Jogo 2", numbers: [4, 11, 27, 32, 45, 56] },
  { id: 3, name: "Jogo 3", numbers: [7, 8, 13, 26, 39, 60] },
  { id: 4, name: "Jogo 4", numbers: [1, 17, 25, 42, 47, 54] },

  { id: 5, name: "Jogo 5", numbers: [6, 9, 13, 14, 22, 27] },
  { id: 6, name: "Jogo 6", numbers: [2, 5, 16, 18, 50, 56] },
  { id: 7, name: "Jogo 7", numbers: [18, 37, 43, 45, 51, 53] },
  { id: 8, name: "Jogo 8", numbers: [13, 14, 18, 35, 42, 51] },

  { id: 9, name: "Jogo 9", numbers: [1, 10, 25, 34, 35, 46] },
  { id: 10, name: "Jogo 10", numbers: [27, 28, 35, 42, 49, 53] },
  { id: 11, name: "Jogo 11", numbers: [7, 17, 31, 51, 52, 60] },
  { id: 12, name: "Jogo 12", numbers: [3, 5, 26, 32, 35, 59] },

  { id: 13, name: "Jogo 13", numbers: [1, 14, 21, 28, 31, 50] },
  { id: 14, name: "Jogo 14", numbers: [3, 26, 41, 48, 54, 59] },
  { id: 15, name: "Jogo 15", numbers: [4, 10, 50, 54, 55, 57] },
  { id: 16, name: "Jogo 16", numbers: [4, 17, 19, 31, 38, 56] },

  { id: 17, name: "Jogo 17", numbers: [3, 8, 16, 18, 22, 40] },
  { id: 18, name: "Jogo 18", numbers: [12, 19, 23, 28, 39, 51] },
  { id: 19, name: "Jogo 19", numbers: [8, 15, 24, 25, 49, 54] },
  { id: 20, name: "Jogo 20", numbers: [15, 32, 38, 43, 46, 49] },

  { id: 21, name: "Jogo 21", numbers: [9, 15, 32, 33, 50, 52] },
  { id: 22, name: "Jogo 22", numbers: [3, 7, 43, 49, 51, 59] },
  { id: 23, name: "Jogo 23", numbers: [12, 17, 26, 41, 42, 59] },
  { id: 24, name: "Jogo 24", numbers: [13, 22, 45, 46, 59, 60] },
];

const jogosFriends = [];

let jogosAtuais = [];

function verificarSenha() {
  const senha = document.getElementById("passwordInput").value;
  const errorMessage = document.getElementById("errorMessage");
  const listHiae = document.getElementById("listHiae");
  const listFamily = document.getElementById("listFamily");
  const listFriends = document.getElementById("listFriends");

  document.getElementById("resultBody").innerHTML = "";
  document.getElementById("resultTable").classList.add("hidden");

  if (senha === "familia") {
    jogosAtuais = jogosFamilia;
    errorMessage.classList.add("hidden");
    listHiae.classList.add("hidden");
    listFriends.classList.add("hidden");
    listFamily.classList.remove("hidden");
  } else if (senha === "core") {
    jogosAtuais = jogosEinstein;
    errorMessage.classList.add("hidden");
    listHiae.classList.remove("hidden");
    listFriends.classList.add("hidden");
    listFamily.classList.add("hidden");
  } else if (senha === "friends") {
    jogosAtuais = jogosFriends;
    errorMessage.classList.add("hidden");
    listHiae.classList.add("hidden");
    listFriends.classList.remove("hidden");
    listFamily.classList.add("hidden");
  } else {
    errorMessage.classList.remove("hidden");
    return;
  }

  document.getElementById("passwordScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");
  renderInputs();
  renderTable();
}

function renderInputs() {
  const inputsContainer = document.getElementById("inputsContainer");
  inputsContainer.innerHTML = "";

  const maxCols = jogosAtuais.reduce(
    (max, game) => Math.max(max, game.numbers.length),
    0
  );

  for (let i = 1; i <= maxCols; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.id = `num${i}`;
    input.min = 1;
    input.max = 80;
    inputsContainer.appendChild(input);
  }
}

function renderTable() {
  const maxCols = jogosAtuais.reduce(
    (max, game) => Math.max(max, game.numbers.length),
    0
  );

  const headerCells = `
        <tr>
          <th>Id</th>
          <th>Nome</th>
          ${Array.from({ length: maxCols })
            .map((_, i) => `<th>Número ${i + 1}</th>`)
            .join("")}
        </tr>
      `;

  document.getElementById("mockedHeader").innerHTML = headerCells;
  document.getElementById("resultHeader").innerHTML = headerCells;

  const mockedBody = document.getElementById("mockedGamesBody");
  mockedBody.innerHTML = "";

  jogosAtuais.forEach((game) => {
    const row = `<tr>
          <td>${game.id}</td>
          <td>${game.name}</td>
          ${Array.from({ length: maxCols })
            .map((_, idx) => {
              const n = game.numbers[idx];
              return n !== undefined ? `<td>${n}</td>` : `<td></td>`;
            })
            .join("")}
        </tr>`;
    mockedBody.innerHTML += row;
  });
}

function verificarNumeros() {
  const inputs = [];
  const inputsElements = document.querySelectorAll("#inputsContainer input");
  inputsElements.forEach((input) => {
    const val = parseInt(input.value);
    if (!isNaN(val)) inputs.push(val);
  });

  const maxCols = jogosAtuais.reduce(
    (max, game) => Math.max(max, game.numbers.length),
    0
  );

  const resultBody = document.getElementById("resultBody");
  const resultTable = document.getElementById("resultTable");

  resultBody.innerHTML = "";
  resultTable.classList.add("hidden");

  let encontrouAcertos = false;

  jogosAtuais.forEach((game) => {
    const matches = game.numbers.filter((num) => inputs.includes(num));
    if (matches.length >= 4) {
      encontrouAcertos = true;
      const row = `<tr>
            <td>${game.id}</td>
            <td>${game.name}</td>
            ${Array.from({ length: maxCols })
              .map((_, idx) => {
                const n = game.numbers[idx];
                return n !== undefined
                  ? `<td class="${inputs.includes(n) ? "hit" : ""}">${n}</td>`
                  : "<td></td>";
              })
              .join("")}
          </tr>`;
      resultBody.innerHTML += row;
    }
  });

  if (encontrouAcertos) {
    resultTable.classList.remove("hidden");
  }

  document.querySelectorAll("#mockedGamesBody tr").forEach((row) => {
    const cells = row.querySelectorAll("td:nth-child(n+3)");
    cells.forEach((cell) => {
      cell.classList.remove("hit");
      const num = parseInt(cell.innerText);
      if (!isNaN(num) && inputs.includes(num)) {
        cell.classList.add("hit");
      }
    });
  });
}
