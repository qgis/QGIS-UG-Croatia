---
type: "page"
title: "Doprinosi, resursi, edukacije i QGIS dodaci"
subtitle: "Radovi članova udruge"
draft: false
sidebar: true
url: "/radovi-zajednice/"
---

{{< content-start >}}

# Doprinosi, resursi, edukacije i QGIS dodaci

{{< columns-start >}}
{{< column-start class="is-flex-direction-column is-full">}}
{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-1" >}}

## Doprinosi QGIS jezgri

Značajniji doprinosi funkcionalnosti QGIS-a od naše zajednice kroz volonterstvo naših članova

- Autor **Dominik Cindrić**:
  - [Delete vertices](https://github.com/qgis/QGIS/pull/63257) - brisanje velikog broja točaka geometrija sada je trenutno (par sekundi za nekoliko stotina tisuća točaka), dok je prijašnja implementacija trebala minute ili sate za isti postupak. Osim ubrzanja, ispravnost krajnje geometrije je povećana - na određenim vrstama geometrije (**CompoundCurve**), nije bilo sigurno brisati više od jedne točke odjednom, a sada nema ograničenja, rezultat će uvijek biti validan.

## Resursi

Korisni resursi koji se mogu iskoristiti za izradu vlastitih projekata

### Stilovi

#### Palete boja

- Autor **Vedran Stojnović**:
  - [ArcGIS Color Palette](https://hub.qgis.org/styles/211/) - Paleta boja iz ArcGIS softvera
  - [AutoCAD Color Index (ACI) Colors](https://hub.qgis.org/styles/210/) - Paleta boja koja se koristi u DXF datotekama
  - [DGU ZKZ boje (M 500 - 2000)](https://hub.qgis.org/styles/207/) - Paleta boja prema Zbirci kartografskih znakova DGU za mjerila 1:500 - 1:2000
  - [DGU ZKZ boje (M 5000 - 10000)](https://hub.qgis.org/styles/208/) - Paleta boja prema Zbirci kartografskih znakova DGU za mjerila 1:5000 - 1:10000
  - [DGU ZKZ boje (M 20000 - 25000)](https://hub.qgis.org/styles/209/) - Paleta boja prema Zbirci kartografskih znakova DGU za mjerila 1:20000 - 1:25000

### Setovi podataka

#### Oblak točaka

- [Tvrđava Korođvar](https://opendata.osm-hr.org/qgis-hr/pointcloud-korodvar/) - Set podataka - oblak točaka - za potrebe edukacije i razvoja QGIS-a
  - posebna zahvala tvrtki [Geoprem d.o.o.](https://geoprem.hr) iz Osijeka na resursima i hardveru za prikupljanje podataka te tvrtki [Open IT](https://openit.hr) iz Karlovca na ustupanju poslužitelja za dijeljenje podataka

## Edukacije, tutorijali i radionice

Javno dostupni edukacijski i stručni materijali koje su naši članovi izradili i objavili

- Autor **Valentina Cindrić**:
  - [Izrada karte nacionalnih i parkova prirode](https://hr.qgis.org/tutorijali/izrada-karte/)

<!-- -->

- Autor **Vedran Stojnović**:
  - [Uvod u GIS](https://www.youtube.com/watch?v=mV6MLM8kwng) - Webinar o osnovama GIS-a i usporedba s CAD-om
  - [Rad u GIS-u](https://www.youtube.com/watch?v=CbnR-ETjrfU) - Webinar o osnovama rada u GISu koristeći QGIS softver
  - [Podučavanje kartografskih projekcija u učionici s QGIS-om (Teorija)](https://www.youtube.com/watch?v=vFxk9rw6RXQ) - Webinar edukacija o podučavanju kartografskih projekcija korištenjem QGIS-a - teoretski dio
  - [Podučavanje kartografskih projekcija u učionici s QGIS-om (Radionica)](https://www.youtube.com/watch?v=5M-Q0AinuiY) - Webinar radionica o podučavanju kartografskih projekcija korištenjem QGIS-u

## Stručni i znanstveni radovi

Objavljeni stručni radovi vezani za projekte u kojima je korišten QGIS

- Suator i autor **Sohrab Seyedehmehrmanzar**
  - [Connections Between the Landscape Structure-related Regulation Ecosystem Services and Air Quality (Pm10) on a European Scale ](https://doi.org/10.14232/phd.12497)
  - [Effect of geographical parameters on PM10 pollution in European landscapes: a machine learning algorithm-based analysis](https://doi.org/10.1186/s12302-024-00972-z)
  - [Effects of land use patterns on PM10 concentrations in urban and suburban areas. A European scale analysis](https://doi.org/10.1016/j.apr.2023.101942)
  - [Connection between the Spatial Characteristics of the Road and Railway Networks and the Air Pollution (PM10) in Urban–Rural Fringe Zones](https://www.mdpi.com/2071-1050/14/16/10103)

<!-- -->

- Suautor i autor **Vedran Stojnović**:
  - [Umjetna inteligencija i računanje površine geodetskog četverokuta na elipsoidu](https://hrcak.srce.hr/file/483613)
  - [QGIS User Conference in Norrköping](https://hrcak.srce.hr/file/484375)
  - [Various numerical modeling procedures of XIX-century masonry building](https://www.sciencedirect.com/science/article/abs/pii/S0141029623017765)
  - [Ispitivanje mogućnosti GeoPackage datotečnog formata u službi razmjenskog formata za podatke Katastra i Zemljišne knjige u Republici Hrvatskoj](https://www.researchgate.net/profile/Samanta-Bacic/publication/356836701_Pregled_LIDAR_sustava_koji_se_koriste_u_geodeziji_i_geoinformatici/links/61af8cb4c11c103836990a4e/Pregled-LIDAR-sustava-koji-se-koriste-u-geodeziji-i-geoinformatici.pdf#page=9)

## QGIS dodaci

Dodaci za QGIS (pluginovi) izrađeni i objavljeni od članova naše zajednice

- Autor **Dominik Cindrić**:
  - [QGIS Layer Tree Tools](https://plugins.qgis.org/plugins/layer_tree_tools/) - QGIS dodatak za sortiranje, grupiranje i izradu snimki (snapshot) čvorova u stablu slojeva (Layers Panel).
  - [Viper](https://plugins.qgis.org/plugins/Viper-QGIS-snake-clone-main/) - QGIS dodatak koji implementira klasičnu igru Zmija (Snake) koristeći geometrije i operacije nad geometrijom.

{{< rich-content-end >}}
{{< rich-box-end >}}
{{< column-end >}}
{{< columns-end >}}

{{< content-end >}}
