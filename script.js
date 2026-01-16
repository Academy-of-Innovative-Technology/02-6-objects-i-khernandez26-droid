var theranos = {
	first: "Elizabeth",
	last: "Holmes",
	year: 1984,
	college: [
		"St. John University", "Stanford University"
	],
	img: "https://www.usatoday.com/gcdn/-mm-/33986bd3d586f4501f784dc8d16e4361509a229a/c=0-52-1024-631/local/-/media/2015/07/02/USATODAY/USATODAY/635714501170933341-eliz.JPG",
    wiki: "https://en.wikipedia.org/wiki/Elizabeth_Holmes"
};



 document.getElementById('full-name1').innerText = `${theranos.last}, ${theranos.first}`;
 document.getElementById('image1').src = theranos.img;


 let currentYear = new Date().getFullYear();
 let birthYear = currentYear - theranos.age;
 document.getElementById('birth-year1').innerText = `Year Born: ${birthYear}`;


 theranos.college.forEach((school, index) => {
   document.getElementById('education1').innerHTML += `${index + 1} College: ${school} <br>`;
 });


 document.getElementById('wiki-link1').href = theranos.wikiLink;




 var simuLiu = {
   firstName: "Simu",
   middleName: "",
   lastName: "Liu",
   age: 48,
   education: [
     "University of Toronto Schools",
     "Western University"
   ],
   occupation: "Actor",
   img: "https://ca-times.brightspotcdn.com/dims4/default/84c8a9c/2147483647/strip/true/crop/3452x2301+0+1384/resize/2000x1333!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fae%2F34%2Ff6341599430f8665a5360874fea0%2F826113-ca-0819-shang-chi-simu-liu-mrt-03.jpg",
   wikiLink: "https://en.wikipedia.org/wiki/Simu_Liu"
 };


 document.getElementById('full-name2').innerText = `${simuLiu.lastName}, ${simuLiu.firstName}`;
 document.getElementById('image2').src = simuLiu.img;


 let birthYearSimu = currentYear - simuLiu.age;
 document.getElementById('birth-year2').innerText = `Year Born: ${birthYearSimu}`;


 simuLiu.education.forEach((school, index) => {
   document.getElementById('education2').innerHTML += `${index + 1} College: ${school} <br>`;
 });

document.getElementById('occupation2').innerText = `Occupation: ${simuLiu.occupation}`;

 document.getElementById('wiki-link2').href = simuLiu.wikiLink;




var melissaMcBride = {
   firstName: "Melissa",
   middleName: "",
   lastName: "McBride",
   age: 56, 
   education: ["R.J. Reynolds High School"],
   occupation: "Actress",
   img: "https://www.womansworld.com/wp-content/uploads/2025/09/melissa-mcbride.jpg?quality=86&strip=all",
   wikiLink: "https://en.wikipedia.org/wiki/Melissa_McBride"
 };


 document.getElementById('full-name3').innerText = `${melissaMcBride.lastName}, ${melissaMcBride.firstName}`;
 document.getElementById('image3').src = melissaMcBride.img;


 let birthYearMelissa = currentYear - melissaMcBride.age;
 document.getElementById('birth-year3').innerText = `Year Born: ${birthYearMelissa}`;


 melissaMcBride.education.forEach((school, index) => {
   document.getElementById('education3').innerHTML += `${index + 1} College: ${school} <br>`;
 });


document.getElementById('occupation3').innerText = `Occupation: ${melissaMcBride.occupation}`;
 

document.getElementById('wiki-link3').href = melissaMcBride.wikiLink;


