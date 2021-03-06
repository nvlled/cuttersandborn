

const expect = require('chai').expect;

describe("Generate cutter number", async function() {
    let generateCutter;
    before(function() {
        generateCutter = require("../lib");
    });

    let data = [
        {lname: "John",     fname: "Adams", cutterNum: "A214"},
        {lname: "john",     fname: "adams", cutterNum: "A214"},
        {lname: "Ruth",     fname: "Adams", cutterNum: "A216"},
        {lname: "Linda",    fname: "Gabel", cutterNum: "G112"},
        {lname: "Brian",    fname: "Lavoie", cutterNum: "L414"},
        {lname: "Edward",   fname: "O'Neill", cutterNum: "O58"},
        {lname: "Helen",    fname: "Andrews", cutterNum: "A566"},
        {lname: "Hopkins",  fname: "Johns", cutterNum: "J65"},
        {lname: "1234",     fname: "12313", cutterNum: ""},
    ];
    for (let {fname, lname, cutterNum} of data) {
        it(`should yield ${cutterNum} for ${fname} ${lname}`, function() {
            let num = generateCutter(fname, lname);
            expect(num).to.equal(cutterNum);
        });
    }
});
