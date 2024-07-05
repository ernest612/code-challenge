function speedDetector(speed){
    if(speed<70){
        return "okay"

    }else if(speed > 70){
        const demeritpoints = Math.floor((speed - 70)/5);
    }
}
console.log(speedDetector(40)); // should print "okay"