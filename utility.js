
const NUMBER_OF_PLAYERS=1; 
const INITIAL_POSITION=0;
const WINNING_POSTION=100;
let position1=0
class SnakesAndLadder{
    getroll=()=>{
        let roll=Math.ceil(Math.random()*10%6)
        return roll;
    }

    checkOption=()=>{
        console.log("select option of play raandomly")
        while(position1!=WINNING_POSTION){
            let roll=this.getroll()
            let option=Math.ceil(Math.random()*10%3)
        switch(option){
            case 1:
                console.log("no play")
                position1=position1+INITIAL_POSITION
                console.log(position1)
                break;
            case 2:
                console.log("ladder encountered")
                position1=position1+roll
                if(position1>WINNING_POSTION){
                    position1=position1-roll
                console.log(position1)
                break;
                }else{
                    console.log(position1)
                }
                break;
            case 3:
                console.log("Snake encountred")
                position1=position1-roll
                if(position1<0){
                    position1=INITIAL_POSITION
                    console.log(position1)
                    break;
                }else{
                    console.log(position1)
                }
                break;
            }
                  
        }
     }
}
module.exports=new SnakesAndLadder();