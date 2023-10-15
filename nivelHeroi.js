let nomeHeroi = "Luciano";
let xp = 10001;

if(xp <= 1000){
    console.log("A quantidade de experiencia do heroi "+ nomeHeroi + " esta no nivel: FERRO");
    }else if((xp >= 1001) && (xp <= 2000)){
        console.log("A quantidade de experiencia do heroi "+ nomeHeroi + " esta no nivel:BRONZE");
    }else if((xp >= 2001) && (xp <= 6000)){
        console.log("A quantidade de experiencia do heroi "+ nomeHeroi + " esta no nivel: PRATA");
    }else if((xp >= 6001) && (xp <= 7000)){
        console.log("A quantidade de experiencia do heroi "+ nomeHeroi + " esta no nivel: OURO");    
    }else if((xp >= 7001) && (xp <= 8000)){
        console.log("A quantidade de experiencia do heroi "+ nomeHeroi + " esta no nivel: PLATINA");
    }else if((xp >= 8001) && (xp <= 9000)){
        console.log("A quantidade de experiencia do heroi "+ nomeHeroi + " esta no nivel: ASCENDENTE");
    }else if((xp >= 9001) && (xp <= 10000)){
        console.log("A quantidade de experiencia do heroi "+ nomeHeroi + " esta no nivel: IMORTAL");
    }else {
        console.log("A quantidade de experiencia do heroi "+ nomeHeroi + " esta no nivel: RADIANTE");
    }
