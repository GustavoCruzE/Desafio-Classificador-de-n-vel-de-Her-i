let Nome = "João";

let XP = 1000;

if (XP >= 0 && XP <= 1000){
    Rank = "Ferro";
} else if (XP >= 1001 && XP <= 2000){
    Rank = "Bronze";
} else if (XP >= 2001 && XP <= 5000){
    Rank = "Prata";
} else if (XP >= 5001 && XP <= 7000){
   Rank = "Ouro";
} else if (XP >= 7001 && XP <= 8000){
    Rank = "Platina";
} else if (XP >= 8001 && XP <= 9000){
    Rank = "Ascendente";
} else if (XP >= 9001 && XP <= 10000){
    Rank = "Imortal";
} else if (XP >= 10001){
    Rank = "Radiante";
};

    console.log("O jogador " + Nome + " está no rank " + Rank);