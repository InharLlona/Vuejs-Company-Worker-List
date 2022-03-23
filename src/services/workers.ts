


function getWorkers (cmp:string){
  return fetch(`https://api.github.com/orgs/${cmp}/members`)  
    .then(response => {
     return response.json();
        })
  }

  function getDetail (wrkr:string){
    return fetch(`https://api.github.com/users/${wrkr}`)  
      .then(response => {
       return response.json();
          })
    }

  export {getWorkers,getDetail};