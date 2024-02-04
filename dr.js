function search() {
    var input, filter, content, p, i, txtValue;
    input = document.getElementById('searchspace');
    filter = input.value.toUpperCase();
    var flag = false;
    for(j = 0; j < 3; j++){
        content = document.getElementsByClassName('intro')[j];
        p = content.getElementsByTagName('h4');
        console.log(p);
        for (i = 0; i < p.length; i++) {
            txtValue = p[i].textContent || p[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                p[i].style.display = '';
                flag = true;
            } else {
                p[i].style.display = 'none';
            }
        }
    }
    var mssg = document.getElementById("msg");
    if(flag == false){
        mssg.innerHTML = "Sorry, No doctor found!! 🥺";
    }else{
        mssg.innerHTML = " Doctor Found!! 🎉";
    }
}