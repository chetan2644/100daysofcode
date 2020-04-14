let myTodos  = {
    day: 'Monday' , 
    meetings: 0 , 
    meetDone: 0 ,

    addMeeting: function(){
        console.log('Heyy Im a function') ;
        console.log(this) ;
    } 
}
console.log(myTodos) ;
myTodos.addMeeting();
let myTodoTwo  = {
    day: 'Tuesday' , 
    meetings: 1 , 
    meetDone: 1 ,

    addMeeting: function(){
        console.log('Heyy Im a function') ;
        console.log(this) ;
    } ,
    summary: function(num){
        this.meetings = this.meetings + num;
        console.log(`you have  ${this.meetings} no of meetings`) ;
    },
    handleMeeting: function(){
        this.meetDone = this.meetings - 2;
        console.log('No of meetings done:' + this.meetDone) ;
    } ,
    reset : function(){
        this.meetings = 0 ;
        this.meetDone = 0; 
        console.log(this) ;
    }
}
myTodoTwo.addMeeting();
myTodoTwo.summary(4) ;
myTodoTwo.handleMeeting();
myTodoTwo.reset();
