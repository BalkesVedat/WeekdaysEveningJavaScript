
/*  Buraya js kodunun harici çaðýrýlmasý kodlarý yazýldý */

function HariciMesaj()
{
	alert('Haydan gelen mesaj');
}

/* Buraya js form iþlemleri yazýlacak. */

function AlveAktar()
{
	var isim = prompt('Adinizi Giriniz:');

	document.getElementById("Mesaj").innerHTML = 'Hosgeldin ' +  isim ;

}

function Degiskenler()
{
	var sayi = 50;
	const sabit = 100;

	let tarih;

	alert(tarih); // undefined. çünkü deðiþkene deðer atanmadan kullanýldý.

	/*let isim = "Ali";*/ // 2. kere tanýmlanamaz.

	/*sabit = 150;  çalýþmaz.*/
	alert(sabit);

/*	let isim = "Veli"; çalýþmaz*/

    if (sayi>0) {
		let isim = "veli";
		var nesne = "telefon";
    }

	alert(nesne); // hata vermez.
	/*alert(isim); // hata verir.  çünkü deðiþken if bloðunda let ile tanýmlandý. Blok bitince let ile yaratýlan deðiþken de hafýzadan atýlýr. */

	var sayi = 1200; // hata vermez.

	alert(sayi);
}


function SetStyle() {
	var nesne = document.getElementById("Body");
	nesne.style.backgroundColor = "red";
}



function ClearStyle() {
	var nesne = document.getElementById("Body");
	nesne.style.backgroundColor = "white";
}

function GizleGoster() {
	var nesne = document.getElementById("liste");

	var gizli = nesne.classList.contains("gizle");

    if (gizli) {
		nesne.classList.remove("gizle");
    }
    else {
		nesne.classList.add("gizle");
    }

}