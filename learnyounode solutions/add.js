var res = 0;
for(var i=0; i<process.argv.length; i++){
    if(i>=2) res += Number(process.argv[i]);
}
console.log(res);
