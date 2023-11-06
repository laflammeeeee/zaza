"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", siteCode);
let bands = [];
const generateMetalBandRow = (metalband) => {
    const row = document.createElement("div");
    row.classList.add("band-table");
    const idCell = document.createElement("div");
    idCell.classList.add("band-data", "band-id");
    idCell.innerHTML = metalband.id.toString();
    row.appendChild(idCell);
    const nameCell = document.createElement("div");
    nameCell.classList.add("band-data", "band-name");
    nameCell.innerHTML = metalband.name.toString();
    row.appendChild(nameCell);
    const formedCell = document.createElement("div");
    formedCell.classList.add("band-data", "band-formed");
    formedCell.innerHTML = metalband.formed.toString();
    row.appendChild(formedCell);
    const locationCell = document.createElement("div");
    locationCell.classList.add("band-data", "band-location");
    locationCell.innerHTML = metalband.location.toString();
    row.appendChild(locationCell);
    const countryCell = document.createElement("div");
    countryCell.classList.add("band-data", "band-country");
    countryCell.innerHTML = metalband.country.toString();
    row.appendChild(countryCell);
    const membersCell = document.createElement("div");
    membersCell.classList.add("band-data", "band-members");
    membersCell.innerHTML = metalband.members.toString();
    row.appendChild(membersCell);
    const albumsCell = document.createElement("div");
    albumsCell.classList.add("band-data", "band-albums");
    albumsCell.innerHTML = `Has ${metalband.albums.length.toString()} albums`;
    row.appendChild(albumsCell);
    return row;
};
const displayBands = (metalbands) => {
    const container = document.getElementById("band-container");
    container.innerHTML = "";
    for (const metalband of metalbands) {
        const metalBandRow = generateMetalBandRow(metalband);
        container.append(metalBandRow);
    }
};
function siteCode() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield loadData();
        bands = data;
        displayBands(bands);
    });
}
const loadData = () => __awaiter(void 0, void 0, void 0, function* () {
    const datauri = "https://raw.githubusercontent.com/Kenco24/InternetProgramming/main/random%20projects/midterm-metalbands/metalbands.json";
    const response = yield fetch(datauri);
    if (!response.ok) {
        throw new Error("The data is not there");
    }
    const data = yield response.json();
    console.log(data[0].albums[8].year);
    return data;
});
