// chair = 3; 10 qb
// table= 3; 20 qb
// bed = 1 ; 50 qb

const furniture =(quantityChair,quantityTable,quantityBed)=>{
    const woodForChair = 10;
    const woodForTable = 20;
    const woodForBed = 50;

    const totalWoodForChair = quantityChair * woodForChair;
    const totalWoodForTable = quantityTable * woodForTable;
    const totalWoodForBed = quantityBed * woodForBed;
    const totalWood = totalWoodForChair + totalWoodForTable + totalWoodForBed;
    return totalWood;
}

const chair = 3;
const table = 3;
const bed = 1;
console.log(furniture(chair,table,bed))
