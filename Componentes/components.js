/*CABECERA*/
/*-------------------------------------------------------------------------------------------*/
class CabeceraWeb extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML = `
        <div id="cabecera">
        <h1>COMPONENTES WEB</h1>
        <h4>USANDO JAVA SCRIPT, HTML & CSS</h4>
        </div>
        <style>
        @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Poppins:300&display=swap');
        #cabecera {
        background: black;
        padding-top: 30px;
        padding-left: 60px;
        padding-rigth: 60px;
        padding-bottom: 30px;
        -webkit-box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.3);
        box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.3);
        }
        h1 {
        color: white;
        font-family: 'Poppins', sans-serif;
        letter-spacing: 2px;
        margin-top: 2px;
        margin-bottom: 0px;
        }
        h4 {
        color: #838383;
        font-family: 'Poppins', sans-serif;
        margin-top: 0px;
        margin-bottom: 2px;
        }
        </style>
        `
    }
}

window.customElements.define('cabecera-web',CabeceraWeb)

/*CABECERA*/
/*-------------------------------------------------------------------------------------------*/
class FooterWeb extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML = `
        <div class="footer">
            <div class="f1">
                <h4>Joshua Ramírez</<h4>
            </div>
            <div class="f1">
                <h4>Gema Castillo</h4>
            </div>
            <div class="f1">
                <h4>Angie Moyota</h4>
            </div>
            <div class="f2">
                <h4>UNIVERSIDAD DE LAS FUERZAS ARMADAS ESPE</h4>
                <h5>INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN</h5>
            </div>
        </div>
        <style>
        .footer {
        width:100%;
        background: #979797;
        padding-top:80px;
        padding-bottom:80px;
        text-align: center;
        }
        h4 {
        color:#626262;
        }
        h5 {
        color:#626262;
        font-family: 'Poppins', sans-serif;
        margin:0px;
        }
        .f1 {
        padding: 10px;
        margin: 10px;
        /* IMPORTANTE */
        display: inline-block;
        }
        .f2{
        margin-top: 0px;
        margin-bottom: 0px;       
        }
        </style>
        `
    }
}

window.customElements.define('footer-web',FooterWeb)

/*-------------------------------------------------------------------------------------------*/
/*Boton 1*/

class OneButton extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML = `
        <div id="buttondiv">
        <button id="button1">OneButton</button>
        </div>
        <style>
        #buttondiv {
        padding-top: 30px;
        padding-bottom: 30px;
        }
        #button1 {
        border-radius: 4px;
        border-color: black;
        color: white;
        background: black;
        padding-top:10px;
        padding-bottom:10px;
        padding-left:30px;
        padding-right:30px;
        font-family: 'Poppins', sans-serif;
        }
        #button1:hover {
        background: white;
        color: black !important;
        cursor: pointer;

        }
        #button1{
			transition: all 0.3s;
			-webkit-transition: all 0.3s;
			-moz-transition: all 0.3s;
		}
		#button1:hover{
			transform: translateX(10px);
			-webkit-transform: translateX(10px);
			-moz-transform: translateX(10px);
		}
        
        </style>
        `
    }
}

window.customElements.define('one-button',OneButton)

/*-------------------------------------------------------------------------------------------*/

/*Boton 2*/

class TwoButton extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML = `
        <div id="buttondiv2">
        <button id="button2">TwoButton</button>
        </div>
        <style>
        #buttondiv2 {
        padding-top: 30px;
        padding-bottom: 30px;
        }
        #button2 {
        border-radius: 4px;
        border-color: black;
        color: black;
        background: white;
        padding-top:10px;
        padding-bottom:10px;
        padding-left:30px;
        padding-right:30px;
        font-family: 'Poppins', sans-serif;
        }
        #button2:hover {
        background: black;
        color: white !important;
        cursor: pointer;

        }
        #button2{
			transition: all 0.3s;
			-webkit-transition: all 0.3s;
			-moz-transition: all 0.3s;
		}
		#button2:hover{
			transform: translateX(-10px);
			-webkit-transform: translateX(-10px);
			-moz-transform: translateX(-10px);
		}
        </style>
        `
    }
}

window.customElements.define('two-button', TwoButton)

/*-------------------------------------------------------------------------------------------*/

/*Boton 3*/

class ThreeButton extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML = `
        <div id="buttondiv3">
        <button id="button3">ThreeButton</button>
        </div>
        <style>
        #buttondiv3 {
        padding-top: 30px;
        padding-bottom: 30px;
        }
        #button3 {
        border-radius: 50px;
        border-color: black;
        color: white;
        background: black;
        padding-top:10px;
        padding-bottom:10px;
        padding-left:30px;
        padding-right:30px;
        font-family: 'Poppins', sans-serif;
        }
        #button3:hover {
        color: rgba(255, 255, 255, 1) !important;
        box-shadow: 0 4px 16px rgba(82, 82, 82, 1);
        transition: all 0.2s ease;
        cursor: pointer;

        }
        #button3:hover{
			animation: push 0.3s linear;
			-webkit-animation: push 0.3s linear;
			-moz-animation: push 0.3s linear;
		}
		@keyframes push{
			50%{
				transform: scale(0.8,0.8);
			}
			100%{
				transform: scale(1,1);
			}
		}
		@-webkit-keyframes push{
			50%{
				-webkit-transform: scale(0.8,0.8);
			}
			100%{
				-webkit-transform: scale(1,1);
			}
		}
		@-moz-keyframes push{
			50%{
				-moz-transform: scale(0.8,0.8);
			}
			100%{
				-moz-transform: scale(1,1);
			}
		}
        </style>
        `
    }
}

window.customElements.define('three-button', ThreeButton)

/*-------------------------------------------------------------------------------------------*/

/*Boton 4*/

class FourButton extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML = `
        <div id="buttondiv4">
        <button id="button4">FourButton</button>
        </div>
        <style>
        #buttondiv4 {
        padding-top: 30px;
        padding-bottom: 30px;
        }
        #button4 {
        border-radius: 50px;
        border-color: black;
        color: black;
        background: white;
        padding-top:10px;
        padding-bottom:10px;
        padding-left:30px;
        padding-right:30px;
        font-family: 'Poppins', sans-serif;
        }
        #button4:hover {
        color: rgba(0, 0, 0, 1) !important;
        box-shadow: 0 4px 16px rgba(82, 82, 82, 1);
        transition: all 0.2s ease;
        cursor: pointer;

        }
        </style>
        `
    }
}

window.customElements.define('four-button', FourButton)

/*-------------------------------------------------------------------------------------------*/
/*Boton 5*/

class FiveButton extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML = `
        <div id="buttondiv5">
        <button id="button5">FiveButton</button>
        </div>
        <style>
        #buttondiv5 {
        padding-top: 30px;
        padding-bottom: 30px;

        }

        #button5 {
        border-radius: 4px;
        border-color: black;
        color: black;
        background: white;
        padding-top:10px;
        padding-bottom:10px;
        padding-left:30px;
        padding-right:30px;
        font-family: 'Poppins', sans-serif;
        }
        #button5:hover{
        background: black;
        color: white;
        border-color: #white !important;
        border-radius: 50px;
        transition: all 0.5s ease 0s;
        cursor: pointer;

        }
        </style>
        `
    }
}

window.customElements.define('five-button',FiveButton)

/*-------------------------------------------------------------------------------------------*/
/*Boton 6*/

class SixButton extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML = `
        <div id="buttondiv6">
        <button id="button6">SixButton</button>
        </div>
        <style>
        #buttondiv6 {
        padding-top: 30px;
        padding-bottom: 30px;

        }
        #button6 {
        border-radius: 4px;
        border-color: black;
        color: white;
        background: black;
        padding-top:10px;
        padding-bottom:10px;
        padding-left:30px;
        padding-right:30px;
        font-family: 'Poppins', sans-serif;
        }
        #button6:hover{
        color:black;
        background: white;
        border-color: #black !important;
        border-radius: 50px;
        transition: all 0.5s ease 0s;
        cursor: pointer;
        }
        </style>
        `
    }
}

window.customElements.define('six-button',SixButton)

/*-------------------------------------------------------------------------------------------*/

/*Boton 7*/

class SevenButton extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML = `
        <div id="buttondiv7">
        <button id="button7" style="vertical-align:middle"><span>SevenButton</span></button>
        </div>
        <style>
        #buttondiv4 {
        padding-top: 30px;
        padding-bottom: 30px;
        }
        #button7 {
        border-radius: 50px;
        border-color: black;
        color: white;
        background: black;
        padding-top:10px;
        padding-bottom:10px;
        padding-left:30px;
        padding-right:30px;
        font-family: 'Poppins', sans-serif;
        }
        #button7{
			transition: all 0.5s ease;
			-webkit-transition: all 0.5s ease;
			-moz-transition: all 0.5s ease;
		}
		#button7:hover{
			transform: scale(0.8,0.8);
			-webkit-transform: scale(0.8,0.8);
			-moz-transform: scale(0.8,0.8);
		}

        </style>
        `
    }
}

window.customElements.define('seven-button', SevenButton)

/*-------------------------------------------------------------------------------------------*/

/*Boton 8*/

class EightButton extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML = `
        <div id="buttondiv8">
        <button id="button8">EightButton</button>
        </div>
        <style>
        #buttondiv8 {
        padding-top: 30px;
        padding-bottom: 30px;
        }
        #button8 {
        border-radius: 50px;
        border-color: black;
        color: black;
        background: white;
        padding-top:10px;
        padding-bottom:10px;
        padding-left:30px;
        padding-right:30px;
        font-family: 'Poppins', sans-serif;
        }
        #button8{
			transition: all 0.3s;
			-webkit-transition: all 0.3s;
			-moz-transition: all 0.3s;
		}
		#button8:hover{
			transform: rotate(20deg);
			-webkit-transform: rotate(20deg);
			-moz-transform: rotate(20deg);
		}
        </style>
        `
    }
}

window.customElements.define('eight-button', EightButton)

/*------------------------------------------------------------------------------------------*/
/*SWITCH 1*/

class OneSwitch extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML = `
        <div id="switchdiv1">
            <div class="swtich-container1">
                <input type="checkbox" id="switch1">
                <label for="switch1" class="lbl1"></label>
            </div>
        </div>
        <style>
        #switchdiv1 {
        padding-top: 30px;
        padding-bottom: 30px;
        }
        
        .lbl1{
          display: inline-block;
          width: 65px;
          height: 33px;
          background: #979797;
          border-radius: 100px;
          cursor: pointer;
          position: relative;
          transition: .2s;
        }

        .lbl1::after{
          content: '';
          display: block;
          width: 25px;
          height: 25px;
          background: #eee;
          border-radius: 100px;
          position: absolute;
          top: 4px;
          left: 4px;
          transition: .2s;
        }

        #switch1:checked + .lbl1::after{
          left: 36px;
        }

        #switch1:checked + .lbl1{
          background: black;
        }

        #switch1{
          display: none;
        }
        </style>
       
        `
    }
}

window.customElements.define('one-switch',OneSwitch)

/*------------------------------------------------------------------------------------------*/
/*SWITCH 2*/

class TwoSwitch extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML = `
        <div id="switchdiv2">
            <div class="swtich-container2">
                <input type="checkbox" id="switch2">
                <label for="switch2" class="lbl2"></label>
            </div>
        </div>
        <style>
        #switchdiv2 {
        padding-top: 30px;
        padding-bottom: 30px;
        }
        
        .lbl2{
          display: inline-block;
          width: 65px;
          height: 33px;
          background: #979797;
          border-radius: 4px;
          cursor: pointer;
          position: relative;
          transition: .2s;
        }

        .lbl2::after{
          content: '';
          display: block;
          width: 25px;
          height: 25px;
          background: #eee;
          border-radius: 4px;
          position: absolute;
          top: 4px;
          left: 4px;
          transition: .2s;
        }

        #switch2:checked + .lbl2::after{
          left: 36px;
        }

        #switch2:checked + .lbl2{
          background: black;
        }

        #switch2{
          display: none;
        }
        
       </style>
        `
    }
}

window.customElements.define('two-switch',TwoSwitch)

/*------------------------------------------------------------------------------------------*/
/*CHECKBOX 1*/

class OneCheckBox extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML = `
        <div id="checkboxdiv1">
            <label class="container">One
              <input type="checkbox" checked="checked">
              <span class="checkmark"></span>
            </label>
            <label class="container">Two
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
            <label class="container">Three
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
            <label class="container">Four
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
        </div>
        <style>
        #checkboxdiv1{
        padding-top: 16px;
        padding-bottom: 1px;
        padding-left:30px;
        padding-right:30px;
        border-style: solid;
        border-width: 2px;
        border-radius:4px;
        }   
        
        .container {
          display: block;
          position: relative;
          padding-left: 35px;
          margin-bottom: 12px;
          cursor: pointer;
          font-size: 22px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        display: inline-block;
        font-family: 'Poppins', sans-serif;


        }

        .container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 25px;
          width: 25px;
          background-color: white;
            border-radius: 4px;
        }

        .container:hover input ~ .checkmark {
          background-color: #ccc;
        }

  
        .container input:checked ~ .checkmark {
          background-color: black;
        }

        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        .container input:checked ~ .checkmark:after {
          display: block;
        }

        .container .checkmark:after {
          left: 9px;
          top: 5px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        </style>
       
        `
    }
}

window.customElements.define('one-checkbox',OneCheckBox)


