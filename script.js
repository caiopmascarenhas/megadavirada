const jogosFamilia = [
  // Caio
  { id: 1, name: "Caio", numbers: [10, 15, 20, 29, 47, 51] },
  { id: 2, name: "Caio", numbers: [3, 16, 28, 32, 36, 53] },
  { id: 3, name: "Caio", numbers: [9, 26, 30, 41, 50, 60] },
  { id: 4, name: "Caio", numbers: [11, 25, 30, 34, 44, 47] },

  // Jessica
  { id: 5, name: "Jessica", numbers: [7, 14, 23, 31, 42, 58] },
  { id: 6, name: "Jessica", numbers: [8, 15, 23, 37, 42, 56] },
  { id: 7, name: "Jessica", numbers: [4, 7, 32, 52, 57, 59] },
  { id: 8, name: "Jessica", numbers: [4, 14, 18, 26, 34, 43] },

  // Jonathan
  { id: 9, name: "Jonathan", numbers: [1, 3, 9, 16, 20, 24] },
  { id: 10, name: "Jonathan", numbers: [1, 9, 12, 24, 55, 59] },
  { id: 11, name: "Jonathan", numbers: [14, 19, 24, 30, 34, 36] },
  { id: 12, name: "Jonathan", numbers: [2, 4, 8, 22, 32, 45] },

  // Ariane
  { id: 13, name: "Ariane", numbers: [1, 11, 17, 27, 32, 52] },
  { id: 14, name: "Ariane", numbers: [1, 13, 15, 21, 29, 47] },
  { id: 15, name: "Ariane", numbers: [2, 13, 27, 37, 52, 58] },
  { id: 16, name: "Ariane", numbers: [2, 16, 21, 39, 51, 59] },

  // Mario
  { id: 17, name: "Mario", numbers: [5, 8, 19, 27, 46, 60] },
  { id: 18, name: "Mario", numbers: [14, 20, 27, 33, 40, 47] },
  { id: 19, name: "Mario", numbers: [2, 12, 27, 34, 43, 55] },
  { id: 20, name: "Mario", numbers: [2, 5, 8, 19, 33, 55] },

  // Tony / Bia
  { id: 21, name: "Tony/Bia", numbers: [6, 18, 24, 27, 28, 45] },
  { id: 22, name: "Tony/Bia", numbers: [8, 12, 34, 52, 57, 60] },
  { id: 23, name: "Tony/Bia", numbers: [3, 13, 21, 25, 37, 43] },
  { id: 24, name: "Tony/Bia", numbers: [8, 12, 47, 53, 55, 59] },

  // Gilmar
  { id: 25, name: "Gilmar", numbers: [4, 7, 12, 16, 28, 39] },
  { id: 26, name: "Gilmar", numbers: [2, 6, 11, 22, 25, 42] },
  { id: 27, name: "Gilmar", numbers: [8, 14, 21, 23, 35, 51] },
  { id: 28, name: "Gilmar", numbers: [12, 17, 20, 34, 42, 47] },

  // Sislene
  { id: 29, name: "Sislene", numbers: [17, 23, 28, 37, 46, 51] },
  { id: 30, name: "Sislene", numbers: [5, 11, 21, 27, 30, 55] },
  { id: 31, name: "Sislene", numbers: [4, 14, 25, 33, 51, 57] },
  { id: 32, name: "Sislene", numbers: [3, 13, 33, 53, 56, 60] },

  // Regina
  { id: 33, name: "Regina", numbers: [6, 10, 24, 33, 45, 52] },
  { id: 34, name: "Regina", numbers: [4, 15, 20, 36, 48, 56] },
  { id: 35, name: "Regina", numbers: [9, 17, 25, 38, 41, 60] },
  { id: 36, name: "Regina", numbers: [7, 14, 22, 29, 40, 54] },

  // Zé
  { id: 37, name: "Zé", numbers: [3, 14, 22, 31, 45, 58] },
  { id: 38, name: "Zé", numbers: [6, 8, 27, 36, 49, 60] },
  { id: 39, name: "Zé", numbers: [4, 9, 18, 34, 42, 55] },
  { id: 40, name: "Zé", numbers: [7, 16, 25, 38, 47, 59] },

  // Danilo
  { id: 41, name: "Danilo", numbers: [5, 11, 19, 28, 37, 53] },
  { id: 42, name: "Danilo", numbers: [2, 14, 23, 31, 46, 59] },
  { id: 43, name: "Danilo", numbers: [8, 16, 21, 35, 42, 57] },
  { id: 44, name: "Danilo", numbers: [1, 12, 18, 27, 39, 55] },

  // Daniel
  { id: 45, name: "Daniel", numbers: [7, 12, 25, 34, 48, 53] },
  { id: 46, name: "Daniel", numbers: [1, 9, 18, 33, 47, 60] },
  { id: 47, name: "Daniel", numbers: [3, 11, 19, 27, 42, 56] },
  { id: 48, name: "Daniel", numbers: [2, 8, 17, 29, 44, 58] },

  // Ladin
  { id: 49, name: "Ladin", numbers: [6, 13, 37, 43, 54, 71] },
  { id: 50, name: "Ladin", numbers: [7, 9, 11, 21, 24, 56] },
  { id: 51, name: "Ladin", numbers: [7, 13, 22, 34, 54, 56] },
  { id: 52, name: "Ladin", numbers: [3, 7, 16, 22, 34, 51] },

  // Silvana
  { id: 53, name: "Silvana", numbers: [9, 18, 24, 26, 28, 56] },
  { id: 54, name: "Silvana", numbers: [4, 15, 17, 23, 44, 52] },
  { id: 55, name: "Silvana", numbers: [6, 11, 12, 16, 29, 30] },
  { id: 56, name: "Silvana", numbers: [2, 13, 32, 39, 49, 53] },
];

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
