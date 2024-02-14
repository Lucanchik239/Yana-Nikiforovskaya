const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');
const description = document.querySelector('.gallery-description');
const descriptions = ["Книга, покорившая мир, эталон литературы для читателей всех возрастов, синоним успеха. Книга, сделавшая Дж.К. Роулинг самым читаемым писателем современности. Книга, ставшая культовой уже для нескольких поколений. «Гарри Поттер и узник Азкабана» – история продолжается.",
 "DESCRIPTION 2, которое мне лень писать",
  "DESCRIPTION 3, которое мне тем более лень писать",
	"DESCRIPTION 4, алло, я Гирш, какое нах описание",
	 "DESCRIPTION 5, тут я думаю вы уже поняли"];



var numOfBook=0;

class Carouse1 {
	constructor(container, items, controls) {
		this.carouse1Container = container;
		this.carouse1Controls = controls;
		this.carouse1Array=[...items];
	}
	updateGallery(){
		this.carouse1Array.forEach(e1=>{
			e1.classList.remove('gallery-item-1');
			e1.classList.remove('gallery-item-2');
			e1.classList.remove('gallery-item-3');
			e1.classList.remove('gallery-item-4');
			e1.classList.remove('gallery-item-5');
		});

		this.carouse1Array.slice(0,5).forEach((e1,i)=>{
			e1.classList.add(`gallery-item-${i+1}`);
		});
	}

	setCurrentState(direction){
		if(direction.className=='gallery-controls-previous'){
			this.carouse1Array.unshift(this.carouse1Array.pop());
			if(numOfBook==0)numOfBook=4;
			else numOfBook-=1;
		}else{
			this.carouse1Array.push(this.carouse1Array.shift());
			if(numOfBook==4)numOfBook=0;
			else numOfBook+=1;
		}
		description.textContent=descriptions[numOfBook];
		this.updateGallery();
	}

	setControls(){
		this.carouse1Controls.forEach(control=>{
			galleryControlsContainer.appendChild(document.createElement('button')).className=`gallery-controls-${control}`;
			document.querySelector(`.gallery-controls-${control}`).innerText="";
		});
	}
	useControls(){
		const triggers=[...galleryControlsContainer.childNodes];
		triggers.forEach(control=>{
			control.addEventListener('click',e=>{
				e.preventDefault();
				this.setCurrentState(control);
			});
		});
	}
}
const exampleCourse1 = new Carouse1(galleryContainer,galleryItems,galleryControls);
exampleCourse1.setControls();
exampleCourse1.useControls();