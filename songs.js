var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Add to the array: unshift to front of list & push to end of list
  // Remove from array: shift from front of list & pop from end of list
songs.unshift("Past Lives by Borns on the album Dopamine");
songs.push("Waste A Moment by Kings of Leon on the album Walls");

for (var i = 0; i <= songs.length; i++) {
  var newSongs = songs[i].replace(/\*|\>|\(\!|\@/g, " - " );
  console.log("newSongs", newSongs);
  document.getElementById("songs").innerHTML += `<div>${newSongs}</div>`;
}











