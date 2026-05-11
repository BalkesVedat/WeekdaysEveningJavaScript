
/*  Buraya js kodunun harici çaðirilmasi kodlari yazildi */

function HariciMesaj()
{
	alert('Haydan gelen mesaj');
}

/* Buraya js form iþlemleri yazilacak. */

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

	alert(tarih); // undefined. çünkü deðiþkene deðer atanmadan kullanildi.

	/*let isim = "Ali";*/ // 2. kere tanimlanamaz.

	/*sabit = 150;  çaliþmaz.*/
	alert(sabit);

/*	let isim = "Veli"; çaliþmaz*/

    if (sayi>0) {
		let isim = "veli";
		var nesne = "telefon";
    }

	alert(nesne); // hata vermez.
	/*alert(isim); // hata verir.  çünkü deðiþken if bloðunda let ile tanimlandi. Blok bitince let ile yaratilan deðiþken de hafizadan atilir. */

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
	var cizgi = document.getElementById("imgHr");

	var gizli = nesne.classList.contains("gizle");

    if (gizli) {
		nesne.classList.remove("gizle");
		cizgi.className = "imgHrGizle" ;
    }
    else {
		nesne.classList.add("gizle");
		cizgi.className = "imgHrGoster";
    }

}


function Hesapla(nesne){

	var sayi1 = document.getElementById("txtSayi1");
	var sayi2 = document.getElementById("txtSayi2");
	var sonuc = document.getElementById("txtSonuc");

	switch (nesne.value) {
		case "Topla":
			sonuc.value = (sayi1.value*1) + (sayi2.value*1);
			break;
		case "Carp":
			sonuc.value = sayi1.value * sayi2.value;
			break;
		case "Cikar":
			sonuc.value = sayi1.value - sayi2.value;
			break;
		case "Bol":
			sonuc.value = sayi1.value / sayi2.value;
			break;
		default:
			sonuc.value = "0";
			break;
    }

}


function For1() {

	let toplam = 0;

	for (let i = 0; i <= 100; i++) {
	   //     if (i == 55) {
				//break; ya da  continue;
	   //     }
		toplam += i;
	}

	console.log('1 den 100 e kadar sayilarin toplami:' + toplam);
}

function For2() {

	let adet = 0;

    for (var i = 0; i <= 100; i++) {
        if (i%2==1) {
			adet++;
        }
    }

	console.log('1 den 100 e kadar tek sayilarin adedi:' + adet);

}


function For3(sayac) {

	var sonuc = 1;

    for (var i = sayac; i > 1; i--) {

		sonuc *= i;
    }

	console.log( sayac + ' faktoriyel degeri : ' + sonuc);

}

function While1() {

	let sayac = 0, toplam = 0;

	while (sayac <= 100) {
		toplam += sayac;
		sayac++;
    }

	document.body.innerHTML +=  "<h1> 1 den 100 e kadar say&inodot;lar&inodot;n toplam&inodot;: " + toplam + "</h1>";

	var nesne = document;

	nesne.title = "Toplam:" + toplam;

	var nesne2 = document.getElementById("sonuc");

	nesne2.innerHTML = "<h1> 1 den 100 e kadar say&inodot;lar&inodot;n toplam&inodot;: " + toplam + "</h1>";


}

function While2() {
	var devam = "H";

    while (devam.toUpperCase()!="E") {
		devam = prompt('Cikmak istiyor musunuz? (Cikmak icin E yaziniz)', 'H');
    }

    alert("Hoscakal");
}