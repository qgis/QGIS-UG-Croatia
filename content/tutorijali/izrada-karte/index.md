---
type: "page"
title: "Izrada karte Nacionalnih parkova i Parkova prirode Hrvatske"
subtitle: "Od učitavanja podataka do izvoza karte"
draft: false
date: "2026-10-24"
sidebar: true
thumbnail: "izrada-karte/img/np_i_pp.webp"
og_image: "tutorials/osm-vector-tiles/img/image20.webp"
---

{{< content-start >}}

# Izrada karte Nacionalnih parkova i Parkova prirode Hrvatske

## Preuzimanje podataka

Koristit će se podaci Eurostata. Odaberemo parametre kao što su prikazani u priloženoj slici i preuzmemo podatke. (https://ec.europa.eu/eurostat/web/gisco/geodata/administrative-units/countries) 
<p align="center">
  <img src="./img/eurostat.webp" alt="Podaci s Eurostata" style="max-width: 80%;">
</p>


Također, koristit će se WFS podaci Bioportala. (https://bioportal.hr/o-sustavu/)
<p align="center">
  <img src="./img/bioportal.webp" alt="Bioportal" style="max-width: 80%;">
</p>

## Postupak

Koristimo se vektorskim podacima jer oni predstavljaju geografske objekte pomoću geografskih oblika povezanih s tekstualnim i/ili numeričkim podacima (atributna tablica).

Postoje tri osnovne vrste vektorskih podataka: točke, linije i poligoni.

U ovom tutorijalu će se koristiti poligoni.

Učitajmo vektorski sloj tako da u alatnoj traci odaberemo **Open Data Source Manager**.

<p align="center">
  <img src="./img/opendatasource.webp" alt="Open Data Source Manager" style="max-width: 80%;">
</p>

Odaberemo **Vector** i pronađemo preuzeti set podataka s Eurostata.

<p align="center">
  <img src="./img/browse.webp" alt="Pretraži set podataka" style="max-width: 80%;">
</p>

Klikom na **Add** pojavi se novi sloj.
<p align="center">
  <img src="./img/add.webp" alt="Novi sloj" style="max-width: 80%;">
</p>

Približimo na područje Republike Hrvatske i u alatnoj traci odaberemo **Select Features by Area or Single Click** te označimo Hrvatsku.

<p align="center">
  <img src="./img/selectfeature.webp" alt="Select Features by Area or Single Click" style="max-width: 80%;">
</p>

Kako bismo ju izdvojili u zaseban sloj, koristimo prečace na tipkovnici: **CTRL + C** → **CTRL + ALT + V**. 

Upišemo željeno ime sloja i kliknemo **OK**.

<p align="center">
  <img src="./img/ctrlcctrlaltv.webp" alt="Izdvajanje Hrvatske u novi sloj" style="max-width: 80%;">
</p>

Podatke s Bioportala dodajemo desnim klikom na **WFS/OGC API - Features** te odabirom **New Connection...**.

<p align="center">
  <img src="./img/wfs.webp" alt="Podaci s Bioportala" style="max-width: 80%;">
</p>

Upišemo željeno ime i zalijepimo poveznicu s internetske stranice Bioportala. Kada smo gotovi kliknemo **OK**.

<p align="center">
  <img src="./img/wfsbioportal.webp" alt="Uvoz podataka s Bioportala" style="max-width: 80%;">
</p>

Proširimo stvorenu vezu i pronađemo bazu podataka naziva *Zaštićena područja - poligoni*. Dvostrukim klikom na nju stvori se novi sloj.

<p align="center">
  <img src="./img/zasticenapodrucja.webp" alt="Zaštićena područja - novi sloj" style="max-width: 80%;">
</p>

Desnim klikom na sloj te odabirom **Open Attribute Table** otvorimo atributnu tablicu.

<p align="center">
  <img src="./img/attributetable1.webp" alt="Otvaranje atributne tablice" style="max-width: 80%;">
</p>

Filtriramo podatke odabirom **Select/Filter features using form**.

<p align="center">
  <img src="./img/filterfeatures.webp" alt="Filtriranje podataka" style="max-width: 80%;">
</p>

U prostor *kategorija_zastite* upišemo **Nacionalni park** i kliknemo **Filter Features**.

<p align="center">
  <img src="./img/nacionalnipark.webp" alt="Filtriranje - Nacionalni park" style="max-width: 80%;">
</p>

Kliknemo **Select/Filter features using form**.

<p align="center">
  <img src="./img/filternacionalni.webp" alt="Filtriranje - Nacionalni park2" style="max-width: 80%;">
</p>

U prostor *kategorija_zastite* upišemo **Park prirode** i odaberemo **Extend Filter ("OR")**.

<p align="center">
  <img src="./img/parkprirodeor.webp" alt="Filtriranje - Park prirode" style="max-width: 80%;">
</p>

Filtriranjem podataka dobijemo izraz kojeg kopiramo. 

<p align="center">
  <img src="./img/copyexpression.webp" alt="Kopiranje izraza" style="max-width: 80%;">
</p>

Otvorimo svojstva sloja desnim klikom na sloj i odabirom **Properties...**.

<p align="center">
  <img src="./img/properties.webp" alt="Svojstva sloja" style="max-width: 80%;">
</p>

Kliknemo **Source** te otvorimo **Query Builder**. Zalijepimo prethodno kopirani izraz i kliknemo **OK**. Zatim kliknemo **Apply** i **OK**. Time smo izdvojili Nacionalne parkove i Prakove prirode u sloju.

<p align="center">
  <img src="./img/querybuilder.webp" alt="Query builder" style="max-width: 80%;">
</p>

Sloj uređujemo desnim klikom na njega i odabirom **Properties...** te klikom na **Symbology**. Odaberemo **Categorized**. Pod *Value* odaberemo *kategorija_zastite* i kliknemo **Classify**. 

<p align="center">
  <img src="./img/symbology1.webp" alt="Uređivanje sloja" style="max-width: 80%;">
</p>

Klikom na **Delete Unused** maknemo kategorije koje nam ne trebaju.

Za lakše snalaženje, možemo promijeniti boju odabirom na jednu od kategorija i klikom na **Symbol**. Kada smo zadovoljni izborom kliknemo **Apply** i **OK**.

<p align="center">
  <img src="./img/symbology2.webp" alt="Promjena boje sloja" style="max-width: 80%;">
</p>

## Elementi i izvoz karte

Kako bi karta bila cjelovita, potrebno je dodati njene osnovne elemente: naslov, mjerilo (grafičko), smjer sjevera i legendu.

Kliknemo na **Project** i odaberemo **New Print Layout...**

<p align="center">
  <img src="./img/newprintlayout.webp" alt="Project i New Print Layout" style="max-width: 80%;">
</p>

Desnim klikom na radnu površinu i odabirom **Page Properties...** možemo promijeniti njezin izgled.

<p align="center">
  <img src="./img/pageprops.webp" alt="Svojstva radne površine" style="max-width: 80%;">
</p>

<p align="center">
  <img src="./img/pageprops2.webp" alt="Otvorena svojstva radne površine" style="max-width: 80%;">
</p>

Kartu dodajemo odabirom **Add Map**. Kliknemo u prostor radne površine te povučemo pokazivač.

<p align="center">
  <img src="./img/addmap.webp" alt="Opcija dodavanje karte" style="max-width: 80%;">
</p>

<p align="center">
  <img src="./img/addmap2.webp" alt="Dodavanje karte na radnu površinu" style="max-width: 80%;">
</p>

Za povećanje, smanjenje i pomicanje karte po radnoj površini koristimo opciju **Move item content**.

<p align="center">
  <img src="./img/moveitem.webp" alt="Povećanje, smanjenje i pomicanje karte po radnoj površini" style="max-width: 80%;">
</p>

Kada smo zadovoljni pozicijom karte na radnoj površini, kliknemo **Lock Selected Items**. Ovime smo zaključali poziciju karte na radnoj površini. Opciju također koristimo nakon dodavanja svakog sljedećeg elementa.

<p align="center">
  <img src="./img/lockselected.webp" alt="Zaključavanje elemenata u mjestu" style="max-width: 80%;">
</p>

Naslov dodajemo opcijom **Add Label**. Kliknemo u prostor radne površine te povučemo pokazivač.

<p align="center">
  <img src="./img/addlabel.webp" alt="Dodavanje naslova" style="max-width: 80%;">
</p>

Desnim klikom i odabirom **Item Properties...** otvorimo svojstva elementa. 

<p align="center">
  <img src="./img/itemprops.webp" alt="Svojstva elementa naslova" style="max-width: 80%;">
</p>

<p align="center">
  <img src="./img/itemprops2.webp" alt="Otvorena elementa naslova" style="max-width: 80%;">
</p>

Grafičko mjerilo dodajemo opcijom **Add Scale Bar**. Kliknemo u prostor radne površine te povučemo pokazivač.

<p align="center">
  <img src="./img/addscalebar.webp" alt="Dodavanje grafičkog mjerila" style="max-width: 80%;">
</p>

Desnim klikom i odabirom **Item Properties...** otvorimo svojstva elementa. 

<p align="center">
  <img src="./img/itempropssb.webp" alt="Svojstva mjerila" style="max-width: 80%;">
</p>

Smjer sjevera dodajemo opcijom **Add North Arrow**. Kliknemo u prostor radne površine te povučemo pokazivač.

<p align="center">
  <img src="./img/northarrow.webp" alt="Dodavanje smjera sjevera" style="max-width: 80%;">
</p>

Legendu dodajemo odabirom opcije **Add Legend**. Kliknemo u prostor radne površine te povučemo pokazivač.

<p align="center">
  <img src="./img/addlegend.webp" alt="Dodavanje legende" style="max-width: 80%;">
</p>

Kako bi uklonili nepotrebne slojeve, odaberemo opciju **Manual**, označimo sloj koji želimo ukloniti i kliknemo **Remove selected item(s) from legend**.

<p align="center">
  <img src="./img/manual.webp" alt="Omogućavanje uređivanja slojeva" style="max-width: 80%;">
</p>

<p align="center">
  <img src="./img/remove.webp" alt="Uklanjanje nepotrebnih slojeva" style="max-width: 80%;">
</p>

Desnim klikom na i odabirom **Hidden** možemo sakriti ime sloja u legendi.

<p align="center">
  <img src="./img/hidden.webp" alt="Sakrivanje ime sloja u legendi" style="max-width: 80%;">
</p>

Kartu izvozimo odabirom jedne od tri označenih opcija: **Export as image**, **Export as SVG** ili **Export as PDF**.

<p align="center">
  <img src="./img/export.webp" alt="Izvoz karte" style="max-width: 80%;">
</p>

## Author

[Ark Arjun](https://arkives.in/) is a geospatial professional and an OpenStreetMap Volunteer from Kerala.

{{< content-end >}}