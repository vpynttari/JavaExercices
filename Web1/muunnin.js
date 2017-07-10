var buttonPressForw = document.querySelector("#butForw");
var buttonPressBack = document.querySelector("#butBack");
var inputText = document.getElementById("inputText");
var outputText = document.getElementById("outputText");
var statusText = document.getElementById("operationText");
var forward = true;

// käsintehdyt apu-arrayt muutoksia varten
const reunaMerkitVasen = ['1','q','a','z','Q','A','Z'];
const reunaMerkitOikea = ['0','å','ä','m','Å','Ä','M'];
const aakkosetOrg = ['1','2','3','4','5','6','7','8','9','0','q','w','e','r','t','y','u','i','o','p',
'å','a','s','d','f','g','h','j','k','l','ö','ä','z','x','c','v','b','n','m'];
const aakkosetShift = ['2','3','4','5','6','7','8','9','0','q','w','e','r','t','y','u','i','o','p',
'å','a','s','d','f','g','h','j','k','l','ö','ä','z','x','c','v','b','n','m','1'];
const aakkosetOrgCaps = aakkosetOrg.map(x => x.toUpperCase());
const aakkosetShiftCaps = aakkosetShift.map(x => x.toUpperCase());

buttonPressForw.addEventListener("click", function (){
    forward = true;
    outputText.innerHTML = transform(inputText.value);
    statusText.innerHTML = "Muunnettu eteenpäin.";
});

buttonPressBack.addEventListener("click", function (){
    forward = false;
    outputText.innerHTML = transform(inputText.value);
    statusText.innerHTML = "Muunnettu taaksepäin.";
});

// Metodi ilman looppeja tehtävänannon mukaan
function transform(text) {
    return text.split("").map(x => qwertyMove(x)).join("");
}

// riippuen pyydetystä suunnasta, palautetaan sopiva merkki.
function qwertyMove(kirjain){
    if (forward){    
        if (reunaMerkitOikea.includes(kirjain)) {
            return reunaMerkitVasen[(reunaMerkitOikea.indexOf(kirjain))];
        }
        else if (aakkosetOrgCaps.includes(kirjain)){
            return aakkosetShiftCaps[(aakkosetOrgCaps.indexOf(kirjain))];
        }
        else if (aakkosetOrg.includes(kirjain)) {
            return aakkosetShift[(aakkosetOrg.indexOf(kirjain))];
        } else {
            return kirjain;
        }
    } else {
        if (reunaMerkitVasen.includes(kirjain)) {
            return reunaMerkitOikea[(reunaMerkitVasen.indexOf(kirjain))];
        }
        else if (aakkosetOrgCaps.includes(kirjain)){
            return aakkosetOrgCaps[(aakkosetShiftCaps.indexOf(kirjain))];
        } else if (aakkosetOrg.includes(kirjain)) {
            return aakkosetOrg[(aakkosetShift.indexOf(kirjain))];
        } else {
            return kirjain;
        }
    }
}