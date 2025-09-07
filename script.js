const items = {
    "Gambeson": "gambeson.png",
    "Leather Cuirass": "leather_cuirass.png",
    "Reinforced Leather Armor": "reinforced_leather_armor.png",
    "Mail Armor": "mail_armor.png",
    "Low Quality Mail": "low_quality_mail.png",
    "Leather Armor": "leather_armor.png",
    "Hauberk": "hauberk.png",
    "Iron Cuirass": "mercenarys_armor.png",
    "Demi-Cuirass": "demi_cuirass.png",
    "Plackart with Leather Cuirass": "plackart_leather_cuirass.png",
    "Plackart": "plackart.png",
    "Fauld": "fauld.png",
    "Light Helmet": "light_helmet.png",
    "Iron Helmet": "iron_helmet.png",
    "Kettle Hat": "kettle_hat.png",
    "Cervelliere Helmet": "cervelliere_helmet.png",
    "Chapel de Fer": "chapel_de_fer.png",
    "Open Bascinet": "open_bascinet.png",
    "Italian Bascinet": "italian_bascinet.png",
    "Sallet": "sallet.png",
    "Barbute Helmet": "barbute_helmet.png",
    "Aventail": "aventail.png",
    "Chapel de Fer with Aventail": "chapel_de_fer_aventail.png",
    "Sallet (Bevor and Visor)": "sallet_bevor_visor.png",
    "Bascinet with Visor": "bascinet_visor.png",
    "Visor": "attachable_visor.png",
    "Face Protection": "attachable_face_protection.png"
};

const itemData = {
    gambeson: {
        name: "Gambeson",
        torsoArmor: 5,
        torsoCover: 85,
        limbsArmor: 4,
        limbsCover: 45,
        neckArmor: 0,
        neckCover: 0,
        prestige: 0,
        cost: 50,
        penaltyAGI: 1,
        penaltyEND: 1,
        penaltyCRD: 0
    },
    leather_cuirass: {
        name: "Leather Cuirass",
        torsoArmor: 7,
        torsoCover: 90,
        limbsArmor: 0,
        limbsCover: 0,
        neckArmor: 0,
        neckCover: 0,
        prestige: 3,
        cost: 65,
        penaltyAGI: 0,
        penaltyEND: 1,
        penaltyCRD: 1
    },
    leather_armor: {
        name: "Leather Armor",
        torsoArmor: 5,
        torsoCover: 70,
        limbsArmor: 4,
        limbsCover: 30,
        neckArmor: 0,
        neckCover: 0,
        prestige: 3,
        cost: 65,
        penaltyAGI: 1,
        penaltyEND: 0,
        penaltyCRD: 0
    },
    reinforced_leather_armor: {
        name: "Reinforced Leather Armor",
        torsoArmor: 7,
        torsoCover: 90,
        limbsArmor: 7,
        limbsCover: 25,
        neckArmor: 0,
        neckCover: 0,
        prestige: 5,
        cost: 100,
        penaltyAGI: 1,
        penaltyEND: 1,
        penaltyCRD: 1
    },
    mail_armor: {
        name: "Mail Armor",
        torsoArmor: 12,
        torsoCover: 85,
        limbsArmor: 7,
        limbsCover: 40,
        neckArmor: 0,
        neckCover: 0,
        prestige: 8,
        cost: 160,
        penaltyAGI: 1,
        penaltyEND: 1,
        penaltyCRD: 1
    },
    low_quality_mail: {
        name: "Low Quality Mail",
        torsoArmor: 10,
        torsoCover: 70,
        limbsArmor: 6,
        limbsCover: 30,
        neckArmor: 0,
        neckCover: 0,
        prestige: 2,
        cost: 130,
        penaltyAGI: 2,
        penaltyEND: 1,
        penaltyCRD: 1
    },
    hauberk: {
        name: "Hauberk",
        torsoArmor: 14,
        torsoCover: 85,
        limbsArmor: 7,
        limbsCover: 40,
        neckArmor: 0,
        neckCover: 0,
        prestige: 8,
        cost: 180,
        penaltyAGI: 2,
        penaltyEND: 1,
        penaltyCRD: 2
    },
    iron_cuirass: {
        name: "Iron Cuirass",
        torsoArmor: 25,
        torsoCover: 100,
        limbsArmor: 0,
        limbsCover: 0,
        neckArmor: 0,
        neckCover: 0,
        prestige: 7,
        cost: 250,
        penaltyAGI: 2,
        penaltyEND: 2,
        penaltyCRD: 2
    },
    demi_cuirass: {
        name: "Demi-Cuirass",
        torsoArmor: 25,
        torsoCover: 50,
        limbsArmor: 0,
        limbsCover: 0,
        neckArmor: 0,
        neckCover: 0,
        prestige: 10,
        cost: 180,
        penaltyAGI: 0,
        penaltyEND: 1,
        penaltyCRD: 0
    },
    plackart: {
        name: "Plackart",
        torsoArmor: 30,
        torsoCover: 45,
        limbsArmor: 0,
        limbsCover: 0,
        neckArmor: 0,
        neckCover: 0,
        prestige: 10,
        cost: 180,
        penaltyAGI: 0,
        penaltyEND: 0,
        penaltyCRD: 0
    },
    plackart_leather_cuirass: {
        name: "Plackart with Leather Cuirass",
        torsoArmor: 25,
        torsoCover: 65,
        limbsArmor: 0,
        limbsCover: 0,
        neckArmor: 0,
        neckCover: 0,
        prestige: 2,
        cost: 205,
        penaltyAGI: 1,
        penaltyEND: 2,
        penaltyCRD: 1
    },
    fauld: {
        name: "Fauld",
        torsoArmor: 30,
        torsoCover: 70,
        limbsArmor: 0,
        limbsCover: 0,
        neckArmor: 0,
        neckCover: 0,
        prestige: 15,
        cost: 270,
        penaltyAGI: 1,
        penaltyEND: 1,
        penaltyCRD: 0
    },
    aventail: {
        name: "Aventail",
        headArmor: 5,
        headCover: 80,
        neckArmor: 5,
        neckCover: 50,
        prestige: 3,
        cost: 75,
        penaltyAGI: 0,
        penaltyEND: 0,
        penaltyCRD: 1
    },
    light_helmet: {
        name: "Light Helmet",
        headArmor: 10,
        headCover: 30,
        neckArmor: 0,
        neckCover: 0,
        prestige: 3,
        cost: 50,
        penaltyAGI: 0,
        penaltyEND: 0,
        penaltyCRD: 1
    },
    iron_helmet: {
        name: "Iron Helmet",
        headArmor: 12,
        headCover: 40,
        neckArmor: 0,
        neckCover: 0,
        prestige: 3,
        cost: 55,
        penaltyAGI: 1,
        penaltyEND: 1,
        penaltyCRD: 0
    },
    cervelliere_helmet: {
        name: "Cervelliere Helmet",
        headArmor: 12,
        headCover: 50,
        neckArmor: 0,
        neckCover: 0,
        prestige: 5,
        cost: 100,
        penaltyAGI: 0,
        penaltyEND: 0,
        penaltyCRD: 0
    },
    open_bascinet: {
        name: "Open Bascinet",
        headArmor: 15,
        headCover: 70,
        neckArmor: 0,
        neckCover: 0,
        prestige: 6,
        cost: 180,
        penaltyAGI: 1,
        penaltyEND: 1,
        penaltyCRD: 1
    },
    italian_bascinet: {
        name: "Italian Bascinet",
        headArmor: 19,
        headCover: 70,
        neckArmor: 0,
        neckCover: 0,
        prestige: 10,
        cost: 240,
        penaltyAGI: 1,
        penaltyEND: 0,
        penaltyCRD: 1
    },
    barbute_helmet: {
        name: "Barbute Helmet",
        headArmor: 25,
        headCover: 95,
        neckArmor: 0,
        neckCover: 0,
        prestige: 10,
        cost: 285,
        penaltyAGI: 1,
        penaltyEND: 0,
        penaltyCRD: 3
    },
    kettle_hat: {
        name: "Kettle Hat",
        headArmor: 12,
        headCover: 60,
        neckArmor: 0,
        neckCover: 0,
        prestige: 3,
        cost: 65,
        penaltyAGI: 1,
        penaltyEND: 0,
        penaltyCRD: 1
    },
    chapel_de_fer: {
        name: "Chapel de Fer",
        headArmor: 15,
        headCover: 60,
        neckArmor: 0,
        neckCover: 0,
        prestige: 5,
        cost: 110,
        penaltyAGI: 1,
        penaltyEND: 0,
        penaltyCRD: 1
    },
    chapel_de_fer_aventail: {
        name: "Chapel de Fer with Aventail",
        headArmor: 15,
        headCover: 80,
        neckArmor: 5,
        neckCover: 50,
        prestige: 8,
        cost: 150,
        penaltyAGI: 1,
        penaltyEND: 0,
        penaltyCRD: 1
    },
    sallet: {
        name: "Sallet",
        headArmor: 17,
        headCover: 65,
        neckArmor: 7,
        neckCover: 10,
        prestige: 6,
        cost: 180,
        penaltyAGI: 1,
        penaltyEND: 1,
        penaltyCRD: 2
    },
    sallet_bevor_visor: {
        name: "Sallet (Bevor and Visor)",
        headArmor: 17,
        headCover: 90,
        neckArmor: 7,
        neckCover: 10,
        prestige: 12,
        cost: 240,
        penaltyAGI: 2,
        penaltyEND: 1,
        penaltyCRD: 2
    },
    bascinet_visor: {
        name: "Bascinet with Visor",
        headArmor: 19,
        headCover: 100,
        neckArmor: 0,
        neckCover: 0,
        prestige: 15,
        cost: 300,
        penaltyAGI: 1,
        penaltyEND: 2,
        penaltyCRD: 3
    },
    attachable_visor: {
        name: "Visor",
        headArmor: 2,
        headCover: 30,
        neckArmor: 0,
        neckCover: 0,
        prestige: 6,
        cost: 55,
        penaltyAGI: 1,
        penaltyEND: 1,
        penaltyCRD: 1
    },
    attachable_face_protection: {
        name: "Face Protection",
        headArmor: 1,
        headCover: 15,
        neckArmor: 0,
        neckCover: 0,
        prestige: 3,
        cost: 30,
        penaltyAGI: 1,
        penaltyEND: 0,
        penaltyCRD: 0
    }
}

// Crafting recipes
const recipes = [
// Torso: Padded Chainmail
{ left: ["Gambeson", "Leather Cuirass", "Reinforced Leather Armor", "Leather Armor"], right: ["Mail Armor", "Low Quality Mail", "Hauberk"], result: "Padded Chainmail", image: "combined_armor.png", trait: 1, attackChance: 1 },
// Torso: Padded Cuirass
{ left: ["Gambeson", "Leather Armor", "Leather Cuirass", "Reinforced Leather Armor"], right: ["Iron Cuirass", "Demi-Cuirass", "Plackart with Leather Cuirass", "Plackart", "Fauld"], result: "Padded Cuirass", image: "mercenarys_armor.png", trait: 1, attackChance: 1 },
// Torso: Cuirass with Mail
{ left: ["Low Quality Mail", "Mail Armor", "Hauberk"], right: ["Iron Cuirass", "Demi-Cuirass", "Plackart with Leather Cuirass", "Plackart", "Fauld"], result: "Cuirass with Mail", image: "condottieri_armor.png", trait: 1, attackChance: 1 },
// Torso: Full Cuirass
{ left: ["Demi-Cuirass", "Fauld"], right: ["Plackart with Leather Cuirass", "Plackart"], result: "Full Cuirass", image: "mercenarys_armor.png", trait: 1, attackChance: 1 },


// Helmets + Aventail
{ left: ["Light Helmet", "Iron Helmet", "Cervelliere Helmet", "Open Bascinet", "Italian Bascinet", "Sallet", "Barbute Helmet"], right: ["Aventail"], result: "Helmet with Aventail", image: "bascinet_aventail.png", trait: 2, attackChance: 2 },
{ left: ["Kettle Hat", "Chapel de Fer"], right: ["Aventail"], result: "Helmet with Aventail", image: "chapel_de_fer_aventail.png", trait: 2, attackChance: 2 },
{ left: ["Aventail"], right: ["Light Helmet", "Iron Helmet", "Cervelliere Helmet", "Open Bascinet", "Italian Bascinet", "Sallet", "Barbute Helmet"], result: "Helmet with Aventail", image: "bascinet_aventail.png", trait: 2, attackChance: 2 },
{ left: ["Aventail"], right: ["Kettle Hat", "Chapel de Fer"], result: "Helmet with Aventail", image: "chapel_de_fer_aventail.png", trait: 2, attackChance: 2 },


// Helmets + Visor & Aventail
{ left: ["Sallet (Bevor and Visor)", "Bascinet with Visor"], right: ["Aventail"], result: "Helmet with Visor and Aventail", image: "bascinet_visor_aventail.png", trait: 2, attackChance: 2 },
{ left: ["Aventail"], right: ["Sallet (Bevor and Visor)", "Bascinet with Visor"], result: "Helmet with Visor and Aventail", image: "bascinet_visor_aventail.png", trait: 2, attackChance: 2 },


// Visor add-ons
{ left: ["Visor"], right: ["Open Bascinet", "Italian Bascinet", "Sallet"], result: "Helmet with Visor", image: "bascinet_visor.png", trait: 3, attackChance: 3 },
{ left: ["Open Bascinet", "Italian Bascinet", "Sallet"], right: ["Visor"], result: "Helmet with Visor", image: "bascinet_visor.png", trait: 3, attackChance: 3 },


// Face protection
{ left: ["Face Protection"], right: ["Open Bascinet", "Italian Bascinet", "Sallet", "Light Helmet"], result: "Helmet with Face Protection", image: "sallet_bevor_visor.png", trait: 3, attackChance: 5 },
{ left: ["Open Bascinet", "Italian Bascinet", "Sallet", "Light Helmet"], right: ["Face Protection"], result: "Helmet with Face Protection", image: "sallet_bevor_visor.png", trait: 3, attackChance: 5 },


// Face protection for kettle/chapel
{ left: ["Face Protection"], right: ["Kettle Hat", "Chapel de Fer"], result: "Helmet with Face Protection", image: "chapel_de_fer_face_protection.png", trait: 3, attackChance: 5 },
{ left: ["Kettle Hat", "Chapel de Fer"], right: ["Face Protection"], result: "Helmet with Face Protection", image: "chapel_de_fer_face_protection.png", trait: 3, attackChance: 5 },


// Face protection on pre-aventail chapel
{ left: ["Chapel de Fer with Aventail"], right: ["Face Protection"], result: "Helmet with Face Protection", image: "chapel_de_fer_aventail_face_protection.png", trait: 3, attackChance: 5 },
{ left: ["Face Protection"], right: ["Chapel de Fer with Aventail"], result: "Helmet with Face Protection", image: "chapel_de_fer_aventail_face_protection.png", trait: 3, attackChance: 5 }
];

// Populate selects
const leftSelect = document.getElementById("leftItem");
const rightSelect = document.getElementById("rightItem");
// Populate Left Select
Object.keys(items).forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    leftSelect.appendChild(opt);
});

updateRightOptions();

// When left changes → filter right options
leftSelect.addEventListener("change", updateRightOptions);

function updateRightOptions() {
    const left = leftSelect.value;
    rightSelect.innerHTML = ""; // clear old options
    let validOptions = new Set();

    recipes.forEach(r => {
        if (r.left.includes(left)) {
            r.right.forEach(opt => validOptions.add(opt));
        }
        if (r.right.includes(left)) {
            r.left.forEach(opt => validOptions.add(opt));
        }
    });

    if (validOptions.size === 0) {
        const opt = document.createElement("option");
        opt.value = ""; opt.textContent = "No valid options";
        rightSelect.appendChild(opt);
    } else {
        validOptions.forEach(optName => {
            const opt = document.createElement("option");
            opt.value = optName;
            opt.textContent = optName;
            rightSelect.appendChild(opt);
        });
    }

    // update preview image
    document.getElementById("leftImage").src = "images/" + items[left];
    document.getElementById("rightImage").src = "images/" + items[rightSelect[0].value];
}

// Also update image when right changes
rightSelect.addEventListener("change", () => {
    const right = rightSelect.value;
    if (right) {
        document.getElementById("rightImage").src = "images/" + items[right];
    }
});

// Crafting logic
function craft() {
    const left = Object.values(itemData).find(item => item.name === leftSelect.value);
    const right = Object.values(itemData).find(item => item.name === rightSelect.value);
    const craftsmanship = parseInt(document.getElementById("craftsmanship").value, 10);
    const talent = document.getElementById("talent").checked;
    const res = document.getElementById("result");

    let recipe = recipes.find(r => r.left.includes(left.name) && r.right.includes(right.name));
    if (!recipe) recipe = recipes.find(r => r.left.includes(right.name) && r.right.includes(left.name));

    let torsoArmor = 0, torsoCover = 0, headArmor = 0, headCover = 0, limbsArmor = 0, limbsCover = 0, neckArmor = 0, neckCover = 0, prestige = 0, cost = 0, penaltyAGI = 0, penaltyEND = 0, penaltyCRD = 0;


    if (recipe) {
        if (recipe.trait === 1 && recipe.attackChance === 1) {
            torsoArmor = 0, torsoCover = 0, limbsArmor = 0, limbsCover = 0, neckArmor = 0, neckCover = 0, prestige = 0, cost = 0, penaltyAGI = 0, penaltyEND = 0, penaltyCRD = 0;

            if (left.torsoArmor >= right.torsoArmor)
                torsoArmor = left.torsoArmor + 1;
            else
                torsoArmor = right.torsoArmor + 1;

            if (left.torsoCover >= right.torsoCover)
                torsoCover = Math.ceil(right.torsoCover / 2.5) + right.torsoCover;
            else if (right.torsoCover >= left.torsoCover)
                torsoCover = Math.ceil(left.torsoCover / 2.5) + left.torsoCover;

            if (left.limbsArmor <= 0 && right.limbsArmor <= 0) {
                limbsArmor = 0;
                limbsCover = 0;
            } else if (left.limbsArmor > 0 && right.limbsArmor <= 0) {
                limbsArmor = left.limbsArmor;
                limbsCover = left.limbsCover;
            } else if (left.limbsArmor <= 0 && right.limbsArmor > 0) {
                limbsArmor = right.limbsArmor;
                limbsCover = right.limbsCover;
            } else {
                if (left.limbsArmor >= right.limbsArmor)
                    limbsArmor = left.limbsArmor;
                else
                    limbsArmor = right.limbsArmor;

                if (left.limbsCover >= right.limbsCover)
                    limbsCover = Math.ceil(left.limbsCover / 2.5) + right.limbsCover;
                else
                    limbsCover = Math.ceil(right.limbsCover / 2.5) + left.limbsCover;

                if (limbsArmor > 0 && left.limbsArmor > 0 && right.limbsArmor > 0)
                    limbsArmor += 1;
            }

            if (left.neckArmor <= 0 && right.neckArmor <= 0) {
                neckArmor = 0;
                neckCover = 0;
            } else if (left.neckArmor > 0 && right.neckArmor <= 0) {
                neckArmor = left.neckArmor;
                neckCover = left.neckCover;
            } else if (left.neckArmor <= 0 && right.neckArmor > 0) {
                neckArmor = right.neckArmor;
                neckCover = right.neckCover;
            } else {
                if (left.neckArmor >= right.neckArmor)
                    neckArmor = left.neckArmor;
                else
                    neckArmor = right.neckArmor;

                if (left.neckCover >= right.neckCover)
                    neckCover = Math.ceil(left.neckCover / 2.5) + right.neckCover;
                else
                    neckCover = Math.ceil(right.neckCover / 2.5) + left.neckCover;

                if (neckArmor > 0 && left.neckArmor > 0 && right.neckArmor > 0)
                    neckArmor += 1;
            }

            prestige = left.prestige + right.prestige;

            penaltyAGI = left.penaltyAGI + right.penaltyAGI + 1;
            penaltyEND = left.penaltyEND + right.penaltyEND + 1;
            penaltyCRD = left.penaltyCRD + right.penaltyCRD + 1;

            cost = left.cost + right.cost + craftsmanship + 10;

            if (craftsmanship >= 25) {
                torsoArmor += 1;
                limbsArmor += 1;
                cost += 15;
                prestige += 10;
            } else if (craftsmanship >= 10) {
                torsoArmor += 1;
                limbsArmor += 1;
                cost += 10;
                prestige += 5;
            } else if (craftsmanship >= 15) {
                torsoArmor += 1;
                limbsArmor += 1;
                cost += 5;
                prestige += 10;
            } else if (craftsmanship >= 10) {
                torsoArmor += 1;
                prestige += 5;
            }

            if (talent === true) {
                torsoArmor += 1;
                limbsArmor += 1;
                prestige += 3;
            }

            if (torsoCover > 100)
                torsoCover = 100;
            if (limbsCover > 100)
                limbsCover = 100;
            if (neckCover > 100)
                neckCover = 100;
        } else if (recipe.trait === 2 && recipe.attackChance === 2) {
            headArmor = 0, headCover = 0, neckArmor = 0, neckCover = 0, prestige = 0, cost = 0, penaltyAGI = 0, penaltyEND = 0, penaltyCRD = 0;

            if (left.headArmor >= right.headArmor)
                headArmor = left.headArmor + 1;
            else
                headArmor = right.headArmor + 1;

            if (left.headCover >= right.headCover)
                headCover = Math.ceil(right.headCover / 2.5) + right.headCover;
            else if (right.headCover >= left.headCover)
                headCover = Math.ceil(left.headCover / 2.5) + left.headCover;

            if (left.neckArmor <= 0 && right.neckArmor <= 0) {
                neckArmor = 0;
                neckCover = 0;
            } else if (left.neckArmor > 0 && right.neckArmor <= 0) {
                neckArmor = left.neckArmor;
                neckCover = left.neckCover;
            } else if (left.neckArmor <= 0 && right.neckArmor > 0) {
                neckArmor = right.neckArmor;
                neckCover = right.neckCover;
            } else {
                if (left.neckArmor >= right.neckArmor)
                    neckArmor = left.neckArmor;
                else
                    neckArmor = right.neckArmor;

                if (left.neckCover >= right.neckCover)
                    neckCover = Math.ceil(left.neckCover / 2.5) + right.neckCover;
                else
                    neckCover = Math.ceil(right.neckCover / 2.5) + left.neckCover;

                if (neckArmor > 0 && left.neckArmor > 0 && right.neckArmor > 0)
                    neckArmor += 1;
            }

            prestige = left.prestige + right.prestige;

            penaltyAGI = left.penaltyAGI + right.penaltyAGI + 1;
            penaltyEND = left.penaltyEND + right.penaltyEND + 1;
            penaltyCRD = left.penaltyCRD + right.penaltyCRD + 1;

            cost = left.cost + right.cost + craftsmanship + 10;

            if (craftsmanship >= 25) {
                headArmor += 1;
                neckArmor += 1;
                cost += 15;
                prestige += 10;
            } else if (craftsmanship >= 10) {
                headArmor += 1;
                neckArmor += 1;
                cost += 10;
                prestige += 5;
            } else if (craftsmanship >= 15) {
                headArmor += 1;
                neckArmor += 1;
                cost += 5;
                prestige += 10;
            } else if (craftsmanship >= 10) {
                headArmor += 1;
                prestige += 5;
            }

            if (talent === true) {
                headArmor += 1;
                prestige += 3;
            }

            if (headCover > 100)
                headCover = 100;
            if (neckCover > 100)
                neckCover = 100;
        } else if ((recipe.trait === 3 && recipe.attackChance === 3) || (recipe.trait === 2 && recipe.attackChance === 4) || (recipe.trait === 2 && recipe.attackChance === 5) || (recipe.trait === 3 && recipe.attackChance === 5)) {
            headArmor = 0, headCover = 0, neckArmor = 0, neckCover = 0, prestige = 0, cost = 0, penaltyAGI = 0, penaltyEND = 0, penaltyCRD = 0;
            
            headArmor = right.headArmor + left.headArmor;
            headCover = right.headCover + left.headCover;

            neckArmor = right.neckArmor + left.neckArmor;
            neckCover = right.neckCover + left.neckCover;

            prestige = right.prestige + left.prestige;

            penaltyAGI = right.penaltyAGI + left.penaltyAGI;
            penaltyEND = right.penaltyEND + left.penaltyEND;
            penaltyCRD = right.penaltyCRD + left.penaltyCRD;

            cost = right.cost + left.cost + craftsmanship + 10;

            if (craftsmanship >= 25) {
                headArmor += 1;
                neckArmor += 1;
                cost += 15;
                prestige += 10;
            } else if (craftsmanship >= 10) {
                headArmor += 1;
                neckArmor += 1;
                cost += 10;
                prestige += 5;
            } else if (craftsmanship >= 15) {
                headArmor += 1;
                neckArmor += 1;
                cost += 5;
                prestige += 10;
            } else if (craftsmanship >= 10) {
                headArmor += 1;
                prestige += 5;
            }

            if (talent === true) {
                headArmor += 1;
                prestige += 3;
            }

            if (headCover > 100)
                headCover = 100;
            if (neckCover > 100)
                neckCover = 100;
        }

        // Stats Buff Application
        let armorStatsBuff = 0;

        if ((recipe.trait === 1 && recipe.attackChance === 1) || (recipe.trait === 2 && recipe.attackChance === 2) || (recipe.trait === 3 && recipe.attackChance === 3) || (recipe.trait === 2 && recipe.attackChance === 4) || (recipe.trait === 2 && recipe.attackChance === 5) || (recipe.trait === 3 && recipe.attackChance === 5)) {
            if (craftsmanship >= 25)
                armorStatsBuff = 7;
            else if (craftsmanship >= 20)
                armorStatsBuff = 5;
            else if (craftsmanship >= 15)
                armorStatsBuff = 3;
            else if (craftsmanship >= 10)
                armorStatsBuff = 1;
            else
                armorStatsBuff = 0;

            while (armorStatsBuff > 0 && penaltyAGI + penaltyEND + penaltyCRD >= 2) {
                if (penaltyAGI + penaltyEND + penaltyCRD <= 1)
                    break;

                if (penaltyAGI > 0 && armorStatsBuff > 0) {
                    penaltyAGI -= 1;
                    armorStatsBuff -= 1;
                }
                if (penaltyEND > 0 && armorStatsBuff > 0) {
                    penaltyEND -= 1;
                    armorStatsBuff -= 1;
                }
                if (penaltyCRD > 0 && armorStatsBuff > 0) {
                    penaltyCRD -= 1;
                    armorStatsBuff -= 1;
                }
            }
        }

        if (recipe.trait === 1 && recipe.attackChance === 1) {
            res.innerHTML = `
      <h2><span style="color: #FF8C00">Custom</span> ${recipe.result}</h2>
      <img src="images/${recipe.image}" style="max-width:150px;display:block;margin:10px 0;">
      <p><b>Torso Armor:</b> ${torsoArmor}</p>
      <p><b>Torso Cover:</b> ${torsoCover}</p>
      <p><b>Limbs Armor:</b> ${limbsArmor}</p>
      <p><b>Limbs Cover:</b> ${limbsCover}</p>
      <p><b>Neck Armor:</b> ${neckArmor}</p>
      <p><b>Neck Cover:</b> ${neckCover}</p>
      <p><b>Prestige:</b> ${prestige}</p>
      <p><b>Cost:</b> ${cost}</p>
      <p><b><span style="color: #006400">AGI</span> penalty:</b> ${penaltyAGI}</p>
      <p><b><span style="color: #FF8C00">END</span> penalty:</b> ${penaltyEND}</p>
      <p><b><span style="color: #4682B4">CRD</span> penalty:</b> ${penaltyCRD}</p>
    `;
        } else {
            res.innerHTML = `
      <h2><span style="color: #FF8C00">Custom</span> ${recipe.result}</h2>
      <img src="images/${recipe.image}" style="max-width:150px;display:block;margin:10px 0;">
      <p><b>Head Armor:</b> ${headArmor}</p>
      <p><b>Head Cover:</b> ${headCover}</p>
      <p><b>Neck Armor:</b> ${neckArmor}</p>
      <p><b>Neck Cover:</b> ${neckCover}</p>
      <p><b>Prestige:</b> ${prestige}</p>
      <p><b>Cost:</b> ${cost}</p>
      <p><b><span style="color: #006400">AGI</span> penalty:</b> ${penaltyAGI}</p>
      <p><b><span style="color: #FF8C00">END</span> penalty:</b> ${penaltyEND}</p>
      <p><b><span style="color: #4682B4">CRD</span> penalty:</b> ${penaltyCRD}</p>
    `;
        }
    } else {
        res.innerHTML = `<h2>No valid recipe for ${left} + ${right}</h2>`;
    }
}

