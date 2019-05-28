var summ = 0;
for(let i = 2; i < process.argv.length; i++){
    summ += parseInt(process.argv[i],10);
}
console.log(summ);