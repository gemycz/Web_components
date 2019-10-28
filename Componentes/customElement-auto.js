//elemento autonomo personalizado de chat simple

   var BubbleProto = Object.create(HTMLElement.prototype);
   BubbleProto.attachedCallback = function(){
      this.innerHTML = '<bubble-header>'+this.getAttribute("header")+'</bubble-header><bubble-main>'+this.getAttribute("main")+'</bubble-main>';
   }
   var ChatBubble = document.registerElement('chat-bubble', {
     prototype: BubbleProto
   });

   var ChatProto = Object.create(HTMLElement.prototype);
   ChatProto.attachedCallback = function () {
      //alert('This will run when I append this element in the DOM tree');
     var self = this;
     this.querySelector('.send').addEventListener('click', function(e) {
         var bubble = document.createElement("chat-bubble");
         bubble.setAttribute("header","Gema");
         bubble.setAttribute("main",self.querySelector('.send_inp').value);
         self.querySelector('.send_inp').value = '';
         self.querySelector('chat-body').appendChild(bubble);
         self.querySelector('.send_inp').focus();
     });
   }
   var SimpleChat = document.registerElement('simple-chat', {
     prototype: ChatProto
   });

 



class Imagen1 extends HTMLElement {
  constructor() {
    // Siempre debe llamarse primero al constructor padre
    super();

    // Se crea el shadow root
   var shadowRoot = this.attachShadow({mode: 'open'});

    //var shadowRoot = this.createShadowRoot();
    // Se crea un elemnto img y se asignan sus atributos.
    var imag = document.createElement('img');
     

   // imag.alt = this.getAttribute('alt-img');
    imag.alt = 'Unicorn';
    imag.src = 'https://cdn.pixabay.com/photo/2016/08/17/15/37/unicorn-1600762_960_720.png';
    imag.width = '150';
    imag.height = '150';
    imag.className = 'product-img';

  
    // Añadir la imagen al shadow root.

   shadowRoot.appendChild(imag);

    // Añadir un elemento de escucha a la imagen.
    imag.addEventListener('click', () => {
      window.location = this.getAttribute('data-url');
    });

    // Crear un enlace al producto.
    var link = document.createElement('a');
    link.innerText = this.getAttribute('data-name');
    link.href = this.getAttribute('data-url');
    link.className = 'product-name';

    // Añadir el enlace al shadow root.
    shadowRoot.appendChild(link);
  }
}
// Definir el nuevo elemento.
window.customElements.define('x-image1', Imagen1)


class Imagen2 extends HTMLElement {
  constructor() {
    // Siempre debe llamarse primero al constructor padre
    super();

    // Se crea el shadow root
   var shadowRoot = this.attachShadow({mode: 'open'});

    //var shadowRoot = this.createShadowRoot();
    // Se crea un elemnto img y se asignan sus atributos.
    var imag = document.createElement('img');
     

   // imag.alt = this.getAttribute('alt-img');
    imag.alt = 'Triangle';
    imag.src = 'https://p7.hiclipart.com/preview/151/227/639/minimalism-tattoo-geometry-logo-free-buckle-triangle-element.jpg';
    imag.width = '150';
    imag.height = '150';
    imag.className = 'product-img';

  
    // Añadir la imagen al shadow root.

   shadowRoot.appendChild(imag);

    // Añadir un elemento de escucha a la imagen.
    imag.addEventListener('click', () => {
      window.location = this.getAttribute('data-url');
    });

    // Crear un enlace al producto.
    var link = document.createElement('a');
    link.innerText = this.getAttribute('data-name');
    link.href = this.getAttribute('data-url');
    link.className = 'product-name';

    // Añadir el enlace al shadow root.
    shadowRoot.appendChild(link);
  }
}
// Definir el nuevo elemento.
window.customElements.define('x-image2', Imagen2)



class Imagen3 extends HTMLElement {
  constructor() {
    // Siempre debe llamarse primero al constructor padre
    super();

    // Se crea el shadow root
   var shadowRoot = this.attachShadow({mode: 'open'});

    //var shadowRoot = this.createShadowRoot();
    // Se crea un elemnto img y se asignan sus atributos.
    var imag = document.createElement('img');
     

   // imag.alt = this.getAttribute('alt-img');
    imag.alt = 'Bear';
    imag.src = 'https://static.vecteezy.com/system/resources/previews/000/650/958/non_2x/creative-minimal-panda-illustration-vector-png-art.jpg';
    imag.width = '150';
    imag.height = '150';
    imag.className = 'product-img';

  
    // Añadir la imagen al shadow root.

   shadowRoot.appendChild(imag);

    // Añadir un elemento de escucha a la imagen.
    imag.addEventListener('click', () => {
      window.location = this.getAttribute('data-url');
    });

    // Crear un enlace al producto.
    var link = document.createElement('a');
    link.innerText = this.getAttribute('data-name');
    link.href = this.getAttribute('data-url');
    link.className = 'product-name';

    // Añadir el enlace al shadow root.
    shadowRoot.appendChild(link);
  }
}
// Definir el nuevo elemento.
window.customElements.define('x-image3', Imagen3)

