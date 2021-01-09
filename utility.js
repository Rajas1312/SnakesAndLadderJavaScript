
const NUMBER_OF_PLAYERS=2; 
const INITIAL_POSITION=0;
const WINNING_POSTION=100;
let position1=0
let position2=0
let number_of_die_roll=0
let flag=0;
class SnakesAndLadder{
    getWinner=()=>{
        if(position2==WINNING_POSTION){
            console.log("Player 2 is Winner!")
        }
        if(position1==WINNING_POSTION){
            console.log("Player 1 is Winner")
        }
    }
    getroll=()=>{
        let roll=Math.ceil(Math.random()*10%6)
        return roll;
    }
    getWinningCondition=()=>{
        if(position1==WINNING_POSTION||position2==WINNING_POSTION) {
			return true;
		}
		else {
			return false;
		}
    }

    checkOption=()=>{
        console.log("select option of play raandomly")
        
        while(!this.getWinningCondition()){
            number_of_die_roll++
            let roll=this.getroll()
            let option=Math.ceil(Math.random()*10%3)
            switch(option){
            case 1:
                console.log("no play")
                if (flag==0){
                    position1=position1+INITIAL_POSITION
                    console.log("player1",position1)
                      
                }
                if (flag==1){
                    position2=position2+INITIAL_POSITION
                    console.log("player2",position2)
                    
                }
                break;
            case 2:
                console.log("ladder encountered")
                    if(flag==0){
                        position1=position1+roll
                    if(position1>WINNING_POSTION){
                        position1=position1-roll
                        console.log("player1",position1)
                        flag=0
                        break;
                        }else{
                            console.log("player1",position1)
                            flag=0
                            
                        }
                    break;
                    }
                    if(flag==1){
                        position2=position2+roll
                    if(position2>WINNING_POSTION){
                        position2=position1-roll
                        console.log("player2",position2)
                        flag=1
                        break;
                        }else{
                            console.log("player2",position2)
                            flag=1
                        }
                    break;
                    }

            case 3:
                console.log("Snake encountred")
                if(flag==0){
                    position1=position1-roll
                    if(position1<0){
                        position1=INITIAL_POSITION
                        console.log("player1",position1)
                        flag=1
                        break
                    }else{
                        console.log("player1",position1)
                        flag=1     
                    }
                break
                }
                if(flag==1){
                    position2=position2-roll
                    if(position2<0){
                        position2=INITIAL_POSITION
                        console.log("player2",position2)
                        flag=0
                        break;
                    }else{
                        console.log("player2",position2)
                        flag==0
                        
                    }
                break;
                }
                
            }
        }
           console.log("Number of die roll is " +number_of_die_roll) 
    }    
}

module.exports=new SnakesAndLadder();