function changecontent(){
    let x=document.getElementById('knowmore')
    if(x.style.display=='block')
    {
        x.style.display='none'
    }
    else{
        x.style.display='block'
    }
}

function validation(){

    document.getElementById('namevalidation').style.display='none';
    document.getElementById('phonevalidation').style.display='none';
    let hasError=false;
    if(document.getElementById('nameinput').value===''){
        document.getElementById('namevalidation').style.display='block';
        hasError=true;
    }
    if(document.getElementById('phoneinput').value===''){
        document.getElementById('phonevalidation').style.display='block';
        hasError=true;
    }
    return !hasError;
}