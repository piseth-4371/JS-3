var pass = document.getElementById("password");
var msg = document.getElementById("msg");
var strength = document.getElementById("strength");

pass.addEventListener('input', ()=>{
    if(pass.value.length > 0){
        msg.classList.replace('hidden', 'block');
    }else{
         msg.classList.replace('block','hidden');
    }
    if(pass.value.length < 4){
        strength.innerHTML = "weak";
        pass.classList.replace('border-[#ccc]', 'border-[#ff5925]');
        msg.classList.replace('text-white','text-[#ff5925]');

    }else if(pass.value.length > 4 && pass.value.length < 8){
        strength.innerHTML = "meduim";
        pass.classList.replace('border-[#ff5925]', 'border-yellow-700');
        msg.classList.replace('text-[#ff5925]','text-yellow-700');

    }else if(pass.value.length >= 8){
        strength.innerHTML = "strong";
        pass.classList.replace('border-yellow-700', 'border-[#26d730]');
        msg.classList.replace('text-yellow-700','text-[#26d730]');
    }
})
