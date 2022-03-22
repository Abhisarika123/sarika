const http = require('https');
const { DATE_NOT_PRIME, IMPOSSIBLE } = require('../constant.js')


const getDataByDate = async(req,res)=>{
    try {
        let date = new Date(req.params.date).getDate(), jsonData = null, isPrime=true;
        if(date < 1 && date ==1) return res.status(200).send(DATE_NOT_PRIME);
        else if(date>1){
            for(let i=0;i<date;i++){
                if(date%i==0)
                isPrime = false;
                break;
            }
            if(isPrime){
                let api = 'https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=97ff546b6164b9d6367c240d3211bb80';
                http.get(api,function(res){
                    res.on('data', (data) => {
                        jsonData = data.toString();
                    })
                })
                return res.status(200).json(jsonData);
            }
            else return res.status(200).send(DATE_NOT_PRIME);
        }
        
    } catch (error) {
        console.log(error);  
    }
}

function flipBurger(str,num){
    let isAlt = false;
    str.forEach((s,i)=>{
        if(i+2<str.length){
           if(s!=str[i+2])
              isAlt = false;
           else isAlt= true;
         }
    })
    if(isAlt)
    return IMPOSSIBLE;
    else{
        for(let j=0;j<str.length;j++){
            if(str[j]=='-'){
            for(let i=0;i<num;i++){
                if(j+i<str.length){
                    if(str[j+i]=='+')
                      str[j+i] = '-';
                    else str[j+i] = '+';
                }
            }
            }
        }
    }
    return str;
}

module.exports = {
    flipBurger,
    getDataByDate
}