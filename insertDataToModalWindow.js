function createUl(arr){
    const ulElement = document.createElement('ul');
    arr.forEach(item=>{
        const li = document.createElement('li');
        li.innerText = item;
        ulElement.appendChild(li);
    })
   return ulElement
}

function insertData(orgName, store){
    const museum = store.filter(item=>item.directory === orgName)[0];
    document.getElementById('orgName').innerText = museum.orgName;
    document.getElementById('museumName').innerText = museum.passport.museumName;
    document.getElementById('profile').innerText = museum.passport.profile;
    document.getElementById('typeOfActivity').appendChild(createUl(museum.passport.typeOfActivity))
    document.getElementById('foundingDate').innerText =  museum.passport.foundingDate
    document.getElementById('manager').innerText =  museum.passport.manager
    document.getElementById('achieving').appendChild(createUl( museum.passport.achieving))
}
function mainAddListener(){
let listReferences = document.getElementsByClassName('reference-by-org');
Array.from(listReferences).forEach( item=>{
    item.addEventListener('click',(e)=>{
        console.log(e)
        insertData(e.target.id, store)

    })
})}