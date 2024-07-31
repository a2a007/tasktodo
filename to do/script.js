function add() {
    const ff = document.getElementById('input');
    const ll = document.getElementById('list');
    if (ff.value.trim() === '') {
        alert('Please enter a task');
        return;
    }
    const dd=document.createElement('dd');
    dd.textContent = ff.value;
     const de=document.createElement('button');
     de.textContent='remove';
     de.className='del-task';
     de.onclick=() => dd.remove();

     dd.appendChild(de);
     list.appendChild(dd);
    
     dd.value=' ';
}
