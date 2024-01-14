function alternar(menu)
{
   var bar_menu = document.getElementById(menu);
   //Si el menu tiene clase abierto
   //cambia clase a cerrado y cambia el botón
if (bar_menu.classList.contains('abierto')){
   bar_menu.classList.remove('abierto');
   bar_menu.classList.add('cerrado');
   event.target.innerText = 'Menú'
   }
//Si no está abierto, cambia clase a abierto y cambia el botón 
else{
   bar_menu.classList.remove('cerrado');
   bar_menu.classList.add('abierto');
   e.target.innerText = 'Cerrar'
   }
}