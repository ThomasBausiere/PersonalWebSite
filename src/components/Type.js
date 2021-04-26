import Typewriter from 'typewriter-effect/dist/core';

const txtAnim= document.querySelector('h2');
new Typewriter (txtAnim,{
    loop: true,
    deleteSpeed:100,
    
    
})

.typeString(' Web developpeur !')
.pauseFor(1000)
.deleteChars(2)
.typeString('<strong> Junior </strong>')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color:red "> HTML <span> !')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color:#27ae60"> Css<span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color:#ff6910 "> Javascript <span> !')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color:midnightblue "> React <span> !')
.pauseFor(1000)
.deleteChars(8)
.start();

export default txtAnim;