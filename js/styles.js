var frontpage = `<div class="col1">
<h2>First Website</h2>
<p>This is a testing ground for Nikhil Rao's first website. Feel free to look around, maybe you'll find something interesting!</p>
</div>
<div class="col2">
<h2>About</h2>
<p>Utility Mover attempts to estimate your utility costs after a move using current information and the destination location. Thanks to Code Louisville!</p>
</div>`

var toggletitle = 0;

$( "h1" ).click(function() {
    if(toggletitle == 0){
    document.getElementById("title").innerHTML = "The Source Flows";
    toggletitle = 1;
    }
    else {
        document.getElementById("title").innerHTML = "Welcome to the Source";
        toggletitle = 0;
    }
});

$( ".text" ).html(frontpage);

// $( "" )