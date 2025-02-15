let i;
let pass = prompt('Enter sign in password');
for(i = 0; i < 3; i ++){
let log = prompt('Enter password');
if(pass == log){
    console.log('Right password');
}
else{
    console.log('Wrong password');
}
}

