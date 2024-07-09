
const ExistArray = () =>{
    const jobs = localStorage.getItem('jobs');
    if(jobs){
        return JSON.parse(jobs);
    }
    else{
        return [];
    }
}

const setToLocalStorage=(id)=>{
    
    const FindExistArray = ExistArray();
    const exist = FindExistArray.find(job=>job===id);
    if(!exist){
        FindExistArray.push(id);
        localStorage.setItem('jobs', JSON.stringify(FindExistArray));
    }
    else{
        return -10;
    }
   
}

export {setToLocalStorage, ExistArray}