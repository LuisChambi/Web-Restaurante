const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnEntradas = document.querySelector('.entradas');
const btnPlatosFuertes = document.querySelector('.platosfuertes');
const btnSopasCaldos = document.querySelector('.sopcal');
const btnPostres = document.querySelector('.postres');
const contenedorPlatillos = document.querySelector('.platillos');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    platillos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
    navegacion.classList.remove('ocultar');
    botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    
    //while(navegacion.children[5]){
    //    navegacion.removeChild(navegacion.children[5]);
    //}
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar,overlay);

}
const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    });
});

imagenes.forEach(imagen=>{
    
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay,onclick = function(){
        overlay.remove();
        navegacion-classList.add('ocultar');
        boton.remove();
    }
}

const platillos = () =>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');

    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);

    const entradas = platillosArreglo.filter(entrada=> entrada.getAttribute('data-platillo') === 'entrada');
    const platosfuertes = platillosArreglo.filter(platofuerte => platofuerte.getAttribute('data-platillo') === 'platofuerte');    
    const sopascaldos = platillosArreglo.filter(sopcal => sopcal.getAttribute('data-platillo') === 'sopcal');
    const postres = platillosArreglo.filter(postre => postre.getAttribute('data-platillo') === 'postre');
    
    mostrarPlatillos(entradas, platosfuertes, sopascaldos, postres, platillosArreglo);
}

const mostrarPlatillos = (entradas, platosfuertes, sopascaldos, postres, todos) =>{
    btnEntradas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        entradas.forEach(entrada=> contenedorPlatillos.appendChild(entrada));
    });
    btnPlatosFuertes.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
         platosfuertes.forEach(platosfuertes=> contenedorPlatillos.appendChild(platosfuertes));
    });

    btnSopasCaldos.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        sopascaldos.forEach(sopcal=> contenedorPlatillos.appendChild(sopcal));
    });
    btnPostres.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postre=> contenedorPlatillos.appendChild(postre));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todos=> contenedorPlatillos.appendChild(todos));
    });
   
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}