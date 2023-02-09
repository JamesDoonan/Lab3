let Tasks:string[]=[];

// adds tasks to string array
function addTask(task:string):number{
    Tasks.push(task);
    console.log('To do item: ' +task+ ' has been added to your list');
    return Tasks.length;
}

 console.log(addTask("~Do assignment~"));
 console.log(addTask("~Do laundry~"));
 console.log(addTask("~Go for food~"));

 function listAddTasks():void{
    for(let i = 0; i < Tasks.length; i++)
    {
        console.log(Tasks[i]);
    }
} 
listAddTasks();

function deleteTasks(task:string):number{
    let index = Tasks.indexOf(task)
    if(index >-1){
    Tasks.splice(index, 1);
    
    console.log('Remove task: ' +task+ ' has been deleted from your list');
    }
    else{
        
    console.log('UPDATE MESSAGE : ' +task+ ' is not from your list');
    }
    return Tasks.length;
} 

deleteTasks("~Do laundry~");
console.log('**********UPDATED LIST***********');
listAddTasks();
